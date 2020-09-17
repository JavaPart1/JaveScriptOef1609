// O'Reilly 1609

let dinnerCheck = function (total = 0,tipPercent = 0) {
    //return "Check is : " + total + " ; and tip : " + total*tipPercent + " = " + total*(1+tipPercent);
    return total*tipPercent;
}

let check = dinnerCheck();
console.log(check);
let total = 40;
let tip = .25;
check = dinnerCheck(total,tip);
console.log(`A ${tip*100}% tip on $${total} would be $${check}`);
