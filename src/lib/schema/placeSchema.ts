import Question from '../interfaces/questionType';

const PlaceSchema = [
    {
        type: "input",
        name: "xCoordinate",
        Message: "X Coordinate",
        validation: {
            type: 'number',
            required: true,
            range: {
                start: 0,
                end: 5
            }
        }
    },
    {
        type: "input",
        name: "yCoordinate",
        Message: "Y Coordinate",
        validation: {
            type: 'number',
            required: true,
            range: {
                start: 0,
                end: 5
            }
        }
    },
    {
        type: "input",
        name: "direction",
        Message: "Direction",
        validation: {
            type: 'string',
            required: true,
            enum: [
                'north',
                'east',
                'west',
                'south'
            ]
        }
    }
] as Question[] ;

export default PlaceSchema;