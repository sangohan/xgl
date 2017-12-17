'use strict';

function cloneVertices(vertices) {
  vertices = vertices.map(function(vertex) {
    vertex = vertex.clone();
    
    return vertex;
  });
  
  return vertices;
}

function rotateVertices(vertices, rotationQuaternion) {
  vertices = vertices.map(function(vertex) {
    vertex = rotateVertex(vertex, rotationQuaternion);

    return vertex;
  });

  return vertices;
}

function verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex) {  ///
  const vertices = indexes.map(function(index) {
    const coordinates = vertexCoordinates[index], ///
          vertex = Vertex.fromCoordinates(coordinates);

    return vertex;
  });

  return vertices;
}

module.exports = module.exports = {
  cloneVertices: cloneVertices,
  rotateVertices: rotateVertices,
  verticesFromVertexCoordinatesAndIndexes: verticesFromVertexCoordinatesAndIndexes
};

function rotateVertex(vertex, rotationQuaternion) {
  vertex = vertex.clone();  ///

  vertex.rotate(rotationQuaternion);

  return vertex;
}
