const { time } = require( './c07-time-module' )

module.exports = {
	shoutBannerFor(product, price, currentTime = time()) {
		return `Welcome, today's (${currentTime}) promotion is: ${product} for ${price}`;
	}
}
