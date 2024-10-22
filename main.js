// Mortgage amount

const type = document.querySelectorAll("#type");

function clearAll() {
    const clearAll = document.querySelector("#clearAll");

    clearAll.addEventListener("click", () => {
        amount.value = "";
        term.value = "";
        rate.value = "";

        type.forEach(button => {
            button.checked = false;
        });

    });
}

function calculate(event) {
    event.preventDefault();

    const amount = document.querySelector("#amount").value;
    const term = document.querySelector("#term").value;
    const rate = document.querySelector("#rate").value / 100;



    console.log(amount);
    console.log(term);
    console.log(rate);

    const monthlyPayments = amount / term;
    const monthlyPaymentsPlusRate = monthlyPayments * rate;
    console.log(monthlyPayments);
    console.log(monthlyPaymentsPlusRate);
    

}