import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";
import ConditionContainer from "../conditions/ConditionContainer";

export default class WhileLoop extends ContainerModel
{
    condition:ConditionContainer
    container:DiagramContainer;
    constructor(data?:any)
    {
        super(data)
        if(!data)return;
        this.condition=new ConditionContainer(data.condition);   
        this.container=new DiagramContainer(data.container);   
        
    }
}