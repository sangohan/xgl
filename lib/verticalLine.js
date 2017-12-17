'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array'),
    rotationUtilities = require('./utilities/rotation'),
    approximateUtilities = require('./utilities/approximate');

var first = arrayUtilities.first,
    second = arrayUtilities.second,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    rotatePositionAboutZAxis = rotationUtilities.rotatePositionAboutZAxis,
    calculateRotationAboutZAxisMatrix = rotationUtilities.calculateRotationAboutZAxisMatrix,
    calculateForwardsRotationAboutZAxisMatrix = rotationUtilities.calculateForwardsRotationAboutZAxisMatrix,
    calculateBackwardsRotationAboutZAxisMatrix = rotationUtilities.calculateBackwardsRotationAboutZAxisMatrix;

var VerticalLine = function () {
  function VerticalLine(firstPositionComponent, rotationAboutZAxisMatrix) {
    _classCallCheck(this, VerticalLine);

    this.firstPositionComponent = firstPositionComponent;
    this.rotationAboutZAxisMatrix = rotationAboutZAxisMatrix;
  }

  _createClass(VerticalLine, [{
    key: 'getFirstPositionComponent',
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: 'getRotationAboutZAxisMatrix',
    value: function getRotationAboutZAxisMatrix() {
      return this.rotationAboutZAxisMatrix;
    }
  }, {
    key: 'splitFacets',
    value: function splitFacets(facets) {
      var smallerFacets = [],
          forwardsRotationAboutZAxisMatrix = calculateForwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix),
          backwardsRotationAboutZAxisMatrix = calculateBackwardsRotationAboutZAxisMatrix(this.rotationAboutZAxisMatrix);

      facets.forEach(function (facet) {
        facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

        this.splitFacet(facet, smallerFacets);
      }.bind(this));

      smallerFacets.forEach(function (smallerFacet) {
        smallerFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      return smallerFacets;
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet, smallerFacets) {
      var intersections = this.calculateIntersectionsWithFacet(facet);

      facet.splitWithIntersections(intersections, smallerFacets);
    }
  }, {
    key: 'calculateIntersectionsWithFacet',
    value: function calculateIntersectionsWithFacet(facet) {
      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = this.calculateIntersection(edge);

        return intersection;
      }.bind(this));

      return intersections;
    }
  }, {
    key: 'calculateIntersection',
    value: function calculateIntersection(edge) {
      var intersection = null;

      var edgeNonParallel = isEdgeNonParallel(edge);

      if (edgeNonParallel) {
        var edgeIntersection = this.calculateEdgeIntersection(edge),
            edgeIntersectionNonTrivial = isIntersectionNonTrivial(edgeIntersection);

        if (edgeIntersectionNonTrivial) {
          intersection = edgeIntersection; ///
        }
      }

      return intersection;
    }
  }, {
    key: 'calculateEdgeIntersection',
    value: function calculateEdgeIntersection(edge) {
      var edgePosition = edge.getPosition(),
          edgeExtent = edge.getExtent(),
          edgePositionComponents = edgePosition,
          ///
      edgeExtentComponents = edgeExtent,
          ///
      firstEdgePositionComponent = first(edgePositionComponents),
          firstEdgeExtentComponent = first(edgeExtentComponents),
          edgeIntersection = (this.firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;

      return edgeIntersection;
    }
  }], [{
    key: 'fromMaskingEdge',
    value: function fromMaskingEdge(maskingEdge) {
      var maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisMatrix = calculateRotationAboutZAxisMatrix(maskingEdge),
          position = rotatePositionAboutZAxis(maskingEdgePosition, rotationAboutZAxisMatrix),
          positionComponents = position,
          ///
      firstPositionComponent = first(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, rotationAboutZAxisMatrix);

      return verticalLine;
    }
  }]);

  return VerticalLine;
}();

module.exports = VerticalLine;

