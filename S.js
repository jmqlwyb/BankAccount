let balance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;

function checkBalance() {
    document.getElementById('message').innerText = 'Your balance is ' + balance;
}

function deposit() {
    let depositAmount = prompt("𝑬𝒏𝒕𝒆𝒓 𝒂𝒎𝒐𝒖𝒏𝒕 𝒕𝒐 𝒅𝒆𝒑𝒐𝒔𝒊𝒕");
    if (depositAmount && !isNaN(depositAmount)) {
        balance += parseFloat(depositAmount);
        localStorage.setItem('balance', balance); 
        document.getElementById('balance').value = balance;
        document.getElementById('message').innerText = "Deposit successful.";
    } else {
        document.getElementById('message').innerText = "Invalid deposit amount";
    }
}

function withdraw() {
    let withdrawAmount = prompt("Enter amount to withdraw:");
    if (withdrawAmount && !isNaN(withdrawAmount)) {
        if (balance >= withdrawAmount) {
            balance -= parseFloat(withdrawAmount);
            localStorage.setItem('balance', balance); 
            document.getElementById('balance').value = balance;
            document.getElementById('message').innerText = "Withdrawal successful.";
        } else {
            document.getElementById('message').innerText = "Insufficient funds.";
        }
    } else {
        document.getElementById('message').innerText = "Invalid withdrawal amount.";
    }
}

function exitATM() {
    // balance = 0;
    localStorage.setItem('balance', balance); 
    document.getElementById('balance').value = balance;
    document.getElementById('message').innerText = "𝑻𝑯𝑨𝑵𝑲 𝒀𝑶𝑼 𝑭𝑶𝑹 𝑼𝑺𝑰𝑵𝑮 𝑨𝑻𝑴";
}


window.onload = function() {
    document.getElementById('balance').value = balance;
};
