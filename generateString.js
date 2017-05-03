module.exports = (json) => {


    function generateString(classes) {
        str = "";
        for (let c of classes) {
            if (c.import) {
                str += generateImport(c);
            } else {
                str += generateClass(c);
            }
        }
        return str;
    }

    function generateImport(c) {
        return 'import { ' + c.realName + ' as ' + c.name + ' } from "./' + c.realName + "\" \n";
    }

    function generateClass(c) {
        let str = 'export interface ' + c.name + ' {' + "\n";
        for (let m of c.members) {
            str += "    " + generateMember(m) + "\n";
        }
        str += "}\n";
        return str;
    }

    function generateMember(m) {
        if (m.isArray) {
            return m.key + ":" + generateArray(m);
        } else {
            return m.key + ":" + m.type
        }
    }

    function generateArray(a) {
        str = "Array<";
        for (let m of a.members) {
            if (m.isArray) {
                str += generateArray(m);
            } else {
                str += m.type;
            }
            str += " | ";
        }
        str = str.substring(0, str.length - 3);
        str += ">";
        return str;
    }


    let imports = json.sort((a, b) => {
        if (a.import) {
            return -1;
        } else if (b.import) {
            return 1;
        } else {
            return 0;
        }
    })
    return generateString(json);
}

