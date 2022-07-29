const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoadingQueueSchema = new Schema({
      stage: {
        type: String,
        required: [ true, 'Select A Stage to work from']
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      pricing: {
        type: Number
      },
      taxi: {
        type: String,
        required: [ true, 'Select A Stage to work from']
      }
},{
    toJSON: { virtuals: true },
    // toObject: {virtuals: true }
});


module.exports = mongoose.model('BoadingQueue', BoadingQueueSchema);