//require mongoose so it doesn't mess up the benchmarks
global.mongoose = require('./../node_modules/mongoose');


global.fs = require('fs');

global.generate = require('./../generate');
global.generateJSON = require('./../generateJSON');
global.generateString = require('./../generateString');

global.chai = require('./../node_modules/chai');
global.should = chai.should();
global.assert = chai.assert;
global.expect = chai.expect;



before(function(done) {
  done();
});

after(function(done) {
  done();
});