
function generatePassword() {


    const passwordLength = 8;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true
    const includeSymbols = true;

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCase : "";
    allowedChars += includeUppercase ? upperCase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";



    for (let i = 0; i < passwordLength; i++) {
        if (i === 0)  //first letter should always be character
        {

            const randomIndex = Math.floor(Math.random() * 52)
            password += allowedChars[randomIndex];

        }
        else {

            const randomIndex = Math.floor(Math.random() * allowedChars.length)
            password += allowedChars[randomIndex];
        }
    }


    const result = document.getElementById("result");
    result.textContent = `Password: ${password}`;
}