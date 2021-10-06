const items = [1, 'Shaquille', false, 2.22];

function Iterator(items) {
    this.items = items;
    //this.index = 0;
    this.index = items.length - 1;
}
Iterator.prototype = {
    hasNext: function () {
        //return this.index < this.items.length;
        return this.index >= 0;
    },
    next: function () {
        // return this.items[this.index++];
        return this.items[this.index--];
    }
}

const iterator = new Iterator(items);
while (iterator.hasNext())
    console.log(iterator.next());
