"use strict";

const ProtoEnumerable = require("./ProtoEnumerable");

const core = require("../core/core");

const defaultStrictEqualityComparer = require("../methods/defaultStrictEqualityComparer");
const defaultFalsePredicate = require("../methods/defaultFalsePredicate");

const OutOfRangeException = require("../core/exceptions/OutOfRangeException");

class StringEnumerable extends ProtoEnumerable {
  constructor(string) {
    super(string);
    core.defineProperty(this, Symbol.iterator, function StringIterator() {
      return string[Symbol.iterator]();
    });
  }
  elementAt(index) {
    if (index >= 0 && index < this[core.delegate].length) {
      return this[core.delegate][index];
    } else {
      throw new OutOfRangeException(index);
    }
  }
  indexOf(value, start = 0, comparer = defaultStrictEqualityComparer) {
    if (comparer === defaultStrictEqualityComparer && core.s$indexOf) {
      return core.s$indexOf.call(this[core.delegate], value, start);
    } else {
      return super.indexOf(value, start, comparer);
    }
  }
  lastIndexOf(
    value,
    start = Infinity,
    comparer = defaultStrictEqualityComparer,
  ) {
    if (comparer === defaultStrictEqualityComparer && core.s$lastIndexOf) {
      return core.s$lastIndexOf.call(this[core.delegate], value, start);
    } else {
      return super.lastIndexOf(value, start, comparer);
    }
  }
  includes(element, start = 0) {
    if (core.s$includes) {
      return core.s$includes.call(this[core.delegate], element, start);
    } else {
      return this[core.delegate].indexOf(element, start) !== -1;
    }
  }
  split(splitPredicate = defaultFalsePredicate) {
    if (core.s$split) {
      if (splitPredicate === defaultFalsePredicate) {
        let result = core.s$split.call(this[core.delegate]);
        return core.asEnumerable(result);
      } else if (core.isString(splitPredicate)) {
        let result = core.s$split.call(this[core.delegate], splitPredicate);
        return core.asEnumerable(result);
      } else {
        return super.split(splitPredicate);
      }
    } else {
      return super.split(splitPredicate);
    }
  }
  toArray() {
    if (core.s$split) {
      return core.s$split.call(this[core.delegate]);
    } else {
      return super.toArray();
    }
  }
}

module.exports = StringEnumerable;
