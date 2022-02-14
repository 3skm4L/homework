//Bak Aliev hw week 3


// Create an array of pizzaToppings with at least four different toppings

//pizzaToppings = ["cheese", "olives", "peppers", "tomatoes"];

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

// function greetCustomer() {
//     console.log("Welcome to Pizza House, our toppings are: ");
//     for (let topping of pizzaToppings){
//         console.log(topping);
//     }
// }

let toppings = ["tomatoes", "olives", "mushrooms", "chicken", "pineapple", "spinach", "peppers", "onions"];

function listToppings(toppings){
    let list = "";
    for (let i = 0; i < toppings.length; i++){
        if (i == toppings.length - 1){
            list += "and " + toppings[i] + "."
        } else {
            list += toppings[i] + ", ";
        }
    }
    console.log(list);
    return list;
}
console.log("List all toppings available: ", listToppings(toppings));

function greetCustomer(){
    let greeting = "Welcome to Pizza House, our toppings are: ";
    // for (let topping of pizzaToppings){
    //     greeting = greeting + topping + " ";
    // }
    greeting += listToppings(toppings);
    console.log(greeting);
}
greetCustomer();

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings){
    let order = "One " + size + " " + crust + " crust pizza with ";
    // let orderList = [size, crust];
    // for (let topping of toppings){
    //     order += topping + " ";
    //     orderList.push(topping);
    // }
    // console.log(order);
    // console.log(orderList);
    // return orderList;
    for (let topping of toppings){
        //order += topping + " ";
        order += `${topping} `;
    }
    console.log(order + "coming up!");
    return [size, crust, toppings];
}

let myPizza = getPizzaOrder("small", "thin", "olives", "tomatoes", "peppers");

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(anyPizza){
    console.log("cooking pizza");
    let pizzaObj = {
        size: anyPizza[0],
        crust: anyPizza[1],
        toppings: anyPizza[2]
    }
    console.log(pizzaObj);
    return pizzaObj;
}

let myOrder = preparePizza(myPizza);
console.log("result of preparePizza function: ", myOrder);

function servePizza(obj){
    let message = `Order up! Here's your ${obj.size} ${obj.crust} crust pizza with `;
    for (topping of obj.toppings){
        message += topping + " ";
    }
    message += "Enjoy!"
    console.log(message);
    return obj;
}

console.log("Calling servePizza function: " + servePizza(myOrder));

console.log("calling nested functions: " + 
servePizza(preparePizza(getPizzaOrder("large", "thick", "cheese", "sausage", "mushroom", "tomatoes"))));


// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.