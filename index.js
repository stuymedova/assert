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
};
