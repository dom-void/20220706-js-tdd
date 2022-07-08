import { postWrapper } from './post-wrapper.js';
import { postService } from './post-service.js';

async function test() {
    const html = await postWrapper(postService, 23);
    console.log(html);
}

test();