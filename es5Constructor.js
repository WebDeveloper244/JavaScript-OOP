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



//--------------------->> Proto-Type

// What is ProtoType??
/*  
  protoType is just like a container which contain bydefault methods and every object bydefault has its own prototype
*/

let person3 = new Object()
console.log(person3);
// In person3 1 protoType will create


function person4(fname){
    this.name = fname
}
let person5 = new person4('Gogeta');
person5;
// In person5 2 protoType will create one is come from constructor and second is come from Object By-Defalut


// ----------------------------->> Methods in Proto-Type 

/*
   we creating all methods in protoType coz all method copy from constructor and paste in objects so it dosnot implement DRY method thats why we create method in prototype
*/

function CarModel (Name,Color,Price){
   this.carName = Name,
   this.carColor = Color,
   this.Price = Price
}

CarModel.prototype.model = function(){
    return `Model of Lamborghini is 2023`
}

let car1 = new CarModel('Lamborghini',22000000,'Orange')
console.log(car1.model());