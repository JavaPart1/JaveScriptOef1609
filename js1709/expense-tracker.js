// O'Reilly 1709

const account = {
    name: "Andy Mead",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        const expense = {
            description: description,
            amount: amount
        };
        this.expenses.push(expense);
    },
    addIncome: function (description, amount) {
        const income = {
            description: description,
            amount: amount
        };
        this.income.push(income);
    },
    getAccountSummary: function () {
        let sumExpenses = 0;
        let sumIncome = 0;
        this.expenses.forEach (function (item, index) {
            sumExpenses = sumExpenses + item.amount;
        });
        this.income.forEach (function (item, index) {
            sumIncome = sumIncome + item.amount;
        });
        const balance = sumIncome - sumExpenses;
        return `${this.name} has a balance of ${balance}. $${sumIncome} in income. $${sumExpenses} in expenses.`
    }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
