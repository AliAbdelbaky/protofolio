
const multer = require('multer')

const upload = multer({ dest: './' })

const imageMiddleware = (req, res, next) => {
    const token = req.header(TOKEN_HEADER)
    if (!token) return useErrorHandler(res, 401, 'Access Denied')

    try {
        const verified = jwt.verify(token.replace(`${TOKEN_TYPE} `, ''), process.env.TOKEN_SECRET || TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        useErrorHandler(res, 401, 'Access Denied')
    }
}

module.exports = imageMiddleware