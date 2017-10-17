'use strict';

require('../jiggle');

const Scene = require('../scene'),
      Canvas = require('../canvas'),
      Camera = require('../camera'),
      TexturePlane = require('./common/texture/plane'),
      TextureCuboid = require('./common/texture/cuboid'),
      ColourCylinder = require('./common/colour/cylinder'),
      TextureCylinder = require('./common/texture/cylinder'),
      imageMapUtilities = require('../utilities/imageMap');

const { preloadImageMap } = imageMapUtilities;

const shapes = () => {

  const canvas = new Canvas();

  preloadImageMap((imageMap) =>

    <Scene imageMap={imageMap} canvas={canvas}>
      <Camera initialDistance={10} initialOffset={[ 0, 0, 0 ]} canvas={canvas} />
      <TextureCuboid width={1} height={1} depth={1} position={[ 0, 2, 0 ]} imageName="bricks.jpg" />
      <TexturePlane width={1} height={1} position={[ -1, -1, -1 ]} imageName="gravel.jpg" />
      <ColourCylinder width={1} height={1} depth={1} position={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
      <TextureCylinder width={1} height={1} depth={1} position={[ 0, 1, -1 ]} rotations={[ 0, 90, 90 ]} imageName="grass.jpg" />
    </Scene>

  );
};

module.exports = shapes;

