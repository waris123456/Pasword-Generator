const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&^*()\|[]{};"<>/?';

function generatePassword() {
    var length = document.getElementById('lengthDiv').value;
    var result = ' ';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result)
    document.getElementById("answer").innerHTML = result
}