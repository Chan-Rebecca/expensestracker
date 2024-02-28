var expenses = [];

function addExpense() {
    var description = document.getElementById("expenseDescription").value;
    var amount = parseFloat(document.getElementById("expenseAmount").value);
    var category = document.getElementById("expenseCategory").value;
    
    if (description.trim() === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount for the expense.");
        return;
    }

    var expense = { description: description, amount: amount, category: category };
    expenses.push(expense);
    displayExpenses();
}

function displayExpenses() {
    var expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";

    expenses.forEach(function(expense) {
        var expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerHTML = `
            <span>Description: ${expense.description}</span>
            <span>Amount: $${expense.amount.toFixed(2)}</span>
            <span>Category: ${expense.category}</span>
        `;
        expenseList.appendChild(expenseItem);
    });
}
