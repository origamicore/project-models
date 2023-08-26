import Tools from "../../services/Tools";
import DecoratorModel from "../DecoratorModel";
import Diagram from "../diagram/Diagram";
import InputVariable from "./InputVariable";

export default class ServiceModel
{
    name:string;
    tag:string;
    decorators:DecoratorModel[]=[];
    variables:InputVariable[]=[];
    output:InputVariable;
    diagram:Diagram;
    constructor(data?:any)
    {
        if(!data)return; 
        if(data.name)this.name=data.name;
        if(data.tag)this.tag=data.tag;
        this.decorators=Tools.toArray(data.decorators,DecoratorModel);
        this.variables=Tools.toArray(data.variables,InputVariable);
        this.output=new InputVariable(data.output)
        this.diagram=new Diagram(data.diagram)
    }
}