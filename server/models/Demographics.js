const mongoose = require('mongoose');

const { Schema } = mongoose;

const demographicsSchema = new Schema({
  race: {
    type: String,
  },
  ethnicity: {
      type: String,
  },
  
});

const Demographics = mongoose.model('Demographics', demographicsSchema);

module.exports = Demographics;
