let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0,
  ties:0
};

updateScoreElement();

/*
if(!score){
  score = {
    wins: 0,
    lose: 0,
    ties:0
  };
}
*/

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

  if(playerMove === 'Scissor'){
    if(computerMove === 'Rock'){
      result = 'You Lose.';
    }else if(computerMove === 'Paper'){
      result = 'You Win.';
    }else if(computerMove === 'Scissor'){
      result = 'Ties.';
    }

  }else if (playerMove === 'Paper'){
    if(computerMove === 'Rock'){
      result = 'You Win.';
    }else if(computerMove === 'Paper'){
      result = 'Ties.';
    }else if(computerMove === 'Scissor'){
      result = 'You Lose.';
    }

  }else if (playerMove === 'Rock'){
    if(computerMove === 'Rock'){
      result = 'Ties.';
    }else if(computerMove === 'Paper'){
      result = 'You Lose.';
    }else if(computerMove === 'Scissor'){
      result = 'You Win.';
    }
  }

  if(result === 'You Win.'){
    score.wins += 1;
  }else if(result === 'You Lose.'){
    score.lose += 1;
  }else if(result === 'Ties.'){
    score.ties += 1;
  }

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML =  `Wins : ${score.wins}, Lose : ${score.lose}, Ties : ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Rock';
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Paper';
  }else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Scissor';
  }
  
  return computerMove;
}
