import { OrganicCarbonClassFinder,PottassiumClassFinder,PhosphorousClassFinder } from "./ClassFinder.js";

const result = {nvlaue:12,pvalue:20,kvalue:30};
const value ={nitrogen:1.2,phosphorus:2.1,pottasium:40};
const generalNitrogen = [128,117,106,97,91,84,78,72,63,54]
const generalPhosphorus = [128,117,106,94,83,71,60,48,37,25];
const generalPottassium = [128,117,106,94,83,71,60,48,37,25];

//value = {nitrogen:1.2,pottassium:2.3,phosphorous:7.2}
//crops = {{name:"COCONUT",NValue:500,PValue:200,Kvalue:300},{name:"TOMATO",NValue:321,PValue:400,Kvalue:500}}
export const NutrientCalculator = (crops,value)=>{
    const NutrientRecommendation = {}
    Object.entries(crops).forEach(([key,cvalue])=>{
        let nitrogenclass = OrganicCarbonClassFinder(value.organicCarbon,value.Plot.soilType);
        let nitrogen = NitrogenCalculator(cvalue.Nvalue,generalNitrogen[nitrogenclass]);
        let phosphorusclass = PhosphorousClassFinder(value.phosphorus);
        let phosphorus = PhosphorusCalculator(cvalue.Pvalue,generalPhosphorus[phosphorusclass]);
        let potassiumclass = PottassiumClassFinder(value.potassium);
        let potassium = PottasiumCalculator(cvalue.Kvalue,generalPhosphorus[potassiumclass]);

        NutrientRecommendation[cvalue.name] = {nitrogen,phosphorus,potassium};
    })
    

    return NutrientRecommendation;

}

function NitrogenCalculator(Nvalue,GNvalue){
    return (Nvalue/100)*GNvalue;
}

function PhosphorusCalculator(Pvalue,GPvalue){
    return (Pvalue/100)*GPvalue;
}
function PottasiumCalculator(Kvalue,GKvalue){
    return (Kvalue/100)*GKvalue;
}

