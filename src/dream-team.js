
module.exports = function createDreamTeam(members) {
  let teamName=[];
  if(Array.isArray(members)){
    teamName=members.filter((name)=>typeof(name)==='string')
    .map((name)=>name.trim()
    .slice(0,1).toUpperCase())
    .sort()
    .join('');
    return teamName; 
  }else{
  return false;  
  }
};
