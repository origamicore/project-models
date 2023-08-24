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
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}