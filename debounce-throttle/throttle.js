/**********************************Example-1*******************************/
// let count = 0;
// let fireThrottle = true;

// const showEl = document.querySelector(".show");
// const btnEl = document.querySelector('.button')

// btnEl.addEventListener('click', (e) => {
//     throttleCount()
// })

// function throttleCount() {
//     if (fireThrottle === true) {
//         count++;
//         showEl.innerHTML = count;
//         fireThrottle = false;
//         setTimeout(function () {
//             fireThrottle = true;
//         }, 900)

//     }
// }

/**********************************Example-2*******************************/
let count = 0;
let count1 = 0;
let fireThrottle = true;

const showEl = document.querySelector(".show");
const btnEl = document.querySelector('.button')

btnEl.addEventListener('click', (e) => {
    throttleCount(getIncrement, 900)
})

function getIncrement(i) {
    return Number(i) + 1
}

function throttleCount(fn, delay) {
    if (fireThrottle === true) {
        count = fn.call(this, count)
        showEl.innerHTML = count;
        fireThrottle = false;
        setTimeout(function () {
            fireThrottle = true;
        }, delay)

    }
}

function throttleFunc(func, interval) {
    let shouldFire = true;
    return function () {
        if (shouldFire) {
            func();
            shouldFire = false;
            setTimeout(() => {
                shouldFire = true;
            }, interval)
        }
    }
}

