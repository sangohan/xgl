'use strict';

const TexturedTriangle = require('./texturedTriangle');

const Side = (properties) =>

  <TexturedTriangle size={[ 1, 1/Math.sqrt(2), 1 ]} position={[ -0.5, 0, 0.5 ]} rotations={[ -45, 0, 0 ]} />

;

module.exports = Side;
