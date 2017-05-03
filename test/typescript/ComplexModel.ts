import { NestedArray as NestedArray } from "./NestedArray" 
export class Workinghour {
    name:String
    from:String
    to:String
    closed:Boolean
    _id:String
}
export class Nestedobj {
    stuff:String
    _id:String
}
export class Nestedarray {
    name:String
    surname:String
    price:Number
    _id:String
}
export class ComplexModel {
    workingHours:Array<Workinghour>
    neighbourhoods:Array<String | NestedArray>
    str:String
    name:String
    binary:any
    living:Boolean
    updated:Date
    age:Number
    mixed:any
    _someId:String
    ofString:Array<String>
    ofNumber:Array<Number>
    ofDates:Array<Date>
    ofBuffer:Array<any>
    ofBoolean:Array<Boolean>
    ofMixed:Array<any>
    ofObjectId:Array<String>
    nestedObj:Nestedobj
    nestedArray:Array<Array<Array<Nestedarray>>>
    _id:String
}
