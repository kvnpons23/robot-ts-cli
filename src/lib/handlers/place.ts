import CycleBase from '../cycleBase';
import { IObject } from '../interfaces/objectType';
import SchemaParser from '../schema/schemaParser'
import PlaceSchema from '../schema/placeSchema';
import Cache from '../db/cache';
import InputValidator from '../validator/inputValidator';

export default class Place extends CycleBase{
    onReceive(answers?: IObject): any{
        return SchemaParser.parse(answers!,PlaceSchema)!;
    }

    onValidate(answers?: IObject): any {
        InputValidator.validate(answers!,PlaceSchema);
        return answers;
    }
    
    process(answers?: IObject): void {
        answers!.direction = (answers!.direction as string).toUpperCase();
        Cache.set(answers!);
    }
    
}