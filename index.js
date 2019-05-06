/* 
Strings, Numbers, Arrays, Booleans, Object

Javascript -> Object Oriented -- Everything is pretty much based on objects

Promise -> Object

*/

// String <-- constructor

var anotherStr = String('another string');

// Constructor --- The name of the constructor function is capitalized
function Goof(name, age, eye_color) {
  // console.log(name, age, eye_color);
  this.name = name;
  this.age = age;
  this.eye_color = eye_color;
}

var goofs = [
  // {name: 'JD', age: 39},
  // {name: 'Sarah', age: 35},
  // {name: 'Bob', age: 99}
];

goofs.push(new Goof('JD', 39, 'grey'));
goofs.push(new Goof('Sarah', 35, 'blue'));

// console.log(goofs[1].name);

// for (var i = 0; i < goofs.length; i++) {
//   console.log(goofs[i].name);
// }



for (var i in goofs) {
  // console.log(goofs[i].name);
}




// console.log(jd);

// console.log(anotherStr);

var str = 'Some string'; // String (length, )
var age = 39;
var person = {
  name: 'JD',
  age: 39
};

for (var prop in person) {
  // console.log(person[prop]);
}

// console.log(person['name']);

// console.log(person.name);

// console.log(str.length);


var axios = require('axios');

// function doSomething() {
//   return new Promise(function (resolve, reject) {
//     axios.get('http://api.tvmaze.com/search/showsasdf?q=batman')
//       .then(function (res) {
//         resolve(res.data);


//       }).catch(function (err) { reject(err) });
//   });
// }

// Async/Await uses Promises -- simplifies the usage

async function doSomething() {
  var result = await axios.get('http://api.tvmaze.com/search/shows?q=batman');

  return result;
}

function test() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('all done');
    }, 3000);
  });
}


async function anotherFunc() {
  // did some stuff

  var result = await test();


  return result;
}

// var cool = anotherFunc();

// cool.then(function (data) {
//   console.log(data);
// })



// var promiseObj = doSomething();

// console.log(promiseObj);

// val <-- promise object that has properties we can use
// promiseObj
//   .then(function (res) {
//     console.log(res.data);
//   })
//   .then(function () {
//     console.log('2nd thing');
//   })
//   .catch(function (err) {
//     console.log('our error -->>>>', err);
//   });


// console.log(val);









// Recursion --> A function that calls itself until a condition is met

function awesome(num) {
  console.log(String.fromCharCode(num)); // 'A' 'B'

  if (num < 90) {
    awesome(num + 1);
  }

  // num++;
  // if (num < 10) {
  //   awesome(num);
  // }
}

// awesome(65);







// sameOld = 'something else';
// resist = 'changed';

// console.log(resist, sameOld);


// const count = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let globalVar = 'global';

// function blah() {
//   let result = 0;

//   // write a bunch of code that uses the let above
// }


function mySwitch(num) {

  // if (num === 3 ) {

  // } else if ( num === 5 ) {

  // } else if ( num === 15 ) {

  // }


  switch (num) {
    case 3:
      if (num > 2 && num < 5) {
        console.log('match made!');
      }
      break;
    case 15:
      console.log('again, nope');
      break;
    case 5:
      console.log('yes, correct!');
      break;
    default:
      console.log('this number is not a match');
  }
}

// mySwitch(3);









// ES6 ==> Just some new cool stuff/features in Javascript

var myVar = 'test'; // Hoisted scope --> will be hoisted or placed at the top of your code before anything is ran

const resist = 'constant';
let sameOld = 'same old stuff';


const myFunc = str => {
  var test = 'blah';
  console.log(test);
  console.log(str);
}

// myFunc('some string');


var anotherData = {
  age: 11
}

let data = {
  name: 'JD',
  age: 39,
  haveBirthday: function () {
    // var self = this;

    const increase = () => {
      const oneMore = () => {
        console.log(this.name);
      }

      oneMore();
      this.age++;
    };

    increase();

    console.log(this.age);
  }


  // haveBirthday: function () {
  //   // var self = this;

  //   var increase = function () {
  //     this.age++;
  //   }.bind(this);

  //   increase();

  //   console.log(this.age);
  // }
}
// data.haveBirthday();

// console.log(anotherData.age);

// function() {

// }

// var test = function() {

// };

// test();



// function test(someString) {
//   console.log(someString);
// }

// test('some string');








function Person(age) {
  this.age = age;
}

Person.prototype.getAge = function () {
  console.log(this.age);
}

let jd = new Person(35);
let sarah = new Person(20);
jd.getAge();
sarah.getAge();

// this is bad ==> Promise.prototype.then = function() {

// }