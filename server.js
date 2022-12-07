const egg = require('egg');

console.log('===', __dirname)

const workers = Number(process.argv[2] || require('os').cpus().length);

egg.startCluster({
    workers,
    baseDir: __dirname
})