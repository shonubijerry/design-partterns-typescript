// Category Creational DP
// class person creates a blueprint for a single person
class Singleton {
  private static instance: Singleton;
  private randomNumber: any;
  private number: any;
  private size: any;

  private constructor(values: any){
    this.randomNumber = Math.random();
    this.number = values.number || 5;
    this.size = values.size || 10;
  }

  public static getInstance(values: any): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(values);
    }
    return Singleton.instance;
  }
}

// get instance of the Singleton
const config = Singleton.getInstance({ size: 8 });
console.log(config);

// get another instance of the Singleton
const config1 = Singleton.getInstance({ number: 8 });
console.log(config1);

// yet another instance of the Singleton
const config2 = Singleton.getInstance({ size: 7 });
console.log(config2);
