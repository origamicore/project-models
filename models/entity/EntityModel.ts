import Tools from "../../services/Tools";
import DecoratorModel from "../DecoratorModel";
import FunctionModel from "../manual/FunctionModel";
import PropertyModel from "./PropertyModel";

export default class EntityModel
{
    name:string;
    decorator:DecoratorModel;
    properies:PropertyModel[];
    functions:FunctionModel[]
    constructor(data?:any)
    {
        if(!data)return;
        this.name=data.name
        this.properies=Tools.toArray(data.properies,PropertyModel);
        this.functions=Tools.toArray(data.functions,FunctionModel);
        this.decorator=new DecoratorModel(data.decorator)
    }
}