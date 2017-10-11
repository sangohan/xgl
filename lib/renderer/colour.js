'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Renderer = require('../renderer'),
    vertexShaderSource = require('./source/colour/vertexShader'),
    fragmentShaderSource = require('./source/colour/fragmentShader'),
    ColourUniformLocations = require('./locations/colour/uniform'),
    ColourAttributeLocations = require('./locations/colour/attribute');

var createProgram = Renderer.createProgram,
    arrayUtilities = necessary.arrayUtilities,
    merge = arrayUtilities.merge,
    add = merge; ///

var ColourRenderer = function (_Renderer) {
  _inherits(ColourRenderer, _Renderer);

  function ColourRenderer(program, uniformLocations, attributeLocations) {
    _classCallCheck(this, ColourRenderer);

    var _this = _possibleConstructorReturn(this, (ColourRenderer.__proto__ || Object.getPrototypeOf(ColourRenderer)).call(this, program, uniformLocations, attributeLocations));

    _this.vertexColourData = [];

    _this.vertexColourBuffer = null; ///
    return _this;
  }

  _createClass(ColourRenderer, [{
    key: 'getVertexColourAttributeLocation',
    value: function getVertexColourAttributeLocation() {
      var attributeLocations = this.getAttributeLocations(),
          vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();

      return vertexColourAttributeLocation;
    }
  }, {
    key: 'addVertexColourData',
    value: function addVertexColourData(vertexColourData) {
      add(this.vertexColourData, vertexColourData);
    }
  }, {
    key: 'createBuffers',
    value: function createBuffers(canvas) {
      this.vertexColourBuffer = canvas.createBuffer(this.vertexColourData);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'createBuffers', this).call(this, canvas);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers(canvas) {
      var vertexColourAttributeLocation = this.getVertexColourAttributeLocation(),
          vertexColourComponents = 4;

      canvas.bindBuffer(this.vertexColourBuffer, vertexColourAttributeLocation, vertexColourComponents);

      _get(ColourRenderer.prototype.__proto__ || Object.getPrototypeOf(ColourRenderer.prototype), 'bindBuffers', this).call(this, canvas);
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing(canvas) {
      var program = createProgram(vertexShaderSource, fragmentShaderSource, canvas),
          uniformLocations = ColourUniformLocations.fromProgram(program, canvas),
          attributeLocations = ColourAttributeLocations.fromProgram(program, canvas),
          colourRenderer = new ColourRenderer(program, uniformLocations, attributeLocations);

      return colourRenderer;
    }
  }]);

  return ColourRenderer;
}(Renderer);

module.exports = ColourRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9yZW5kZXJlci9jb2xvdXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIlJlbmRlcmVyIiwidmVydGV4U2hhZGVyU291cmNlIiwiZnJhZ21lbnRTaGFkZXJTb3VyY2UiLCJDb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIiwiY3JlYXRlUHJvZ3JhbSIsImFycmF5VXRpbGl0aWVzIiwibWVyZ2UiLCJhZGQiLCJDb2xvdXJSZW5kZXJlciIsInByb2dyYW0iLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwidmVydGV4Q29sb3VyRGF0YSIsInZlcnRleENvbG91ckJ1ZmZlciIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24iLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzIiwiYmluZEJ1ZmZlciIsImZyb21Qcm9ncmFtIiwiY29sb3VyUmVuZGVyZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsYUFBUixDQUFqQjtBQUFBLElBQ01FLHFCQUFxQkYsUUFBUSw4QkFBUixDQUQzQjtBQUFBLElBRU1HLHVCQUF1QkgsUUFBUSxnQ0FBUixDQUY3QjtBQUFBLElBR01JLHlCQUF5QkosUUFBUSw0QkFBUixDQUgvQjtBQUFBLElBSU1LLDJCQUEyQkwsUUFBUSw4QkFBUixDQUpqQzs7QUFNTSxJQUFFTSxhQUFGLEdBQW9CTCxRQUFwQixDQUFFSyxhQUFGO0FBQUEsSUFDRUMsY0FERixHQUNxQlIsU0FEckIsQ0FDRVEsY0FERjtBQUFBLElBRUVDLEtBRkYsR0FFWUQsY0FGWixDQUVFQyxLQUZGO0FBQUEsSUFHQUMsR0FIQSxHQUdNRCxLQUhOLEMsQ0FHYzs7SUFFZEUsYzs7O0FBQ0osMEJBQVlDLE9BQVosRUFBcUJDLGdCQUFyQixFQUF1Q0Msa0JBQXZDLEVBQTJEO0FBQUE7O0FBQUEsZ0lBQ25ERixPQURtRCxFQUMxQ0MsZ0JBRDBDLEVBQ3hCQyxrQkFEd0I7O0FBR3pELFVBQUtDLGdCQUFMLEdBQXdCLEVBQXhCOztBQUVBLFVBQUtDLGtCQUFMLEdBQTBCLElBQTFCLENBTHlELENBS3pCO0FBTHlCO0FBTTFEOzs7O3VEQUVrQztBQUNqQyxVQUFNRixxQkFBcUIsS0FBS0cscUJBQUwsRUFBM0I7QUFBQSxVQUNNQyxnQ0FBZ0NKLG1CQUFtQkssZ0NBQW5CLEVBRHRDOztBQUdBLGFBQU9ELDZCQUFQO0FBQ0Q7Ozt3Q0FFbUJILGdCLEVBQWtCO0FBQ3BDTCxVQUFJLEtBQUtLLGdCQUFULEVBQTJCQSxnQkFBM0I7QUFDRDs7O2tDQUVhSyxNLEVBQVE7QUFDcEIsV0FBS0osa0JBQUwsR0FBMEJJLE9BQU9DLFlBQVAsQ0FBb0IsS0FBS04sZ0JBQXpCLENBQTFCOztBQUVBLG9JQUFvQkssTUFBcEI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsVUFBTUYsZ0NBQWdDLEtBQUtDLGdDQUFMLEVBQXRDO0FBQUEsVUFDTUcseUJBQXlCLENBRC9COztBQUdBRixhQUFPRyxVQUFQLENBQWtCLEtBQUtQLGtCQUF2QixFQUEyQ0UsNkJBQTNDLEVBQTBFSSxzQkFBMUU7O0FBRUEsa0lBQWtCRixNQUFsQjtBQUNEOzs7Z0NBRWtCQSxNLEVBQVE7QUFDekIsVUFBTVIsVUFBVUwsY0FBY0osa0JBQWQsRUFBa0NDLG9CQUFsQyxFQUF3RGdCLE1BQXhELENBQWhCO0FBQUEsVUFDTVAsbUJBQW1CUix1QkFBdUJtQixXQUF2QixDQUFtQ1osT0FBbkMsRUFBNENRLE1BQTVDLENBRHpCO0FBQUEsVUFFTU4scUJBQXFCUix5QkFBeUJrQixXQUF6QixDQUFxQ1osT0FBckMsRUFBOENRLE1BQTlDLENBRjNCO0FBQUEsVUFHTUssaUJBQWlCLElBQUlkLGNBQUosQ0FBbUJDLE9BQW5CLEVBQTRCQyxnQkFBNUIsRUFBOENDLGtCQUE5QyxDQUh2Qjs7QUFLQSxhQUFPVyxjQUFQO0FBQ0Q7Ozs7RUExQzBCdkIsUTs7QUE2QzdCd0IsT0FBT0MsT0FBUCxHQUFpQmhCLGNBQWpCIiwiZmlsZSI6ImNvbG91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXInKSxcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSA9IHJlcXVpcmUoJy4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXInKSxcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlID0gcmVxdWlyZSgnLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyJyksXG4gICAgICBDb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gcmVxdWlyZSgnLi9sb2NhdGlvbnMvY29sb3VyL3VuaWZvcm0nKSxcbiAgICAgIENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IHJlcXVpcmUoJy4vbG9jYXRpb25zL2NvbG91ci9hdHRyaWJ1dGUnKTtcblxuY29uc3QgeyBjcmVhdGVQcm9ncmFtIH0gPSBSZW5kZXJlcixcbiAgICAgIHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgbWVyZ2UgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgYWRkID0gbWVyZ2U7ICAvLy9cblxuY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHN1cGVyKHByb2dyYW0sIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91ckRhdGEgPSBbXTtcbiAgICBcbiAgICB0aGlzLnZlcnRleENvbG91ckJ1ZmZlciA9IG51bGw7IC8vL1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3VyRGF0YSh2ZXJ0ZXhDb2xvdXJEYXRhKSB7XG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3VyRGF0YSwgdmVydGV4Q29sb3VyRGF0YSk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3VyQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckRhdGEpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQ29tcG9uZW50cyA9IDQ7XG5cbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleENvbG91ckJ1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuXG4gICAgc3VwZXIuYmluZEJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIocHJvZ3JhbSwgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJSZW5kZXJlcjtcbiJdfQ==