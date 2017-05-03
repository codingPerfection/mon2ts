describe("generate string test", () => {



    it("should generate typescript models (in model/typescript) for each mongoose models(in model) ", () => {

        fs.readdirSync(__dirname + '/mongoose/').forEach(function (file) {
            let m = require('./mongoose/'+file.split('.')[0]);
            let str = generate(m);
            if (str == null) {
                throw new Error("Failed to generate string");
            }
            fs.writeFile(__dirname+"/typescript/"+m.modelName+'.ts', str, function (err) {
                if (err) {
                    throw new Error(err);
                }
            });
        });

    })

})