const mongoose = require('mongoose');

class Database {
  constructor() {
    this.uri = 'mongodb://0.0.0.0:27017/dashboard';
  }
  connect() {
    mongoose
      .connect(this.uri)
      .then(() => console.log('DB Connected succesfully'))
      .catch((err) => console.log(`Error while conecting to DB ${err} `));
  }
}

module.exports = Database;
