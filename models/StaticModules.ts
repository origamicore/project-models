export default class StaticModule
{
    enable:boolean=false;
    name:string;
    config:string;
    constructor(data?:any)
    {
        if(!data)return;
        if(data.enable)this.enable=data.enable
        if(data.name)this.name=data.name
        if(data.config)this.config=data.config
    }
}