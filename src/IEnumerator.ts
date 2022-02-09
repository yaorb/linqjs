"use strict";

import { core } from "./core/core";

import NeedExecuteBeforeException from "./core/exceptions/NeedExecuteBeforeException";
import Enumerable from "./Enumerable";
import IEnumerable from "./IEnumerable";

class IEnumerator<T> {
  private iterator: IEnumerable<T>;
  private next: IteratorResult<T, any>;
  constructor(readonly enumerable) {
    let _iterator;
    let _next: IteratorResult<T, any>;
    core.defineProperties(this, {
      moveNext() {
        _next = _iterator.next();
        return !_next.done;
      },
      reset() {
        _iterator = (
          enumerable[Symbol.iterator] ||
          enumerable.asEnumerable()[Symbol.iterator]
        )();
        _next = false;
      },
      get current() {
        if (_next) {
          return _next.value;
        } else {
          throw new NeedExecuteBeforeException("moveNext");
        }
      },
    });
    this.reset();
  }

  public moveNext() {
    this.next = this.iterator.next();
    return !_next.done;
  },  

  public current() {
    if (this.next) {
      return this.next.value;
    } else {
      throw new NeedExecuteBeforeException("moveNext");
    }
  }

  public reset() {
    this.iterator = (
      this.enumerable[Symbol.iterator] ||
      this.enumerable.asEnumerable()[Symbol.iterator]
    )();
    this.next = false;
  }
}

export default IEnumerator;
