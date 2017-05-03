


let schema = new mongoose.Schema({
    dishes: [[[{name:String,price:Number},[{name:String}]]]]
});


module.exports = mongoose.model('NestedArray', schema);




