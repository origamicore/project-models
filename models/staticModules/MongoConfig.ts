export default class MongoConfig
{
    connections:MongoConnection[];
    constructor(data:any)
    {
        Object.assign(this, data);
    }
}

export  class MongoConnection
{
    name:string='';
    host:string='localhost';
    username:string='';
    password:string='';
    database:string='';
    port:number=27017; 
    backup:BackupModel;
    public constructor(
        fields?: {
            name?: string, 
            host?: string, 
            username?: string, 
            password?: string, 
            database?: string,  
            port?: number,  
            backup?:BackupModel
        }) {
        if (fields) Object.assign(this, fields);
    }
}

export  class BackupModel
{ 
    path:string='';
    tables:string='';
    secPeriod:number=0;
    public constructor(
        fields?: {
            path?: string,
            tables?: string, 
            secPeriod?: number, 
        }) {
        if (fields) Object.assign(this, fields);
    }
}