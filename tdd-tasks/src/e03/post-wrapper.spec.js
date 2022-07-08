describe('post-wrapper', () => {

    const postId = 1;
    const postService = {
        async getOne(id) {
            return {
                title: 'Mój super post',
                userId: 22,
                body: 'His mother had always taught'
            };
        }
    }

    // 1 co wpada do głowy (ale może się okazać kruche - bo projekt będzie się rozwijał)
    it('should return proper HTML string', async () => {
        //const postId = 1;

        const postHTML = await postWrapper(postService, postId)

        expect(postHTML).toBe(`
        <h4>Mój super post (22)</h4>
        <p>His mother had always taught</p>
        `)
    })

    it('should return title in h4 tag', async () => {
        //const postId = 1;

        const postHTML = await postWrapper(postService, postId)

        expect(postHTML).toContain(`<h4>Mój super post`)
    })

    it('should return userId in h4 tag', async () => {
        //const postId = 1;

        const postHTML = await postWrapper(postService, postId)

        expect(postHTML).toContain(`(22)</h4>`)
     })

    it('should return body in paragraph', async () => {
        const postHTML = await postWrapper(postService, postId)

        expect(postHTML).toContain(`<p>His mother had always taught</p>`)
    })

    // dodatek
    it.todo('should return "Post not exist" message when service returns 404')

})