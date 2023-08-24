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
        Object.assign(this,data);
    }
    update()
    {
        for(let module of this.modules)
        {
            module.update()
        }
    }
}