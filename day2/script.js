// let message;
// console.log(message);
// message="hello fellow friends"
// console.log(message);


// let num = 123.456;
// console.log(num.toFixed(2));
// console.log(num.toString());
// console.log(parseInt("123.45"));
// console.log(parseFloat("123.45"));
// console.log(Number.isInteger(123));
// console.log(Number.isNaN(NaN));

// let str = "Hello World";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(0));
// console.log(str.charAt(-1));
// console.log(str.substring(0, 5));
// console.log(str.slice(0, 5));
// console.log(str.split(" "));
// console.log(" The space should go     ".trim());
// console.log(str.includes("World"));
// console.log(str.indexOf("World"));

// let sponsors = {
//     name: "Techaxis",
//     location: "Kumaripati",
//   };  
//   console.log(sponsors.name);
//   console.log(sponsors.location);
//   console.log(sponsors["location"]);



// //Objects
// let sponsors = {
//   name: "Techaxis",
//   location: "Kumaripati",
// };

// console.log(sponsors.name);
// console.log(sponsors["location"]);

// //Updating Objects
// sponsors.isAmazing = true;
// console.log(sponsors.isAmazing);

// console.log(sponsors);

// delete sponsors.location;
// console.log(sponsors);

// //Using Objects
// function makeUser(name, age) {
//   return { name: name, age: age };
// }

// let user = makeUser("John Doe", 30);
// console.log(user);

// //Property Existence Test using "in" operator
// console.log("name" in user); // true
// console.log("email" in user); // false

// //Iterating over properties of objects
// let softwarefellow = { name: "softwarefellow", age: 28, "likes to code": true };

// for (let key in softwarefellow) {
//   console.log(key, softwarefellow[key]); // name softwarefellow, age 28, likes to code true
// }

// //this in methods
// let sponsor = { name: "Software", age: 28 };

// sponsor.sayHi = function () {
//   console.log("Hello, my name is" + this.name);
// };

// sponsor.sayHi(); // Hello, my name is Software

// //why is this used
// let sponsor2 = { name: "JobAXL", age: 30 };

// sponsor2.sayHello = function () {
//   console.log("Hello I am, " + sponsor2.name);
// };

// sponsor2.sayHello(); // Hello I am, JobAXL

// let organization = sponsor2;
// sponsor2 = null;

// organization.sayHello();



// let fruit = ["Apple", "Orange", "Plum"];
// console.log(fruit); // ['Apple', 'Orange', 'Plum']
// console.log(fruit[0]);

// //Push and Pop
// fruit.push("Mango");
// console.log(fruit); // ['Apple', 'Orange', 'Plum', 'Mango']
// let last = fruit.pop();
// console.log(fruit); // ['Apple', 'Orange', 'Plum']
// console.log(last);



// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((x) => x + 2);
// console.log(numbers);
// console.log(output);


// let filtered = numbers.filter((x) => x % 2 === 0);
// console.log(filtered);
// // console.log(arr);


// let yourScore = 95;

// if (yourScore >= 90) {
//   console.log("Your grade is A");
// } else if (yourScore >= 80) {
//   console.log("Your grade is B");
// } else if (yourScore >= 70) {
//   console.log("Your grade is C");
// } else if (yourScore >= 60) {
//   console.log("Your grade is D");
// } else {
//   console.log("Your grade is F");
// }

// let scholarShip = yourScore >= 90 ? "Yes" : "No";
// console.log(scholarShip);


// let trafficLight = "red";

// switch (trafficLight) {
//   case "green":
//     console.log("Drive safely");
//     break;
//   case "yellow":
//     console.log("Slow down");
//     break;
//   case "red":
//     console.log("Stop immediately");
//     break;
//   default:
//     console.log("Invalid traffic light color");
// }



// let colors = ["red", "blue", "green"];

// for (let color of colors) {
//   console.log(color);
// }

// let people = ["John", "Harl", "Ram"];

// for (let id in people) {
// console.log(id);
//   console.log(people[id]);
// }


/******FUNCTIONS***********/
// function product(a,b){
//     return a*b;
// }
// console.log(product(2,3));

// function hi() {
//     console.log("Hi");
//   }
  
//   setTimeout(hi, 5000);
//   console.log(hi());
//   console.log(typeof function hi() {});

// promise hi() {
//     console.log("Hi");
//   }
  
//   setTimeout(hi, 2000);
//   console.log(hi());
//   console.log(typeof promise hi() {});


// async function displayDataAsync() {
//     try {
//       const response = await fetch("httpss://jsonplaceholder.typicode.com/posts");
//       const data = await response.json();
//       console.log(data);
//     } 
//   }
  
//   displayDataAsync();
  
  

// DOM MANIPULATION//
