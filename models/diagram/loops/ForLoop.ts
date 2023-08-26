import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";

export default class ForLoop extends ContainerModel
{
    indexName:string;
    start:string;
    end:string;
    step:number=1;
    container:DiagramContainer;
    constructor(data?:any)
    {
        super(data)
        if(!data)return;
        if(data.indexName)this.indexName=data.indexName;
        if(data.start)this.start=data.start;
        if(data.end)this.end=data.end;
        if(data.step)this.step=data.step;
        this.container=new DiagramContainer(data.container);     
        
    }
}