let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
};
}
*/

let isAutoPlaying = false;
let invervalId;

/*
const autoPlay() => {


};
this code is harder to read*/

// this code is easier to read and allows for hoisting and we dont have to worry about which order the code is written
function autoPlay() {
  if (!isAutoPlaying) {
    invervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

  } else {
    clearInterval(invervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-fire-button')
  .addEventListener('click', () => {
    playGame('fire');
  });

document.querySelector('.js-waterballoon-button')
  .addEventListener('click', () => {
    playGame('waterballoon');
  });


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'f') {
    playGame('fire');
  } else if (event.key === 'w') {
    playGame('waterballoon');
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();


  let result = '';

  // scissors
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissors') {
      result = 'tie';
    } else if (computerMove === 'fire') {
      result = 'you lose';
    }
    else if (computerMove === 'waterballoon') {
      result = 'you win';
    }


    // paper
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'scissors') {
      result = 'you lose';
    } else if (computerMove === 'fire') {
      result = 'you lose';
    }
    else if (computerMove === 'waterballoon') {
      result = 'you win';
    }


    // rock
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissors') {
      result = 'you win';
    } else if (computerMove === 'fire') {
      result = 'you lose';
    }
    else if (computerMove === 'waterballoon') {
      result = 'you win';
    }

    // fire
  } else if (playerMove === 'fire') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissors') {
      result = 'you win';
    } else if (computerMove === 'fire') {
      result = 'tie';
    }
    else if (computerMove === 'waterballoon') {
      result = 'you lose';
    }

    // waterballoon
  } else if (playerMove === 'waterballoon') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissors') {
      result = 'you lose';
    } else if (computerMove === 'fire') {
      result = 'you win';
    } else if (computerMove === 'waterballoon') {
      result = 'tie';
    }
  }


  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `you
<img src="images/${playerMove}-emoji.png" class="move-icon" alt="rock emoji">
<img src="images/${computerMove}-emoji.png" class="move-icon" alt="scissors emoji">
computer`;
}


function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 5) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 5 && randomNumber < 2 / 5) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 5 && randomNumber < 3 / 5) {
    computerMove = 'scissors';
  } else if (randomNumber >= 3 / 5 && randomNumber < 4 / 5) {
    computerMove = 'fire';
  } else if (randomNumber >= 4 / 5 && randomNumber < 1) {
    computerMove = 'waterballoon';
  }


  return computerMove;

}
