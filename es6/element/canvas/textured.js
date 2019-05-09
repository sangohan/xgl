'use strict';

const TexturedFacet = require('../../facet/textured'),
      CanvasElement = require('../../element/canvas'),
      arrayUtilities = require('../../utilities/array'),
      textureUtilities = require('../../utilities/texture');

const { push } = arrayUtilities,
      { textureCoordinatesFromTextureCoordinatesAndIndex } = textureUtilities;

class TexturedCanvasElement extends CanvasElement {
  render(colourRenderer, textureRenderer) {
    const imageJSON = textureRenderer.getImageJSON(),
					vertexIndexes = this.getVertexIndexes(),
          vertexNormals = this.getVertexNormals(),
          vertexPositions = this.getVertexPositions(),
          vertexTextureCoordinates = this.getVertexTextureCoordinates(imageJSON);

    textureRenderer.addVertexPositions(vertexPositions);

    textureRenderer.addVertexIndexes(vertexIndexes);

    textureRenderer.addVertexNormals(vertexNormals);

    textureRenderer.addVertexTextureCoordinates(vertexTextureCoordinates);
  }

  getVertexTextureCoordinates(imageJSON) {
    const facets = this.getFacets(),
          vertexTextureCoordinates = facets.reduce((vertexTextureCoordinates, facet) => {
            const texturedFacet = facet,  ///
                  texturedFacetVertexTextureCoordinates = texturedFacet.getVertexTextureCoordinates(imageJSON);
  
            push(vertexTextureCoordinates, texturedFacetVertexTextureCoordinates);
  
            return vertexTextureCoordinates;
          }, []);

    return vertexTextureCoordinates;
  }

  static fromProperties(Class, properties, vertexCoordinates, indexes, imageName, textureCoordinates, ...remainingArguments) {
    const textureCoordinatess = textureCoordinates, ///
          texturedFacets = indexes.map((indexes, index) => {  ///
            const textureCoordinates = textureCoordinatesFromTextureCoordinatesAndIndex(textureCoordinatess, index),  ///
                  texturedFacet = TexturedFacet.fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates, index);

            return texturedFacet;
          }),
          facets = texturedFacets,  ///
          texturedCanvasElement = CanvasElement.fromProperties(Class, properties, facets, ...remainingArguments);
    
    return texturedCanvasElement;
  }
}

module.exports = TexturedCanvasElement;
