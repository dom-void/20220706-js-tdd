/**
 *  Jest pozwala na używanie własnych matchers.
 *
 *  expect() można rozszerzyć o własną implementację i nazwę.
 *  Zobacz składnię:
 *
 *    matcherName(received,...expected) => {message: () => string, pass: boolean}
 *
 *  Zróbmy przykładowego matcher'a, aby sprawdzić, czy jakiś tekst ma emotikon, czy nie.
 *   Napisane w składni:
 *
 *  :smile:
 *
 *
 * Możesz znaleźć więcej matchers, tak aby rozszerzyć swoją aplikację, sprawdź jest-awesome, #Matchers:
 * @see https://github.com/jest-community/awesome-jest#matchers
 *
 * Pamiętaj tylko o 'zasadzie czytelności' i jeśli dodajesz inne matchers — skonsultuj się z członkami swojego zespołu.
 * Wszyscy deweloperzy pracujący nad projektem w podejściu TDD — powinni wiedzieć, jakich matcher'ów mogą i kiedy je używać.
 *
 * W rzeczywistości, na przykład przy aplikacji front-endowej, najbardziej użyteczne są dopasowania typu jest-dom,
 * matchers dla węzłów/elementów drzewa DOM.
 *
 * @see https://github.com/testing-library/jest-dom
 * */

expect.extend({
	toHaveEmoji(received, name) {
		const check = received.includes(':' + name + ':');
		if(check) {
			return {
				message: () => `expected "${received}" not to have emoji: :${name}: !`,
				pass: true
			}
		}
		return {
			message: () => `expected "${received}" to have emoji: :${name}: !`,
			pass: false
		}
	}
})

describe('more matchers [b004]', () => {

	it('should have text emoji :smile: ', () => {

		expect('hello world :smile:').toHaveEmoji('smile');
	})

	it('should not have text emoji :muscle: ', () => {

		expect('hello world :smile:').not.toHaveEmoji('muscle');
	})
})
