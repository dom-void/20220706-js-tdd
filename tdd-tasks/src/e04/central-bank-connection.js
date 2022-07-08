import { defaultUsers } from './default-users.js'

function connectToCentralBank(users = defaultUsers) {
	const findUser = name => {
		const user = users.find(u => u.name === name);
		if (!user) {
			throw new Error(`User ${name} not found`);
		}
		return user;
	};

	return {
		ping(cb) {
			cb('Bank is online');
		},
		transfer({ from, to, amount }, response) {
			const fromUser = findUser(from);
			const toUser = findUser(to);
			if (fromUser.balance < amount) {
				throw new Error('Insufficient money');
			}
			setTimeout(() => {
				fromUser.balance -= amount;
				toUser.balance += amount;
				response(
					`Amount of ${amount} transferred from ${fromUser.name} to ${toUser.name}.`
				);
			}, 3000);
		},
	};
}
