import DecoratorModel from "../DecoratorModel";
import FunctionModel from "../manual/FunctionModel";
import PropertyModel from "./PropertyModel";

export default class EntityModel
{
    decorator:DecoratorModel;
    properies:PropertyModel[];
    functions:FunctionModel[]
}