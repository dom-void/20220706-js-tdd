import { asyncAdd } from './calculations.js';

describe('calculations', () => {

	it('should be 320 ok with asyncAdd', async () => {
		const result = await asyncAdd(300, 20);

		expect(result).toBe(320);
	})
})
