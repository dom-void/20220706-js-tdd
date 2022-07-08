

describe('Rock - Paper - Scissors', () => {

    it.skip.each([
        ['scissors', 'scissors'],
        ['paper', 'paper'],
        ['rock', 'rock'],
    ])('should be DRAW when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {});

    it.todo('should throw when 1st choice does not exist');
    
    it.todo('should throw when 2st choice does not exist');
    
    it.skip.each([
        ['scissors', 'paper'],
        ['paper', 'rock'],
        ['rock', 'scissors'],
    ])('should be WIN when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {});
    
    it.skip.each([
        ['paper', 'scissors'],
        ['rock', 'paper'],
        ['scissors', 'rock'],
    ])('should be LOOSE when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {});
    
    it.todo('should show game state to EndUser as: "WYGRANA - wybór komputera: rock" when player picks paper, CPU picks rock [RQ-7] ');

    it.todo('CPU choice should be in one of rock paper scissors when randomized')
})