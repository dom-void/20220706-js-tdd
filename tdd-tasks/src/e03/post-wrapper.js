export async function postWrapper(postService, postId) {

    const post = await postService.getOne(postId);

    return `
    <h4>${post.title} (${post.userId})</h4>
    <p>${post.body}</p>
    `
}