export default class StaticModule
{
    enable:boolean=false;
    name:string;
    config:string;
    constructor(data:{
        name:string;
        config:string;
    })
    {
        Object.assign(this,data)
    }
}