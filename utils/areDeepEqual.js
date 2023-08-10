// TODO: support Sets and Maps

export function areDeepEqual(a, b) {
	if (a instanceof Array && b instanceof Array) {
		return areArraysEqual(a, b);
	}
	if (a instanceof Object && b instanceof Object) {
		return areObjectsEqual(a, b);
	}
	return false;
}

function areArraysEqual(a, b) {
	if (a.length !== b.length) {
		return false;
	}
	for (let i = 0; i < a.length; i++) {
		if (a[i] instanceof Object || b[i] instanceof Object) {
			if (!areDeepEqual(a[i], b[i])) {
				return false;
			}
		}
		else if (a[i] !== b[i]) {
			return false;
		}
	}
	return true;
}

function areObjectsEqual(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) {
		return false;
	}
	for (const key of Object.keys(a)) {
		if (a[key] instanceof Object || b[key] instanceof Object) {
			if (!areDeepEqual(a[key], b[key])) {
				return false;
			}
		}
		else if (!(Object.hasOwn(b, key)) || a[key] !== b[key]) {
			return false;
		}
	}
	return true;
}
