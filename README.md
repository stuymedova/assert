# Assert

Minimalist unit testing library.

## Installation and Usage

**Installation**

To add the library to a project, run:
```shell
npm i @stuymedova/assert
```

**Usage**

```js
import { assert } from '@stuymedova/assert';

assert.equal('hello', 'world'); // Throws an AssertionError
```

## API

**`assert.equal(a, ctualb)expected**

Throws an `AssertionError` if the given values are not equal. Values are compared using the strict equality operator (triple equals).

**`assert.notEqual(actual, expected)`**

Throws an `AssertionError` if the given values are equal. Values are compared using the strict equality operator (triple equals).

**`assert.equalReference(actual, expected)`**

Throws an `AssertionError` if the given variables do not referce the same object.

**`assert.deepEqual(actual, expected)`**

Throws an `AssertionError` if the given objects (incl. arrays) are not deeply equal (thay have the same number of key-value pairs, and all of them match).

**`assert.less(actual, expected)`**

Throws an `AssertionError` if the first passed value is greater than or equal to the second value.

**`assert.lessOrEqual(actual, expected)`**

Throws an `AssertionError` if the first passed value is greater than the second value.

**`assert.greater(actual, expected)`**

Throws an `AssertionError` if the first passed value is less than or equal to the second value.

**`assert.greaterOrEqual(actual, expected)`**

Throws an `AssertionError` if the first passed value is less than the second value.

**`assert.trapped(value, lowerBound, excludedUpperBound)`**

Throws an `AssertionError` if the given value is not within bounds or if the precondition is not satisfied (lower bound must be greater than the upper bound).

**`assert.equalType(actual, expected)`**

Throws an `AssertionError` if the given values are not of the same type.

**`assert.type(value, expectedType)`**

Throws an `AssertionError` if the given value's type does not match the given type.

**`assert.true(value)`**

Throws an `AssertionError` if the given value is not `true`.

**`assert.false(value)`**

Throws an `AssertionError` if the given value is not `false`.
