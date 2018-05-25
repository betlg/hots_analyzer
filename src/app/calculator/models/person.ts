import {Child} from './child';

export class Person {
  children: any[];
  isWidow: boolean;

  constructor(isWidow: boolean) {
    this.isWidow = isWidow;
    this.children = [];
  }

  addChild(child: Child) {
    this.children.push(child);
  }

  calculateBenefit() {
    // Apply the rules and calculate the maximum bonus this person has access to
    return this._calculateWidowBenefit()
      + this._calculateNumberChildrenBenefit()
      + this._calculateAgeChildrenBenefit();
  }

  _calculateWidowBenefit() {
    return (this.isWidow) ? 20 : 0;
  }

  _calculateNumberChildrenBenefit() {
    let result = 0;
    const children = this.children.length;

    if (children > 0 && children <= 2) {
      result = 70;
    } else if (children >= 3 && children < 6) {
      result = 90;
    } else if (children >=6 && children < 32767 ) {
      result = 120;
    }

    return result;
  }

  _calculateAgeChildrenBenefit() {
    if (this.children.length === 0) { return 0; }
    return this.children.map(v => v.benefit()).reduce((a, b) => a + b);
  }
}
