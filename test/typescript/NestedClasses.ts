import { SimpleModel as SimpleModel } from "./SimpleModel" 
export interface Day {
    dayOfWeek:Number
    _id:String
}
export interface Workinghour {
    start:String
    end:String
    day:Day
    delivery:String | SimpleModel
    _id:String
}
export interface NestedClasses {
    workingHours:Day
    _id:String
}
