"use strict";

import Exception from "./Exception";

class OutOfRangeException extends Exception {
  constructor(index: number) {
    super("Out of range, index:" + index);
  }
}

export default OutOfRangeException;
