const useErrorHandler = (res, statusCode, msg) => {
  return res.status(statusCode).send({ error: { response: { msg } } })
}
module.exports = {useErrorHandler}