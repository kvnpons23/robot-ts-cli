import IValidation from './validationType';

interface IQuestion {
    type:string,
    name:string,
    Message:string,
    validation: IValidation
}

export default IQuestion;