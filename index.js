class AssertionError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AssertionError';
	}
}

export const assert = {
	equal(a, b) {
		if (a !== b) {
			throw new AssertionError(`Expected equality for ${a} and ${b}. ${a} and ${b} are not equal.`);
		}
	},
	notEqual(a, b) {
		if (a === b) {
			throw new AssertionError(`Expected inequality for ${a} and ${b}. ${a} and ${b} are equal.`);
		}
	},
	// equalReference(a, b) {},
	// equalType(a, b) {},
	// deepEqual(a, b) {},
	// less(a, b) {},
	// lessOrEqual(a, b) {},
	// greater(a, b) {},
	// greatherOrEqual(a, b) {},
	// trapped(value, lowerBound, excludedUpperBound) {},
	// type(value, type) {},
	// true(value) {},
	// false(value) {},
};
