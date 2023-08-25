import ContainerModel from "../ContainerModel";

export default class VariableModel extends ContainerModel
{
    name:string;
    value:string;
    varType:string;
    constructor(data:any)
    {
        super(data)
        if(!data)return;
        if(data.name)this.name=data.name;
        if(data.value)this.value=data.value;
        if(data.varType)this.varType=data.varType;
        
    }
}