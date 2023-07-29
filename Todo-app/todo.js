//let todoArr = [{ title: 'Hit the gym', done: true }, { title: 'Pay bills', done: true }, { title: 'Meet George', done: false }, { title: 'Read a book', done: false }, { title: 'Organize office', done: false }]
let todoArr = []
const headEl = document.querySelector('.header')
const divEl = document.querySelector('.todo-list')
const formEl = document.querySelector('.todo-form')
const compEl = document.querySelector('.complete')
const delEl = document.querySelector('.delete')
listing(todoArr)
if (todoArr.length === 0) {
    displayMsg(divEl, 'h4', 'todo-msg', 'No Data Found', 'red')
}

formEl.addEventListener('submit', (e) => {
    clearMsg('.msg')
    e.preventDefault()
    if (e.target.title.value) {
        const newItem = { title: e.target.title.value, done: false }
        todoArr.push(newItem)
        listing(todoArr)
        e.target.title.value = ""
        displayMsg(headEl, 'h4', 'msg', 'Added successfully', 'green')
        clearMsg('.msg', 2000)
    }
})

function listing(arr) {
    divEl.innerHTML = ""
    const ulEl = document.createElement('ul')
    for (let i = 0; i < arr.length; i++) {
        let liEl = document.createElement('li')
        arr[i].done === true ? liEl.classList.add('checked') : ''
        liEl.innerText = arr[i].title
        const spanDelEl = document.createElement('span')
        const spanCompleteEl = document.createElement('span')
        spanCompleteEl.innerText = ' Complete'
        spanCompleteEl.classList.add('complete')
        spanDelEl.innerText = ' X'
        spanDelEl.classList.add('delete')
        liEl.appendChild(spanDelEl)
        liEl.appendChild(spanCompleteEl)
        ulEl.appendChild(liEl)

        spanCompleteEl.addEventListener('click', function (e) {
            clearMsg('.todo-msg')
            let changed = false
            const targetVal = e.target.parentNode.textContent.split(' ').slice(0, -2).join(' ')
            arr.map((el, ind) => {
                //el.done = el.done == false ? el.title == targetVal ? true : false : true
                if (el.title == targetVal && el.done == false) changed = true
                if (el.done == false) {
                    el.done = el.title == targetVal ? true : false
                } else {
                    el.done = true
                }
                return el
            })
            listing(arr)
            if (changed) {
                displayMsg(divEl, 'h4', 'todo-msg', 'Completed mark successfully', 'green')
                clearMsg('.todo-msg', 1500)
            }

        })

        spanDelEl.addEventListener('click', function (e) {
            clearMsg('.todo-msg')
            const targetVal = e.target.parentNode.textContent.split(' ').slice(0, -2).join(' ')
            filterArr = arr.filter((el, ind) => el.title != targetVal)
            listing(filterArr)
            if (filterArr.length === 0) {
                displayMsg(divEl, 'h4', 'todo-msg', 'No Data Found', 'red')
            } else {
                displayMsg(divEl, 'h4', 'todo-msg', 'Deleted successfully', 'green')
                clearMsg('.todo-msg', 1500)
            }

        })
    }

    divEl.appendChild(ulEl)
}

function displayMsg(topNode, tag, className, msg, color) {
    if (className)
        clearMsg('.' + className)
    const h4El = document.createElement(tag)
    h4El.classList.add(className)
    h4El.innerHTML = msg
    h4El.style.color = color
    h4El.style.backgroundColor = "#FFF";
    topNode.appendChild(h4El)
}

function clearMsg(className, time) {
    const el = document.querySelector(className)
    if (el) {
        if (time) {
            setTimeout(() => {
                el.parentNode ? el.parentNode.removeChild(el) : null;
            }, time)
        } else {
            el.parentNode.removeChild(el);
        }
    }
}