export default class SingleCondition
{
    operation:'=='|'!'|'!='|''|'>'|'<'|'>='|'<='|'';
    leftSide:string;
    rightSide:string;
    constructor(data:any)
    {
        if(!data)return;
        if(data.operation)this.operation=data.operation;
        if(data.leftSide)this.leftSide=data.leftSide;
        if(data.rightSide)this.rightSide=data.rightSide;
        
    }
}