var account =
{
    balance: 0.00
};

// deposit
function deposit(account, amount)
{
    account.balance += amount;
}
// withdraw
function withdraw(account, amount)
{
    account.balance -= amount;
}

// getBalance
function getBalance(account)
{
    console.log("Balance: $" + account.balance);
}

deposit(account, 5.00);
getBalance(account);
withdraw(account, 2.50);
getBalance(account);
deposit(account, 100);
getBalance(account);