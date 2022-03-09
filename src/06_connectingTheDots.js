/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.
let bankAccounts = [
    {
        name: 'Bank of America',
        balance: 500,
        accountNumber: 10000
    },
    {
        name: 'Bank of Tirana',
        balance: 1000,
        accountNumber: 20000
    },
    {
        name: 'Bank of England',
        balance: 69,
        accountNumber: 30000
    },
    {
        name: 'HSBC',
        balance: 100,
        accountNumber: 40000
    },
    {
        name: 'Bank of Italy',
        balance: 200,
        accountNumber: 50000
    }
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
function getBalanceFromBank(accountNumber) {
    for (let account of bankAccounts) {
        if (account.accountNumber === accountNumber) return account.balance
        else return 'Cant find account with that number'
    }
}
// 3. Find a way to find out how much money you have in total.
function returnTotal() {
    let total = 0
    for (let account of bankAccounts) {
        total += account.balance
    }
    return total
}

// 4. Find a way to add money to a selected account.
// 4.1 And subtract too.
function addMoneyToAccount(accountNumber, amountToDeposit){
    for (let account of bankAccounts) {
        if (account.accountNumber === accountNumber) {
            account.balance += amountToDeposit
            return account
        }else return 'Cant find account with that number'
    }
}

function withdrawMoneyFromAccount(accountNumber, amountToWithdraw){
    for (let account of bankAccounts) {
        if (account.accountNumber === accountNumber) {
            if (amountToWithdraw > account.balance){
                return 'You do not have enough credit'
            }else{
                return `Withdrawal completed: Your balance is now ${account.balance-amountToWithdraw}`
            }
        }else return 'Cant find account with that number'
    }
}
// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.
