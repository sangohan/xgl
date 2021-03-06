'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var quaternionUtilities = require('../utilities/quaternion');

var rotateImaginaryQuaternion = quaternionUtilities.rotateImaginaryQuaternion,
    calculateInverseRotationQuaternion = quaternionUtilities.calculateInverseRotationQuaternion;


function rotatePosition(position, rotationQuaternion) {
  var imaginaryQuaternion = imaginaryQuaternionFromPosition(position),
      inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion),
      rotatedImaginaryQuaternion = rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);

  position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);

  return position;
}

module.exports = {
  rotatePosition: rotatePosition
};

function imaginaryQuaternionFromPosition(position) {
  return [0].concat(_toConsumableArray(position));
} ///

function positionFromImaginaryQuaternion(imaginaryQuaternion) {
  return imaginaryQuaternion.slice(1);
} ///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcm90YXRpb24uanMiXSwibmFtZXMiOlsicXVhdGVybmlvblV0aWxpdGllcyIsInJlcXVpcmUiLCJyb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uIiwiY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiIsInJvdGF0ZVBvc2l0aW9uIiwicG9zaXRpb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJpbWFnaW5hcnlRdWF0ZXJuaW9uIiwiaW1hZ2luYXJ5UXVhdGVybmlvbkZyb21Qb3NpdGlvbiIsImludmVyc2VSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiIsInBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2xpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBTUEsc0JBQXNCQyxRQUFRLHlCQUFSLENBQTVCOztJQUVRQyx5QixHQUFrRUYsbUIsQ0FBbEVFLHlCO0lBQTJCQyxrQyxHQUF1Q0gsbUIsQ0FBdkNHLGtDOzs7QUFFbkMsU0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0NDLGtCQUFsQyxFQUFzRDtBQUNwRCxNQUFNQyxzQkFBc0JDLGdDQUFnQ0gsUUFBaEMsQ0FBNUI7QUFBQSxNQUNNSSw0QkFBNEJOLG1DQUFtQ0csa0JBQW5DLENBRGxDO0FBQUEsTUFFTUksNkJBQTZCUiwwQkFBMEJLLG1CQUExQixFQUErQ0Qsa0JBQS9DLEVBQW1FRyx5QkFBbkUsQ0FGbkM7O0FBSUFKLGFBQVdNLGdDQUFnQ0QsMEJBQWhDLENBQVg7O0FBRUEsU0FBT0wsUUFBUDtBQUNEOztBQUVETyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZUO0FBRGUsQ0FBakI7O0FBSUEsU0FBU0ksK0JBQVQsQ0FBeUNILFFBQXpDLEVBQW1EO0FBQUUsVUFBUSxDQUFSLDRCQUFjQSxRQUFkO0FBQTBCLEMsQ0FBRTs7QUFFakYsU0FBU00sK0JBQVQsQ0FBeUNKLG1CQUF6QyxFQUE4RDtBQUFFLFNBQU9BLG9CQUFvQk8sS0FBcEIsQ0FBMEIsQ0FBMUIsQ0FBUDtBQUFzQyxDLENBQUUiLCJmaWxlIjoicm90YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24sIGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHJvdGF0ZVBvc2l0aW9uKHBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW1hZ2luYXJ5UXVhdGVybmlvbiA9IGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlSW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICByb3RhdGVkSW1hZ2luYXJ5UXVhdGVybmlvbiA9IHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICBwb3NpdGlvbiA9IHBvc2l0aW9uRnJvbUltYWdpbmFyeVF1YXRlcm5pb24ocm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvdGF0ZVBvc2l0aW9uXG59O1xuXG5mdW5jdGlvbiBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSB7IHJldHVybiBbMCwgLi4ucG9zaXRpb25dOyB9ICAvLy9cblxuZnVuY3Rpb24gcG9zaXRpb25Gcm9tSW1hZ2luYXJ5UXVhdGVybmlvbihpbWFnaW5hcnlRdWF0ZXJuaW9uKSB7IHJldHVybiBpbWFnaW5hcnlRdWF0ZXJuaW9uLnNsaWNlKDEpOyB9ICAvLy9cbiJdfQ==