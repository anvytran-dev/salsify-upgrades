const inputBar = document.getElementById('userInput')
const progressBar = document.getElementById('progressBar')
const animatedProgressBar = document.getElementById('animatedProgressBar')
const theRunButton = document.getElementById('runButton')
const PROGRESS_BAR_MILISECONDS = 10


inputBar.addEventListener('keyup', updateProgressBar )
theRunButton.addEventListener('click', incrementToCompletion)


//This runs when the user clicks the enter key inside the input bar. 
function updateProgressBar() {
    
    startingPercentage = getUserInput()
    
    if(startingPercentage === -1) {
        setErrorMessage()
        clearUpdateMessage()
        theRunButton.disabled = true
        
    } else {
        clearErrorMessage()
        updateProgressBarWidth(startingPercentage)
        theRunButton.disabled = false
        updateMessage(startingPercentage)
        
    }
    
} 

//This runs when the user clicks on the 'Run' button.
function incrementToCompletion() {
    
    let startingPercentage = getUserInput()
    
    let barTimer = setInterval(function() {
        startingPercentage++
        
        if(startingPercentage > 100) {
            clearInterval(barTimer)
            
        } else {
            updateAnimatedProgressBar(startingPercentage)
            updateMessage(startingPercentage)
        }
        
    }, PROGRESS_BAR_MILISECONDS) 
}

//This function gets the user's input and validates it.
function getUserInput() {
    
    let num = inputBar.value === "" ? 0 : Number(inputBar.value)
    
    if(isNaN(num) || num < 0 || num > 100) {
        return -1
    }
    return num
}

//This function sets the error message for invalid inputs.
function setErrorMessage() {
    document.querySelector('#h2Invalid').innerText = "Your input must be a valid number from 0 to 100."
}

//This function clears the error message.
function clearErrorMessage() {
    document.querySelector('#h2Invalid').innerText = ""
}

//This function sets the updated progress bar's width.
function updateProgressBarWidth(percent){
    progressBar.style.width = `${percent}%`
    animatedProgressBar.style.width = `${percent}%`
}

//This function updates the 'animated' progress bar.
function updateAnimatedProgressBar(percent){
    animatedProgressBar.style.width = `${percent}%`
}

//This function updates the message which indicate which percentage the progress bar is currently at. 
function updateMessage(percent){
    document.getElementById('h2Message').innerText =`It's at ${percent}%`
}

//This function clears the updated message.
function clearUpdateMessage(){
    document.getElementById('h2Message').innerText = ""
}












