"use strict";

import Exception from "./Exception";

class InvalidFunctionException extends Exception {
  constructor(fun: Function) {
    super(
      "Invalid function value of can not convert to a function value, the original value is : " +
        fun,
    );
  }
}

export default InvalidFunctionException;
