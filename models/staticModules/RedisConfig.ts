export default class RedisConfig
{
    connections:RedisConnection[]
    constructor(data:any)
    {
        Object.assign(this, data);
    }
}
export class RedisConnection
{
    context:number;
    port:number;
    host:string;
    db:number;
    constructor(data:any)
    {
        Object.assign(this, data);
    }
}