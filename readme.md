# Mongoose models to Typescript classes generator

[![N|Solid](http://codingperfection.com/static/poweredBy.png)](http://codingperfection.com)
Script generates typescript classes with all properties from mongoose models. 


### Install:
```sh
npm install mon2ts --save
```
### Example usage:
```sh
//get generator script
let m2t = require('mon2ts');
//get mongoose model
let model = require('./models/MyModel');
//generate typescript class as string
let str = m2t(model);
//save the string as .ts somewhere you need it
```
### Additional info:
Script automatically generates import statements for referred models & additional classes for nested objects. Accepted type for referred mongoose model is either id or populated class.
[Example mongoose models](./test/mongoose/)
[Example typescript classes](./test/typescript/)

### Automate workflow
Click the link below to learn how to setup your workflow to have auto generated classes ready for import in angular 4 project. 
[Automate .ts generation with Gulp and m2t](http://codingperfection.com/angular-4-nested-sortable-list-using-jquery-ui/)


