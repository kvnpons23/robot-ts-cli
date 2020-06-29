import PlaceSchema from './placeSchema';
import SchemaParser from './schemaParser';
import IQuestion from '../interfaces/questionType'

describe('Schema Parser: Unit Test', () => {
    test('Case 1: Should be able to parse input from args to schema types', () => {
        let input = { xCoordinate: '1', yCoordinate: '1', direction: 'north' }
        let expected = { xCoordinate: 1, yCoordinate: 1, direction: 'north' }
        expect(SchemaParser.parse(input, PlaceSchema)).toEqual(expected);
    })

    test('Case 2: Should be able to throw exception when non numeric string is suplied', () => {
        let input = { xCoordinate: 'asd', yCoordinate: 'asd', direction: 'north' }
        try{
            SchemaParser.parse(input, PlaceSchema)
        }catch(e){
            expect(e.message).toEqual('Not parsable to number');
        }
    })

    test('Case 3: Should nullable should be ignore from parse when no value', () => {
        const input = { sample: undefined }
        const schema = [{
            type: 'input',
            name: 'sample',
            Message: 'this is just a sample',
            validation: {
                type: 'number',
                required: false,
                enum: [1, 2, 3]
            }
        }] as IQuestion[];

        let result = SchemaParser.parse(input, schema);
        expect(result).toBe(input)
    })

    test('Case 3: Should nullable should be ignored from parse when no value', () => {
        const input = { sample: undefined }
        const schema = [{
            type: 'input',
            name: 'sample',
            Message: 'this is just a sample',
            validation: {
                type: 'number',
                required: false,
                enum: [1, 2, 3]
            }
        }] as IQuestion[];

        let result = SchemaParser.parse(input, schema);
        expect(result).toBe(input)
    })

    test('Case 4: Should nullable should be ignored from parse when no value and required', () => {
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

        let result = SchemaParser.parse(input, schema);
        expect(result).toBe(input)
    })

})