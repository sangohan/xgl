'use strict';

class Element {
  constructor(canvas) {
    this.canvas = canvas;
  }
  
  getCanvas() {
    return this.canvas;
  }
  
  getChildElements() {
    return this.childElements;
  }
  
  setChildElements(childElements) {
    this.childElements = childElements;
  }

  assignContext(names, thenDelete) {
    const argumentsLength = arguments.length;
  
    if (argumentsLength === 1) {
      const firstArgument = first(arguments);
  
      if (typeof firstArgument === 'boolean') {
        names = Object.keys(this.context);
  
        thenDelete = firstArgument;
      } else {
        thenDelete = true;
      }
    }
  
    if (argumentsLength === 0) {
      names = Object.keys(this.context);
  
      thenDelete = true;
    }
  
    names.forEach(function(name) {
      const value = this.context[name],
            propertyName = name,  ///
            descriptor = {
              value: value
            };
  
      Object.defineProperty(this, propertyName, descriptor);
  
      if (thenDelete) {
        delete this.context[name];
      }
    }.bind(this));
  }

  updateContext(childElement) {
    const context = (typeof childElement.parentContext === 'function') ?
                      childElement.parentContext() :
                        childElement.context;

    this.context = Object.assign({}, this.context, context);

    delete childElement.context;
  }

  initialise(colourRenderer, textureRenderer, transforms) {
    ///
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { canvas} = properties,
          element = new Class(canvas, ...remainingArguments),
          childElements = childElementsFromElementOrProperties(element, properties);

    element.setChildElements(childElements);

    childElements.forEach(function(childElement) {
      element.updateContext(childElement);
    });

    return element;
  }
}

module.exports = Element;

function childElementsFromElementOrProperties(element, properties) {
  const childElements = (typeof element.childElements === 'function') ?
                          element.childElements(properties) :
                            properties.childElements || [];

  return childElements;
}

