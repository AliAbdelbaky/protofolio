const Joi = require('joi')

const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required()
  })
  return schema.validate(data)
}

const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.required()
  })
  return schema.validate(data)
}
module.exports = {
  loginValidation,
  registerValidation
}