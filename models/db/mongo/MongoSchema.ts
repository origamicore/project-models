export default class MongoSchema
{
    dbContext:string;
    type:string;
    name:string;
    collectionName:string;
    constructor(data:any)
    {
        Object.assign(this,data);
    }
}