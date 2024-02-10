import { IPerson } from "../interfaces/IPerson";

export class Person implements IPerson {
    constructor(public name: string) {}
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
