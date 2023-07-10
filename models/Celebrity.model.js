const {mongoose, Schema} = require('mongoose');
 
const CelebritySchema = new Schema(
  {
    name: { type: String },
    occupation: { type: String },
    catchPhase: { type: String }
  }
);
 
const Celebrity = mongoose.model('Celebrity', CelebritySchema);
 
module.exports = Celebrity;