var userName = prompt('Hi! Thanks for visiting my About Me page !!! What is your name? ');
alert('Nice to meet you, ' + userName + '. I\'m going to ask you some questions about me. No pressure. Really. Make your best guess about me.');
console.log('The user\'s name is ' + userName);

//1st q
var response1 = prompt('Do I have pets?').toLowerCase();
console.log('Do I have pets? ' + response1);
var answer1 = 'yes';

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are correct, ' + userName + '! I have a lovely dog.');
} else {
  alert('Nope, I really do have a lovely dog.');
}

//2nd q
var response2 = prompt('Do I study in Code Fellows?').toLowerCase();
console.log('Do I study in Code Fellows? ' + response2);
var answer2 = 'yes';

if (response2 === answer2 || response2 === answer2[0]) {
  alert('You are correct, ' + userName + '! I start Code201 in May.');
} else {
  alert('Wrong! ' + userName + ', I start Code201 in May.');
}

//3rd q
var response3 = prompt('Did I graduate from college in Washington State?').toLowerCase();
console.log('Did I graduate from college in Washington State? ' + response3);
var answer3 = 'no';

if (response3 === answer3 || response3 === answer3[0]) {
  alert('You are correct, ' + userName + '! I graduated in Texas.');
} else {
  alert('Incorrect! ' + userName + ', I graduated in Texas.');
}

//4th q
var response4 = prompt('Do I like eating dessert?').toLowerCase();
console.log('Do I like eating dessert? ' + response4);
var answer4 = 'yes';

if (response4 === answer4 || response4 === answer4[0]) {
  alert('You are correct, ' + userName + '! Dessert makes my day bright!');
} else {
  alert('Wrong! ' + userName + ', please bring me a dessert with bubble tea later!');
}

//5th q
var response5 = prompt('Is Spurs my favorite NBA team?').toLowerCase();
console.log('Is Spurs my favorite NBA team? ' + response5);
var answer5 = 'yes';

if (response5 === answer5 || response5 === answer5[0]) {
  alert('You are correct, ' + userName + '! GO SPURS !!!');
} else {
  alert('Incorrect! ' + userName + ', Spurs is my favorite NBA team since college.');
}

//6th q
var answer6 = 10;
for(var i = 0; i < 4 && response6 !== answer6; i++) {
  var response6 = parseInt(prompt('How old is my lovely dog?'));
  console.log('How old is my lovely dog? ' + response6);

  if (response6 === answer6) {
    alert('You are correct, ' + userName + '! He is 10 years old!!!');
  } else if (response6 > answer6) {
    alert('Incorrect! ' + userName + ', He is younger than ' + response6 + '.');
  } else if (response6 < answer6) {
    alert('Incorrect! ' + userName + ', He is older than ' + response6 + '.');
  } else {
    alert('Please enter a number<1,2,3,4,5,6...>');
  }
}
