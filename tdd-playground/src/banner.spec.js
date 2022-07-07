// Poniewaz Babel obsuguje testy - nie muszę dopisywać .js!
import { makeBanner } from './banner';

describe('banner', () => {

    it('should print given text', () => {
        // Arrange
        const word = 'something';
        // Act:
        const result = makeBanner(word)
        // Assert
        expect(result).toContain(word);
    })
})
