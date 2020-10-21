const checkButton = document.getElementById('checkButton');

const messabeLabel = document.getElementById('messageLabel');

checkButton.addEventListener('click', function () {
    const text = document.getElementById('text').value;

    if (!text)
        return;

    if(checkIfPalindrome(text)){
        messabeLabel.innerHTML = text + '<b> is palindrome! :) </b>';
    } else {
        messabeLabel.innerHTML = text + '<b> is not palindrome! :( </b>';
    }
});

function checkIfPalindrome(text) {
    let tmp = text.toLowerCase();
    tmp = tmp.replace(/ /g, ''); //replace every ' ' with ''

    let array = [];
    for (let i = 0; i < tmp.length; i++) {
        if(tmp.charCodeAt(i) < 384){ //get only (croatian) characters
            array.push(tmp[i]);
        }
    }

    tmp = '';
    array.forEach(c => tmp += c);

    let reverseArray = [];
    for (let i = tmp.length - 1; i >= 0 ; i--) {
        reverseArray.push(tmp[i]);
    }
    
    let reverseText = '';

    reverseArray.forEach(c => reverseText += c);

    return tmp === reverseText;
}