'use strict';

const necessary = require('necessary');

const ColourCube = require('./cube/colour'),
      TextureCube = require('./cube/texture'),
      imagesUtilities = require('../../utilities/images');

const { arrayUtilities, asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { preload } = imagesUtilities,
      { first } = arrayUtilities;

function create(colourShader, textureShader, canvas, done) {
  const callbacks = [
          createColourCubeCallback,
          createTextureCubeCallback
        ],
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
  const { colourShader, canvas } = context,
        offsetPosition = [-2, 0, 0];

  const offsetVertexPositionData = ColourCube.getOffsetVertexPositionData(offsetPosition),
        vertexNormalData = ColourCube.getVertexNormalData(),
        vertexColourData = ColourCube.getVertexColourData(),
        vertexIndexData = ColourCube.getVertexIndexData();

  colourShader.createVertexPositionBuffer(offsetVertexPositionData, canvas);
  colourShader.createVertexNormalBuffer(vertexNormalData, canvas);
  colourShader.createVertexColourBuffer(vertexColourData, canvas);

  const count = canvas.createAndBindElementBuffer(vertexIndexData);

  colourShader.setCount(count);

  next();
}

function createTextureCubeCallback(next, done, context) {
  const { textureShader, canvas } = context,
        sources = [
          'texture/bricks.jpg'
        ];

  preload(sources, function(images) {
    const firstImage = first(images),
          offsetPosition = [+2, 0, 0],
          image = firstImage;

    const offsetVertexPositionData = TextureCube.getOffsetVertexPositionData(offsetPosition),
          vertexNormalData = TextureCube.getVertexNormalData(),
          textureCoordinateData = TextureCube.getTextureCoordinateData(),
          vertexIndexData = TextureCube.getVertexIndexData();

    textureShader.createVertexPositionBuffer(offsetVertexPositionData, canvas);
    textureShader.createVertexNormalBuffer(vertexNormalData, canvas);
    textureShader.createTextureCoordinateBuffer(textureCoordinateData, canvas);

    textureShader.createTexture(image, canvas);

    const count = canvas.createAndBindElementBuffer(vertexIndexData);

    textureShader.setCount(count);

    next();
  });
}