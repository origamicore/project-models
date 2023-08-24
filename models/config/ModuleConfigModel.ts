import Tools from "../../services/Tools";
import DecoratorModel from "../DecoratorModel";
import PropertyModel from "../entity/PropertyModel";

export default class ModuleConfigModel
{
    decorator:DecoratorModel;
    properies:PropertyModel[];
    constructor(data:any)
    {
        if(!data)return;
        this.decorator=new DecoratorModel(data.decorator)
        this.properies=Tools.toArray(data.properies,PropertyModel);
    }

}