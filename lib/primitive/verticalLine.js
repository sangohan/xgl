'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('../utilities/array'),
    rotationUtilities = require('../utilities/rotation'),
    quaternionUtilities = require('../utilities/quaternion'),
    intersectionUtilities = require('../utilities/intersection');

var first = arrayUtilities.first,
    rotatePosition = rotationUtilities.rotatePosition,
    calculateIntersection = intersectionUtilities.calculateIntersection,
    calculateRotationAboutZAxisQuaternion = quaternionUtilities.calculateRotationAboutZAxisQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

var VerticalLine = function () {
  function VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, VerticalLine);

    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(VerticalLine, [{
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: 'getForwardsRotationQuaternion',
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: 'getBackwardsRotationQuaternion',
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet, smallerFacets) {
      var _this = this;

      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = calculateIntersection(edge, _this.firstPositionComponent);

        return intersection;
      });

      facet.splitWithIntersections(intersections, smallerFacets);
    }
  }, {
    key: 'splitFacets',
    value: function splitFacets(facets) {
      var _this2 = this;

      var smallerFacets = [];

      facets.forEach(function (facet) {
        facet.rotate(_this2.forwardsRotationQuaternion);

        _this2.splitFacet(facet, smallerFacets);
      });

      smallerFacets.forEach(function (smallerFacet) {
        return smallerFacet.rotate(_this2.backwardsRotationQuaternion);
      });

      return smallerFacets;
    }
  }], [{
    key: 'fromMaskingEdge',
    value: function fromMaskingEdge(maskingEdge) {
      var maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion(maskingEdge),
          rotationQuaternion = rotationAboutZAxisQuaternion,
          ///
      forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          position = rotatePosition(maskingEdgePosition, rotationQuaternion),
          positionComponents = position,
          ///
      firstPositionComponent = first(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);

      return verticalLine;
    }
  }]);

  return VerticalLine;
}();

