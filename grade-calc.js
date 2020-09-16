// O'Reilly 1609


let studentScore = function (score = 0,total = 20) {
    let percent = score/total*100;
    let letterScore = "";

    if (percent >= 90) {
        letterScore = "A";
    } else if (percent >= 80){
        letterScore = "B";
    } else if (percent >= 70){
        letterScore = "C";
    } else if (percent >= 60){
        letterScore = "D";
    } else if (percent >= 50){
        letterScore = "E";
    } else {
        letterScore = "F";
    }
    return `${score}/${total} -> you got a ${letterScore} (${percent}/100)!`;
}

let score = 15;
console.log(studentScore(score));
