'use strict';

const necessary = require('necessary');

const Shader = require('../shader');

const { createVertexShader, createFragmentShader, calculateLightingSource, calculatePositionSource } = Shader,
      { arrayUtilities } = necessary,
      { merge } = arrayUtilities,
      add = merge;  ///

const samplerName = 'uSampler',
      textureCoordinateAttributeName = 'aTextureCoordinate',
      vertexShaderSource = `
        
        attribute vec2 ${textureCoordinateAttributeName};
        
        ${calculateLightingSource}
      
        ${calculatePositionSource}

        varying highp vec3 vLighting;
        
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          vLighting = calculateLighting();

          gl_Position = calculatePosition();
                    
          vTextureCoordinate = ${textureCoordinateAttributeName};
        }
        
      `,
      fragmentShaderSource = `
        
        uniform sampler2D ${samplerName};

        varying highp vec3 vLighting;
                   
        varying highp vec2 vTextureCoordinate;
        
        void main() {
          highp vec4 texelColour = texture2D(${samplerName}, vTextureCoordinate);
          
          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  
        }
        
      `;

class TextureShader extends Shader {
  constructor(program, canvas) {
    super(program, canvas);

    this.samplerUniformLocation = canvas.getUniformLocation(program, samplerName);
    this.textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, textureCoordinateAttributeName);

    this.textureCoordinateData = [];
  }

  addTextureCoordinateData(textureCoordinateData) {
    add(this.textureCoordinateData, textureCoordinateData);
  }

  createBuffers(canvas) {
    this.createTextureCoordinateBuffer(canvas);

    super.createBuffers(canvas);
  }

  createTextureCoordinateBuffer(canvas) {
    this.textureCoordinateBuffer = canvas.createBuffer(this.textureCoordinateData);
  }

  bindBuffers(canvas) {
    this.bindTextureCoordinateBuffer(canvas);

    super.bindBuffers(canvas);
  }

  bindTextureCoordinateBuffer(canvas) {
    const textureCoordinateComponents = 2;

    canvas.bindBuffer(this.textureCoordinateBuffer, this.textureCoordinateAttributeLocation, textureCoordinateComponents);
  }

  createTexture(image, canvas) {
    canvas.createTexture(image);
  }

  activateTexture(canvas) {
    const context = canvas.getContext(),
          { TEXTURE0 } = context,
          target = TEXTURE0,  ///
          uSamplerUniformLocationIntegerValue = 0;

    canvas.activateTexture(target);

    canvas.setUniformLocationIntegerValue(this.samplerUniformLocation, uSamplerUniformLocationIntegerValue);
  }

  static fromNothing(canvas) {
    const vertexShader = createVertexShader(vertexShaderSource, canvas),
          fragmentShader = createFragmentShader(fragmentShaderSource, canvas),
          colourShader = canvas.createShader(TextureShader, vertexShader, fragmentShader);

    return colourShader;
  }
}

module.exports = TextureShader;
