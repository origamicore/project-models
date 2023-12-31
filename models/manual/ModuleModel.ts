import Tools from "../../services/Tools";
import ModuleConfigModel from "../config/ModuleConfigModel";
import EntityModel from "../entity/EntityModel";
import FunctionModel from "./FunctionModel";
import ServiceModel from "./ServiceModel";

export default class ModuleModel
{
    enable:boolean=false;
    name:string;
    functions:FunctionModel[]=[];
    services:ServiceModel[]=[];
    config:ModuleConfigModel
    models:EntityModel[]=[];
    constructor(data?:any)
    {
        if(!data)return;
        if(data.enable)this.enable=data.enable;
        if(data.name)this.name=data.name;
        this.functions=Tools.toArray(data.functions,FunctionModel);
        this.services=Tools.toArray(data.services,ServiceModel);
        this.config=new ModuleConfigModel(data.config)
        this.models=Tools.toArray(data.models,EntityModel);
    } 
}