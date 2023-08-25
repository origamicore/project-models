import Tools from "../../../services/Tools";
import ContainerModel from "../ContainerModel";
import ConditionContainer from "./ConditionContainer";

export default class IfCondition extends ContainerModel
{
    conditions:ConditionContainer[]=[];
    elseCondition:ConditionContainer;
    constructor(data:any)
    {
        super(data)
        if(!data)return;
        this.conditions=Tools.toArray(data.conditions,ConditionContainer);
        this.elseCondition=new ConditionContainer(data.elseCondition)
    }
}