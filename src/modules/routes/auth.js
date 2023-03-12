const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../../schemas/user')
const api = require('../controller/auth')


const { TOKEN_HEADER, TOKEN_TYPE, ENDPOINTS } = require('../../types/auth')
const { useErrorHandler } = require('../../utils/useErrorHandler')
//validation
const { registerValidation, loginValidation } = require('../validation/auth')


// router.use(express.static(__dirname + './'))
const multer = require('multer')

const Storage = multer.diskStorage({
  destination: './storage/',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({
  storage: Storage
}).single('file')
// Register
router.post(ENDPOINTS.register, upload, async (req, res) => {
  console.log(req.body)

  const { error } = registerValidation(req.body)
  if (error) return useErrorHandler(res, 400, error.details[0].message)

  const emailExist = await User.findOne({ email: req.body.email })
  if (emailExist) return useErrorHandler(res, 400, 'Email already exists')

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  // Create a new user
  api._register_user({
    name: req.body.name,
    email: req.body.email,
    image: req.body.file.filename,
    password: hashedPassword
  })
    .then(data => res.send({ data }))
    .catch(error => useErrorHandler(res, 500, error))

})
// Login
router.post(ENDPOINTS.login, async (req, res) => {
  const { error } = loginValidation(req.body)
  if (error) return useErrorHandler(res, 400, error.details[0].message)


  const user = await User.findOne({ email: req.body.email })
  if (!user) return useErrorHandler(res, 400, 'Invalid email')

  const validPass = await bcrypt.compare(req.body.password, user.password)
  if (!validPass) return useErrorHandler(res, 400, 'Invalid password')

  api._login_user(user)
    .then(token => res.status(200).header(TOKEN_HEADER, token).send({ data: user, token: `${TOKEN_TYPE} ${token}` }))

})

module.exports = router