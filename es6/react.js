'use strict';

const Element = require('./element'),
      CanvasElement = require('./element/canvas'),
      arrayUtilities = require('./utilities/array'),
      FunctionCanvasElement = require('./element/canvas/function');

const { guarantee } = arrayUtilities;

function createElement(firstArgument, properties, ...childElements) {
  properties = properties || {};  ///

  let element;

  if (firstArgument instanceof CanvasElement) {
    element = firstArgument;  ///
  } else if (isSubclassOf(firstArgument, Element)) {
    const Class = firstArgument;  ///

    Object.assign(properties, {
      childElements
    });

    element = Class.fromProperties(properties);
  } else if (typeof firstArgument === 'function') {
    const func = firstArgument,  ///
          childElements = guarantee(func(properties));

    Object.assign(properties, {
      childElements
    });

    element = FunctionCanvasElement.fromProperties(properties);
  }

  return element;
}

const React = {
  createElement: createElement
};

module.exports = React;

function isSubclassOf(argument, Class) {
  let typeOf = false;

  if (argument.name === Class.name) { ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
