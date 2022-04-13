const message = document.querySelector('.message');

const player = document.querySelector('.player-hand');
const computer = document.querySelector('.computer-hand');

const rock = document.querySelector('button');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const options = ['🖐🏼','✌🏼','✊🏼']

const scripts = {
    playerWin: () => {
        playerScore.textContent = Number(playerScore.textContent) + 1
        return 'Вы выйграли!'
    },
    computerWin: () => {
        computerScore.textContent = Number(computerScore.textContent) + 1
        return 'Вы проиграли!'
    },
    draw: () => {
        return 'Ничья'
    }
}

function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isDisable (...args) {
    args.forEach(item => item instanceof Element ? item.disabled = args[args.length - 1] : false)
}

function winLoose (player, computer) {
    //paper
    if(player === '🖐🏼' && computer === '✊🏼') return scripts.playerWin;
    if(player === '🖐🏼' && computer === '✌🏼') return scripts.computerWin;
    if(player === '🖐🏼' && computer === '🖐🏼') return scripts.draw;

    //scissors
    if(player === '✌🏼' && computer === '🖐🏼') return scripts.playerWin;
    if(player === '✌🏼' && computer === '✊🏼') return scripts.computerWin;
    if(player === '✌🏼' && computer === '✌🏼') return scripts.draw;

    //rock
    if(player === '✊🏼' && computer === '✌🏼') return scripts.playerWin;
    if(player === '✊🏼' && computer === '🖐🏼') return scripts.computerWin;
    if(player === '✊🏼' && computer === '✊🏼') return scripts.draw;
}

function handler (event) {
    const computerChoose = options[random(0, 2)]
    const playerchoose = event.target.getAttribute('data-value')

    player.classList.toggle('active-player')
    computer.classList.toggle('active-computer')

    isDisable(rock, scissors, paper, true)

    setTimeout(() => {
        player.classList.toggle('active-player')
        computer.classList.toggle('active-computer')

        player.textContent = playerchoose;
        computer.textContent = computerChoose;

        isDisable(rock, scissors, paper, false)
        message.textContent = winLoose(playerchoose, computerChoose)()
    }, 2000)
}


rock.onclick = handler
scissors.onclick = handler
paper.onclick = handler
