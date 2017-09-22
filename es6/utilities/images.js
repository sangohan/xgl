'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { repeatedly } = asynchronousUtilities;

function preload(sources, callback) {
  const images = [],
        length = sources.length; ///

  repeatedly(
    function(next, done, context, index) {
      const source = sources[index],
            image = new Image();

      images[index] = image;

      image.onload = next;  ///

      image.src = source;  ///
    },
    length,
    done
  );

  function done() {
    callback(images);
  }
}

module.exports = {
  preload: preload
};
