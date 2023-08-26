import Tools from "../../services/Tools";
import Diagram from "../diagram/Diagram";
import InputVariable from "./InputVariable";

export default class FunctionModel
{
    isAsync:boolean=true;
    name:string; 
    variables:InputVariable[]=[];
    output:InputVariable;
    diagram:Diagram;
    constructor(data?:any)
    {
        if(!data)return;
        this.variables=Tools.toArray(data.variables,InputVariable);
        this.output=new InputVariable(data.output)
        this.diagram=new Diagram(data.diagram)
        if(data.isAsync)this.isAsync=data.isAsync;
        if(data.name)this.name=data.name;
    }
}