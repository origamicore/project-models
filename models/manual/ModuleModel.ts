import ModuleConfigModel from "../config/ModuleConfigModel";
import FunctionModel from "./FunctionModel";
import ServiceModel from "./ServiceModel";

export default class ModuleModel
{
    enable:boolean=false;
    name:string;
    functions:FunctionModel[]=[];
    services:ServiceModel[]=[];
    config:ModuleConfigModel
    constructor(data:{
        name:string;
    })
    {
        Object.assign(this,data)
    }
    update()
    {

    }
}