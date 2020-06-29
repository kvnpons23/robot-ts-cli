import IQuestion from '../interfaces/questionType'
import { IObject } from '../interfaces/objectType';

/**
 * module to parse inputs
 */
export default class SchemaParser {
    /**
     * method to parse input to their schema validation type
     * @param answers inputs from inquirer
     * @param schema command question schema
     */
    static parse(answers: IObject, schema: IQuestion[]): IObject {
        try {
            schema.map((attr) => {
                if (attr.validation.type === 'number') {
                    if (!attr.validation.required && !answers[attr.name]) {
                        return;
                    }

                    if (answers[attr.name] && isNaN(parseInt(answers[attr.name]))) {
                        throw { message: 'Not parsable to number' };
                    }

                    if(answers[attr.name]){
                        answers[attr.name] = parseInt(answers[attr.name])
                    }
                }
                return;
            })

            return answers;
        } catch (e) {
            throw e;
        }
    }
}