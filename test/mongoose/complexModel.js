let schema = new mongoose.Schema({
    workingHours: [
        { name: String, from: String, to: String, closed: Boolean }
    ],
    neighbourhoods: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'NestedArray'
    }],
    str: String,
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date, default: Date.now },
    age: { type: Number, min: 18, max: 65 },
    mixed: mongoose.Schema.Types.Mixed,
    _someId: mongoose.Schema.Types.ObjectId,
    ofString: [String],
    ofNumber: [Number],
    ofDates: [Date],
    ofBuffer: [Buffer],
    ofBoolean: [Boolean],
    ofMixed: [mongoose.Schema.Types.Mixed],
    ofObjectId: [mongoose.Schema.Types.ObjectId],
    nestedObj: {
        stuff: { type: String, lowercase: true, trim: true, stuff:{
            name: String,
        } }
    },
    nestedArray: [[[{name:String, surname:String, price:Number}]]],
});


module.exports = mongoose.model('ComplexModel', schema);




