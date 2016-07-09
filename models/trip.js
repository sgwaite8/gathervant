var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
    startDate: { type: Date, required: true},
    endDate: {type: Date, required: true},
    rooms: {type: Number, required: true},
    adults: {type: Number, required: true},
    children: {type: Number, required: true},
    destination: {type: String, required: true},
    concepts: {type: Array, required: false},
    amenities: {type: Array, required: false},
    tripProfile: {type: String, required: false},
    tripName: {type: String, required: false},
    tripDiscription: {type: String, required: false}

});
tripSchema.pre('save', function(next) {
      var currentDate = new Date();

      this.updated_at = currentDate;

      if (!this.created_at)
        this.created_at = currentDate;

      next();
    });

module.exports = mongoose.model('Trip', tripSchema);
