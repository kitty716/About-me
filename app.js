var correctNum = 0;
var userName = prompt('Hi! Thanks for visiting my About Me page !!! What is your name? ');
alert('Nice to meet you, ' + userName + '. I\'m going to ask you some questions about me. No pressure. Really. Make your best guess about me.');
console.log('The user\'s name is ' + userName);

//1st q
var response1 = prompt('Do I have pets?').toLowerCase();
console.log('Do I have pets? ' + response1);
var answer1 = 'yes';

function question1 () {
  if (response1 === answer1 || response1 === answer1[0]) {
    alert('You are correct, ' + userName + '! I have a lovely dog.');
    correctNum++;
  } else {
    alert('Nope, I really do have a lovely dog.');
  }
}

question1();

//2nd q
var response2 = prompt('Do I study in Code Fellows?').toLowerCase();
console.log('Do I study in Code Fellows? ' + response2);
var answer2 = 'yes';

function question2() {
  if (response2 === answer2 || response2 === answer2[0]) {
    alert('You are correct, ' + userName + '! I start Code201 in May.');
    correctNum++;
  } else {
    alert('Wrong! ' + userName + ', I start Code201 in May.');
  }
}

question2();

//3rd q
var response3 = prompt('Did I graduate from college in Washington State?').toLowerCase();
console.log('Did I graduate from college in Washington State? ' + response3);
var answer3 = 'no';

function question3() {
  if (response3 === answer3 || response3 === answer3[0]) {
    alert('You are correct, ' + userName + '! I graduated in Texas.');
    correctNum++;
  } else {
    alert('Incorrect! ' + userName + ', I graduated in Texas.');
  }
}

question3();

//4th q
var response4 = prompt('Do I like eating dessert?').toLowerCase();
console.log('Do I like eating dessert? ' + response4);
var answer4 = 'yes';

function question4() {
  if (response4 === answer4 || response4 === answer4[0]) {
    alert('You are correct, ' + userName + '! Dessert makes my day bright!');
    correctNum++;
  } else {
    alert('Wrong! ' + userName + ', please bring me a dessert with bubble tea later!');
  }
}

question4();

//5th q
var response5 = prompt('Is Spurs my favorite NBA team?').toLowerCase();
console.log('Is Spurs my favorite NBA team? ' + response5);
var answer5 = 'yes';

function question5() {
  if (response5 === answer5 || response5 === answer5[0]) {
    alert('You are correct, ' + userName + '! GO SPURS !!!');
    correctNum++;
  } else {
    alert('Incorrect! ' + userName + ', Spurs is my favorite NBA team since college.');
  }
}

question5();

//6th q
var answer6 = 10;
for(var i = 0; i < 4 && response6 !== answer6; i++) {
  var response6 = parseInt(prompt('How old is my lovely dog?'));
  console.log('How old is my lovely dog? ' + response6);
  if (response6 === answer6) {
    alert('You are correct, ' + userName + '! He is 10 years old!!!');
    correctNum++;
  } else if (response6 > answer6) {
    alert('Incorrect! ' + userName + ', He is younger than ' + response6 + '.');
  } else if (response6 < answer6) {
    alert('Incorrect! ' + userName + ', He is older than ' + response6 + '.');
  } else {
    alert('Please enter a number<1,2,3,4,5,6...>');
    i--;
  }
}
//7th q
var answer7 = ['Texas', 'California', 'Oregon'];
var correct = false;
var response7 = prompt('Can you guess a state that I have lived in besides Washington? You have total of 6 tries to get it correct! Please DO NOT enter State Abbreviation.').toLowerCase();

for (var i = 0; i < 6 && correct === false; i++) {
  for (var counterIndex = 0; counterIndex < answer7.length; counterIndex++) {
    if (response7 === answer7[counterIndex].toLowerCase()) {
      alert( userName + ',you are correct! ' + 'I have lived in ' + answer7 + '!!!');
      correct = true;
      correctNum++;
      break;
    }
  }
  if (correct === false && i !== 5) {
    response7 = prompt('Incorrect! ' + userName + 'Can you guess a state that I have lived in besides Washington? You have ' + ( 5 - i ) + ' tries left.').toLowerCase();
  }
}
if (correct === false) {
  alert('Incorrect! ' + userName + ', I have lived in ' + answer7 + '!');
}
if (correctNum === 7) {
  alert( userName + ', you are doing great! You got ' + correctNum + ' out of 7 questions correct!');
} else {
  alert('You got ' + correctNum + ' out of 7 questions correct, ' + userName + '!' + ' Better luck next time.');
}
