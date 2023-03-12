const nodemailer = require('nodemailer')
class Mailer {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: "aliprotofolio@gmail.com",
                pass: "wrursyrnoskbyeof",
            },
        });
    }
    async init(mailDetails, callback) {
        try {
            const info = await this.transporter.sendMail(mailDetails)
            callback(info)
        } catch (error) {
            console.log(error);
        }
    }
    HTmlTemplate(text){
        return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>NodeMailer Email Template</title>
            <style>
              .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
              }
              .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
              }
              .email-header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
              .email-body {
                padding: 20px;
              }
              .email-footer {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="email">
                <div class="email-header">
                <div data-v-1a876984="" class="logo flex gap-2 items-center cursor-pointer"><div data-v-1a876984="" class="icon px-[10px] py-[12px] w-[51px] border-4 border-primary rounded-full flex items-center justify-center" style="
                padding: 12px 10px;
                width: 51px;
                border: 4px solid;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            "><svg data-v-1a876984="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 902.63 746.39" style="
                fill: #000;
            "><title data-v-1a876984="">Ali Abdelbaky</title><path data-v-1a876984="" d="M655.76,691.72l-122-359.11h99.67l77.52,234.77,14.64,54.53ZM1138,392.07,1030.1,407l25.24-74.34h103ZM903.63,1079H787.34L681.84,768.44,750.28,700,804,858.62c14.38,45.41,26.57,90.81,37.64,135.12h2.22c11.07-43.2,22.15-87.49,38.75-136.22l73.09-214.83,21.26-79.22,35.63-104.89,107.86-14.86Z" transform="translate(-533.75 -332.61)"></path><path data-v-1a876984="" d="M909,618.67,811.8,332.61h99.67l45,136.24ZM1421.92,375l-105.53,7.69,17-50.1h103Zm-240.23,704H1065.4l-56-164.65,49.36-124.28L1082,858.62c14.4,45.41,26.57,90.81,37.65,135.12h2.21c11.07-43.2,22.15-87.49,38.76-136.22l73.08-214.83L1255,563.47l44.37-130.62,105.44-7.69Z" transform="translate(-533.75 -332.61)"></path></svg></div><div data-v-1a876984="" class="flex text-start capitalize flex-col" style="
                display: flex;
                flex-direction: column;
                text-transform: capitalize;
            "><span data-v-1a876984="" class="title text-[26px] text-primary font-semibold" style="
                font-weight: 600;
                font-size: 26px;
                color: #000;
            ">Ali Abdelbaqy</span><span data-v-1a876984="" class="subtitle text-[11px] font-bold uppercase" style="letter-spacing: 3px;text-transform: uppercase;font-size: 11px;font-weight: bold;">Frontend Developer</span></div></div>
                </div>
                <div class="email-body">
                  <p>${text}</p>
                </div>
                <div class="email-footer">
                  <p>EMAIL FOOTER</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    }
}

module.exports = Mailer