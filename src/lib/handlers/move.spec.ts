import Move from './move';
import fs from 'fs';

jest.mock('fs');

describe('Move Module: Integration Testing', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('Case 1: should be able to move robot\'s location towards north', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 2: should be able to move robot\'s location towards east', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'EAST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 3: should be able to move robot\'s location towards south', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'SOUTH' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 4: should be able to move robot\'s location towards west', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'WEST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 5: should ignore move when no data is set or place hasn\'t been invoked', () => {

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(String(false))

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 6: should ignore move when no the next coordinate is of the table area', () => {
        const data = { xCoordinate: 0, yCoordinate: 1, direction: 'WEST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data))

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 6: should ignore move when no the next coordinate is of the table area', () => {
        const data = { xCoordinate: 0, yCoordinate: 1, direction: 'WEST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data))

        expect(() => new Move().executeProcess()).not.toThrow();
    })

    it('Case 7: should handle error when thrown', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'WEST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn(() => { throw Error('error') });
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data))

        expect(() => new Move().executeProcess()).not.toThrow();
    })
})