const router = require('express').Router();
const { useErrorHandler } = require('../../utils/useErrorHandler')
const MailerModule = require('../mail/mailer')
const Mailer = new MailerModule()

router.post('/contactme', async (req, res) => {
    const email = req.body?.email
    const name = req.body?.name
    const budget = req.body?.budget
    const service = req.body?.service
    const msg = req.body?.message
    const options = {
        from: `from ${email}`, // sender address
        to: "aliprotofolio@gmail.com", // receiver email
        subject: "Email From website", // Subject line
        text: msg,
        html: Mailer.HTmlTemplate(msg)
    }
    Mailer.init(options, (info) => { }).then(() => {
        forwardEmail().finally(() => {
            res.status(200).send({ msg: "Email sent successfully" })
        })
    }).catch(() => {
        useErrorHandler(res, 403, 'Access Denied')
    })
    const forwardEmail = () => {
        const options2 = {
            from: `aliprotofolio@gmail.com`, // sender address
            to: `${email}`, // receiver email
            subject: "Email From website", // Subject line
            text: `Dear ${name} hii`,
            html: Mailer.HTmlTemplate(`Dear ${name} hii`)
        }
        return Mailer.init(options2, (info) => { })

    }

})




module.exports = router