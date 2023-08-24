import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";

export default class ForeachLoop extends ContainerModel
{
    objectName:string;
    array:string; 
    container:DiagramContainer;
    constructor(data:any)
    {
        if(!data)return;
        super(data)
        if(data.objectName)this.objectName=data.objectName;
        if(data.array)this.array=data.array;
        this.container=new DiagramContainer(data.container);        
    }
}