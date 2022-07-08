export async function postWrapper(postService, postId) {

    try {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
        const {title, userId, body} = await postService.getOne(postId);

        return `
        <h4>${title} (${userId})</h4>
        <p>${body}</p>
        `
    } catch {
        //  UWAGA - tutaj upraszczamy rzeczywistość, bo zakładamy że każdy błąd z serwera to 404 !!!
        return `
            <h4>Error</h4>
            <p>Post not exist</p>
        `
    }
}