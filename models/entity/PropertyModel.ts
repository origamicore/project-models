import DecoratorModel from "../DecoratorModel";

export default class PropertyModel
{
    decorator:DecoratorModel;
    name:string;
    description:string;
    type:string;
    defaultValue:string;
    isArray:boolean;
    constructor(data?:any)
    {
        if(!data)return;
        this.decorator=new DecoratorModel(data.decorator) 
        if(data.name)this.name=data.name;
        if(data.description)this.description=data.description;
        if(data.type)this.type=data.type;
        if(data.defaultValue)this.defaultValue=data.defaultValue;
        if(data.isArray)this.isArray=data.isArray;
    }
}