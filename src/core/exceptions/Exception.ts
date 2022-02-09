"use strict";

import { core } from "../core";

class Exception extends Error {
  constructor(message: string) {
    super(message);
    /*
    core.defineProperty(this, "getType", () => core.getType(this), true, true);
    core.defineProperty(
      this,
      "toString",
      () => `${core.getType(this)}: ${message}`,
      false,
      true,
    );
    */
  }

  public get getType() {
    return core.getType(this);
  }

  public toString() {
    return `${core.getType(this)}: ${this.message}`;
  }
}

export default Exception;
