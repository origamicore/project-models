import Tools from "../../../services/Tools"; 
import MongoCollection from "./MongoCollection";

export default class MongoDatabase
{
    name:string;
    schemas:MongoCollection[]=[];
    
    constructor(data:any)
    {
        if(!data)return;
        if(data.name)this.name=data.name; 
        this.schemas=Tools.toArray(data.schemas,MongoCollection);
    }
}