module.exports = VerticalLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwicmVxdWlyZSIsInJvdGF0aW9uVXRpbGl0aWVzIiwicXVhdGVybmlvblV0aWxpdGllcyIsImludGVyc2VjdGlvblV0aWxpdGllcyIsImZpcnN0Iiwicm90YXRlUG9zaXRpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJWZXJ0aWNhbExpbmUiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJmYWNldCIsInNtYWxsZXJGYWNldHMiLCJlZGdlcyIsImdldEVkZ2VzIiwiaW50ZXJzZWN0aW9ucyIsIm1hcCIsImVkZ2UiLCJpbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiZmFjZXRzIiwiZm9yRWFjaCIsInJvdGF0ZSIsInNwbGl0RmFjZXQiLCJzbWFsbGVyRmFjZXQiLCJtYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJwb3NpdGlvbiIsInBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRpY2FsTGluZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsb0JBQVIsQ0FBdkI7QUFBQSxJQUNNQyxvQkFBb0JELFFBQVEsdUJBQVIsQ0FEMUI7QUFBQSxJQUVNRSxzQkFBc0JGLFFBQVEseUJBQVIsQ0FGNUI7QUFBQSxJQUdNRyx3QkFBd0JILFFBQVEsMkJBQVIsQ0FIOUI7O0FBS00sSUFBRUksS0FBRixHQUFZTCxjQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxjQURGLEdBQ3FCSixpQkFEckIsQ0FDRUksY0FERjtBQUFBLElBRUVDLHFCQUZGLEdBRTRCSCxxQkFGNUIsQ0FFRUcscUJBRkY7QUFBQSxJQUdFQyxxQ0FIRixHQUd1SEwsbUJBSHZILENBR0VLLHFDQUhGO0FBQUEsSUFHeUNDLG1DQUh6QyxHQUd1SE4sbUJBSHZILENBR3lDTSxtQ0FIekM7QUFBQSxJQUc4RUMsb0NBSDlFLEdBR3VIUCxtQkFIdkgsQ0FHOEVPLG9DQUg5RTs7SUFLQUMsWTtBQUNKLHdCQUFZQyxzQkFBWixFQUFvQ0MsMEJBQXBDLEVBQWdFQywyQkFBaEUsRUFBNkY7QUFBQTs7QUFDM0YsU0FBS0Ysc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUNBLFNBQUtDLDBCQUFMLEdBQWtDQSwwQkFBbEM7QUFDQSxTQUFLQywyQkFBTCxHQUFtQ0EsMkJBQW5DO0FBQ0Q7Ozs7Z0RBRTJCO0FBQzFCLGFBQU8sS0FBS0Ysc0JBQVo7QUFDRDs7O29EQUUrQjtBQUM5QixhQUFPLEtBQUtDLDBCQUFaO0FBQ0Q7OztxREFFZ0M7QUFDL0IsYUFBTyxLQUFLQywyQkFBWjtBQUNEOzs7K0JBRVVDLEssRUFBT0MsYSxFQUFlO0FBQUE7O0FBQy9CLFVBQU1DLFFBQVFGLE1BQU1HLFFBQU4sRUFBZDtBQUFBLFVBQ01DLGdCQUFnQkYsTUFBTUcsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBVTtBQUNsQyxZQUFNQyxlQUFlZixzQkFBc0JjLElBQXRCLEVBQTRCLE1BQUtULHNCQUFqQyxDQUFyQjs7QUFFQSxlQUFPVSxZQUFQO0FBQ0QsT0FKZSxDQUR0Qjs7QUFPQVAsWUFBTVEsc0JBQU4sQ0FBNkJKLGFBQTdCLEVBQTRDSCxhQUE1QztBQUNEOzs7Z0NBRVdRLE0sRUFBUTtBQUFBOztBQUNsQixVQUFNUixnQkFBZ0IsRUFBdEI7O0FBRUFRLGFBQU9DLE9BQVAsQ0FBZSxVQUFDVixLQUFELEVBQVc7QUFDeEJBLGNBQU1XLE1BQU4sQ0FBYSxPQUFLYiwwQkFBbEI7O0FBRUEsZUFBS2MsVUFBTCxDQUFnQlosS0FBaEIsRUFBdUJDLGFBQXZCO0FBQ0QsT0FKRDs7QUFNQUEsb0JBQWNTLE9BQWQsQ0FBc0IsVUFBQ0csWUFBRDtBQUFBLGVBQWtCQSxhQUFhRixNQUFiLENBQW9CLE9BQUtaLDJCQUF6QixDQUFsQjtBQUFBLE9BQXRCOztBQUVBLGFBQU9FLGFBQVA7QUFDRDs7O29DQUVzQmEsVyxFQUFhO0FBQ2xDLFVBQU1DLHNCQUFzQkQsWUFBWUUsV0FBWixFQUE1QjtBQUFBLFVBQ01DLCtCQUErQnhCLHNDQUFzQ3FCLFdBQXRDLENBRHJDO0FBQUEsVUFFTUkscUJBQXFCRCw0QkFGM0I7QUFBQSxVQUUwRDtBQUNwRG5CLG1DQUE2Qkosb0NBQW9Dd0Isa0JBQXBDLENBSG5DO0FBQUEsVUFJTW5CLDhCQUE4QkoscUNBQXFDdUIsa0JBQXJDLENBSnBDO0FBQUEsVUFLTUMsV0FBVzVCLGVBQWV3QixtQkFBZixFQUFvQ0csa0JBQXBDLENBTGpCO0FBQUEsVUFNTUUscUJBQXFCRCxRQU4zQjtBQUFBLFVBTXFDO0FBQy9CdEIsK0JBQXlCUCxNQUFNOEIsa0JBQU4sQ0FQL0I7QUFBQSxVQVFNQyxlQUFlLElBQUl6QixZQUFKLENBQWlCQyxzQkFBakIsRUFBeUNDLDBCQUF6QyxFQUFxRUMsMkJBQXJFLENBUnJCOztBQVVBLGFBQU9zQixZQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCM0IsWUFBakIiLCJmaWxlIjoidmVydGljYWxMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpLFxuICAgICAgaW50ZXJzZWN0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvbicpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcm90YXRlUG9zaXRpb24gfSA9IHJvdGF0aW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVJbnRlcnNlY3Rpb24gfSA9IGludGVyc2VjdGlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcztcblxuY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbExpbmU7XG4iXX0=