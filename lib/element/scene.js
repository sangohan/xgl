'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(colourRenderer, textureRenderer, canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourRenderer',
    value: function getColourRenderer() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureRenderer',
    value: function getTextureRenderer() {
      return this.textureRenderer;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = function () {
        this.resize();

        this.forceUpdate();
      }.bind(this);

      this.resize();

      this.forceUpdate();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas),
          transforms = [];


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });

      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      colourRenderer.createBuffers(canvas);
      textureRenderer.createBuffers(canvas);

      canvas.enableDepthTesting();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ29sb3VyUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJTY2VuZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsImNsZWFyIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiYXNzaWduQ29udGV4dCIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvcmNlVXBkYXRlIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJpbWFnZU1hcCIsImZyb21Ob3RoaW5nIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSU1H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UixDQUF1QnBDLEtBQXZCLEVBQThCK0IsVUFBOUIsRUFBMEM5QixjQUExQyxFQUEwREMsZUFBMUQsRUFBMkVDLE1BQTNFLENBSmtCO0FBQUEsVUFLMUJrQyxVQUwwQixHQUtiLEVBTGE7OztBQU9oQ0wsb0JBQWNNLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFDLE1BQWIsQ0FBb0J2QyxjQUFwQixFQUFvQ0MsZUFBcEMsRUFBcURtQyxVQUFyRDtBQUNELE9BRkQ7O0FBSUEsVUFBSUosUUFBSixFQUFjO0FBQ1ovQix3QkFBZ0J1QyxhQUFoQixDQUE4QlIsUUFBOUIsRUFBd0M5QixNQUF4QztBQUNEOztBQUVERixxQkFBZXlDLGFBQWYsQ0FBNkJ2QyxNQUE3QjtBQUNBRCxzQkFBZ0J3QyxhQUFoQixDQUE4QnZDLE1BQTlCOztBQUVBQSxhQUFPd0Msa0JBQVA7O0FBRUFSLFlBQU1TLFVBQU47O0FBRUEsYUFBT1QsS0FBUDtBQUNEOzs7O0VBL0ZpQnZDLE87O0FBa0dwQmlELE9BQU9DLE9BQVAsR0FBaUI5QyxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcyksXG4gICAgICAgICAgdHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==