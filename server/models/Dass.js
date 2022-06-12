const mongoose = require('mongoose');

const { Schema } = mongoose;

const dassSchema = new Schema({
  dass1: {
    type: String,
  },
  dass2: {
    type: String,
  },
  dass3: {
    type: String,
  },
  dass4: {
    type: String,
  },
  dass5: {
    type: String,
  },
  dass6: {
    type: String,
  },
  dass7: {
    type: String,
  },
  dass8: {
    type: String,
  },
  dass9: {
    type: String,
  },
  dass10: {
    type: String,
  },
  dass11: {
    type: String,
  },
  dass12: {
    type: String,
  },
  dass13: {
    type: String,
  },
  dass14: {
    type: String,
  },
  dass15: {
    type: String,
  },
  dass16: {
    type: String,
  },
  dass17: {
    type: String,
  },
  dass18: {
    type: String,
  },
  dass19: {
    type: String,
  },
  dass20: {
    type: String,
  },
  dass21: {
    type: String,
  },

});

const Dass = mongoose.model('Dass', dassSchema);

module.exports = Dass;
