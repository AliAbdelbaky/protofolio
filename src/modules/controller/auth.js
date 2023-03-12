const User = require('../../schemas/user');
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../../types/auth')

const _register_user = (user) => {
  return new Promise((resolve, rej) => {
    const NEWUSER = new User(user);

    NEWUSER.save()
      .then((data) => resolve(data))
      .catch((err) => rej(err));
  });
}
const _login_user = (user) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET || TOKEN_SECRET)
    resolve(token)
  })
}

module.exports = {
  _register_user,
  _login_user
}