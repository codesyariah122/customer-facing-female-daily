import { useState } from 'react';

export function selectVariant(selectedAttr: any[], parentProduct: any): any {
  let child: any = {};
  if (selectedAttr.length > 0) {
    const picked: any = [];
    selectedAttr.forEach((attr, ind) => {
      picked.push(attr.code);
    });
    const selected = picked.sort().join('&&&');
    const childOption = parentProduct.variantAttribute.childOpt;
    const checkIndex = childOption.findIndex(
      (child: any) => child.attr === selected
    );

    if (checkIndex !== -1) {
      const sku = childOption[checkIndex].sku;
      const childIndex = parentProduct.children.findIndex(
        (product: any) => product.code === sku
      );
      if (childIndex !== -1) {
        child = parentProduct.children[childIndex];
        console.log('child', child.code);

        return child;
      }
    }
  }

  return child;
}
