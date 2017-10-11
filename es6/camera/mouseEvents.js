'use strict';

const MOUSE_UP = 'MOUSE_UP',
      MOUSE_DOWN = 'MOUSE_DOWN',
      MOUSE_MOVE = 'MOUSE_MOVE',
      MOUSE_WHEEL = 'MOUSE_WHEEL';

class MouseEvents {
  constructor(canvas) {
    this.canvas = canvas;

    this.handlers = {};

    const mouseEventTypes = [
            MOUSE_UP,
            MOUSE_DOWN,
            MOUSE_MOVE,
            MOUSE_WHEEL
          ];

    mouseEventTypes.forEach(function(mouseEventType) {
      this.handlers[mouseEventType] = [];
    }.bind(this));
    
    this.addEventHandler(canvas, 'mouseup', function(event) { this.onMouseEvent(MOUSE_UP, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousedown', function(event) { this.onMouseEvent(MOUSE_DOWN, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousemove', function(event) { this.onMouseEvent(MOUSE_MOVE, event) }.bind(this) );
    this.addEventHandler(canvas, 'mousewheel', function(event) { this.onMouseWheelEvent(event) }.bind(this) );
  }

  addMouseUpEventHandler(mouseUpEventHandler) {
    this.addMouseEventHandler(MOUSE_UP, mouseUpEventHandler);
  }

  addMouseDownEventHandler(mouseDownEventHandler) {
    this.addMouseEventHandler(MOUSE_DOWN, mouseDownEventHandler);
  }

  addMouseMoveEventHandler(mouseMoveEventHandler) {
    this.addMouseEventHandler(MOUSE_MOVE, mouseMoveEventHandler);
  }

  addMouseWheelEventHandler(mouseWheelEventHandler) {
    this.addMouseEventHandler(MOUSE_WHEEL, mouseWheelEventHandler);
  }

  addEventHandler(canvas, type, handler) {
    const domElement = canvas.getDOMElement();

    domElement.addEventListener(type, function(event) {
      event.preventDefault();

      handler(event);
    });
  }

  onMouseEvent(mouseEventType, event) {
    const mouseEventHandlers = this.handlers[mouseEventType],
          mouseCoordinates = this.canvas.mouseCoordinatesFromEvent(event);

    mouseEventHandlers.forEach(function(mouseEventHandler) {
      mouseEventHandler(mouseCoordinates);
    });
  }

  onMouseWheelEvent(event) {
    const mouseWheelEventType = MOUSE_WHEEL,
          mouseWheelEventHandlers = this.handlers[mouseWheelEventType],
          delta = Math.max(-1, Math.min(1, event.wheelDelta)); ///

    mouseWheelEventHandlers.forEach(function(mouseWheelEventHandler) {
      mouseWheelEventHandler(delta);
    });
  }

  addMouseEventHandler(mouseEventType, mouseEventHandler) {
    const mouseEventHandlers = this.handlers[mouseEventType];

    mouseEventHandlers.push(mouseEventHandler);
  }

  static fromNothing(canvas) {
    const mouseEvents = new MouseEvents(canvas);

    return mouseEvents;
  }
}

module.exports = MouseEvents;