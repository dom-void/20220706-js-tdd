describe('Explain MUTATION', () => {

    function someAction(someUser) {
        someUser.age = 25;
        return someUser;
    }

    it('should be mutated when access via refence...', () => {

        const user = {name: 'Michał'}
        const otherUser = user;

        expect(user).toBe(otherUser)
    })


    it('should be mutated when modified this way....', () => {

        const user = {name: 'Michał'}
        const otherUser = someAction(user);

        expect(user).toBe(otherUser)
        expect(user).toEqual({ name: 'Michał', age: 25 })
    })
    
})