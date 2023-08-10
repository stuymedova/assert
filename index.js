import { areDeepEqual } from './utils/areDeepEqual.js';

class AssertionError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AssertionError';
	}
}

export const assert = {
	equal(a, b) {
		if (a !== b) {
			throw new AssertionError(`Expected ${a} and ${b} to be equal. ${a} and ${b} are not equal.`);
		}
	},
	notEqual(a, b) {
		if (a === b) {
			throw new AssertionError(`Expected ${a} and ${b} to not be equal. ${a} and ${b} are equal.`);
		}
	},
	equalReference(a, b) {
		if (!(a instanceof Object)) {
			throw new AssertionError(`Expected ${a} to be an Object. ${a} is not an Object.`);
		}
		if (!(b instanceof Object)) {
			throw new AssertionError(`Expected ${b} to be an Object. ${b} is not an Object.`);
		}
		if (a !== b) {
			throw new AssertionError(`Expected ${a} and ${b} to have an equal reference. ${a} and ${b} do not have an equal reference.`);
		}
	},
	deepEqual(a, b) {
		if (!(a instanceof Object)) {
			throw new AssertionError(`Expected ${a} to be an Object. ${a} is not an Object.`);
		}
		if (!(b instanceof Object)) {
			throw new AssertionError(`Expected ${b} to be an Object. ${b} is not an Object.`);
		}
		if (!areDeepEqual(a, b)) {
			throw new AssertionError(`Expected ${a} and ${b} to be deeply equal. ${a} and ${b} are not deeply equal.`);
		}
	},
	less(a, b) {
		if (a >= b) {
			throw new AssertionError(`Expected ${a} to be less than ${b}. ${a} is greater than or equal to ${b}.`);
		}
	},
	lessOrEqual(a, b) {
		if (a > b) {
			throw new AssertionError(`Expected ${a} to be less than or equal to ${b}. ${a} is greater than ${b}.`);
		}
	},
	greater(a, b) {
		if (a <= b) {
			throw new AssertionError(`Expected ${a} to be greater than ${b}. ${a} is less than or equal to ${b}.`);
		}
	},
	greaterOrEqual(a, b) {
		if (a < b) {
			throw new AssertionError(`Expected ${a} to be greater than or equal to ${b}. ${a} is less than ${b}.`);
		}
	},
	trapped(value, lowerBound, excludedUpperBound) {
		if (excludedUpperBound <= lowerBound) {
			throw new AssertionError(`Provided bounds are invalid. Expected lower bound ${lowerBound} to be less than an upper bound ${excludedUpperBound}.`);
		}
		if (value < lowerBound || value >= excludedUpperBound) {
			throw new AssertionError(`Value is out of bounds. Expected value ${value} to be trapped between the lower bound ${lowerBound} and the upper bound ${excludedUpperBound}.`);
		}
	},
	equalType(a, b) {
		if (typeof a !== typeof b) {
			throw new AssertionError(`Expected ${a} and ${b} to be of the same type. Types "${typeof a}" and "${typeof b}" do not match.`);
		}
	},
	type(value, type) {
		// deno-lint-ignore valid-typeof
		if (typeof value !== type) {
			throw new AssertionError(`Expected ${value} to be of type ${type}. ${value} has type "${typeof value}" which does not match type "${type}".`);
		}
	},
	true(value) {
		if (value !== true) {
			throw new AssertionError(`Expected ${value} to be true. ${value} is not true.`);
		}
	},
	false(value) {
		if (value !== false) {
			throw new AssertionError(`Expected ${value} to be false. ${value} is not false.`);
		}
	},
};
