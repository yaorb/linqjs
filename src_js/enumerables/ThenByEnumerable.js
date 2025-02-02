"use strict";

const IOrderedEnumerable = require("./IOrderedEnumerable");

const methods = require("../methods/methods");

const thenByComparer = require("../methods/thenByComparer");
const selectorComparer = require("../methods/selectorComparer");
const defaultSelector = require("../methods/defaultSelector");
const defaultComparer = require("../methods/defaultComparer");

class ThenByEnumerable extends IOrderedEnumerable {
  constructor(
    orderedSource,
    keySelector = defaultSelector,
    comparer = defaultComparer,
  ) {
    keySelector = methods.asSelector(keySelector);
    comparer = methods.asComparer(comparer);
    super(
      orderedSource[IOrderedEnumerable.SOURCE],
      thenByComparer(
        orderedSource[IOrderedEnumerable.ORDER_BY_COMPARER],
        selectorComparer(keySelector, comparer),
      ),
    );
  }
}

module.exports = ThenByEnumerable;
