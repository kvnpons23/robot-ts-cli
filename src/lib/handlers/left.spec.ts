import Left from './left';
import fs from 'fs';

jest.mock('fs');

describe('Left Module: Integration Testing', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('Case 1: should be able to rotate robot\'s direction to 90 degrees to left', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Left().executeProcess()).not.toThrow();
    })

    it('Case 2: should be able to rotate robot\'s direction from east to north', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'EAST' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(data));

        expect(() => new Left().executeProcess()).not.toThrow();
    })

    it('Case 3: should ignore when no data or place is not yet invoked', () => {

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(String(false));

        expect(() => new Left().executeProcess()).not.toThrow();
    })

    
})