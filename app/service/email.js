const Service = require('egg').Service;

class EmailService extends Service {
    async sendEmail({ to }){
        console.log('===service', this.ctx.config)
    }
}

module.exports = EmailService;