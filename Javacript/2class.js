class Human{
    constructor(){
        this.gender="Male";
    }
    printGender(){
        console.log(this.gender);
    }
}
class Person extends Human{
    constructor(){
        super(); //coz we are extending supr class.
        this.name="Amlendra";
        //this.gender="female";
    }
    printName=()=>{
        console.log(this.name);
    }
}
const person=new Person();
person.printName();
person.printGender();