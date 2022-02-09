"use strict";

import Exception from "./Exception";

class NeedExecuteBeforeException extends Exception {
  constructor(methodName: string) {
    super(`Need execute method [${methodName}()] before`);
  }
}

export default NeedExecuteBeforeException;
