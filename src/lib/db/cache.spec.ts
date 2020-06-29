import fs from 'fs';
import Cache from './cache';

jest.mock('fs')

describe('Cache Module: Unit Test', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    })
    
    test('Case 1: should be able to set file', () => {
        let expected = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => true);
        fs.writeFileSync = jest.fn();

        expect(Cache.set(expected)).toBe(true);
    })

    test('Case 2: should be able to create directory if not existing', () => {
        let expected = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => false);
        fs.mkdirSync = jest.fn();
        fs.writeFileSync = jest.fn();

        expect(Cache.set(expected)).toBe(true);
    })

    test('Case 3: should be able to catch if error is thrown', () => {
        let expected = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => false);
        fs.mkdirSync = jest.fn();
        fs.writeFileSync = jest.fn(() => { throw Error('error') });

        try {
            Cache.set(expected)
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })

    test('Case 4: should be able to get file', () => {
        let expected = { xCoordinate: 1, yCoordinate: 1, direction: 'NORTH' }

        fs.existsSync = jest.fn(() => true);
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockReturnValueOnce(JSON.stringify(expected));

        expect(Cache.get()).toEqual(expected);
    })

    test('Case 5: should return when json file is not existing', () => {

        fs.existsSync = jest.fn(() => false);
        expect(Cache.get()).toBeUndefined();
    })

    test('Case 6: should be able to catch when an error is thrown', () => {

        fs.existsSync = jest.fn(() => true);
        const mock = jest.spyOn(fs, 'readFileSync');
        mock.mockImplementation(() => { throw Error('error') });

        try {
            Cache.get();
        } catch (e) {
            expect(e.message).toBe('error');
        }
    })

})