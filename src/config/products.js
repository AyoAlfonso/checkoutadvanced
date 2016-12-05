export const productInfos = {
  FR1: { value: 3.11, name: 'Fruit Tea', freebie: 1.00 },
  AP2: { value: 4.50, name: '3-Apples Discount' , freebie: 0.00},
  AP1: { value: 5.00, name: 'Apple' , freebie: 0.00}, 
  CF1: { value: 11.23, name: 'Coffee' , freebie: 0.00 },
};

export const getProductCodes = () => (
  Object.keys(productInfos).sort()
);

export const getProductName = (itemCode) => (
  productInfos[itemCode].name
);

export const getProductValue = (itemCode) => (
  productInfos[itemCode].value
);

export const getProductFreebie = (itemCode) => (
  productInfos[itemCode].freebie
);
