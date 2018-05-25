import {Component} from '@angular/core';
import {Person} from './models/person';
import {Child} from './models/child';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {
  person: Person;

  widowItems = [
    {value: true, text: 'Si'},
    {value: false, text: 'No'}
  ];

  isWidow = false;
  showAddChild = false;
  ages = [];

  benefit = 0;

  constructor() {
    this.person = new Person(this.isWidow);
    this.ages = Array.from(Array(20).keys());
  }

  public calculateBenefit(isWidow: boolean) {
    this.isWidow = isWidow;
    this.person.isWidow = isWidow;
    this.benefit = this.person.calculateBenefit();
  }

  public removeChildren() {
    this.person.children = [];
    this.benefit = this.person.calculateBenefit();
  }

  public addChild(age: number) {
    this.person.addChild(new Child(age));
    this.showAddChild = false;
    this.benefit = this.person.calculateBenefit();
  }

  public resetAll() {
    this.isWidow = false;
    this.benefit = 0;
    this.person = new Person(this.isWidow);
  }

}
