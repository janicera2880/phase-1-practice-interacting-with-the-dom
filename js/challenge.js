let counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const form = document.getElementById('comment-form')
const submit = document.getElementById('submit')
const likesDisplay = document.querySelector('.likes')
const likesMessage = document.createElement('li')
let likeCounter = 0;
const comments = document.getElementById('list')

plus.addEventListener('click', addOne)

minus.addEventListener('click', minusOne)

pause.addEventListener('click', pauseCounter)

heart.addEventListener('click', addLike)

form.addEventListener('submit', showComment)

function showComment(event) {
    event.preventDefault()
    const userComment = event.target.comment.value
    const p = document.createElement('p')

    p.textContent = userComment
    comments.appendChild(p)
    event.target.reset()
}

function addOne() {
    counter.innerHTML ++
    return counter
}

function minusOne() {
    if (counter.innerHTML > 0) {
        counter.innerHTML --
        return counter
    }
}

function pauseCounter() {
    const buttons = [plus, minus, like, submit]
    if (pause.innerText === "pause") {
        pause.innerText = "resume"
        for (const button of buttons) {
            button.disabled = true;
        }
    } 
    else if (pause.textContent === "resume") {
        pause.textContent = "pause"
        for (const button of buttons) {
            button.disabled = false;
        }
    }
    return pause
}

function addLike() {
    const current = counter.innerHTML
    const alreadyLiked = document.getElementById(`${current}_likes`)
    // if li already exists, need to add 1 to current number
    if (alreadyLiked) {
        // need to isolate likesNum from alreadyLiked text
        const alreadyLikedText = alreadyLiked.textContent.split(' ')
        // console.log(alreadyLikedText)
        const likesNum = parseInt(alreadyLikedText[4])
        // console.log(likesNum)
        alreadyLiked.textContent = `${current} has been liked ${likesNum + 1} times`
    }
    else {
        const likesMessage = document.createElement('li')
        likesMessage.id = `${current}_likes`
        likesMessage.textContent = `${current} has been liked 1 time`
        likesDisplay.append(likesMessage)
    }

}

let oneSecond = setInterval(addCounter, 1000)
function addCounter() {
    if(pause.innerText === "pause") {
        counter.innerHTML ++
    }
    return counter
}