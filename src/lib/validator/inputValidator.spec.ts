import InputValidator from './inputValidator';
import PlaceSchema from '../schema/placeSchema';
import IQuestion from '../interfaces/questionType'

describe('InputValidator Module: Unit Test', () => {
    test('Case 1: Sould be able to pass if data is valid', () => {
        const input = { xCoordinate: 1, yCoordinate: 1, direction: 'north' }
        expect(() => InputValidator.validate(input, PlaceSchema)).not.toThrow();
    })

    test('Case 2: Sould be able to validate invalid fields', () => {
        const input = { xCoordinate: 6, yCoordinate: 6, direction: 'asd' }
        try {
            InputValidator.validate(input, PlaceSchema);
        } catch (e) {
            expect(e.message).toEqual([{ "message": "xCoordinate is out of expected range.", "name": "xCoordinate" }, { "message": "yCoordinate is out of expected range.", "name": "yCoordinate" }, { "message": "direction is not an acceptable value.", "name": "direction" }]);
        }
    })

    test('Case 3: Sould be able to validate numeric enum', () => {
        const input = { sample: 1 }
        const schema = [{
            type: 'input',
            name: 'sample',
            Message: 'this is just a sample',
            validation: {
                type: 'number',
                required: true,
                enum: [1, 2, 3]
            }
        }] as IQuestion[];

        expect(()=> InputValidator.validate(input, schema)).not.toThrow();
    })

    test('Case 4: Sould be able to validate when no input', () => {
        const input = { sample: undefined }
        const schema = [{
            type: 'input',
            name: 'sample',
            Message: 'this is just a sample',
            validation: {
                type: 'number',
                required: true,
                enum: [1, 2, 3]
            }
        }] as IQuestion[];

        try{
            InputValidator.validate(input, schema)
        }catch(e){
            expect(e.message).toEqual([{"message": "sample is required.", "name": "sample"}])
        }
    })
})