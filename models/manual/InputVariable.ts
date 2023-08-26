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
    constructor(data?:any)
    {
        if(!data)return;
        this.decorator=new DecoratorModel(data.decorator)
        if(data.name)this.name=data.name;
        if(data.classType)this.classType=data.classType;
        if(data.basicType)this.basicType=data.basicType;
        if(data.isRequired)this.isRequired=data.isRequired;
        if(data.type)this.type=data.type;
    }
}