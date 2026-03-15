
//{COCONUT:{nitroger:10,phosphorous:60,pottassium:40}} example argument.....
export const FertilizerCalculator = (cropNvalues)=>{
    const fertilizerRecommend = {};
    Object.entries(cropNvalues).forEach(([key,value])=>{
        const urea  = (Math.floor(value.nitrogen/0.46));
        const rockphosphate = (Math.floor(value.phosphorus/0.20));
        const pottash = (Math.floor(value.potassium/0.60));
        fertilizerRecommend[key] = {urea,rockphosphate,pottash};
    })

    return fertilizerRecommend;
}