import { SimpleModel as SimpleModel } from "./SimpleModel" 
export class Day {
    dayOfWeek:Number
    _id:String
}
export class Workinghour {
    start:String
    end:String
    day:Day
    delivery:String | SimpleModel
    _id:String
}
export class NestedClasses {
    workingHours:Day
    _id:String
}
