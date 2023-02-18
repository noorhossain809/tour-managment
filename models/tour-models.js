const mongoose = require('mongoose')

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this tour'],
        trim: true,
        unique: [true, 'Name must be unique'],
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name is true large']
    },
    description : {
        type : String,
        required : true
      },
}, {
    timestamps : true,
})

// mongoose methods
tourSchema.methods.logger = function(){
    console.log(`Data save for ${this.name}`)
}

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;