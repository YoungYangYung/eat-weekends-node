exports.keys = 'hyang7';

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl':'nunjucks'
    }
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

exports.middleware = ['robot', 'gzip', 'graphql'];
exports.robot = {
    ua: [/Baiduspider/i]
}

exports.gzip = {
    threshold: 1024
}

exports.graphql = {
    router: '/graphql',
    // 是否加载到app上
    app: true,
    // 是否加载到agent上，默认false
    agent: false
}

exports.security = {
    csrf: {
        enable: false
    }
}

exports.email = {
    pass: 'hogpgzsxdutueahb',
    from: '2412749420@qq.com'
}

exports.cluster = {
    listen: {
        port: '8000'
    }
}