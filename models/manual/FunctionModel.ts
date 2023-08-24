import Diagram from "../diagram/Diagram";
import InputVariable from "./InputVariable";

export default class FunctionModel
{
    isAsync:boolean=true;
    name:string; 
    variables:InputVariable[]=[];
    output:InputVariable;
    diagram:Diagram;
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}