const GAME_CHOICES = ['rock', 'paper', 'scissors']

export function gameRound(player1Choice, player2Choice) {
    if(!GAME_CHOICES.includes(player1Choice)) {
        throw new Error(`Nie ma takiego ruchu jak: ${player1Choice}`)
    }
    if(!GAME_CHOICES.includes(player2Choice)) {
        throw new Error(`Nie ma takiego ruchu jak: ${player2Choice}`)
    }
    if(player1Choice === player2Choice) {
        return 'DRAW'
    }
    if(
        player1Choice === 'rock' && player2Choice === 'scissors' ||
        player1Choice === 'paper' && player2Choice === 'rock' ||
        player1Choice === 'scissors' && player2Choice === 'paper' 
        ) {
        return 'WIN'
    }
    return 'LOOSE'
}

export function gameResult(state, cpuChoice) {
    let stateText;
    if(state === 'WIN') {
        stateText = 'WYGRANA'
    } else if(state === 'LOOSE') {
        stateText = 'PRZEGRAŁEŚ'
    } else {
        stateText = 'REMIS'
    }
    return `${stateText} - wybór komputera: ${cpuChoice}`
}

export function randomCpuChoice() {
    const randomIndex = Math.floor(Math.random() * GAME_CHOICES.length)
    return GAME_CHOICES[randomIndex]
}