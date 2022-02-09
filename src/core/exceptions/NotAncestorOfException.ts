"use strict";

import { core } from "../core";

import Exception from "./Exception";

class NotAncestorOfException extends Exception {
  constructor(ancestor, descendant) {
    super(
      `'${
        core.isUndefined(ancestor.key) ? ancestor.value : ancestor.key
      }' is not ancestor node of '${
        core.isUndefined(descendant.key) ? descendant.value : descendant.key
      }'`,
    );
  }
}

export default NotAncestorOfException;
