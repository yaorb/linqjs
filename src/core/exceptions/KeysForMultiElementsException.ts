"use strict";

import { core } from "../core";

import Exception from "./Exception";

const objectStr = Object.prototype.toString.call({});

const toString = (key) => {
  let str = key.toString();
  return str === objectStr ? "[object " + core.getType(key) + "]" : str;
};

class KeysForMultiElementsException extends Exception {
  constructor(key) {
    super("Keys for multi elements, key:" + toString(key));
  }
}

export default KeysForMultiElementsException;
