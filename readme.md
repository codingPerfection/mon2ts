# Mongoose models to Typescript interfaces generator

[![N|Solid](http://codingperfection.com/static/poweredBy.png)](http://codingperfection.com)

Script generates typescript interfaces with all properties from mongoose models. 


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
//generate typescript interface as string
let str = m2t(model);
//save the string as .ts somewhere you need it
```
### Additional info:
Script automatically generates import statements for referred models & additional interfaces for nested objects. Accepted type for referred mongoose model is either id or populated interface.

<!--[Example mongoose models](./test/mongoose/)

[Example typescript interfaces](./test/typescript/)-->

<!--### Automate workflow
Click the link below to learn whats the use of interfaces in angular 4
[Automate .ts generation with Gulp and m2t](http://codingperfection.com/angular-4-nested-sortable-list-using-jquery-ui/)-->


