var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
    startDate: { type: String, required: true},
    endDate: {type: String, required: true},
    rooms: {type: Number, required: true},
    adults: {type: Number, required: true},
    children: {type: Number, required: true},
    destination: {type: String, required: true},
    concepts: {type: String, required: false},
    amenities: {type: String, required: false},
    tripProfile: {type: String, required: false},
    tripName: {type: String, required: false},
    tripDiscription: {type: String, required: false}

});
daySchema.pre('save', function(next) {
      var currentDate = new Date();

      this.updated_at = currentDate;

      if (!this.created_at)
        this.created_at = currentDate;

      next();
    });

module.exports = mongoose.model('Trip', taskSchema);
