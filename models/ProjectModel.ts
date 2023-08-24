import Tools from "../services/Tools";
import StaticModule from "./StaticModules";
import MongoContext from "./db/mongo/MongoContext";
import ModuleModel from "./manual/ModuleModel";

export default class ProjectModel
{
    id:string;
    token:string;
    registerd:boolean;
    name:string;
    modules:ModuleModel[]=[];
    staticModules:StaticModule[]=[];
    mongoContext:MongoContext[]=[];
    constructor(data)
    {
        if(!data)return;
        Object.assign(this,data);
        this.modules=Tools.toArray(data.modules,ModuleModel);
        this.staticModules=Tools.toArray(data.staticModules,StaticModule);
        this.mongoContext=Tools.toArray(data.mongoContext,MongoContext);
    } 
}