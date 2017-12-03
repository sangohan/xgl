'use strict';

const Facet = require('../facet'),
      verticesUtilities = require('../utilities/vertices');

const { calculateNormal } = verticesUtilities;

class ColouredFacet extends Facet {
  constructor(vertices, normal, colour) {
    super(vertices, normal);
    
    this.colour = colour;
  }

  clone() {
    let vertices = this.getVertices(),
        normal = this.getNormal();

    vertices = vertices.map(function(vertex) {
      vertex = vertex.slice();  ///

      return vertex;
    });

    normal = normal.slice();  ///

    const colouredFacet = new ColouredFacet(vertices, normal, this.colour);

    return colouredFacet;
  }
  
  getColour() {
    return this.colour;
  }
  
  getVertexColours() {
    const vertexColour = this.colour, ///
          vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour,
          ];
    
    return vertexColours;
  }

  splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) { super.splitWithTwoNonNullIntersections(intersections, smallerFacets, this); }

  splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) { super.splitWithOneNonNullIntersection(intersections, smallerFacets, this); }

  fromVertices(vertices) { return ColouredFacet.fromVerticesAndColour(vertices, this.colour); }

  static fromVerticesAndColour(vertices, colour) {
    const normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

    return colouredFacet;
  }

  static fromVerticesIndexesAndColour(vertices, indexes, colour) {
    vertices = indexes.map(function(index) {
      const vertex = vertices[index];

      return vertex;
    });

    const colouredFacet = ColouredFacet.fromVerticesAndColour(vertices, colour);
    
    return colouredFacet;
  }
}

module.exports = ColouredFacet;