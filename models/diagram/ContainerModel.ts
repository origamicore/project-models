export default class ContainerModel
{ 
    type:ContainerType
    constructor(data:any)
    {
        if(!data)return; 
        this.type=data.type
    } 
}
export enum ContainerType
{
    If=1,
    Foreach=2,
    For=3,
    While=4,
    Try=5,
    Variable=6
    
}