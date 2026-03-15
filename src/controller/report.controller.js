import puppeteer from "puppeteer";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import Report from "../models/report.model.js";
import User from "../models/user.model.js";
import GeneralCrop from "../models/generalCrop.model.js";
import { NutrientCalculator } from "../lib/NutrientCalculator.js";
import { FertilizerCalculator } from "../lib/FertilizerCalculator.js";
import Plot from "../models/plot.model.js";


export const addReport = async (req,res)=>{
    const data = req.body;
    try{
        const result  = await Report.create(data);
        return res.status(200).json({data:result,message:"report created"});
    }catch(err){
        console.log(err);
        return res.status(500).json({error:err,message:"Error in report creation"});
    }
}

export const getReportByPhone = async (req,res)=>{
  const {phone} = req.body;
  try{
    const user = await User.findOne({where:{phone}});
    if(user){
      const Reports = await Report.findAll({where:{UserId:user.id}});
      return res.status(200).json(Reports);
    }
  }catch(error){
    console.log(error);
    return res.status(501).json({message:"Internal Server Error"});
  }
}

export const getRecommendation = async(req,res)=>{
  const { PlotId, ReportId } = req.body;

  try {

    const crops = await GeneralCrop.findAll({
      attributes:["id","name","Nvalue","Pvalue","Kvalue"],
      include:{
        model:Plot,
        where:{id:PlotId},
        attributes:[]
      }
    });

    const report = await Report.findOne({
      where:{id:ReportId},
      include:[Plot,User]
    });
    console.log("soilType",report.Plot.soilType);
    const user = report.User;

    const nutrients = NutrientCalculator(crops,report);
    const fertilizer = FertilizerCalculator(nutrients);

    /* ---------- Render HTML using EJS ---------- */

    const templatePath = path.join(
      process.cwd(),
      "src/templates",
      "soil-report.ejs"
    );
    
    const html = await ejs.renderFile(templatePath, {
      user,
      report,
      nutrients,
      fertilizer
    });

    /* ---------- Launch Puppeteer ---------- */

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
  format: "A4",
  printBackground: true,
  margin: {
    top: "8mm",
    bottom: "8mm",
    left: "10mm",
    right: "10mm"
  }
});

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=soil-report.pdf"
    });

    res.send(pdf);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message:"PDF generation failed"
    });

  }
};
