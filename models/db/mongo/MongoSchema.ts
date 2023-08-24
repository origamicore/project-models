export default class MongoSchema
{
    dbContext:string;
    type:string;
    name:string;
    collectionName:string;
    constructor(data:any)
    {
        if(!data)return;
        if(data.dbContext)this.dbContext=data.dbContext;
        if(data.type)this.type=data.type;
        if(data.name)this.name=data.name;
        if(data.collectionName)this.collectionName=data.collectionName;
    }
}