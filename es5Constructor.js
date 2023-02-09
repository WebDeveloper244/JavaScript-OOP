/*   
In ES5 We Use constructor function instead of Class.. let's try with example
*/

function Person(name,lname,a){
  this.firstName = name,
  this.lastName = lname,
  this.age = a,
  this.func =function(){
    return `My Name is ${this.firstName}`
  }
}

let person1 = new Person('salman','Baloch',21)
person1;
let person2 = new Person('Goku',"Vegita",30)
person2;