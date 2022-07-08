import { gameRound, gameResult, randomCpuChoice } from './rps-game.js'

describe('Rock - Paper - Scissors', () => {

    const GAME_CHOICES = ['rock', 'paper', 'scissors']
    const GOOD_CHOICE = 'paper';
    const BAD_CHOICE = 'boom!'

    it.each([
        ['scissors', 'scissors'],
        ['paper', 'paper'],
        ['rock', 'rock'],
    ])('should be DRAW when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {
        const result = gameRound(playerPick, cpuPick);

        expect(result).toBe('DRAW')
    });

    it('should throw when 1st choice does not exist', () => {

        expect(() => gameRound(BAD_CHOICE, GOOD_CHOICE)).toThrowError(`Nie ma takiego ruchu jak: ${BAD_CHOICE}`)
    });
    
    it('should throw when 2st choice does not exist', () => {

        expect(() => gameRound(GOOD_CHOICE, BAD_CHOICE)).toThrowError(`Nie ma takiego ruchu jak: ${BAD_CHOICE}`)
    });
    
    it.each([
        ['scissors', 'paper'],
        ['paper', 'rock'],
        ['rock', 'scissors'],
    ])('should be WIN when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {
        const result = gameRound(playerPick, cpuPick);

        expect(result).toBe('WIN')
    });
    
    it.each([
        ['paper', 'scissors'],
        ['rock', 'paper'],
        ['scissors', 'rock'],
    ])('should be LOOSE when Player picks %s and CPU picks %s', (playerPick, cpuPick) => {
        const result = gameRound(playerPick, cpuPick);

        expect(result).toBe('LOOSE')
    });
    
    it('should show game state to EndUser as: "WYGRANA - wybór komputera: rock" when player picks paper, CPU picks rock [RQ-7] ', () => {
        const cpuChoice = 'rock'
        const state = gameRound('paper', cpuChoice)
        
        const result = gameResult(state, cpuChoice);

        expect(result).toBe('WYGRANA - wybór komputera: rock')
    });

    it('CPU choice should be in one of rock paper scissors when randomized', () => {
        const cpuChoice = randomCpuChoice();

        expect(GAME_CHOICES).toContain(cpuChoice)
    })
})