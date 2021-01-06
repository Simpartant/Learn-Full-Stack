let person = {name:"Son", age:12, city:"TPHCM"};
    
let myName = JSON.stringify(person.name);
let myAge = JSON.stringify(person.age);
let myCity = JSON.stringify(person.city);

document.getElementById("name").innerHTML = "My name is "+ myName;
document.getElementById("age").innerHTML = "I'm " +myAge;
document.getElementById("city").innerHTML = myCity;