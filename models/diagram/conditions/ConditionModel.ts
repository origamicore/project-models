import SingleCondition from "./SingleCondition";

export default class ConditionModel
{
    operation:'&&'|'||'|'';
    left:ConditionModel|SingleCondition;
    right:ConditionModel|SingleCondition;
}