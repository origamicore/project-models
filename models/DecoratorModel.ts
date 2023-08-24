export default class DecoratorModel
{
    name:string;
    data:any;
    constructor(data:any)
    {
        if(!data)return;
        if(data.name)this.name=data.name;
        if(data.data)this.data=data.data;
    }
}