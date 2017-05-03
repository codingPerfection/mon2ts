describe("generate JSON test", () => {



    it("should test basic types", () => {
        let m = require('./mongoose/simpleModel');
        let json = generateJSON(m);

        assert.equal(json[0].name, 'SimpleModel');
        let members = json[0].members;
        assert.deepEqual(members, [
            { key: 'str', type: 'String' },
            { key: 'binary', type: 'any' },
            { key: 'living', type: 'Boolean' },
            { key: 'updated', type: 'Date' },
            { key: 'age', type: 'Number' },
            { key: 'mixed', type: 'any' },
            { key: '_someId', type: 'String' },
            {
                key: 'ofString', type: 'Array', isArray: true, members: [{
                    key: 'ofString', type: 'String'
                }]
            },
            { key: '_id', type: 'String' }
        ])
    })


    it("should test nested array", () => {
        let m = require('./mongoose/nestedArray');
        let json = generateJSON(m);
        assert.deepEqual(json,
            [
                {
                    "name": "Dish",
                    "members": [
                        {
                            "key": "name",
                            "type": "String"
                        },
                        {
                            "key": "price",
                            "type": "Number"
                        },
                        {
                            "key": "_id",
                            "type": "String"
                        }
                    ]
                },
                {
                    "name": "Dish1",
                    "members": [
                        {
                            "key": "name",
                            "type": "String"
                        },
                        {
                            "key": "_id",
                            "type": "String"
                        }
                    ]
                },
                {
                    "name": "NestedArray",
                    "members": [
                        {
                            "key": "dishes",
                            "type": "Array",
                            "isArray": true,
                            "members": [
                                {
                                    "key": "dishes",
                                    "type": "Array",
                                    "isArray": true,
                                    "members": [
                                        {
                                            "key": "dishes",
                                            "type": "Array",
                                            "isArray": true,
                                            "members": [
                                                {
                                                    "key": "dishes",
                                                    "type": "Dish"
                                                },
                                                {
                                                    "key": "dishes",
                                                    "type": "Array",
                                                    "isArray": true,
                                                    "members": [
                                                        {
                                                            "key": "dishes",
                                                            "type": "Dish1"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "key": "_id",
                            "type": "String"
                        }
                    ]
                }
            ]
        );
    })


})