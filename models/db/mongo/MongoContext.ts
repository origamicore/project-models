import Tools from "../../../services/Tools";
import MongoSchema from "./MongoSchema";

export default class MongoContext
{
    name:string;
    schemas:MongoSchema[]=[];
    
    constructor(data:any)
    {
        if(!data)return;
        if(data.name)this.name=data.name; 
        this.schemas=Tools.toArray(data.schemas,MongoSchema);
    }
}