const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname,'contracts','lottery.sol');
const source = fs.readFileSync(inboxPath,'utf-8');

module.exports = solc.compile(source,1).contracts[':lottery'];