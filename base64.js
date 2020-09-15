const fs = require('fs');
// let gfwlistResult = fs.readFileSync(`${__dirname}/gfwlist.txt`).toString();
// gfwlistResult = Buffer.from(gfwlistResult, 'base64').toString();

// 读取明文gfwlist
let gfwlistDecodeResult = fs.readFileSync(`${__dirname}/gfwlist_decode.txt`).toString();
gfwlistDecodeResult = Buffer.from(gfwlistDecodeResult, 'utf-8').toString('base64');
gfwlistDecodeResult = gfwlistDecodeResult.split('');

// 清空文件
fs.writeFileSync(`${__dirname}/gfwlist.txt`, '');
// 追加内容到文件
const funSubString = () => {
    if (gfwlistDecodeResult && gfwlistDecodeResult.length !== 0) {
        fs.appendFileSync(`${__dirname}/gfwlist.txt`, gfwlistDecodeResult.splice(0, 64).join('') + '\n');
        funSubString();
    }
}
funSubString();
console.log('结束');
