function game(){
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function playGame() {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOption = [rockBtn,paperBtn,scissorsBtn];
        computerOption = ['rock', 'paper', 'scissors'];

        playerOption.forEach(option =>{
            option.addEventListener('click', function9{
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `You have ${10=moves} left`;
            })
        })
    }

}