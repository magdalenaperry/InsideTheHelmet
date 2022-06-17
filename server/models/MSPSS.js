const mongoose = require('mongoose');

const { Schema } = mongoose;

const MSPSSSchema = new Schema({
  mspss1: {
    type: String,
  },  
  mspss1: {
    type: String,
  },
  mspss2: {
    type: String,
  },
  mspss3: {
    type: String,
  },
  mspss4: {
    type: String,
  },
  mspss5: {
    type: String,
  },
  mspss6: {
    type: String,
  },  
  mspss7: {
    type: String,
  },
  mspss8: {
    type: String,
  },
  mspss9: {
    type: String,
  },
  mspss10: {
    type: String,
  },
  mspss11: {
    type: String,
  },
  mspss12: {
    type: String,
  },
  mspssSum: {
    type: String,
  }


});

const MSPSS = mongoose.model('MSPSS', MSPSSSchema);

module.exports = MSPSS;
