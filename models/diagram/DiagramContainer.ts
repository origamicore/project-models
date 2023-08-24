import ContainerModel, { ContainerType } from "./ContainerModel";
import IfCondition from "./conditions/IfCondition";
import ForLoop from "./loops/ForLoop";
import ForeachLoop from "./loops/ForeachLoop";
import WhileLoop from "./loops/WhileLoop";
import TryModel from "./other/TryModel";
import VariableModel from "./other/VariableModel";

export default class DiagramContainer
{
    models: ContainerModel[];
    constructor(data:any)
    {
        if(!data)return;
        this.models=[]
        if(data.models)
        {
            for(let model of data.models)
            {
                switch(model.type)
                {
                    case(ContainerType.If):this.models.push(new IfCondition(model)); 
                    case(ContainerType.Foreach):this.models.push(new ForeachLoop(model)); 
                    case(ContainerType.For):this.models.push(new ForLoop(model)); 
                    case(ContainerType.While):this.models.push(new WhileLoop(model)); 
                    case(ContainerType.Try):this.models.push(new TryModel(model)); 
                    case(ContainerType.Variable):this.models.push(new VariableModel(model)); 
                } 
            } 
        } 
    }
}