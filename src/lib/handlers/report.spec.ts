import Report from './report';
import fs from 'fs';

jest.mock('fs');

describe('Report Module: Integration Testing', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    })

    it('Case 1: should be able to rotate robot\'s direction to 90 degrees to left', () => {
        const data = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => true);
        const mockRead = jest.spyOn(fs, 'readFileSync');
        const mockConsole = jest.spyOn(console, 'log');
        mockRead.mockReturnValueOnce(JSON.stringify(data));

        new Report().executeProcess();

        expect(mockConsole).toHaveBeenCalledWith('OUTPUT: 1,1,NORTH');
    })

    it('Case 2: should ignore move when no data is set or place hasn\'t been invoked', () => {

        fs.existsSync = jest.fn(() => true);
        const mockRead = jest.spyOn(fs, 'readFileSync');
        mockRead.mockReturnValueOnce(JSON.stringify(false));

        expect(() => new Report().executeProcess()).not.toThrow();

    })
    
})