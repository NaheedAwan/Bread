// dependencies
const mongoose = require('mongoose')
// schema constructor
const { Schema } = mongoose
// schema
const breadSchema = new Schema({
  name: {
    type: String,
    required: true
  
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String,
    default: 'http://placehold.it/500x500.png'
  },
  baker: {
   type: Schema.Types.ObjectId,
   ref:"Baker"
    // enum:['Rachel', 'Monica', 'Joey', "Chandler", 'Ross', 'Phoebe']
  }
})
// helper methods 
breadSchema.methods.getBakedBy = function(){
  console.log("this", this)
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}
// model and export
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread 
