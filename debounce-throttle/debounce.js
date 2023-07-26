/**********************************Example-1*******************************/
// let dCnt = 0;
// let dTimer;

// const dh2 = document.querySelector(".show");
// const btnEl = document.querySelector('.button')

// btnEl.addEventListener('click', (e) => {
//     debounceCount()
// })

// function debounceCount() {
//     clearInterval(dTimer);
//     dTimer = setTimeout(function () {
//         dCnt++;
//         dh2.innerHTML = dCnt
//     }, 500);
// }

/**********************************Example-2*******************************/
let count = 0
let handle;
const btnEl = document.querySelector(".button")
const showEl = document.querySelector(".show")

btnEl.addEventListener("click", (e) => {
    let x = debounce(getIncrement, 500)
    x(count)
})

function getIncrement(i) {
    return Number(i) + 1
}
function debounce(fn, delay) {
    return function (...args) {
        if (handle) {
            handle = clearTimeout(handle);
        }
        handle = setTimeout(() => {
            count = fn.apply(this, args)
            showEl.innerHTML = count
        }, delay)
    }
}

