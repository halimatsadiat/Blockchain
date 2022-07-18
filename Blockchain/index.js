const sha = require("crypto-js/sha256");

class Block{
    constructor(index, data, prevHash){
        this.index = index
        this.data = data
        this.prevHash = prevHash
        this.hash = this.generateHash()
    }
    generateHash(){
        return sha(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class BlockChain{
    constructor(){
        this.chain = []
    }
    addBlock(data){
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash :0;
        let block = new Block(index, data, prevHash);

        this.chain.push(block);
    }
}

const RizelCoin = new BlockChain();
RizelCoin.addBlock({senderr: "Sadiat", reciever: "wawFellowship", amount: 500});
RizelCoin.addBlock({senderr: "Ogidan", reciever: "webGames", amount: 1000});

console.log(JSON.stringify{RizelCoin, null, 4});