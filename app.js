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


function knowMoreAboutMe(){
  let userAnswer = prompt('Would you like to know more about me?');
  console.log('The answer is:' + userAnswer);
  if(userAnswer === 'yes'){
    alert('Great! You can start taking a guess at these questions about me.');
  } else {
    alert('Darn.. sorry but here are some questions you can guess about me');
  }
  return knowMoreAboutMe;
}

knowMoreAboutMe();

function student(){
  let userAnswer = prompt('Am I a student at Code Fellows?');
  console.log('The answer is:' + userAnswer);
  if(userAnswer === 'yes'){
    alert('Correct, I am a student at Code Fellows!');
  } else {
    alert('Incorrect, I am a student at Code Fellows.');
  }
  return student;
}

student();

function veteran(){
  let userAnswer = prompt('Am I a Veteran?');
  console.log('The answer is:' + userAnswer);
  if(userAnswer === 'yes'){
    alert('Correct, I am a Veteran!');
  } else {
    alert('Incorrect, I am actually a Veteran.');
  }
  return veteran;
}
veteran();

function korean(){
  let userAnswer = prompt('Am I Korean?');
  console.log('The answer is:' + userAnswer);
  if(userAnswer === 'yes'){
    alert('Correct, I am Korean!');
  } else {
    alert('Incorrect, I am actually Korean.');
  }
  return korean;
}

korean();

function gameOver(){
  let userAnswer = prompt('Are you over these questions?');
  console.log('The answer is:' + userAnswer);
  if(userAnswer === 'yes'){
    alert('It was fun playing with you!');
  } else {
    alert('Sorry, that was the end. It was fun playing with you!');
  }
  return gameOver;
}
gameOver();
