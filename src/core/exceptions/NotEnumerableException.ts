"use strict";

import Exception from "./Exception";
import { core } from "../core";

class NoEnumerableException extends Exception {
  constructor(value: any) {
    super(
      `Value of type [${core.getType(
        value,
      )}] is not an enumerable value and can not convert to an enumerable value`,
    );
  }
}

export default NoEnumerableException;
