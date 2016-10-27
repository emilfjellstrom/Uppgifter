/*
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var godarry = arr1.concat(arr2);
document.write(godarry);
godarry.push("7");
document.write(godarry);
*/
/*
var monster = [
	{name:"a", id:5},
	{name:"b", id:7},
	{name:"c", id:2}
];

var arr = [-5,3,254,23];

function comparator(a,b){
	return a.id - b.id;
}

monster.sort(comparator);
document.write(monster);

*/
/*
	ary = [0,17,3,8,1,5];
	var holder = -1;
	var stop = 5;

	for (var counter = ary.length - 1; counter > 0; counter--) // running the length backwords
	{
		for (var n = 0; n < stop; n++)
		{
			if (ary[n] >= ary[n + 1]) // checks if the two elements are in the correct order
			{
				holder = ary[n + 1]; // holds element while other is moving to the left 
				ary[n + 1] = ary[n];
				ary[n] = holder; // brings the holder to the moved prostitution to the right
				n = n-2;	
			}
  		}
  	}
console.log(ary);
*/
/*
function numberMultiplier(number){
	return number * 2;
}
document.write(numberMultiplier(12));
*/
/*
function foo(){
	document.write("test") // läser ut test
}
foo("hej");
*/
/*
var a = foo(3);
document.write(a);

function foo(i){
	return i * i; // 3 * 3 = 9
}
*/
/*
var a = 5;

function foo(a){
	a++;
}
a += 2;
console.log(a); // a declareras alldrig å därför körs inte a++. svar 5+2=7
*/