module.exports = (model) => {

    let inflection = require('inflection');

    let takenNames = [];

    function getAvaliableClassName(name) {
        let foundClasses = 0;
        let tryName = name;
        for (let i = 0; takenNames.length > i; i++) {
            if (takenNames[i] == tryName) {
                foundClasses++;
                tryName = name + foundClasses;
            }
        }
        takenNames.push(tryName);
        return tryName;
    }

    function generateClass(obj, name) {
        let avaliableName = getAvaliableClassName(name);
        let classes = [];
        let members = [];
        for (let key of Object.keys(obj)) {
            let generated = generateMember(key, obj[key]);
            if (generated.classes.length != 0) {
                for (let i = 0; i < generated.classes.length; i++) {
                    classes.push(generated.classes[i]);
                }
            }
            members.push(generated.member);
        }
        members.push({
            key: '_id',
            type: 'String'
        })
        classes.push({
            name: avaliableName,
            members: members
        })
        return classes;
    }

    function generateMember(key, value) {
        let member = {};
        let classes = [];
        if (Array.isArray(value)) {
            member = {
                key: key,
                type: 'Array',
                isArray: true,
                members: []
            }
            for (let i = 0; i < value.length; i++) {
                let generated = generateMember(key, value[i]);
                member.members.push(generated.member);
                classes = classes.concat(generated.classes);
            }
        } else if (typeof value == 'function') {
            member = (generateMemberForFunction(key, value));
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
        let member = {};
        let classes = [];
        if (typeof value.type == 'function') {
            if (value.ref && value.type.name == 'ObjectId') {
                let name = getAvaliableClassName(value.ref);
                member = {
                    key: key,
                    type: 'String | ' + name
                }
                classes.push({
                    name: name,
                    realName: value.ref,
                    import: true,
                })
            } else {
                member = generateMemberForFunction(key, value.type);
            }
        } else {
            let name = inflection.singularize(key);
            name = inflection.capitalize(name);
            let generated = generateClass(value, name);
            classes = generated;
            member = {
                key: key,
                type: generated[0].name
            };
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
        } else if (n == 'Buffer') {
            n = 'any'
        }
        return {
            key: key,
            type: n
        }
    }


    let schema = model.schema.obj;
    let modelName = model.modelName;
    return generateClass(schema, modelName);

}



