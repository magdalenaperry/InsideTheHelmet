const mongoose = require('mongoose');

const { Schema } = mongoose;

const IPRRSSchema = new Schema({
  iprrs1: {
    type: String,
  },
  iprrs2: {
      type: String,
  },
  iprrs3: {
    type: String,
  },
  iprrs4: {
      type: String,
  },
  iprrs5: {
    type: String,
  },
  iprrs6: {
      type: String,
  },

  
});

const IPRRS = mongoose.model('IPRRS', IPRRSSchema);

module.exports = IPRRS;
