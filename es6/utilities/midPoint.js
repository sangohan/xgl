'use strict';

const vectorMaths = require('../maths/vector');

const { add3, scale3 } = vectorMaths;

function calculateMidPointPosition(vertices) {
  const midPointPosition = vertices.reduce(function(midPointPosition, vertex) {
    const vertexPosition = vertex.getPosition(),
          scaledVertexPosition = scale3(vertexPosition, 1/3);

    midPointPosition = add3(midPointPosition, scaledVertexPosition);

    return midPointPosition;
  }, [ 0, 0, 0 ]);

  return midPointPosition;
}

function projectMidPointPositionOntoXYPlane(midPointPosition) {
  midPointPosition = [...midPointPosition.slice(0, 2), 0];  ///

  return midPointPosition;
}

function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges),
        midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges),
        midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges; ///

  return midPointPositionToOneSideOfMaskingEdges;
}

module.exports = module.exports = {
  calculateMidPointPosition: calculateMidPointPosition,
  projectMidPointPositionOntoXYPlane: projectMidPointPositionOntoXYPlane,
  isMidPointPositionToOneSideOfMaskingEdges: isMidPointPositionToOneSideOfMaskingEdges
};

function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheLeftOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheLeftOfMaskingEdges) {
      const midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);

      midPointPositionToTheLeftOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdge;
    }

    return midPointPositionToTheLeftOfMaskingEdges;
  }, true);

  return midPointPositionToTheLeftOfMaskingEdges;
}

function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
  const midPointPositionToTheRightOfMaskingEdges = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges, maskingEdge) {
    if (midPointPositionToTheRightOfMaskingEdges) {
      const midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);

      midPointPositionToTheRightOfMaskingEdges = midPointPositionToTheRightOfMaskingEdge;
    }

    return midPointPositionToTheRightOfMaskingEdges;
  }, true);

  return midPointPositionToTheRightOfMaskingEdges;
}