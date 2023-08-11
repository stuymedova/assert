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

**`assert.equal(a, b)`**

Throws an `AssertionError` if the given values are not equal. Values are compared using the strict equality operator (triple equals).

**`assert.notEqual(a, b)`**

Throws an `AssertionError` if the given values are equal. Values are compared using the strict equality operator (triple equals).

**`assert.equalReference(a, b)`**

Throws an `AssertionError` if the given variables do not referce the same object.

**`assert.deepEqual(a, b)`**

Throws an `AssertionError` if the given objects (incl. arrays) are not deeply equal (thay have the same number of key-value pairs, and all of them match).

**`assert.less(a, b)`**

Throws an `AssertionError` if the first passed value is greater than or equal to the second value.

**`assert.lessOrEqual(a, b)`**

Throws an `AssertionError` if the first passed value is greater than the second value.

**`assert.greater(a, b)`**

Throws an `AssertionError` if the first passed value is less than or equal to the second value.

**`assert.greaterOrEqual(a, b)`**

Throws an `AssertionError` if the first passed value is less than the second value.

**`assert.trapped(value, lowerBound, excludedUpperBound)`**

Throws an `AssertionError` if the given value is not within bounds or if the precondition is not satisfied (lower bound must be greater than the upper bound).

**`assert.equalType(a, b)`**

Throws an `AssertionError` if the given values are not of the same type.

**`assert.type(value, type)`**

Throws an `AssertionError` if the given value's type does not match the given type.

**`assert.true(value)`**

Throws an `AssertionError` if the given value is not `true`.

**`assert.false(value)`**

Throws an `AssertionError` if the given value is not `false`.
