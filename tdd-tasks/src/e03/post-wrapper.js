export async function postWrapper(postService, postId) {

    try {
        const post = await postService.getOne(postId);

        return `
        <h4>${post.title} (${post.userId})</h4>
        <p>${post.body}</p>
        `
    } catch {
        //  UWAGA - tutaj upraszczamy rzeczywistość, bo zakładamy że każdy błąd z serwera to 404 !!!
        return `
            <h4>Error</h4>
            <p>Post not exist</p>
        `
    }
}