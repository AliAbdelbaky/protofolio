const router = require('express').Router();
const { useErrorHandler } = require('../../utils/useErrorHandler')

const { _fetch_user } = require('../controller/user')

const verify = require('../middleware/token')


router.get('/user', verify, (req, res) => {
  _fetch_user(req.user._id)
    .then(data => data ? res.status(200).send({ data }) : useErrorHandler(res, 403, 'Access Denied'))
    .catch(error => useErrorHandler(res, 403, 'Access Denied'))
})

module.exports = router