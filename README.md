## The problem

TextMaster's quest for global domination has prompted us to open a supermarket - we sell only three products:

```
+--------------|--------------|---------+
| Product Code |     Name     |  Price  |
+--------------|--------------|---------+
|     FR1      |   Fruit tea  |  $3.11  |
|     AP1      |   Apple      |  $5.00  |
|     CF1      |   Coffee     | $11.23  |
+--------------|--------------|---------+
```

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying apple to get a price 
discount for bulk purchases. If you buy 3 or more apples, the price should drop to $4.50.
Our check-out can scan items in any order, and because the CEO and COO change 
their minds often, it needs to be flexible regarding our pricing rules.

Contained within this repository is a working React/Redux application which when running looks like this:

![checkout image](https://cl.ly/3a3S3a2Z0E41/Image%202016-11-18%20at%207.29.00%20pm.png "Checkout Image")

Clicking the product buttons adds items to the basket, the items in the basket are listed and
the total is displayed.

Extend this system so that it supports the buy-one-get-one-free and three-or-more discounts. Ideally
the system will show the user which discounts are being applied, but it's not essential.

## Running the project

The project uses [create-react-app](https://github.com/facebookincubator/create-react-app) as a starter kit.
To run it the steps should be:

* ensure you have a recent version of node and npm
* `npm install`
* `npm run start`

## Submitting your solution

Please send a zip archive containing your code (without the node_modules directory) and any relevant materials
in an email along with your resume and motivations to jobs+front-end@textmaster.com, please add
tech-test+front@textmaster.com in CC. **Please do not put your solutions on GitHub.**

The purpose of this test is to verify your abilities to code and see how you architect an application.

Finally, please note that even if you have questions about the test we will not answer them, do what you think is best.