'use strict';

const vec3 = require('../../../vec3'),
      arrayUtilities = require('../../../utilities/array');

const { divide, flatten } = arrayUtilities;

const vertexColourData = [
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,
        1.0,  0.0,  0.0,  1.0,

        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,
        0.0,  1.0,  1.0,  1.0,

        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,

        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,
        1.0,  0.0,  1.0,  1.0,

        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,
        0.0,  0.0,  1.0,  1.0,

        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0,
        1.0,  1.0,  0.0,  1.0
      ],
      vertexPositionData = [
        -1.0, -1.0, +1.0,
        +1.0, -1.0, +1.0,
        +1.0, +1.0, +1.0,
        -1.0, +1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, +1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, -1.0, -1.0,

        -1.0, +1.0, -1.0,
        -1.0, +1.0, +1.0,
        +1.0, +1.0, +1.0,
        +1.0, +1.0, -1.0,

        -1.0, -1.0, -1.0,
        +1.0, -1.0, -1.0,
        +1.0, -1.0, +1.0,
        -1.0, -1.0, +1.0,

        +1.0, -1.0, -1.0,
        +1.0, +1.0, -1.0,
        +1.0, +1.0, +1.0,
        +1.0, -1.0, +1.0,

        -1.0, -1.0, -1.0,
        -1.0, -1.0, +1.0,
        -1.0, +1.0, +1.0,
        -1.0, +1.0, -1.0
      ],
      vertexNormalData = [
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,
        0.0,  0.0, +1.0,

        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,
        0.0,  0.0, -1.0,

        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,
        0.0, +1.0,  0.0,

        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,
        0.0, -1.0,  0.0,

        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,
        +1.0,  0.0,  0.0,

        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0,
        -1.0,  0.0,  0.0
      ],
      vertexIndexData = [
        0,  1,  2,
        0,  2,  3,

        4,  5,  6,
        4,  6,  7,

        8,  9, 10,
        8, 10, 11,

        12, 13, 14,
        12, 14, 15,

        16, 17, 18,
        16, 18, 19,

        20, 21, 22,
        20, 22, 23
      ];

class ColourCube {
  static getVertexPositionData(offsetPosition) {
    let vertexPositions = divide(vertexPositionData, 3);  ///

    vertexPositions = vertexPositions.map(function(vertexPosition) {
      const offsetVertexPosition = vec3.add(vertexPosition, offsetPosition);

      return offsetVertexPosition;
    });

    return flatten(vertexPositions);
  }

  static getVertexNormalData() {
    return vertexNormalData;
  }

  static getVertexColourData() {
    return vertexColourData;
  }

  static getVertexIndexData() {
    return vertexIndexData;
  }
  
  static createElement(colourShader, textureShader) {
    const offsetPosition = [0, 0, 0],
          vertexPositionData = ColourCube.getVertexPositionData(offsetPosition),
          vertexNormalData = ColourCube.getVertexNormalData(),
          vertexIndexData = ColourCube.getVertexIndexData(),
          vertexColourData = ColourCube.getVertexColourData();

    colourShader.addVertexPositionData(vertexPositionData);
    colourShader.addVertexNormalData(vertexNormalData);
    colourShader.addVertexIndexData(vertexIndexData);
    colourShader.addVertexColourData(vertexColourData);
  }
}

module.exports = ColourCube;
