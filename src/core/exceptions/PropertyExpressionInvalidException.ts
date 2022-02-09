"use strict";

import Exception from "./Exception";

class PropertyExpressionInvalidException extends Exception {
  constructor(property) {
    super("The property expression is invalid. property is :" + property);
  }
}

export default PropertyExpressionInvalidException;
