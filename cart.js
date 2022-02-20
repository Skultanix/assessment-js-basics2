///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((sum, {price}) => sum + price, 0);

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    return Math.round(((cartTotal * (1 + tax) - couponValue) * 100)) /100
}

console.log(calcFinalPrice(summedPrice, 5, 0.6))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/
  const customer = {
     name: '...',
     age: 0,
     hasVisitedB4: false,
     entreeOrder: '...',
     walkIn: false,
 }
/*
    TEXT ANSWER HERE

    Most restaurants want a name of a customer to identify them by, particularly if they're the sort of place that needs reservations.
    Age is needed so that the waiters can determine whether or not they should be offering anything alcoholic to the customer.
    Whether or not a customer has visited before is mostly used for internal data and indicates if a given customer is a repeat customer and if the business offers good product and service.
    When compiling data on customer behavior it is generally a good idea to determine what they ordered and how many customers ordered the same item, as well as have they ordered it before.
        This lets the business know what's popular and keeps people coming and what doesn't (what they should drop from the menu).
    Assuming that a restaurant takes walk-ins (think Chilis) determining whether or not a customer has booked a reservation or not help dictate priorities with table allocation.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer.name = `Tyler`
customer.age = 52
customer.hasVisitedB4 = false
customer.entreeOrder = `Spaghetti with White Clam Sauce`
customer.walkIn = true

console.log(customer)