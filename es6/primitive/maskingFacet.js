'use strict';

const constants = require('../constants'),
      MaskingEdge = require('./edge/masking'),
      VerticalLine = require('./verticalLine'),
      arrayUtilities = require('../utilities/array'),
      verticesUtilities = require('../utilities/vertices'),
      quaternionUtilities = require('../utilities/quaternion');

const { VERTICES_LENGTH } = constants,
      { push, separate } = arrayUtilities,
      { rotateVertices } = verticesUtilities,
      { calculateArbitraryRotationQuaternion, calculateForwardsRotationQuaternion, calculateBackwardsRotationQuaternion } = quaternionUtilities;

class MaskingFacet {
  constructor(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    this.maskingEdges = maskingEdges;
    this.verticalLines = verticalLines;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  getMaskingEdges() {
    return this.maskingEdges;
  }

  getVerticalLines() {
    return this.verticalLines;
  }

  getForwardsRotationQuaternion() {
    return this.forwardsRotationQuaternion;
  }

  getBackwardsRotationQuaternion() {
    return this.backwardsRotationQuaternion;
  }

  maskFacet(facet, unmaskedFacets) {
    const unmaskedFacet = facet.clone();  ///

    facet.rotate(this.forwardsRotationQuaternion);

    const maskingFacet = this,  ///
          smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];

    separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, (smallerFacet) => {
      const smallerFacetMasked = smallerFacet.isMasked(maskingFacet);

      return smallerFacetMasked;
    });

    const maskedSmallerFacetsLength = maskedSmallerFacets.length;

    if (maskedSmallerFacetsLength === 0) {
      unmaskedFacets.push(unmaskedFacet);
    } else {
      unmaskedSmallerFacets.forEach((unmaskedSmallerFacet) => {
        unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
      });

      push(unmaskedFacets, unmaskedSmallerFacets);
    }
  }
  
  splitFacet(facet) {
    let facets = [
          facet
        ],
        smallerFacets = facets; ///

    this.verticalLines.forEach((verticalLine) => {
      smallerFacets = verticalLine.splitFacets(facets);

      facets = smallerFacets; ///
    });

    return smallerFacets;
  }

  static fromFacet(facet) {
    const facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          normal = facetNormal, ///
          arbitraryRotationQuaternion = calculateArbitraryRotationQuaternion(normal),
          rotationQuaternion = arbitraryRotationQuaternion, ///
          vertices = rotateVertices(facetVertices, rotationQuaternion),
          maskingEdges = calculateMaskingEdges(vertices),
          verticalLines = maskingEdges.map((maskingEdge) => {
            const verticalLine = VerticalLine.fromMaskingEdge(maskingEdge);
            
            return verticalLine;
          }),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(rotationQuaternion),
          maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);

    return maskingFacet;
  }
}

module.exports = MaskingFacet;

function calculateMaskingEdges(vertices) {
  const maskingEdges = vertices.map((vertex, index) => {
          const startIndex = index,
                endIndex = (startIndex + 1) % VERTICES_LENGTH,
                startVertex = vertices[startIndex],
                endVertex = vertices[endIndex],
                maskingEdge = MaskingEdge.fromStartVertexAndEndVertex(startVertex, endVertex);

          return maskingEdge;
        });

  return maskingEdges;
}
