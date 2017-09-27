'use strict';

var necessary = require('necessary');

var ColourCube = require('./cube/colour'),
    TextureCube = require('./cube/texture'),
    imagesUtilities = require('../../utilities/images');

var arrayUtilities = necessary.arrayUtilities,
    asynchronousUtilities = necessary.asynchronousUtilities,
    sequence = asynchronousUtilities.sequence,
    preload = imagesUtilities.preload,
    first = arrayUtilities.first;


function create(colourShader, textureShader, canvas, done) {
      var callbacks = [createColourCubeCallback, createTextureCubeCallback],
          context = {
            colourShader: colourShader,
            textureShader: textureShader,
            canvas: canvas
      };

      sequence(callbacks, done, context);
}

module.exports = {
      create: create
};

function createColourCubeCallback(next, done, context) {
      var colourShader = context.colourShader,
          canvas = context.canvas,
          offsetPosition = [-2, 0, 0];


      var offsetVertexPositionData = ColourCube.getOffsetVertexPositionData(offsetPosition),
          vertexNormalData = ColourCube.getVertexNormalData(),
          vertexColourData = ColourCube.getVertexColourData(),
          vertexIndexData = ColourCube.getVertexIndexData();

      colourShader.createVertexPositionBuffer(offsetVertexPositionData, canvas);
      colourShader.createVertexNormalBuffer(vertexNormalData, canvas);
      colourShader.createVertexColourBuffer(vertexColourData, canvas);

      var count = canvas.createAndBindElementBuffer(vertexIndexData);

      colourShader.setCount(count);

      next();
}

