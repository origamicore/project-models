import ContainerModel from "../ContainerModel";
import DiagramContainer from "../DiagramContainer";

export default class ForLoop extends ContainerModel
{
    indexName:string;
    start:string;
    end:string;
    step:number=1;
    container:DiagramContainer;
}