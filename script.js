// #60 Everything is an object.
// Primitives
// - NUmbers
// - Strings
// - Booleans
// - Undefined
// - Null

// Everything else...
// - Arrays
// - Functions
// - Objects
// - Dates
// - Wrappers for Numbers, Strings, Booleans
// "IS AN OBJECT"

// Object Oriented Paradigm
// -Object interacting with one another through methods and properties;
// -Used to store data, structure application into modules and keeping code clean.

// Constructor is like "class" in Ruby or HTML

// Inheritance in general

// Summary
// Every JS object has a prototype property, which makes inheritance possible in JS.
// The prototype property of an object is where we put methods and properties that we want other objects to inherit.
// The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of ALL instances that are created through it.
// When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. THis continues until the method is found: prototype chain.

// #61 Function Constructors
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

// Function constructors always have capital letter
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1946, 'retiree');

john.calculateAge();
mark.calculateAge();
console.log(john.lastName);
*/

//Object.create
/*
var personProto = {
  calculate: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1998;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/

// Primitives vs Objects
// Variable containing primitives actually hold that data inside of the variable itself. On object, the variable do not contain the object,but instead they contain a reference to the place in memory where the object is stored.
// A variable declared  as an object does not have a copy of the object, it just pointed at it.

/*
//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Each variable hold their copy of the data, they do not reference anything.

//objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/
//////////////////////////////////////////////

/*
// Functions are also objects in JS
// A function is an instance of the Object type.
// A function behaves like any other object.
// We can store functions in a variable.
// We can pass a function as an argument to another function.
// We can return a function from a function.
// These are first class function.

// Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el < 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

*/
///////////////////////////////////
/*
// Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    };
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    };
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

interviewQuestion('teacher')('Mark');

*/

/////////////////////////////////
// IIFE (Immediate Invoke Function Expression)

//This is function declaration.
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >=5);
}
game();
*/
/*
// This is IIFE.
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function(goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);

//It helps with obtain data privacy and not interfere the variable in global execution context.
*/

//////////////////////////////////////////////
// Closures
/*
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirement(66)(1990);
retirementGermany(1990);
retirementIceland(1990);
// An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
*/
/*
function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  };
}

interviewQuestion('teacher')('John');
*/

///////////////////////////////////////////////
// Lecture: Bind, call, and apply
/*
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        'Good ' +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' years old.'
      );
    } else if (style === 'friendly') {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          ' years old. Have a nice ' +
          timeOfDay +
          '.'
      );
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

//call method (method borrowing)
john.presentation.call(emily, 'friendly', 'afternoon');
//Hey! What's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon.
//apply method (can be used in array)
john.presentation.apply(emily, ['friendly', 'afternoon']);
//bind (create a copy of the function)

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}
var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);

*/
(function() {
  function Question(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
  }
  //from tutorial
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.choice.length; i++) {
      console.log(i + 1 + ') ' + this.choice[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans == this.answer) {
      alert('Correct!');
      sc = callback(true);
    } else {
      alert('Wrong.');
      sc = callback(false);
    }
    console.log(ans);
    this.displayScore(sc);
  };

  var question1 = new Question('Pick TRUE.', ['TRUE', 'FALSE'], 1);
  var question2 = new Question('Pick FALSE.', ['TRUE', 'FALSE'], 2);
  var question3 = new Question('Pick ME.', ['YOU', 'ME'], 2);
  var questionList = [question1, question2, question3];
  var checkLoop = true;

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('--------------');
  };
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScore = score();

  (function questionLoop() {
    if (checkLoop) {
      var randomQuestion = Math.floor(Math.random() * questionList.length);
      questionList[randomQuestion].displayQuestion();
      var promptAns = prompt(questionList[randomQuestion].question);
      if (promptAns == 'exit') {
        checkLoop = false;
      } else {
        questionList[randomQuestion].checkAnswer(promptAns, keepScore);
        questionLoop();
      }
    }
  })();
})();
