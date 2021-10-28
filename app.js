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

function numberGame() {
  let i;
  let numberPicked, picked;
  let userAnswerNumber;
  let answered = true;

  while(answered === true) {
    for(i = 0; i < 4; i++) {
      userAnswerNumber = prompt('Pick a number between 1 - 10');
      userAnswerNumber = parseInt(userAnswerNumber, 10);

      if(userAnswerNumber === 9) {
        alert('Correct!');
        score++;
        numberPicked = false;
        break;
      } else if(userAnswerNumber > 9) {
        alert('Try choosing a lower number');
        console.log(i);
      } else if(userAnswerNumber < 8){
        alert('Try choosing a higher number');
        console.log(i);
      } else {
        alert('I said 1 - 10!!!');
      }
    }
    if(i === 4) {
      alert('You failed at all your attempts.. The number was 9');
      picked = false;
      document.querySelector('#picking').textConent = 'You failed at all of your attempts.. The number was 9';
    }
  }
}

numberGame();

let userName;
let count = 0;
let i;
let answerOptions = ['yes', 'no'];
let questions = ['Would you like to know more about me?','Am I a student at Code Fellows?','Am I a Veteran?','Am I korean?','Do I live in Seattle?'];

let correctAnswer = ['yes', 'yes' , 'yes,' , 'yes' , 'yes'];
let correctAnswerList = ['Of course, you would like to know more about me' , 'Yes, I am a student at Code Fellows.' , 'I am a Veteran.' , 'I am Korean.' , 'I do live in Seattle'];

let correctAnswerId = ['#me' , '#student' , '#veteran' , '#korean' , '#seattle'];
let wrongAnswer = 'Sorry, wrong answer!';

function allAnswer(){
  for(i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    let answerLowerCase = userAnswer.toLowerCase();

    if (answerLowerCase === correctAnswer[i]) {
      alert("Correct!");
      console.log(count);
    } else {
      alert(wrongAnswer);
      console.log(count);
    }
  }
}

allAnswer();

function correctAnswerCount() {
  document.getElementById('incorrect').textContent = 'You answered ${count}/5 questions right!';
}
correctAnswerCount();

function question7(){
  let userGuess = prompt('What are some of my favorite cities?','within the United States');
  userGuess = userGuess.toLowerCase();
  let cities = ['seattle', 'new york', 'portland', 'los angeles', 'san diego', 'miami'];
  let favorite = 'new york';
  for(let i = 0; i <=6; i++){
    console.log('Guess for the favorite city is ' + userGuess);
    if (userGuess === favorite){
      alert('Wow, New York is my favorite city!');
      count++;
      break;
    } else if (cities.includes(userGuess) && i !==6){
      userGuess = prompt('Not my favorite.. but you are close.');
      userGuess = userGuess.toLowerCase();
      console.log('Your guess is? ' + userGuess);
    } else if (cities.includes(userGuess) && i !==6){
      userGuess = prompt('Is that even in the United States?');
      console.log('Your guess is? ' + userGuess);
    }else{
      alert('Sorry, my top favorite city is, New York.. but you could have chosen, seattle', 'portland', 'los angeles', 'san diego', 'miami');
    }
  }
}


//function knowMoreAboutMe(){
//let userAnswer = prompt('Would you like to know more about me?');
//console.log('The answer is:' + userAnswer);
//if(userAnswer === 'yes'){
//alert('Great! You can start taking a guess at these questions about me.');
//} else {
//alert('Too bad.. sorry but here are some questions you can guess about me');
//}
//return knowMoreAboutMe;
//}

//knowMoreAboutMe();

//function student(){
//  let userAnswer = prompt('Am I a student at Code Fellows?');
//  console.log('The answer is:' + userAnswer);
//  if(userAnswer === 'yes'){
//    alert('Correct, I am a student at Code Fellows!');
//  } else {
//    alert('Incorrect, I am a student at Code Fellows.');
//  }
//  return student;
//}

//student();

//function veteran(){
//  let userAnswer = prompt('Am I a Veteran?');
//  console.log('The answer is:' + userAnswer);
//  if(userAnswer === 'yes'){
//    alert('Correct, I am a Veteran!');
//  } else {
//    alert('Incorrect, I am actually a Veteran.');
//  }
//  return veteran;
//}
//veteran();

//function korean(){
//  let userAnswer = prompt('Am I Korean?');
//  console.log('The answer is:' + userAnswer);
//  if(userAnswer === 'yes'){
//    alert('Correct, I am Korean!');
//  } else {
//    alert('Incorrect, I am actually Korean.');
//  }
//  return korean;
//}

//korean();

//function gameOver(){
//  let userAnswer = prompt('Are you done with these questions?');
//  console.log('The answer is:' + userAnswer);
//  if(userAnswer === 'yes'){
//    alert('It was fun playing with you!');
//  } else {
//    alert('Sorry, that was the end. It was fun playing with you!');
//  }
//  return gameOver;
//}
//gameOver();



//function security(){
//  let userAnswer = +prompt('For security, what is the current year?');
//  let correctAnswer = 2021;
//  let attempts = 4;

//  for(let i = 0; i < attempts; i++){
//    console.log(i);
//    while(userAnswer < 1|| userAnswer > 3000){
//      userAnswer = prompt('Try again: That is the incorrect year!');
//    }
//    if(userAnswer === correctAnswer){
//      alert('You may now enter this website');
//      break;
//    }else if (userAnswer !== correctAnswer){
//      userAnswer = prompt('Try again: Are we going back in time?');
//    } else{
//      alert('You got it wrong!');
//    }
//  }

//}

//security();
