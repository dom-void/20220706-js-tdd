const GAME_CHOICES = ['rock', 'paper', 'scissors']

function throwIfNotInChoice(choice) {
    if(!GAME_CHOICES.includes(choice)) {
        throw new Error(`Nie ma takiego ruchu jak: ${choice}`)
    }
}

const WINNING_CODITIONS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

export function gameRound(player1Choice, player2Choice) {
    throwIfNotInChoice(player1Choice)
    throwIfNotInChoice(player2Choice)
    if(player1Choice === player2Choice) {
        return 'DRAW'
    }
    if(WINNING_CODITIONS[player1Choice] === player2Choice){
        return 'WIN'
    }
    return 'LOOSE'
}

const GAME_STATE_MAPPER = {
    DRAW: 'REMIS',
    WIN: 'WYGRANA',
    LOOSE: 'PRZEGRAŁEŚ'
}

export function gameResult(state, cpuChoice) {
    const stateText = GAME_STATE_MAPPER[state];
    return `${stateText} - wybór komputera: ${cpuChoice}`
}

export function randomCpuChoice() {
    const randomIndex = Math.floor(Math.random() * GAME_CHOICES.length)
    return GAME_CHOICES[randomIndex]
}