
module.exports = function countCats(backyard) {
  let cats = 0;
    for (let item of backyard){
        for (let i of item){
            if(i=='^^') cats++;
        }
    }
    return cats;
};
