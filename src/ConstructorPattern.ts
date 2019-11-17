// Category Creational DP
// class person creates a blueprint for a single person
class Person {
  name: string;
  age: number;
  isDeveloper: boolean;

  /**
   * initializes a person object with basic details
   * @param {string} name
   * @param {number} age
   * @param {boolean} isDeveloper
   * @returns {Person} Person object
   */
  constructor(name: string, age: number, isDeveloper: boolean = false) {
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }

  writesCode(): void {
    console.log(
      this.isDeveloper
        ? `${this.name} does write code`
        : `${this.name} does not write code`
    );
  }
}

// creates an instance of a person with initial properties
const person = new Person("Korey", 27, true);

// creates an instance of a person with initial properties
const person2 = new Person("Bukky", 25);

// calls a method of the person
person.writesCode();
person2.writesCode();
