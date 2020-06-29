import { IObject } from '../interfaces/objectType'
import IQuestion from '../interfaces/questionType';
import IValidation from '../interfaces/validationType';
import IValidationResult from '../interfaces/validationResultType';
export default class InputValidator {

    static checkRequired = (answer: any, validation: IValidation): boolean => {
        return answer?.toString() && validation.required;
    } 
    static checkRange = (answer: any, validation: IValidation): boolean => {
        // only number range is supported for now
        if (validation.range && validation.type === 'number') {
            const { start, end } = validation.range;

            if (answer >= start && answer <= end) {
                return true
            }
            return false
        }
        return true;
    }
    static checkEnum = (answer: any, validation: IValidation): boolean => {
        if (validation.enum) {
            let validationEnum = validation.enum;
            if (typeof answer === 'string') {
                return Boolean((validationEnum as string[])
                    .find(x => x.toLowerCase() === answer.toLowerCase()));
            }
            return (validationEnum as number[]).includes(answer)
        }
        return true;
    }

    static validateAttribute(name: string, answer: any, validation: IValidation)
        : IValidationResult | undefined {

        if (!this.checkRequired(answer, validation)) {
            return { name, message: `${name} is required.` } as IValidationResult
        }

        if (!this.checkRange(answer, validation)) {
            return { name, message: `${name} is out of expected range.` } as IValidationResult
        }

        if (!this.checkEnum(answer, validation)) {
            return { name, message: `${name} is not an acceptable value.` } as IValidationResult
        }

    }

    static validate(answers: IObject, schema: IQuestion[]) {
        let validationResult: IValidationResult[] = [];
        schema.forEach(attr => {
            const result = this.validateAttribute(attr.name, answers[attr.name], attr.validation)
            if (result) {
                validationResult.push(result);
            }
        })
        
        if (validationResult.length > 0) {
            throw { message: validationResult };
        }
    }
}