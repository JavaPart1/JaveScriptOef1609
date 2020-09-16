// O'Reilly 1609

let myAccount = {
    name: "Andrew",
    expenses: 0,
    income: 0,
    addIncome: function (amount){
        this.income = this.income + amount;
    },
    addExpense: function (amount){
        this.expenses = this.expenses + amount;
    },

};

let addIncome = function (account,amount = 0) {
    account.income = account.income + amount;
}

let addExpense = function (account,amount = 0) {
    account.expenses = account.expenses + amount;
}

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
    console.log(`Resetting account: ${account.name}...`)
}

let getAccountSummery = function (account) {
    console.log(`Account for ${account.name} has $${account.income-account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`);
}

addIncome(myAccount,1000);
addExpense(myAccount,100);
addExpense(myAccount,150);
getAccountSummery(myAccount);
resetAccount(myAccount);
getAccountSummery(myAccount);
myAccount.addIncome(245);
myAccount.addExpense(5);
getAccountSummery(myAccount);
