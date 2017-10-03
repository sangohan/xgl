'use strict';

require('../jiggle');

var Scene = require('../scene'),
    ColourCuboid = require('./common/cuboid/colour'),
    TextureCuboid = require('./common/cuboid/texture'),
    ColourCylinder = require('./common/cylinder/colour'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap },
      React.createElement(TextureCuboid, { offset: [+1, +2, +3], width: 3, depth: 2, height: 1, imageName: 'bricks.jpg' }),
      React.createElement(ColourCuboid, { offset: [-3, -2, -1], width: 1, depth: 2, height: 3, colour: [1, 0, 0, 1] })
    );
  });
};

module.exports = shapes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlNjZW5lIiwiQ29sb3VyQ3Vib2lkIiwiVGV4dHVyZUN1Ym9pZCIsIkNvbG91ckN5bGluZGVyIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJzaGFwZXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsUUFBUUQsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNRSxlQUFlRixRQUFRLHdCQUFSLENBRHJCO0FBQUEsSUFFTUcsZ0JBQWdCSCxRQUFRLHlCQUFSLENBRnRCO0FBQUEsSUFHTUksaUJBQWlCSixRQUFRLDBCQUFSLENBSHZCO0FBQUEsSUFJTUssb0JBQW9CTCxRQUFRLHVCQUFSLENBSjFCOztJQU1RTSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07O0FBRW5CRCxrQkFBZ0IsVUFBQ0UsUUFBRDtBQUFBLFdBRWQ7QUFBQyxXQUFEO0FBQUEsUUFBTyxVQUFVQSxRQUFqQjtBQUNFLDBCQUFDLGFBQUQsSUFBZSxRQUFRLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFQLEVBQVUsQ0FBQyxDQUFYLENBQXZCLEVBQXVDLE9BQU8sQ0FBOUMsRUFBaUQsT0FBTyxDQUF4RCxFQUEyRCxRQUFRLENBQW5FLEVBQXNFLFdBQVUsWUFBaEYsR0FERjtBQUVFLDBCQUFDLFlBQUQsSUFBYyxRQUFRLENBQUUsQ0FBQyxDQUFILEVBQU0sQ0FBQyxDQUFQLEVBQVUsQ0FBQyxDQUFYLENBQXRCLEVBQXNDLE9BQU8sQ0FBN0MsRUFBZ0QsT0FBTyxDQUF2RCxFQUEwRCxRQUFRLENBQWxFLEVBQXFFLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQTdFO0FBRkYsS0FGYztBQUFBLEdBQWhCO0FBUUQsQ0FWRDs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoic2hhcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgU2NlbmUgPSByZXF1aXJlKCcuLi9zY2VuZScpLFxuICAgICAgQ29sb3VyQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vY3Vib2lkL2NvbG91cicpLFxuICAgICAgVGV4dHVyZUN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL2N1Ym9pZC90ZXh0dXJlJyksXG4gICAgICBDb2xvdXJDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2N5bGluZGVyL2NvbG91cicpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBzaGFwZXMgPSAoKSA9PiB7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9PlxuICAgICAgPFRleHR1cmVDdWJvaWQgb2Zmc2V0PXtbICsxLCArMiwgKzMgXX0gd2lkdGg9ezN9IGRlcHRoPXsyfSBoZWlnaHQ9ezF9IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuICAgICAgPENvbG91ckN1Ym9pZCBvZmZzZXQ9e1sgLTMsIC0yLCAtMSBdfSB3aWR0aD17MX0gZGVwdGg9ezJ9IGhlaWdodD17M30gY29sb3VyPXtbIDEsIDAsIDAsIDEgXX0gLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXBlcztcbiJdfQ==