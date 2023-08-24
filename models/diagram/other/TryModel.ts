import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";

export default class TryModel extends ContainerModel
{
    mainContainer:DiagramContainer;
    catchContainer:DiagramContainer;
    catchType:string;
    constructor(data:any)
    {
        if(!data)return;
        super(data)
        
        if(data.catchType)this.catchType=data.catchType;
        this.catchContainer=new DiagramContainer(data.catchContainer);   
        this.mainContainer=new DiagramContainer(data.mainContainer);   
    }
}