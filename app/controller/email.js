const Controller = require('egg').Controller;
const nodemailer = require('nodemailer');

class EmailController extends Controller {
    async send(){
        const { to, html } = this.ctx.request.body;
        const { pass, from } = this.config.email;
        console.log('===to',this.ctx.request.body, pass, from);
        const transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: from,
                pass
            }
        });

        const mailOptions = {
            from,
            to,
            subject: '有人点菜品啦~',
            text: '有人点菜111',
            html,
        };

        try {
            const emailRes = await transporter.sendMail(mailOptions);
            if(emailRes && emailRes.accepted){
                this.ctx.body = {
                    code: 0,
                    message: '邮件发送成功～'
                }
                return;
            }
            this.ctx.body = {
                code: 1,
                message: '邮件发送失败，请稍后再试～'
            }
        } catch (error) {
            this.ctx.body = {
                code: 1,
                message: '邮件发送失败，请稍后再试～'
            }
        }
    }
}

module.exports = EmailController;