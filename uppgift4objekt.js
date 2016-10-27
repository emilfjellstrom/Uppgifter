var obj = {
	name: "Emil",
	age: 18,
	height: 185
};

function Person(name, age){
	this.name = name;
	this.age = age;
	this.getName = function(){
		console.log(this.name, this.age, this.title)
	}
}
Person.prototype.getName = function(){
	console.log(this.name);
};

var person1 = new Person("Emil", 18);
var person2 = new Person("Hej", 19);

function Employee(name, age, title){
	this.name = name;
	this.age = age;
	this.title = title;
}
Employee.prototype = new Person();
var emp1 = new Employee("lars", 60, "Teacher");

emp1.getName();

person1.getName();
person2.getName();

console.log(person1);
console.log(person2);