"use strict";

import Exception from "./Exception";

class PluginRepeatException extends Exception {
  constructor(plugIn, builtIn = false) {
    super(
      builtIn
        ? `Can not add plugin with name "${plugIn.name}" because of this is a builtin property`
        : `Plugin with name "${plugIn.name}" has already added`,
    );
  }
}

export default PluginRepeatException;
