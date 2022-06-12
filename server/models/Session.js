const mongoose = require('mongoose');

const User = require("./User")
const { Schema } = mongoose;

const sessionSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  createdAt: {
    type: Date, 
  }, 
  description: {
    type: String
  }, 
  thumbnail: {
    type: String
  }, 
  users: [User]

});

const Session = mongoose.model('Session', dassSchema);

module.exports = Session;
