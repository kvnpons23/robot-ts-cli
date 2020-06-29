import Place from './place';
import fs from 'fs';

jest.mock('fs');

describe('Place Module: Integration Testing', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    })

    it('Case 1: should be able place robot\'s location', () => {
        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();

        let input = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }
        expect(() => new Place().executeLifecycle(input)).not.toThrow();
    })

    it('Case 2: should validate and handle error if such invalid input was given', () => {
        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();

        let input = { xCoordinate: 6, yCoordinate: 6, direction: 'asd' }
        expect(() => new Place().executeLifecycle(input)).not.toThrow();
    })
})