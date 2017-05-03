


let schema = new mongoose.Schema({
    str: String,
    binary: Buffer,
    living: Boolean,
    updated: { type: Date },
    age: { type: Number },
    mixed: mongoose.Schema.Types.Mixed,
    _someId: mongoose.Schema.Types.ObjectId,
    ofString: [String],
});


module.exports = mongoose.model('SimpleModel', schema);




