// O'Reilly 1609

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes("password")

}
console.log(isValidPassword("score"));
console.log(isValidPassword("scoregdfgdgfdgdfgdsg"));
console.log(isValidPassword("scorepasswordfghdffgd"));
