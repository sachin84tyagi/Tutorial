/*********************************Example-1************************************** */
const iterator1 = {
    counter: 1,
    [Symbol.iterator]: function () {
        return this;

    }
}
console.log(iterator1)
/*********************************Example-2************************************** */
const iterator2 = {
    counter: 1,
    next() {
        // ...
    },
    [Symbol.iterator]() {
        return this;
    },
};
console.log(iterator2)
/*********************************Example-3************************************** */
const iterable3 = {
    i: 1,
    end: 5,
    [Symbol.iterator]: function () {
        let that = this
        return {
            next() {
                if (that.i <= that.end) {
                    return {
                        value: that.i++,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}


for (let i of iterable3) {
    console.log(i)
}

/*********************************Example-4************************************** */
let obj = {
    a: 10,
    b: 20,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (obj.a < obj.b) {
            return { value: obj.a++, done: false };
        } else {
            return { done: true };
        }
    }
}
for (let i of obj) {
    console.log(i);
}

/*********************************Example-5************************************** */