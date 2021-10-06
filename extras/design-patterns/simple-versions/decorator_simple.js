function Coffee() {
    // Empty object
}

Coffee.prototype.cost = function () {
    return 5;
};

Coffee.small = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost - 1;
    };
};

Coffee.medium = function (coffeeObj) {
    //default price
};

Coffee.large = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + 1;
    };
};

Coffee.sugar = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .25;
    };
};

Coffee.creamer = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .50;
    };
};

Coffee.whippedCream = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .75;
    };
};

Coffee.milk = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .60;
    };
};

Coffee.chocolate = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .40;
    };
};

Coffee.foam = function (coffeeObj) {
    const cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .30;
    };
};

Coffee.mocha = function (coffeeObj) {
    coffeeObj.cost = function () {
        Coffee.milk(coffeeObj);
        Coffee.foam(coffeeObj);
        Coffee.chocolate(coffeeObj);

        const cost = coffeeObj.cost();

        coffeeObj.cost = function () {
            return cost;
        }
    }
}
const coffee = new Coffee();
const mocha = new Coffee();
Coffee.small(coffee);
Coffee.whippedCream(coffee);

Coffee.medium(mocha);
Coffee.chocolate(mocha);
Coffee.whippedCream(mocha);
Coffee.milk(mocha);
console.log(coffee.cost() + '\n' + mocha.cost());