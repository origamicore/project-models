import DiagramContainer from "./DiagramContainer";

export default class Diagram
{
    contrainer:DiagramContainer;
    constructor(data?:any)
    { 
        if(!data)return;
        this.contrainer=new DiagramContainer(data.contrainer)
    }
}