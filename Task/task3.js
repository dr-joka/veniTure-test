const calculateButton = document.getElementById('calculateButton');

const messageLabel = document.getElementById('messageLabel');

calculateButton.addEventListener('click', function(){
    const numbersString = document.getElementById('numbers').value;

    let numbers = numbersString.replace(/ /g, '');
    numbers = numbers.split(',');
    numbers = numbers.map(n => parseInt(n));
    
    const targetNumber = parseInt(document.getElementById('targetNumber').value);

    const result = findSumCount(numbers, targetNumber);
    if(result){
        messageLabel.innerHTML = result;
    } else {
        messageLabel.innerHTML = -1;
    }

    
});

const findSumCount = function (numbers, targetNumber) {
    numbers = numbers.map(n =>{
        if (n <= targetNumber)
            return n;
    }); //get only those numbers that are lower than targetNumber
    if(numbers.includes(targetNumber))
        return 1; //if targetNumber exists in the array return 1
    numbers = numbers.sort(function(a, b){return b-a}); //sort array descending
    
    let counter = 0;
    //prepare variable for repeated calculation
    const tnTmp = targetNumber;
    
    while(true){
        //add division amount to counter
        //targetNumber becomes remainder
        for (let i = 0; i < numbers.length; i++) {
            counter += Math.floor(targetNumber / numbers[i]);
            targetNumber = targetNumber % numbers[i];
        }

        if (numbers.length === 0 ){ //no numbers means didnt find sum, return -1
            return -1;
        }

        if(targetNumber === 0){ //if divided correctly return counter
            return counter;
        } else {                //else repeat for other numbers in the array
            numbers.shift();
            targetNumber = tnTmp;
            counter = 0;
        }
    }
}