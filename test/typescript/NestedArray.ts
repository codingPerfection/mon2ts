export class Dish {
    name:String
    price:Number
    _id:String
}
export class Dish1 {
    name:String
    _id:String
}
export class NestedArray {
    dishes:Array<Array<Array<Dish | Array<Dish1>>>>
    _id:String
}
