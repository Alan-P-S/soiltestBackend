
import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import Report from "../models/report.model.js";
import User from "../models/user.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateSoilReportPDF = async (req, res) => {
  try {
    const { id } = req.params;

    const report = await Report.findByPk(id, {
      include: [{ model: User }],
    });

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    const doc = new PDFDocument({
      size: "A4",
      margin: 40,
    });

    /* ===============================
       REGISTER MALAYALAM FONT
    =============================== */

    const malayalamFontPath = path.join(
      __dirname,
      "../fonts/NotoSansMalayalam-Regular.ttf"
    );

    doc.registerFont("malayalam", malayalamFontPath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Soil_Report_${id}.pdf`
    );

    doc.pipe(res);

    /* ===============================
       HEADER (Malayalam)
    =============================== */

    doc.font("malayalam").fontSize(16).text("കേരള സർക്കാർ", {
      align: "center",
    });

    doc
      .font("malayalam")
      .fontSize(13)
      .text("കൃഷി വകുപ്പ് - മണ്ണ് പരിശോധന റിപ്പോർട്ട്", {
        align: "center",
      });

    doc.moveDown(2);

    /* ===============================
       FARMER DETAILS
    =============================== */

    const boxTop = doc.y;

    doc.rect(40, boxTop, 515, 70).stroke();

    doc.font("malayalam").fontSize(11);

    doc.text(`കർഷകന്റെ പേര്: ${report.User.username}`, 50, boxTop + 10);
    doc.text(`ഗ്രാമം: ${report.User.place}`, 50, boxTop + 28);
    doc.text(`സാമ്പിൾ നമ്പർ: ${report.id}`, 300, boxTop + 10);
    doc.text(
      `പരിശോധിച്ച തീയതി: ${new Date(
        report.createdAt
      ).toLocaleDateString()}`,
      300,
      boxTop + 28
    );

    doc.moveDown(4);

    /* ===============================
       SOIL ANALYSIS TABLE
    =============================== */

    doc.font("malayalam").fontSize(13).text("മണ്ണിന്റെ പോഷക ഘടകങ്ങളുടെ നില", {
      underline: true,
    });

    doc.moveDown(1);

    const tableTop = doc.y;
    const colWidth = 170;
    const rowHeight = 25;

    const headers = ["ഘടകം", "ഫലം", "വർഗ്ഗം"];

    headers.forEach((h, i) => {
      doc.rect(40 + i * colWidth, tableTop, colWidth, rowHeight).stroke();
      doc.text(h, 45 + i * colWidth, tableTop + 8);
    });

    const classifyLevel = (value) => {
      if (value < 30) return "കുറവ്";
      if (value < 60) return "മധ്യം";
      return "ഉയർന്നത്";
    };

    const nutrients = [
      ["pH", report.ph, report.ph < 5.5 ? "അമ്ലം" : "സാധാരം"],
      ["നൈട്രജൻ (N)", report.nitrogen, classifyLevel(report.nitrogen)],
      ["ഫോസ്ഫറസ് (P)", report.phosphorous, classifyLevel(report.phosphorous)],
      ["പൊട്ടാസ്യം (K)", report.pottasium, classifyLevel(report.pottasium)],
    ];

    nutrients.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        doc
          .rect(
            40 + colIndex * colWidth,
            tableTop + rowHeight + rowIndex * rowHeight,
            colWidth,
            rowHeight
          )
          .stroke();

        doc.text(
          String(cell),
          45 + colIndex * colWidth,
          tableTop + rowHeight + rowIndex * rowHeight + 8
        );
      });
    });

    doc.moveDown(6);

    /* ===============================
       ADVISORY
    =============================== */

    doc.font("malayalam").fontSize(13).text("സൂചനകൾ", {
      underline: true,
    });

    doc.moveDown(1);

    doc.font("malayalam").fontSize(11).text(
      "1. ശുപാർശ ചെയ്ത അളവിൽ മാത്രം വളം ഉപയോഗിക്കുക.\n" +
        "2. ജൈവവളം ഉപയോഗിക്കുന്നത് മണ്ണിന്റെ ഗുണമേന്മ വർദ്ധിപ്പിക്കും.\n" +
        "3. രണ്ടുവർഷത്തിലൊരിക്കൽ മണ്ണ് പരിശോധന നടത്തുക."
    );

    doc.moveDown(5);

    /* ===============================
       SIGNATURE
    =============================== */

    doc.moveTo(60, 760).lineTo(200, 760).stroke();
    doc.font("malayalam").text("കൃഷി ഓഫീസർ", 60, 765);

    doc.moveTo(350, 760).lineTo(510, 760).stroke();
    doc.font("malayalam").text("അംഗീകൃത ലാബ്", 350, 765);

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "PDF generation failed" });
  }
};
export const addReport = async (req,res)=>{
    const data = req.body;
    try{
        const res  = await Report.create(data);
        return res.status(200).json({data:res,message:"report created"});
    }catch(err){
        return res.status(500).json({error:err,message:"Error in report creation"});
    }
    
}