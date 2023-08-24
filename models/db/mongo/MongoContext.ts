import MongoSchema from "./MongoSchema";

export default class MongoContext
{
    name:string;
    schemas:MongoSchema[]=[];
    
    constructor(data:any)
    {
        Object.assign(this,data);
    }
}