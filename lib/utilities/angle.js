'use strict';

function calculateHalfAngleSine(angleCosine) {
  return Math.sqrt((1 - angleCosine) / 2);
}

function calculateHalfAngleCosine(angleCosine) {
  return Math.sqrt((1 + angleCosine) / 2);
}

module.exports = {
  calculateHalfAngleSine: calculateHalfAngleSine,
  calculateHalfAngleCosine: calculateHalfAngleCosine
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvYW5nbGUuanMiXSwibmFtZXMiOlsiY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSIsImFuZ2xlQ29zaW5lIiwiTWF0aCIsInNxcnQiLCJjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxTQUFTQSxzQkFBVCxDQUFnQ0MsV0FBaEMsRUFBNkM7QUFBRSxTQUFPQyxLQUFLQyxJQUFMLENBQVUsQ0FBQyxJQUFJRixXQUFMLElBQW9CLENBQTlCLENBQVA7QUFBMEM7O0FBRXpGLFNBQVNHLHdCQUFULENBQWtDSCxXQUFsQyxFQUErQztBQUFFLFNBQU9DLEtBQUtDLElBQUwsQ0FBVSxDQUFDLElBQUlGLFdBQUwsSUFBb0IsQ0FBOUIsQ0FBUDtBQUEwQzs7QUFFM0ZJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZk4sZ0RBRGU7QUFFZkk7QUFGZSxDQUFqQiIsImZpbGUiOiJhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZUNvc2luZSkgeyByZXR1cm4gTWF0aC5zcXJ0KCgxIC0gYW5nbGVDb3NpbmUpIC8gMik7IH1cblxuZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSxcbiAgY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lXG59O1xuIl19