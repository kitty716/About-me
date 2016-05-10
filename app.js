var userName = prompt('Hi! Thanks for visiting my About Me page !!! What is your name?');
alert('Nice to meet you, ' + userName + '. I\'m going to ask you some questions about me. No pressure. Really. Make your best guess.');
console.log('The user\'s name is ' + userName);

var response1 = prompt('Do I have 3 cats?').toLowerCase();
var answer1 = 'yes';

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You are correct, ' + userName + '! My cats are Buddy, Alistair, and Trillian');
} else {
  alert('Nope, I really do have 3 cats.');
}
