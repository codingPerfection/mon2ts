var fs = require('fs');
let inflection = require('inflection');

// fs.readFile("class.ts", "utf-8", function (err, data) {
//     let d = esprima.parse(data);
//     console.log(d);
// });

let model = require('./testFile2.js');


// console.log(schema.orderSuccess.type.constructor.name);

let properties;

function generateClass(obj, name) {
    let str = 'export class ' + name + " { \n";
    for (let key of Object.keys(obj)) {
        let generated = generateMember(key, obj[key]);
        str = generated.classes + str;
        str += generated.member;
    }
    str += "    _id:String \n";
    str += "} \n";
    return str;
}

function generateMember(key, value) {
    let member = "";
    let classes = "";
    if (Array.isArray(value)) {
        let subMembers = "";
        for (let i = 0; i < value.length; i++) {
            let v = "";
            let generated = generateMember(key, value[i]);
            let index1 = generated.member.indexOf(":") + 1;
            v = generated.member.substr(index1, generated.member.length);
            v = v.replace("\n", "");
            classes += generated.classes;
            subMembers += v + ",";
        }
        subMembers = subMembers.substr(0,subMembers.length-1);
        member = "    " + key + ":Array<" + subMembers + ">\n";
    } else if (typeof value == 'function') {
        member = generateMemberForFunction(key, value);
    } else {
        //it is object
        return generateMemberForObj(key, value);
    }
    return {
        member: member,
        classes: classes
    }

}

function generateMemberForObj(key, value) {
    let member = "";
    let classes = "";
    if (typeof value.type == 'function') {
        member += generateMemberForFunction(key, value.type)
    } else {
        let name = inflection.singularize(key);
        name = inflection.capitalize(name);
        let newClass = generateClass(value, name);
        classes = newClass;
        member += "    " + key + ":" + name + "\n";
    }
    return {
        classes: classes,
        member: member
    }
}


function generateMemberForFunction(key, f) {
    let n = (f.name);
    if (n == 'Mixed') {
        n = "any";
    } else if (n == 'ObjectId') {
        n = "String";
    }
    return '    ' + key + ':' + n + "\n";
}




let schema = model.schema.obj;
let modelName = model.modelName;
let str = generateClass(schema, modelName);
console.log(str);



