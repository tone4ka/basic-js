const CustomError = require("../extensions/custom-error");


const chainMaker = {

  chain:[],

  getLength() {
    return this.chain.length;
    
    
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if((position-Math.trunc(position)>0)||(position<1)||(position>this.chain.length)){
      this.chain=[];
      throw new Error();
    } 
    this.chain=this.chain.filter((item,index)=>index!=(position-1));
    return this;
    
  },

  reverseChain() {
    this.chain=this.chain.reverse();
    return this;
  },

  finishChain() {
    let result=this.chain.join('~~');
    this.chain=[];
    return result;
  }
};

module.exports = chainMaker;
