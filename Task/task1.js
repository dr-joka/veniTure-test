const playButton = document.getElementById('playButton');

const resultLabel = document.getElementById('result');

playButton.addEventListener('click', function () {
    const selectedValue = document.getElementById('toolSelect').value;

    const computerTool = getRandomTool();

    if (selectedValue === computerTool){
        resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! Draw!';
        return;
    }

    if (selectedValue === 'Škare'){
        if (computerTool === 'Papir'){
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Win!';
        } else {
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Lose!';
        }
    } else if (selectedValue === 'Papir') {
        if (computerTool === 'Kamen'){
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Win!';
        } else {
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Lose!';
        }
    } else {
        if (computerTool === 'Škare'){
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Win!';
        } else {
            resultLabel.innerHTML = 'Computer has chosen ' + computerTool + '! You Lose!';
        }
    }
})

const getRandomTool = function () {
    const rnd = Math.floor(Math.random() * 3) + 1;

    switch (rnd) {
        case 1:
            return 'Kamen';
        case 2:
            return 'Škare';
        case 3:
            return 'Papir';
    }
}