function createTextureCubeCallback(next, done, context) {
      var textureShader = context.textureShader,
          canvas = context.canvas,
          sources = ['texture/bricks.jpg'];


      preload(sources, function (images) {
            var firstImage = first(images),
                offsetPosition = [+2, 0, 0],
                image = firstImage;

            var offsetVertexPositionData = TextureCube.getOffsetVertexPositionData(offsetPosition),
                vertexNormalData = TextureCube.getVertexNormalData(),
                textureCoordinateData = TextureCube.getTextureCoordinateData(),
                vertexIndexData = TextureCube.getVertexIndexData();

            textureShader.createVertexPositionBuffer(offsetVertexPositionData, canvas);
            textureShader.createVertexNormalBuffer(vertexNormalData, canvas);
            textureShader.createTextureCoordinateBuffer(textureCoordinateData, canvas);

            textureShader.createTexture(image, canvas);

            var count = canvas.createAndBindElementBuffer(vertexIndexData);

            textureShader.setCount(count);

            next();
      });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvY3ViZXMuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsIkNvbG91ckN1YmUiLCJUZXh0dXJlQ3ViZSIsImltYWdlc1V0aWxpdGllcyIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwic2VxdWVuY2UiLCJwcmVsb2FkIiwiZmlyc3QiLCJjcmVhdGUiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwiZG9uZSIsImNhbGxiYWNrcyIsImNyZWF0ZUNvbG91ckN1YmVDYWxsYmFjayIsImNyZWF0ZVRleHR1cmVDdWJlQ2FsbGJhY2siLCJjb250ZXh0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm5leHQiLCJvZmZzZXRQb3NpdGlvbiIsIm9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSIsImdldE9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSIsInZlcnRleE5vcm1hbERhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxEYXRhIiwidmVydGV4Q29sb3VyRGF0YSIsImdldFZlcnRleENvbG91ckRhdGEiLCJ2ZXJ0ZXhJbmRleERhdGEiLCJnZXRWZXJ0ZXhJbmRleERhdGEiLCJjcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlciIsImNyZWF0ZVZlcnRleENvbG91ckJ1ZmZlciIsImNvdW50IiwiY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIiLCJzZXRDb3VudCIsInNvdXJjZXMiLCJpbWFnZXMiLCJmaXJzdEltYWdlIiwiaW1hZ2UiLCJ0ZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZURhdGEiLCJjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZUJ1ZmZlciIsImNyZWF0ZVRleHR1cmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJ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ZCxDQUE0Q0YscUJBQTVDLEVBQW1FNUIsTUFBbkU7O0FBRUFELDBCQUFjZ0MsYUFBZCxDQUE0QkosS0FBNUIsRUFBbUMzQixNQUFuQzs7QUFFQSxnQkFBTXFCLFFBQVFyQixPQUFPc0IsMEJBQVAsQ0FBa0NOLGVBQWxDLENBQWQ7O0FBRUFqQiwwQkFBY3dCLFFBQWQsQ0FBdUJGLEtBQXZCOztBQUVBYjtBQUNELE9BckJEO0FBc0JEIiwiZmlsZSI6ImN1YmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgQ29sb3VyQ3ViZSA9IHJlcXVpcmUoJy4vY3ViZS9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVDdWJlID0gcmVxdWlyZSgnLi9jdWJlL3RleHR1cmUnKSxcbiAgICAgIGltYWdlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9pbWFnZXMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcywgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHNlcXVlbmNlIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXMsXG4gICAgICB7IHByZWxvYWQgfSA9IGltYWdlc1V0aWxpdGllcyxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5mdW5jdGlvbiBjcmVhdGUoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyLCBjYW52YXMsIGRvbmUpIHtcbiAgY29uc3QgY2FsbGJhY2tzID0gW1xuICAgICAgICAgIGNyZWF0ZUNvbG91ckN1YmVDYWxsYmFjayxcbiAgICAgICAgICBjcmVhdGVUZXh0dXJlQ3ViZUNhbGxiYWNrXG4gICAgICAgIF0sXG4gICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgY29sb3VyU2hhZGVyOiBjb2xvdXJTaGFkZXIsXG4gICAgICAgICAgdGV4dHVyZVNoYWRlcjogdGV4dHVyZVNoYWRlcixcbiAgICAgICAgICBjYW52YXM6IGNhbnZhc1xuICAgICAgICB9O1xuXG4gIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IGNyZWF0ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29sb3VyQ3ViZUNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBjb2xvdXJTaGFkZXIsIGNhbnZhcyB9ID0gY29udGV4dCxcbiAgICAgICAgb2Zmc2V0UG9zaXRpb24gPSBbLTIsIDAsIDBdO1xuXG4gIGNvbnN0IG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSA9IENvbG91ckN1YmUuZ2V0T2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhKG9mZnNldFBvc2l0aW9uKSxcbiAgICAgICAgdmVydGV4Tm9ybWFsRGF0YSA9IENvbG91ckN1YmUuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICB2ZXJ0ZXhDb2xvdXJEYXRhID0gQ29sb3VyQ3ViZS5nZXRWZXJ0ZXhDb2xvdXJEYXRhKCksXG4gICAgICAgIHZlcnRleEluZGV4RGF0YSA9IENvbG91ckN1YmUuZ2V0VmVydGV4SW5kZXhEYXRhKCk7XG5cbiAgY29sb3VyU2hhZGVyLmNyZWF0ZVZlcnRleFBvc2l0aW9uQnVmZmVyKG9mZnNldFZlcnRleFBvc2l0aW9uRGF0YSwgY2FudmFzKTtcbiAgY29sb3VyU2hhZGVyLmNyZWF0ZVZlcnRleE5vcm1hbEJ1ZmZlcih2ZXJ0ZXhOb3JtYWxEYXRhLCBjYW52YXMpO1xuICBjb2xvdXJTaGFkZXIuY3JlYXRlVmVydGV4Q29sb3VyQnVmZmVyKHZlcnRleENvbG91ckRhdGEsIGNhbnZhcyk7XG5cbiAgY29uc3QgY291bnQgPSBjYW52YXMuY3JlYXRlQW5kQmluZEVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhEYXRhKTtcblxuICBjb2xvdXJTaGFkZXIuc2V0Q291bnQoY291bnQpO1xuXG4gIG5leHQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZUN1YmVDYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgdGV4dHVyZVNoYWRlciwgY2FudmFzIH0gPSBjb250ZXh0LFxuICAgICAgICBzb3VyY2VzID0gW1xuICAgICAgICAgICd0ZXh0dXJlL2JyaWNrcy5qcGcnXG4gICAgICAgIF07XG5cbiAgcHJlbG9hZChzb3VyY2VzLCBmdW5jdGlvbihpbWFnZXMpIHtcbiAgICBjb25zdCBmaXJzdEltYWdlID0gZmlyc3QoaW1hZ2VzKSxcbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IFsrMiwgMCwgMF0sXG4gICAgICAgICAgaW1hZ2UgPSBmaXJzdEltYWdlO1xuXG4gICAgY29uc3Qgb2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhID0gVGV4dHVyZUN1YmUuZ2V0T2Zmc2V0VmVydGV4UG9zaXRpb25EYXRhKG9mZnNldFBvc2l0aW9uKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxEYXRhID0gVGV4dHVyZUN1YmUuZ2V0VmVydGV4Tm9ybWFsRGF0YSgpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlRGF0YSA9IFRleHR1cmVDdWJlLmdldFRleHR1cmVDb29yZGluYXRlRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4RGF0YSA9IFRleHR1cmVDdWJlLmdldFZlcnRleEluZGV4RGF0YSgpO1xuXG4gICAgdGV4dHVyZVNoYWRlci5jcmVhdGVWZXJ0ZXhQb3NpdGlvbkJ1ZmZlcihvZmZzZXRWZXJ0ZXhQb3NpdGlvbkRhdGEsIGNhbnZhcyk7XG4gICAgdGV4dHVyZVNoYWRlci5jcmVhdGVWZXJ0ZXhOb3JtYWxCdWZmZXIodmVydGV4Tm9ybWFsRGF0YSwgY2FudmFzKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlRGF0YSwgY2FudmFzKTtcblxuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZSwgY2FudmFzKTtcblxuICAgIGNvbnN0IGNvdW50ID0gY2FudmFzLmNyZWF0ZUFuZEJpbmRFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4RGF0YSk7XG5cbiAgICB0ZXh0dXJlU2hhZGVyLnNldENvdW50KGNvdW50KTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG59XG4iXX0=