
const fs = require('fs')

fs.writeFileSync('test.txt','hello world')
fs.copyFileSync('./test.txt','./a.txt')
fs.renameSync('./a.txt','./hello.txt')
fs.readdirSync(__dirname).forEach(file=>{
    console.log(file);
})

fs.appendFileSync('./test.txt',' I am Here')
