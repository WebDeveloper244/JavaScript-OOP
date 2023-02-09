// Object contain DRY method (Don't repeate your self) method Three important concept to understanding OOP concept
/* 
1 Object 
2 Class
3 Inhertance
 */

// What is Object??
/* 
   Every thing in world is Object.Object contain key and value let try with example
   we use Dot to caught the Property in object
*/

// let person = {}
let person = new Object()

person.Name = "Object",
person.func = function(){
  console.log('function call');
}

person.func()



let Employee = {
  Name:'Salman',
  Age : 21,
  JOb : `Full Stack Developer`,
  salary : 2000000,
  func :function(){ 
    return `${this.Name} ${this.cast}`
  }
}

Employee.cast = "Baloch"

console.log(Employee.func());

// What is Class??
/*
   YOu can say that class is like a blue print of house.with the help of class you can create multiple house.. for example we have multiple Employee of Developer then we use class
    let's try with example
*/

 class Employees {
  
 }



 