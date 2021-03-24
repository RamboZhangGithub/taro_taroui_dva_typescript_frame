'use strict';

var requireFromString = require('require-from-string');
var objectToAST = require('./object-to-ast');

module.exports = getReplacement;

function getReplacement(_ref) {
  var stringToPreval = _ref.string,
      filename = _ref.filename,
      babel = _ref.babel;

  var _babel$transform = babel.transform(stringToPreval, {
    filename
  }),
      transpiled = _babel$transform.code;

  var val = requireFromString(transpiled, filename);
  return objectToAST(val);
}