function isEdgeNonParallel(edge) {
  var edgeExtent = edge.getExtent(),
      edgeExtentComponents = edgeExtent,
      ///
  firstEdgeExtentComponent = first(edgeExtentComponents),
      secondEdgeExtentComponent = second(edgeExtentComponents),
      edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent,
      edgeAngleTangentApproximatelyEqualToZero = isApproximatelyEqualToZero(edgeAngleTangent),
      edgeParallel = edgeAngleTangentApproximatelyEqualToZero,
      ///
  edgeNonParallel = !edgeParallel;

  return edgeNonParallel;
}

function isIntersectionNonTrivial(intersection) {
  var intersectionNonTrivial = intersection > 0 && intersection < 1;

  return intersectionNonTrivial;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbExpbmUuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJyZXF1aXJlIiwicm90YXRpb25VdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJyb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMiLCJjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsIlZlcnRpY2FsTGluZSIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJyb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmYWNldHMiLCJzbWFsbGVyRmFjZXRzIiwiZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJyb3RhdGVBYm91dFpBeGlzIiwic3BsaXRGYWNldCIsImJpbmQiLCJzbWFsbGVyRmFjZXQiLCJpbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhGYWNldCIsInNwbGl0V2l0aEludGVyc2VjdGlvbnMiLCJlZGdlcyIsImdldEVkZ2VzIiwibWFwIiwiZWRnZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbiIsImVkZ2VOb25QYXJhbGxlbCIsImlzRWRnZU5vblBhcmFsbGVsIiwiZWRnZUludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24iLCJlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCIsImVkZ2VQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZWRnZUV4dGVudCIsImdldEV4dGVudCIsImVkZ2VQb3NpdGlvbkNvbXBvbmVudHMiLCJlZGdlRXh0ZW50Q29tcG9uZW50cyIsImZpcnN0RWRnZVBvc2l0aW9uQ29tcG9uZW50IiwiZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IiwibWFza2luZ0VkZ2UiLCJtYXNraW5nRWRnZVBvc2l0aW9uIiwicG9zaXRpb24iLCJwb3NpdGlvbkNvbXBvbmVudHMiLCJ2ZXJ0aWNhbExpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCIsImVkZ2VBbmdsZVRhbmdlbnQiLCJlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiZWRnZVBhcmFsbGVsIiwiaW50ZXJzZWN0aW9uTm9uVHJpdmlhbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxtQkFBUixDQUF2QjtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSxzQkFBUixDQUQxQjtBQUFBLElBRU1FLHVCQUF1QkYsUUFBUSx5QkFBUixDQUY3Qjs7SUFJUUcsSyxHQUFrQkosYyxDQUFsQkksSztJQUFPQyxNLEdBQVdMLGMsQ0FBWEssTTtJQUNQQywwQixHQUErQkgsb0IsQ0FBL0JHLDBCO0lBQ0FDLHdCLEdBQXVKTCxpQixDQUF2Skssd0I7SUFBMEJDLGlDLEdBQTZITixpQixDQUE3SE0saUM7SUFBbUNDLHlDLEdBQTBGUCxpQixDQUExRk8seUM7SUFBMkNDLDBDLEdBQStDUixpQixDQUEvQ1EsMEM7O0lBRTFHQyxZO0FBQ0osd0JBQVlDLHNCQUFaLEVBQW9DQyx3QkFBcEMsRUFBOEQ7QUFBQTs7QUFDNUQsU0FBS0Qsc0JBQUwsR0FBOEJBLHNCQUE5QjtBQUNBLFNBQUtDLHdCQUFMLEdBQWdDQSx3QkFBaEM7QUFDRDs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLRCxzQkFBWjtBQUNEOzs7a0RBRTZCO0FBQzVCLGFBQU8sS0FBS0Msd0JBQVo7QUFDRDs7O2dDQUVXQyxNLEVBQVE7QUFDbEIsVUFBTUMsZ0JBQWdC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O0FBQUEsTUFHTVUsNEJBQTRCakQsT0FBT3VDLG9CQUFQLENBSGxDO0FBQUEsTUFJTVcsbUJBQW1CVCwyQkFBMkJRLHlCQUpwRDtBQUFBLE1BS01FLDJDQUEyQ2xELDJCQUEyQmlELGdCQUEzQixDQUxqRDtBQUFBLE1BTU1FLGVBQWVELHdDQU5yQjtBQUFBLE1BTStEO0FBQ3pEdkIsb0JBQWtCLENBQUN3QixZQVB6Qjs7QUFTQSxTQUFPeEIsZUFBUDtBQUNEOztBQUVELFNBQVNLLHdCQUFULENBQWtDUCxZQUFsQyxFQUFnRDtBQUM5QyxNQUFNMkIseUJBQTJCM0IsZUFBZSxDQUFoQixJQUF3QkEsZUFBZSxDQUF2RTs7QUFFQSxTQUFPMkIsc0JBQVA7QUFDRCIsImZpbGUiOiJ2ZXJ0aWNhbExpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyByb3RhdGVQb3NpdGlvbkFib3V0WkF4aXMsIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgsIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCkge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldFJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbkFib3V0WkF4aXNNYXRyaXg7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCh0aGlzLnJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KHRoaXMucm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgICBcbiAgICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQucm90YXRlQWJvdXRaQXhpcyhmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goZnVuY3Rpb24oc21hbGxlckZhY2V0KSB7XG4gICAgICBzbWFsbGVyRmFjZXQucm90YXRlQWJvdXRaQXhpcyhiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7ICAgIFxuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcChmdW5jdGlvbihlZGdlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gIH1cbiAgXG4gIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlKSB7XG4gICAgbGV0IGludGVyc2VjdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBlZGdlTm9uUGFyYWxsZWwgPSBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKTtcblxuICAgIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICAgIGNvbnN0IGVkZ2VJbnRlcnNlY3Rpb24gPSB0aGlzLmNhbGN1bGF0ZUVkZ2VJbnRlcnNlY3Rpb24oZWRnZSksXG4gICAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9IGlzSW50ZXJzZWN0aW9uTm9uVHJpdmlhbChlZGdlSW50ZXJzZWN0aW9uKTtcblxuICAgICAgaWYgKGVkZ2VJbnRlcnNlY3Rpb25Ob25Ucml2aWFsKSB7XG4gICAgICAgIGludGVyc2VjdGlvbiA9IGVkZ2VJbnRlcnNlY3Rpb247ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICB9XG5cbiAgY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlKSB7XG4gICAgY29uc3QgZWRnZVBvc2l0aW9uID0gZWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICAgIGVkZ2VQb3NpdGlvbkNvbXBvbmVudHMgPSBlZGdlUG9zaXRpb24sIC8vL1xuICAgICAgICAgIGVkZ2VFeHRlbnRDb21wb25lbnRzID0gZWRnZUV4dGVudCwgLy8vXG4gICAgICAgICAgZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChlZGdlUG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgICAgZWRnZUludGVyc2VjdGlvbiA9ICh0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgLSBmaXJzdEVkZ2VQb3NpdGlvbkNvbXBvbmVudCkgLyBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQ7XG4gICAgXG4gICAgcmV0dXJuIGVkZ2VJbnRlcnNlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzTWF0cml4KG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uQWJvdXRaQXhpcyhtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgpLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIHJvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxMaW5lO1xuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBpc0ludGVyc2VjdGlvbk5vblRyaXZpYWwoaW50ZXJzZWN0aW9uKSB7XG4gIGNvbnN0IGludGVyc2VjdGlvbk5vblRyaXZpYWwgPSAoKGludGVyc2VjdGlvbiA+IDAgKSAmJiAoaW50ZXJzZWN0aW9uIDwgMSkpO1xuXG4gIHJldHVybiBpbnRlcnNlY3Rpb25Ob25Ucml2aWFsO1xufVxuIl19