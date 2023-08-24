export default class Tools
{
    static toArray<T>(data:any,cls: { new(data:any): T}):T[]
    {
        var arr=[]
        if(Array.isArray(data))
            for(var a of data)
            {
                arr.push(new cls(a))
            }
        return arr;
    }
}