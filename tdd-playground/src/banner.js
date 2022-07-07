function makeBanner(text) {
    return `
        ------------------------
               ${text}
        ------------------------
    `
}

// Muszę stosować składnie CommonJS, ponieważ jestem w Node.js.... 
module.exports = {
    makeBanner
}