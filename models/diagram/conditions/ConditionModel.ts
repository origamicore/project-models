import SingleCondition from "./SingleCondition";

export default class ConditionModel
{
    operation:'&&'|'||'|'';
    left:ConditionModel|SingleCondition;
    right:ConditionModel|SingleCondition;
    constructor(data:any)
    {
        if(!data)return; 
        if(data.operation)this.operation=data.operation;
        if(data.left?.leftSide)
        {
            this.left=new SingleCondition(data.left)
        }
        else
        {
            this.left=new ConditionModel(data.left) 
        }
        if(data.right?.leftSide)
        {
            this.right=new SingleCondition(data.right)
        }
        else
        {
            this.right=new ConditionModel(data.right) 
        }
    }
}