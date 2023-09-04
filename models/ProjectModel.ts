import Tools from "../services/Tools";
import StaticModule from "./StaticModules"; 
import MongoDatabase from "./db/mongo/MongoDatabase";
import ModuleModel from "./manual/ModuleModel";

export default class ProjectModel
{
    _id:string;
    id:string;
    token:string;
    registerd:boolean;
    name:string;
    modules:ModuleModel[]=[];
    staticModules:StaticModule[]=[];
    mongoDatabses:MongoDatabase[]=[];
    constructor(data?:any)
    {
        if(!data)return; 
        Object.assign(this,data);
        this._id=this.id;
        this.modules=Tools.toArray(data.modules,ModuleModel);
        this.staticModules=Tools.toArray(data.staticModules,StaticModule);
        this.mongoDatabses=Tools.toArray(data.mongoDatabses,MongoDatabase);
    } 
}