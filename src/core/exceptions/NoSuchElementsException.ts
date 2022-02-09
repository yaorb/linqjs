"use strict";

import Exception from "./Exception";

class NoSuchElementsException extends Exception {
  constructor() {
    super("No such elements");
  }
}

export default NoSuchElementsException;
