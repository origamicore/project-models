import ContainerModel from "../ContainerModel";
import ConditionContainer from "./ConditionContainer";

export default class IfCondition extends ContainerModel
{
    conditions:ConditionContainer[]=[];
    elseCondition:ConditionContainer[]
}