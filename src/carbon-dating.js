

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number=Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));
  console.log(number);
    if(( typeof(sampleActivity) == "string") && sampleActivity && (parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15)){
      return number;
    }else{
       
       return false;
    }
};
