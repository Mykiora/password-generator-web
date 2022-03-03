/**
 * Generate an array of characters from the unicode table in a given range
 * @param {number} start Where the range begins
 * @param {number} end Where the range ends
 * @returns {object} Array containing the characters
 */
function generateCharacters(start, end) {
    let characters = [];

    for (let i = start; i <= end; i++) {
        characters.push(String.fromCharCode(i));
    }

    return characters;
}

/**
 * Generate a random integer inside a given range
 * @param {number} min Minimum value -> default is 0
 * @param {number} max Maximum value -> default is 100
 * @returns {number}
 */
function generateRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Main function. Creates a random password by picking indexes randomly in an array of generated characters
 * @returns  {string}
 */
function generatePassword() {
    let password = [];
    let lowerCaseChar = generateCharacters(97, 122);
    let numberOfCharacters = document.querySelector('.characters-number').value;
    
    for (let i = 0; i < numberOfCharacters; i++) {
        let randomNumber = generateRandomNumber(0, lowerCaseChar.length);
        password.push(lowerCaseChar[randomNumber]);
    }
    
    return password.join('');
}

/**
 * Replace the default password field in the page with the generated password
 * @param {string} password The generated password 
 */
modifyPasswordField = function (password) {
    password = generatePassword();
    let numberOfCharacters = document.querySelector('.characters-number').value;
    let passwordField = document.querySelector('.password');

    switch(numberOfCharacters.length) {
        case 0:
            passwordField.innerText = 'Number of characters field cannot be empty';
            break;
        default:
            passwordField.innerText = password;
            break;
    }
};