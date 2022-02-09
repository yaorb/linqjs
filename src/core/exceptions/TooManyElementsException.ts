"use strict";

import Exception from "./Exception";

class TooManyElementsException extends Exception {
  constructor() {
    super("Too many elements");
  }
}

export default TooManyElementsException;
