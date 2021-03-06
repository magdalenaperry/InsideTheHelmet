const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Demographics = require('./Demographics')
const Dass = require('./Dass')
const IPRRS = require('./IPRRS')
const MSPSS = require('./MSPSS')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age : {
    type: String, 
    required: true,
  },
  phone:{
    type: String, 
    required: true,
  },
  athleteType: {
    type: String, 
    required: true,
  }, 
  demographics:[Demographics.schema], 
  dass:[Dass.schema],
  iprrs: [IPRRS.schema],
  mspss: [MSPSS.schema]
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
