/*
* @jest-environment jsdom
*/

function Header({text}) {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    h1.addEventListener('click', () => {
        h1.textContent += '!'
    })
    return h1;
}

describe('DOM', () => {

    let myHeader;
    beforeEach(() => {
        myHeader = Header({text: 'Click me'})
        document.body.append(myHeader)
    })

    it('should start with simple text Click me when mounted on DOM', () => {
       
        const h1 = document.querySelector('h1');

        expect(h1.textContent).toBe('Click me')
    })

    it('should have additional dwo !! when duble clicked', () => {
       
        const h1 = document.querySelector('h1');

        h1.click()
        h1.click()

        expect(h1.textContent).toBe('Click me!!')
    })
})