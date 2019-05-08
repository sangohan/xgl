'use strict';

const Element = require('../element'),
      MaskingFacet = require('../maskingFacet'),
      arrayUtilities = require('../utilities/array');

const { push } = arrayUtilities;

class Mask extends Element {
  getFacets() {
    const childElements = this.getChildElements(),
          facets =  childElements.reduce((facets, childElement) => {
            const childElementFacets = childElement.getFacets();
            
            push(facets, childElementFacets);

            return facets;
          }, []);

    return facets;
  }
  
  getMaskingFacets() {
    const facets = this.getFacets(),
          maskingFacets = facets.map((facet) => {
            const maskingFacet = MaskingFacet.fromFacet(facet);
            
            return maskingFacet;
          });
    
    return maskingFacets;          
  }

  maskElement(element) {
    let facets = element.getFacets();
    
    const maskingFacets = this.getMaskingFacets();

    maskingFacets.forEach((maskingFacet) => {
      const unmaskedFacets = [];

      facets.forEach((facet) => {
        maskingFacet.maskFacet(facet, unmaskedFacets);
      });

      facets = unmaskedFacets;  ///
    });
    
    element.setFacets(facets);
  }

  initialise(textureRenderer, colourRenderer, transforms, masked) {
    const childElements = this.getChildElements();

    masked = true;  ///

    childElements.forEach((childElement) => {
      childElement.initialise(textureRenderer, colourRenderer, transforms, masked);
    });
  }

  static fromProperties(properties) { return Element.fromProperties(Mask, properties); }
}

module.exports = Mask;
