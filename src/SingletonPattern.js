// Category Creational DP
// class person creates a blueprint for a single person
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.prototype.initializeConfig = function (values) {
        this.randomNumber = Math.random();
        this.number = values.number || 5;
        this.size = values.size || 10;
        return {
            randomNumber: this.randomNumber,
            number: this.number,
            size: this.size
        };
    };
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
// creates an instance of a car
var config = Singleton.getInstance();
console.log(config.initializeConfig({ size: 8 }));
var config1 = Singleton.getInstance();
console.log(config.initializeConfig({ size: 7 }));
var config2 = Singleton.getInstance();
console.log(config2.initializeConfig({ number: 8 }));
