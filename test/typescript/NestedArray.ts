export interface Dish {
    name:String
    price:Number
    _id:String
}
export interface Dish1 {
    name:String
    _id:String
}
export interface NestedArray {
    dishes:Array<Array<Array<Dish | Array<Dish1>>>>
    _id:String
}
