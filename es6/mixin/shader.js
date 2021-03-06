'use strict';

function createShader(type, shaderSource) {
  const { COMPILE_STATUS } = this.context,
        pname = COMPILE_STATUS,
        shader = this.context.createShader(type);

  this.context.shaderSource(shader, shaderSource);

  this.context.compileShader(shader);

  const compileStatus = this.context.getShaderParameter(shader, pname);

  if (!compileStatus) {
    throw new Error(`Unable to create the shader.`);
  }

  return shader;
}

function createVertexShader(vertexShaderSource, canvas) {
  const { VERTEX_SHADER } = this.context,
        type = VERTEX_SHADER,
        vertexShader = this.createShader(type, vertexShaderSource);

  return vertexShader;
}

function createFragmentShader(fragmentShaderSource, canvas) {
  const { FRAGMENT_SHADER } = this.context,
        type = FRAGMENT_SHADER,
        vertexShader = this.createShader(type, fragmentShaderSource);

  return vertexShader;
}

module.exports = {
  createShader,
  createVertexShader,
  createFragmentShader
};
