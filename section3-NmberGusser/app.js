let min = 1,
    max = 10,
    winNumber = 2,
    guessleft = 3;

//UI Elements
const UIgame = document.querySelector('#game'),
    UIminNum = document.querySelector('.min-num'),
    UImaxNum = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input'),
    UImessage = document.querySelector('.message');

//Assign min and Max
UIminNum.textContent = min;
UImaxNum.textContent = max;

//Listen for play-again

UIgame.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

//Listen for guess
UIguessBtn.addEventListener('click', () => {
    let guess = parseInt(UIguessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage('Please enter a number between required range..!!', 'red');
    } else {
        if (guess === winNumber) {
            //Disable Input
            UIguessInput.disabled = true;
            //color change
            UIguessInput.style.borderColor = 'green';
            setMessage('Your Guess is correct, YOU WIN..!!', 'green');
            UIguessBtn.value = 'Play Again';
            UIguessBtn.className += 'play-again';

        } else {
            //Wrong Number
            guessleft -= 1;
            if (guessleft === 0) {
                //Game over Lost
                //Disable Input
                UIguessInput.disabled = true;
                //color change
                UIguessInput.style.borderColor = 'red';
                setMessage('Game over, You Lost..!!', 'red');
                UIguessBtn.value = 'Play Again';
                UIguessBtn.className += 'play-again';
            } else {
                //Game continues, answer is wrong
                setMessage('Your guess is not correct', 'red');
            }

        }
    }

});
//set Meaage function
function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
}