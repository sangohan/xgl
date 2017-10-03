'use strict';

var React = require('./react'),
    Scene = require('./scene'),
    imageMapUtilities = require('./utilities/imageMap');

function example(callback) {
  preloadImageMap(function (imageMap) {
    var childElements = callback(),
        scene = React.createElement(
      Scene,
      { imageMap: imageMap },
      childElements
    );
  });
}

module.exports = example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlNjZW5lIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJleGFtcGxlIiwiY2FsbGJhY2siLCJwcmVsb2FkSW1hZ2VNYXAiLCJpbWFnZU1hcCIsImNoaWxkRWxlbWVudHMiLCJzY2VuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxTQUFSLENBRGQ7QUFBQSxJQUVNRSxvQkFBb0JGLFFBQVEsc0JBQVIsQ0FGMUI7O0FBS0EsU0FBU0csT0FBVCxDQUFpQkMsUUFBakIsRUFBMkI7QUFDekJDLGtCQUFnQixVQUFTQyxRQUFULEVBQW1CO0FBQ2pDLFFBQU1DLGdCQUFnQkgsVUFBdEI7QUFBQSxRQUNNSSxRQUVFO0FBQUMsV0FBRDtBQUFBLFFBQU8sVUFBVUYsUUFBakI7QUFBNEJDO0FBQTVCLEtBSFI7QUFNRCxHQVBEO0FBUUQ7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUJQLE9BQWpCIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi9yZWFjdCcpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuL3NjZW5lJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cblxuZnVuY3Rpb24gZXhhbXBsZShjYWxsYmFjaykge1xuICBwcmVsb2FkSW1hZ2VNYXAoZnVuY3Rpb24oaW1hZ2VNYXApIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2FsbGJhY2soKSxcbiAgICAgICAgICBzY2VuZSA9XG5cbiAgICAgICAgICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9PntjaGlsZEVsZW1lbnRzfTwvU2NlbmU+XG5cbiAgICAgICAgICA7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGU7XG4iXX0=