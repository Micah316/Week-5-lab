/** 
 * Represents a round shape with a radius and single center
 */
 
class Circle extends Object {
    static get PI () {return 3.14159;} 
/**
 * creates an instance of a circle class
 */
constructor (radius) {
    super();
    this.radius = radius; 
 }
 toString return `I am a circle. Look at me!`;
 }
}

let circle1 = new Circle(6);
//circle1.radius = 6;
let circle2 = new circle (10); 

let circles = [
    new Circle(1),
    new Circle(20),
    new Circle(30),
    new Circle(40), 
    new Circle(50),
];

