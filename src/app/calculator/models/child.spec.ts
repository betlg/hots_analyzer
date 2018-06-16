import {Child} from './child';

describe('child', () => {
    it ('should get a benefit if is within the allowed age range', () => {
        const expectedAmount = 10;
        const child = new Child(8);

        const result = child.benefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should not get a benefit if it is less than the permitted age', () => {
        const expectedAmount = 0;
        const child = new Child(3);

        const result = child.benefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should not get a benefit if it is older than the permitted age', () => {
        const expectedAmount = 0;
        const child = new Child(21);

        const result = child.benefit();

        expect(result).toEqual(expectedAmount);
    });
});

