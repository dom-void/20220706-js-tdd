import { postWrapper } from './post-wrapper.js';
import { postService } from './post-service.js';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

describe('post-wrapper with msw', () => {

    const NOT_EXISTING_POST_ID = 12671;
    const postId = 1;

    const server = setupServer(
		rest.get('https://dummyjson.com/posts/:id', (req, res, ctx) => {
            if(Number(req.params.id) === NOT_EXISTING_POST_ID) {
                return res(ctx.status(404).json({message:"Post with id 'undefined' not found"}))
            }

			return res(ctx.json({
                title: 'Mój super post',
                userId: 22,
                body: 'His mother had always taught'
            }))
		})
	)

	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

    // 1 co wpada do głowy (ale może się okazać kruche - bo projekt będzie się rozwijał)
    it('should return proper HTML string', async () => {
        //const postId = 1;

        const postHTML = await postWrapper(postService, postId)

        // expect(postHTML).toBe(`
        // <h4>Mój super post (22)</h4>
        // <p>His mother had always taught</p>
        // `)
        expect(postHTML).toContain('<h4>Mój super post (22)</h4>')
        expect(postHTML).toContain('<p>His mother had always taught</p>')
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
    it('should return "Post not exist" message when message not exist', async () => {
        const postHTML = await postWrapper(postService, NOT_EXISTING_POST_ID)

        expect(postHTML).toContain('<h4>Error</h4>')
        expect(postHTML).toContain(`<p>Post not exist</p>`)
    })

})