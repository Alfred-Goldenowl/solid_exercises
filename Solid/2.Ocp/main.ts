/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
class Shape {
    shapes: Shape[];
    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

    calculateArea(): number {
        let total = 0;
        this.shapes.forEach((shape) => {
            total += shape.calculateArea()
        });
        return total;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super([]);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    height: number
    width: number
    constructor(height: number, width: number) {
        super([]);
        this.height = height;
        this.width = width;

    }

    calculateArea(): number {
        return this.height * this.width;
    }
}
class Triangle extends Shape {
    length: number
    constructor(length: number) {
        super([]);
        this.length = length;
    }

    calculateArea(): number {
        return 0.5 * this.length * this.length;
    }
}


let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3)
];
const shapesInstance = new Shape(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/



/*=========== START PRACTICE 2 ===============*/
// enum EmployeeType {
//     FullTime,
//     PartTime,
//     Intern
// }

class Employee {
    constructor(public name: string) { }

    // calculateSalary(): number {
    //     switch (this.type) {
    //         case EmployeeType.FullTime:
    //             return 5000;
    //         case EmployeeType.PartTime:
    //             return 3000;
    //         case EmployeeType.Intern:
    //             return 1000;
    //         default:
    //             throw new Error("Unknown employee type");
    //     }
    // }
}

class EmployeeFullTime extends Employee{
    calculateSalary(): number {
        return 5000
    }
}

class EmployeePartTime extends Employee{
    calculateSalary(): number {
        return 3000
    }
}

class EmployeeIntern extends Employee{
    calculateSalary(): number {
        return 1000
    }
}

const fullTimeEmployee = new EmployeeFullTime("Alice");
console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`);

const internEmployee = new EmployeeIntern("Bob");
console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);
/*=========== END PRACTICE 2 ===============*/