console.log('connected?')

const winButtonEl = document.querySelector('#win-button')
const messageEl = document.querySelector('#message')
let click = 0

winButtonEl.addEventListener('click', function() {
    click++
    if (click === 1) {
        messageEl.textContent = 'You WIN!!!'
    } else {
        messageEl.textContent = "It didn't say to click more than once. You got greedy. You LOSE!"
        messageEl.style.color = 'red'
    }
    console.log('clicked')
})

const randomWord = 'cake'
console.log(randomWord)

const wordArr = ['c', 'a', 'k', 'e',]
console.log(wordArr.join(''))

console.log(randomWord === wordArr.join(''))














const wordsArr = ['chips', 'pizza', 'cookies']
let word = ''

function generateRandomWord() {
    const randNum = Math.random()
    word = wordsArr[randNum]
}

generateRandomWord()




// win/loss logic

// // eventListener listens for clicks
// let totalClicks = 0

// //where in the code?
// totalClicks++

// const clickLimit = 8

// if (totalClicks >= clickLimit) {
//     Game Over!
//     render game over to the DOM
// }