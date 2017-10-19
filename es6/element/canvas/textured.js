'use strict';

const CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array'),
      imageMapUtilities = require('../../utilities/imageMap');

const { flatten } = arrayUtilities,
      { textureCoordinatesFromImageNames } = imageMapUtilities;

class TexturedCanvasElement extends CanvasElement {
  constructor(transform, transformations, imageName) {
    super(transform, transformations);

    this.imageName = imageName;
  }

  calculateTextureCoordinateData(vertexPositionData) {
    const vertexPositionDataLength = vertexPositionData.length,
          imageNamesLength = vertexPositionDataLength / 12,  ///
          imageNames = [];

    for (let index = 0; index < imageNamesLength; index++) {
      imageNames.push(this.imageName);
    }

    const textureCoordinates = textureCoordinatesFromImageNames(imageNames),
          textureCoordinateData = flatten(textureCoordinates);

    return textureCoordinateData;
  }

  create(colourRenderer, textureRenderer) {
    const vertexPositionData = this.calculateVertexPositionData(),
          vertexIndexData = this.calculateVertexIndexData(vertexPositionData),
          vertexNormalData = this.calculateVertexNormalData(vertexPositionData),
          textureCoordinateData = this.calculateTextureCoordinateData(vertexPositionData);

    textureRenderer.addVertexPositionData(vertexPositionData);
    textureRenderer.addVertexIndexData(vertexIndexData);
    textureRenderer.addVertexNormalData(vertexNormalData);
    textureRenderer.addTextureCoordinateData(textureCoordinateData);
  }
  
  static fromProperties(Class, properties) {
    const { imageName } = properties,
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, imageName);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
