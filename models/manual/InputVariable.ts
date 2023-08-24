import DecoratorModel from "../DecoratorModel";
import { InputType } from "./InputTypes";

export default class InputVariable
{
    decorator:DecoratorModel;
    name:string;
    classType:string;
    basicType:string;
    isRequired:boolean=true;
    type:InputType;
    constructor(data:{
        name:string;
        classType?:string;
        basicType?:string;
        isRequired?:boolean;
        type:InputType;
    })
    {
        Object.assign(this,data);
    }
}