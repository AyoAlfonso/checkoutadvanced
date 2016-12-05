


Detailed Explanation For The TextMaster Application Developed 


Problems: 
1. For the 3-Apple $4.5 Discount : 


STEP 1
In the product.js folder that contains the 'model' or data of the application, I took the 'productInfos' objects(our data) and added a second discount option for the Apple buyers, named it "3-Apples Discount" - Product code is "AP2". This makes it easy for other dvelopers to read.  
Effect: 
When the application reads data from this object, it will include the product item "3-APples discount" and display on the "view" for the users to see.


2. For the Fruit Tea Freebie: 

STEP 2

I created a folder that will house every future freebie we were giving customers for each product called the "AuxBasketTotal" (in the componnent folder), since the main basket total was called "BasketTotal". Then I created extra property fields for the freebie like this :



FR1: { value: 3.11, name: 'Fruit Tea', freebie: 1.00 },

AP2: { value: 4.50, name: '3-Apples Discount' , freebie: 0.00},

instead of the former format 

FR1: { value: 3.11, name: 'Fruit Tea'},
AP2: { value: 4.50, name: '3-Apples Discount' },





This is good software design since it helps us if we want to give extra freebies in the future for other products. 


Below this I added : 


export const getProductFreebie = (itemCode) => (
  productInfos[itemCode].freebie
);

To sort the type of data needed for step 2


STEP 2

In the "reducers" folder which is where the logic of the application is I added a folder called "auxcheckout" that would later be used by "AuxBasketTotal" to print out data. 


All parameters remain. Except the data accepted into this file. Since we are only using the freebie data: 

I Imported by:

import { getProductFreebie } from '../config/products';


Adding 

 export const getTotal = (state) => (
  getProducts(state).reduce((total, current) => (
    total + getProductFreebie(current)
  ), 0)
);


This will give a end total for only freebies given. 



- Container.js in AuxBasketTotal file will pick this data up by this code :

import { getTotal } from '../../reducers/auxcheckout.js';



Extra steps: 

i. Added a text to make it easy for customers to understand

{(total) + " Free Fruit Tea(s) For You!" } in AuxBasketTotal\Components.js


ii. Changed the CSS of the AuxBasketTotal to blue. 

.app__auxbasket-total {
  font-size: 2em;
  font-weight: bold;
  margin-top: 1em;
  color:blue;
}



This repo has been uploaded without the node_modules as requested. 

HAVE A NICE DAY :) !