let jsonGenerator = require('./generateJSON');
let stringGenerator = require('./generateString.js');

module.exports = (model) => {
    let tsJSON = jsonGenerator(model);
    let str = stringGenerator(tsJSON);
    return str;
}





