// Category Creational DP
// class person creates a blueprint for a single person
class Vehicle {
  manufacturer: any[] = [];

  addModel(name: string): void {
    this.manufacturer.push(name);
  }

  removeModel(name: string) {
    const index = this.manufacturer.indexOf(name);
    if (index >= 0) {
      this.manufacturer.splice(index, 1);
    }
  }

  listModels(){
    console.log(this.manufacturer);
  }
}

// creates an instance of a car
const toyota = new Vehicle();

toyota.addModel('corolla');
toyota.addModel('camrey');
toyota.addModel('avalon');
toyota.listModels();

toyota.removeModel('avalon');

toyota.listModels();
