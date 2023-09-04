export default class EndpointConfig
{
    connections:EndpointConnection[];
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}

export class EndpointConnection
{
    port:number;
    protocolType:'http'|'https';
    key:string;
    crt:string; 
    socketProtocol:string='echo-protocol';
    jwtConfig:JwtConfig;
    redisConfig:RedisSessionConfig;
    
    bindAddress:string;
    type:EndpointConnectionType;
    sessionManager:string;
    allowHeader:string;
    publicFolder:string[]=[];
    cors:string[]=[];
    limit:LimitModel;
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}

export class EndpointConnectionType
{
    static Soucket='socket';
    static Express='express';
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}
export class LimitModel
{
    bodyLimit:number=1;//MB
    urlLimit:number=1;//MB
    constructor(data:any)
    {
        Object.assign(this,data)
    }
}
export class RedisSessionConfig
{
    port:number=6379;
    host:string='localhost';
    db:number=0;
    secExpireTime:number=1000*60*60;
    public constructor(
        
        fields?: {
            host?: string,  
            db?: number, 
            port?: number, 
        }) { 
        if (fields) Object.assign(this, fields);
    }
}
export class JwtConfig
{
    privateKey:string='';
    publicKey:string='';
    algorithm:string='';
    secExpireTime:number=1000*60*60;
    public constructor(
        
        fields?: {
            privateKey?: string, 
            publicKey?: string, 
            algorithm?: string, 
            secExpireTime?: number, 
        }) { 
        if (fields) Object.assign(this, fields);
    }
}