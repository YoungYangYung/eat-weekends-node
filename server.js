const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);

console.log('===', __dirname)

egg.startCluster({
    workers,
    baseDir: __dirname
})