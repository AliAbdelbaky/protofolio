const User = require('../../schemas/user');

const _fetch_user = (id) => {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
module.exports = {
  _fetch_user
}