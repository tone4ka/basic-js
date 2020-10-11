
module.exports = function transform(arr) {
 if(!Array.isArray(arr)) throw "Error";
 let result=arr.slice();
 let i=0;
while(i<result.length){
  if(result[i]===`--discard-next`){
    i<result.length-1?result.splice(i,2):result.splice(i,1);
    if(result[i]===`--discard-prev`||result[i]===`--double-prev`)result.splice(i,1);
  }
  if(result[i]===`--discard-prev`){
    i>0?result.splice(i-1,2):result.splice(i,1);
  }
   if(result[i]===`--double-next`){
    i<result.length-1?result.splice(i,1,result[i+1]):result.splice(i,1);
  }
  if(result[i]===`--double-prev`){
    i>0?result.splice(i,1,result[i-1]):result.splice(i,1);
  }
 else i++;
  
  
}
return result;

};
