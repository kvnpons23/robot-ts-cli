interface IValidation {
    type: string,
    required: boolean,
    range?: {
        start: number | string | Date,
        end: number | string | Date
    },
    enum?: string[] | number[]
}

export default IValidation;