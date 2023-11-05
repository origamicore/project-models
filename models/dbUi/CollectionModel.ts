export default class CollectionModel
{
    name:string;
    constructor(data:{
        name:string;
    })
    {
        Object.assign(this,data);
    }
}
 