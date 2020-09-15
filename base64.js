const fs = require('fs');
const exec = require('child_process').exec;

// let gfwlistResult = fs.readFileSync(`${__dirname}/gfwlist.txt`).toString();
// gfwlistResult = Buffer.from(gfwlistResult, 'base64').toString();
// 读取明文gfwlist
let gfwlistDecodeResult = fs.readFileSync(`${__dirname}/gfwlist_decode.txt`).toString();
gfwlistDecodeResult = Buffer.from(gfwlistDecodeResult, 'utf-8').toString('base64');
gfwlistDecodeResult = gfwlistDecodeResult.split('');

exec('git pull', (err, stdout, stderr) => {
    console.log(' ---> pull remote');
    if (stderr) {
        console.error('错误:', stderr);
    } else {
        console.error(stdout);
    }
    console.log(' ---> loading，About a minute');
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
    console.log(' ---> Synchronous remote')
    exec('git add . && git commit -m "feat(gfwlist):update" && git push', (err, stdout, stderr) => {

        if (stderr) {
            console.error('错误:', stderr);
        } else {
            console.log(stdout);
        }
        console.log(' ---> done');
    })
})





