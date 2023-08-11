import { areDeepEqual } from './utils/areDeepEqual.js';

class AssertionError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AssertionError';
	}
}

export const assert = {
	equal(actual, expected) {
		if (actual !== expected) {
			throw new AssertionError(`Expected ${actual} and ${expected} to be equal. ${actual} and ${expected} are not equal.`);
		}
	},
	notEqual(actual, expected) {
		if (actual === expected) {
			throw new AssertionError(`Expected ${actual} and ${expected} to not be equal. ${actual} and ${expected} are equal.`);
		}
	},
	equalReference(actual, expected) {
		if (!(actual instanceof Object)) {
			throw new AssertionError(`Expected ${actual} to be an Object. ${actual} is not an Object.`);
		}
		if (!(expected instanceof Object)) {
			throw new AssertionError(`Expected ${expected} to be an Object. ${expected} is not an Object.`);
		}
		if (actual !== expected) {
			throw new AssertionError(`Expected ${actual} and ${expected} to have an equal reference. ${actual} and ${expected} do not have an equal reference.`);
		}
	},
	deepEqual(actual, expected) {
		if (!(actual instanceof Object)) {
			throw new AssertionError(`Expected ${actual} to be an Object. ${actual} is not an Object.`);
		}
		if (!(expected instanceof Object)) {
			throw new AssertionError(`Expected ${expected} to be an Object. ${expected} is not an Object.`);
		}
		if (!areDeepEqual(actual, expected)) {
			throw new AssertionError(`Expected ${actual} and ${expected} to be deeply equal. ${actual} and ${expected} are not deeply equal.`);
		}
	},
	less(actual, expected) {
		if (actual >= expected) {
			throw new AssertionError(`Expected ${actual} to be less than ${expected}. ${actual} is greater than or equal to ${expected}.`);
		}
	},
	lessOrEqual(actual, expected) {
		if (actual > expected) {
			throw new AssertionError(`Expected ${actual} to be less than or equal to ${expected}. ${actual} is greater than ${expected}.`);
		}
	},
	greater(actual, expected) {
		if (actual <= expected) {
			throw new AssertionError(`Expected ${actual} to be greater than ${expected}. ${actual} is less than or equal to ${expected}.`);
		}
	},
	greaterOrEqual(actual, expected) {
		if (actual < expected) {
			throw new AssertionError(`Expected ${actual} to be greater than or equal to ${expected}. ${actual} is less than ${expected}.`);
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
	equalType(actual, expected) {
		if (typeof actual !== typeof expected) {
			throw new AssertionError(`Expected ${actual} and ${expected} to be of the same type. Types "${typeof actual}" and "${typeof expected}" do not match.`);
		}
	},
	type(value, expectedType) {
		// deno-lint-ignore valid-typeof
		if (typeof value !== expectedType) {
			throw new AssertionError(`Expected ${value} to be of type ${expectedType}. ${value} has type "${typeof value}" which does not match type "${expectedType}".`);
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
