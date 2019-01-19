module objects { 
    
}
abstract class Person  { 

    //private instance variables
    private _age: number;
    private _name: string;

    //public properties
    get name(): string { 
        return this._name;
    }
    set name(newName: string) { 
        this._name = newName;
    }
    get age(): number { 
        return this._age;
    }
    set age(newAge: number) { 
        this._age = newAge;
    }

    constructor(age: number,name:string) {
        this._age = age;
        this._name = name;

     }

//private methods
//public methods
  /*  public sayHello(): void{ 
    console.log(`%c ${this.name} says hello!`,
     "font-size: 20px;color: blue;font-weight:italic;");
}*/
}
class student extends Person {
    //private 
    private _stuID: string;
    //public
    get studId(): string {
        return this._stuID;
    }
    set studId(newId: string) {
        this._stuID = newId;
    }
    //contsructor
    constructor(age: number, name: string, studId: string) { 
        super(age,name);
    }
    public studies(): void {
        console.log(`%c ${this.name} is studying and has id of ${this._stuID}`,
        "font-size: 20px;color: green;font-weight:italic;");

    }
}
const Student1 = new objects.student(30,"komal","300926834");

Student1.studies();

/*const person = new Person(12, "Komal");
person.sayHello();*/