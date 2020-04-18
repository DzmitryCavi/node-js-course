const { MONGO_CONNECTION_STRING } = require('../common/config');
const mongoose = require('mongoose');

const connectToDB = () =>
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });

module.exports = connectToDB;
