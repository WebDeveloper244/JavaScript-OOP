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

// let person = {}  Two method of creating objects
let person1 = new Object()

person1.Name = "Object",
person1.func = function(){
  console.log('function call');
}
person1.func();



let person2 = {
  Name:'Salman',
  Age : 21,
  JOb : `Full Stack Developer`,
  salary : 2000000,
  func :function(){ 
    return `${this.Name} ${this.cast}`
  }
}

person2.cast = "Baloch"

console.log(person2.func());

// What is Class??
/*
   YOu can say that class is like a blue print of house.with the help of class you can create multiple house.. for example we have multiple Employee of Developer then we use class
    let's try with example
*/

 class human {
  constructor(n,a){
    this.name = n,
    this.age = a
  }
  hello = function(){
   console.log('hello');
  }
  static good (){
     console.log(`call static function`);
  }
 }

 let human1 = new human('salman',21)

 human1;
 human1.hello()
//  staic function call with class name
 human.good()



 