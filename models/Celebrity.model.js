const {mongoose, Schema} = require('mongoose');

const CelebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhase: String
  }
);

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
 
module.exports = Celebrity;