let arr =[{
    "name":"Renad","height":119, "gender":"female", "mass":41, "eyecolor":"black"
  },{
    "name":"ayad","height":118, "gender":"male", "mass":85, "eyecolor":"blue"
  }
  ,{
    "name":"Reem","height":220, "gender":"female", "mass":120, "eyecolor":"blue"
  }
  ];

// 1)MAP
//Get array of objects with just name and height properties
//Get array of all first names
console.log("Get array of objects with just name and height properties");

const names=arr.map(function(array){
  return array.name+" , "+array.height;
})
console.log(names);

console.log("Get array of all first names");

const name=arr.map(function(array){
  return array.name;
})
console.log(name);

// 2)REDUCE
//Get total mass of all characters
//Get total number of characters in all the character names
console.log("total mass of all characters");

const total=arr.reduce(function(accumulator,currentvalue){
   return accumulator+currentvalue.mass
 },0)
 console.log(total);



 console.log("total number of characters in all the character names");

 let totalNumber = arr.reduce(((a) => a+1),0);
console.log(totalNumber)


// 3)FILTER
//Get characters with mass greater than 100
//Get all female characters

console.log("Get characters with mass greater than 100");

function filtermass(a) {

  return a.mass>100;
}
console.log(arr.filter(filtermass));

console.log("Get all female characters");

const fema=arr.filter(function(array){
  return array.gender=="female"
})
console.log(fema);


 //4)SORT
 //Sort by name
 //Sort by gender 
 console.log("Sort by name");


 const s=arr.sort(function (x, y) { 
    let a = x.name.toUpperCase(), 
    b = y.name.toUpperCase(); 
return a == b ? 0 : a > b ? 1 : -1; 
}); 
console.log(s);


 console.log("Sort by gender");
 const g=arr.sort(function (x, y) { 
    let a = x.gender.toUpperCase(), 
    b = y.gender.toUpperCase(); 
return a == b ? 0 : a > b ? 1 : -1; 
}); 
console.log(g);
 //5)EVERY
 //Does every character have blue eyes?
 //Is every character male?
 console.log("every character have blue eyes");

 function check(a) {

  return a.eyecolor=="blue";
}
console.log(arr.every(check));


 console.log("every character male");

 function checkmale(a) {

  return a.gender=="male";
}
console.log(arr.every(checkmale));



 //6)SOME
 //is there at least one male character?
 //Is there at least one character that has mass less than 50?
 console.log("there at least one male character");

 function checkmale2(a) {

    return a.gender=="male";
}
console.log(arr.some(checkmale2));

console.log("there at least one character that has mass less than 50");

function checkmass2(a) {

    return a.mass<50;
}
console.log(arr.some(checkmass2));