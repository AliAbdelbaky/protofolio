const jwt = require('jsonwebtoken')
const { TOKEN_HEADER, TOKEN_SECRET, TOKEN_TYPE } = require('../../types/auth')
const { useErrorHandler } = require('../../utils/useErrorHandler')

const auth = (req, res, next) => {
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
module.exports = auth