
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let result={};
result.turns=2**disksNumber-1;
result.seconds=Math.floor(result.turns*60*60/turnsSpeed);
  return result;
};
