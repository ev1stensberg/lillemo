"use strict";

exports.__esModule = true;
exports.isRoot = isRoot;
function isRoot(element) {
  if (typeof element === undefined || typeof element === null) {
    return false;
  }

  if (element.parentNode) {
    return true;
  } else {
    return false;
  }
}