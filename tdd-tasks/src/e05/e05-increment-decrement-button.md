# [e05] Increment / Decrement button


## Opis zadania:
Utwórz komponent lub ich "zestaw". Realizujący następującą logikę działania.

- Użytkownik widzi 2 przyciski + nagłówek nad nimi
- Przyciski mają swoje nazwy:
  - _Increment_
  - _Decrement_
- Są wyświetlane obok siebie
- W nagłówku widnieje cyfra startowa: `0`
- Po kliknięciu na:
  - _Increment_ - cyfra rośnie o `2` w górę / jednak `max` to `20`
  - _Decrement_ - spada o `2` w dół / `min` to `0`  

### Wymagania:
Wykorzystaj _TDD_ — załóż, że nie ma jeszcze komponentu. Jak napisać test ?

Możesz przyjąć, że docelowo, będzie to wykonane w React.  
W tym układzie wykorzystaj projekt [tdd-in-react](../tdd-in-react)  

W tym układzie przykładowe ustawienie komponentu na każdy test z wykorzystaniem `@testing-library/react`, może wyglądać tak:

```javascript
import { render, screen, cleanup } from '@testing-library/react';

beforeEach(() => {
	render(<YourComponenName />)
})

afterEach(() => {
	cleanup()
})

it('test', () => {
	const something = screen.getByText('....')
})

```

Docelowo warto korzystać ze `screen`, zobacz API: [screen](https://testing-library.com/docs/queries/about/#screen).

Jednak jeśli stanowi to dla ciebie zbyt duży "próg wejścia" na ten moment, pamiętaj, że w połączeniu `jsdom` zadziała następujący dostęp:

```javascript
const something = document.querySelector('....')
```
---

> Pamiętaj — komponentu jeszcze nie ma, trzeba sobie to wszysko wyobrazić i napisać test
