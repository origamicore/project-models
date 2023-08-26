import DiagramContainer from "../DiagramContainer";
import ConditionModel from "./ConditionModel";

export default class ConditionContainer
{
    condition:ConditionModel;
    container:DiagramContainer;
    constructor(data?:any)
    {
        if(!data)return;
        this.condition=new ConditionModel(data.condition)
        this.container=new DiagramContainer(data.container)
        
    }
}