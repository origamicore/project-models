export default class MongoCollectionModel
{
    name:string;
    sizeOnDisk:number;
    empty:boolean;
    constructor(data:{
        name:string;
        sizeOnDisk:number;
        empty:boolean; 
    })
    {
        Object.assign(this,data)
    }
}