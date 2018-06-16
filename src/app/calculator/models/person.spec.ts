import {Person, WidowPerson} from './person';
import { Child } from './child';

describe('person', () => {
    it ('should get a benefit if it is widow', () => {
        const expectedAmount = 20;
        const person = new WidowPerson();

        const result = person.calculateBenefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should not get a benefit if it is not widow', () => {
        const expectedAmount = 0;
        const person = new Person();

        const result = person.calculateBenefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should be capable of adding new children', () => {
        const person = new Person();
        person.addChild(new Child(18));

        expect(person.addChild.length).toEqual(1);
    })
    it ('should get the minimum benefit if it has the minimum amount of children', () => {
        const expectedAmount = 70;
        const person = new Person();
        person.addChild(new Child(21));

        const result = person.calculateBenefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should get the second level benefit if it has the average amount of children', () => {
        const expectedAmount = 90;
        const person = new Person();
        person.addChild(new Child(21));
        person.addChild(new Child(20));
        person.addChild(new Child(19));

        const result = person.calculateBenefit();

        expect(result).toEqual(expectedAmount);
    });
    it ('should get the maximum benefit if it has more than the average amount of children', () => {
        const expectedAmount = 120;
        const person = new Person();
        person.addChild(new Child(21));
        person.addChild(new Child(20));
        person.addChild(new Child(19));
        person.addChild(new Child(4));
        person.addChild(new Child(3));
        person.addChild(new Child(2));
        person.addChild(new Child(1));

        const result = person.calculateBenefit();

        expect(result).toEqual(expectedAmount);
    });
});

