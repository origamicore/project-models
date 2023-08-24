import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";
import ConditionContainer from "../conditions/ConditionContainer";

export default class WhileLoop extends ContainerModel
{
    condition:ConditionContainer
    container:DiagramContainer;
}