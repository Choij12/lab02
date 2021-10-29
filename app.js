'use strict';

function getUserName(){
  let userName = prompt('Please enter your name!');
  console.log(userName);
  if(userName === 'Jacob'){
    alert('Welcome to my site ' + userName);
  } else {
    alert('Welcome to my site ' + userName);
  }
  return userName;
}

getUserName();

function question6(){
  let userAnswerNumber;

  for(let x = 0; x < 5; x++) {
    userAnswerNumber = prompt('Try and guess a number between 1 - 10!');
    userAnswerNumber = parseInt(userAnswerNumber);

    if (userAnswerNumber === 2) {
      alert('Good guess!');
      console.log(userAnswerNumber);
      break;
    } else if (userAnswerNumber > 2) {
      alert('Try guessing lower!');
      console.log(userAnswerNumber);
    } else if (userAnswerNumber < 2) {
      alert('Try guesing higher!');
      console.log(userAnswerNumber);
    } else {
      alert('I said 1 - 10');
    }
    if (x === 4) {
      alert('Sorry, you are out of chances.. the number was 2!');
      break;
    }
  }
}

question6();

function favCity() {
  let favoriteCities = ['New York', 'San Deigo', 'Miami'];

  let maxTries = 6;
  let gotIt = false;

  for (let count = 1; count <= maxTries; count += 1) {

    let response = prompt('What are my favorite cities');

    for (let i = 0; i < favoriteCities.length; i += 1) {
      let fav = favoriteCities[i];
      if (fav === response) {
        alert('You got it right!');
        gotIt = true;
        break;
      }
    }

    if (gotIt) {
      break;
    }
  }
  alert(favCity);
}

favCity();

let userName;
let answerOptions = ['yes', 'no'];
let questions = ['Would you like to know more about me?','Am I a student at Code Fellows?','Am I a Veteran?','Am I korean?','Do I live in Seattle?'];

let correctAnswer = ['yes', 'yes' , 'yes,' , 'yes' , 'yes'];
let correctAnswerList = ['Of course, you would like to know more about me' , 'Yes, I am a student at Code Fellows.' , 'I am a Veteran.' , 'I am Korean.' , 'I do live in Seattle'];

let correctAnswerId = ['#me' , '#student' , '#veteran' , '#korean' , '#seattle'];
let wrongAnswer = 'Sorry, wrong answer!';

function allAnswer(){
  let i = 0;
  let count = 0;
  for(i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    let answerLowerCase = userAnswer.toLowerCase();

    if (answerLowerCase === correctAnswer[i]) {
      alert('Correct!');
      console.log(count);
    } else {
      alert(wrongAnswer);
      console.log(count);
    }
  }
}

allAnswer();
