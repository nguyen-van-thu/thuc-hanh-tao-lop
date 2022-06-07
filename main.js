export class Instructor {

    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }

    // Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    // Base case static method
    static helloWorld() {
        console.log('Hi there');
    }

    // Static method
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }

}

let juniorInstructor = new Instructor({ 'name' : 'Thu' });
let seniorInstructor = new Instructor({ 'name' : 'khanh', "role" : "classroom" });

juniorInstructor.renderDetails(); // "thu - assistant"
seniorInstructor.renderDetails(); // "khanh - classroom"

Instructor.helloWorld();


console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);


console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);
