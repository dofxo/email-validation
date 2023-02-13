// varibales


const form = document.querySelector('form')
const inputDivs = document.querySelectorAll('#inputs>div')
const emailInput = document.querySelector('#email')
const resetBtn = document.querySelector('#reset')
const sendBtn = document.querySelector('#send')
const cover = document.querySelector('#cover')
// message and subject
const textValues = document.querySelectorAll('.textValue')

// TITLE : send button event listener 
sendBtn.addEventListener('click', () => { sendAnimation('SENT', 'check', '#337a04b9', '#000') })

// TITLE : prevents the action on form submit
form.addEventListener('submit', (e) => { e.preventDefault() })

// TITLE : resetBtn event listner
resetBtn.addEventListener('click', resetButton)

// TITLE : event listeners for email 
emailInput.addEventListener('keyup', emailValidation)
emailInput.addEventListener('focus', emailValidation)
emailInput.addEventListener('keyup', sendBtnStatus)

// TITLE : event listeners for subject and message 
textValues.forEach(input => {
    // keyup event
    input.addEventListener('keyup', () => {
        valueValidation(input)
    })
    // focus event
    input.addEventListener('focus', () => {
        valueValidation(input)
    })
    input.addEventListener('keyup', () => {
        sendBtnStatus()
    })
})

// functions


// TITLE : value validation
// checks if the following input is not empty
// if its not empty the background color of it's parentElement(div) will change to green
// if its empty the background color it's parentElement(div)will change to red

function valueValidation(input) {
    let parentDiv = input.parentElement

    if (input.value != "") {
        parentDiv.classList.add('verified')
        parentDiv.classList.remove('notVerified')
    }
    else {
        parentDiv.classList.remove('verified')
        parentDiv.classList.add('notVerified')
    }
}

// TITLE : email validation
// checks if the entered value of the input is a valid email or not with (regex)
// if it's valid , the background color it's parentElement(div)will change to green
// if it's not valid , the background color it's parentElement(div)will change to red

function emailValidation() {
    let parentDiv = emailInput.parentElement
    let emailInputValue = emailInput.value
    let validEmail = /^([a-z0-9_.\-\+!]+)@(gmail|mail|yahoo|Outlook).(com|ir)$/i

    if (validEmail.test(emailInputValue)) {
        parentDiv.classList.add('verified')
        parentDiv.classList.remove('notVerified')
    }
    else {
        parentDiv.classList.remove('verified')
        parentDiv.classList.add('notVerified')
    }

}

// TITLE : resetButton
// after we clicked on reset button, it will remove all div/button classes(makes the back to default)

function resetButton() {
    inputDivs.forEach(div => {
        div.classList = ''
        sendBtn.classList = ''
        sendAnimation('SEND', 'send', '', '')
    })
}

// TITLE : send button status
// checks if all the inputs have the verified class if they have it, the disabled atr would be removed, and also a verified class would be added to the button and will change the backgrond of it to green

function sendBtnStatus() {
    let emailInputDiv = emailInput.parentElement
    let subjectInputDiv = textValues[0].parentElement
    let messageInputDiv = textValues[1].parentElement



    if (emailInputDiv.classList.contains('verified') && subjectInputDiv.classList.contains('verified') && messageInputDiv.classList.contains('verified')) {

        sendBtn.classList.add('verified')
        sendBtn.removeAttribute('disabled')

    }
    else {
        sendBtn.classList.remove('verified')
        sendBtn.setAttribute('disabled', "")
    }


}




// TITLE : send animation
// whenever the user clicks on send animation the interface of the send button will change

function sendAnimation(innerText, imageName, bg, fontColor) {
    let sendButtonImage = document.querySelector('#send>img')
    let sendButtonText = document.querySelector('#send>span')

    sendButtonText.textContent = `${innerText}`
    sendButtonImage.setAttribute('src', `images/${imageName}.png`)
    sendBtn.style.background = `${bg}`
    sendBtn.style.color = `${fontColor}`
}
// #337a04b9