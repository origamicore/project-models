export default class DbConnection
{
    name:string;
    host:string='localhost';
    port:number=27017;
    username:string;
    password:string;
    constructor(data:{
        name:string;
        host?:string;
        port?:number;
        username?:string;
        password?:string; 
    })
    {
        Object.assign(this,data);
    }
}