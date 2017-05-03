


let schema = new mongoose.Schema({
    workingHours: {
        start: String,
        end: String,
        day:{
            dayOfWeek:Number
        },
        delivery: {
            type: mongoose.Schema.Types.ObjectId, ref: 'SimpleModel'
        }
    }
});


module.exports = mongoose.model('NestedClasses', schema);




