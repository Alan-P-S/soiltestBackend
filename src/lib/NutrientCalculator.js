import { OrganicCarbonClassFinder,PottassiumClassFinder,PhosphorousClassFinder } from "./ClassFinder.js";

const result = {nvlaue:12,pvalue:20,kvalue:30};
const crops = {"COCONUT":{nitrogen:500,phosphorus:200,pottasium:300},"BANANA":{nitrogen:500,phosphorus:200,pottasium:300},};
const value ={nitrogen:1.2,phosphorus:2.1,pottasium:40};
const generalNitrogen = [128,117,106,97,91,84,78,72,63,54]
const generalPhosphorus = [128,117,106,94,83,71,60,48,37,25];
const generalPottassium = [128,117,106,94,83,71,60,48,37,25];

export const NutrientCalculator = (crops,value)=>{
    
    const NutrientRecommendation = {}
    Object.entries(crops).forEach(([key,cvalue])=>{
        let nitrogenclass = OrganicCarbonClassFinder(value.nitrogen,value.soiltype);
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

