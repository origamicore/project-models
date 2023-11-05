export default class CollectionIndex
{
    v:number;
    name:string;
    key:any;
    constructor(data:{
        v:number;
        name:string;
        key:any;
    })
    {
        Object.assign(this,data);
    }
}

