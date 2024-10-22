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
    
    if (amount === "" || term === "" || rate === 0) {
        const error_messages = document.querySelector("#error_messages");
        error_messages.innerHTML = "";
        
        const errorP = document.createElement("p");
        errorP.classList.add("text-red-700");

        let errorArray = [];

        if (amount === "") {
            errorArray.push("Amount missing");
        } 
    
        if (term === "") {
            errorArray.push("Term missing");
        }

        if (rate === 0) {
            errorArray.push("Rate missing");
        }

        errorP.innerText = errorArray.join("\n");

        error_messages.appendChild(errorP);

    } else {

        // Remove error messages
        error_messages.innerHTML = "";

        // Terms in months
        const monthly = term * 12;

        // Monthly payments without rate
        const monthlyPayments = amount / monthly;

        const rateCalculation = amount * rate;

        const amountNumber = parseFloat(amount);
        const rateNumber = parseFloat(rate);

        // Total payments
        const totalPayments = amountNumber + rateCalculation;

        displayingResults(monthlyPayments, totalPayments);

    }


}

function displayingResults(monthlyPayments, totalPayments) {
    const resultsSelector = document.querySelector("#results");
    const resultsH2 = document.querySelector("#resultsH2");
    const resultsP = document.querySelector("#resultsP");

    resultsH2.innerHTML = "Your Results";
    resultsP.innerHTML = "We have calculated your results. We have some exciting insights to share with you. Based on the data, we have identified key trends and patterns that will provide you with a deeper understanding of your performance.";

    const addDivWithResults = document.createElement("div");
    addDivWithResults.id = "addDivWithResults";

    const getResultsList = resultsSelector.querySelector("#addDivWithResults");
    if (getResultsList) {
        resultsSelector.removeChild(getResultsList);
    }

    addDivWithResults.classList.add("w-full", "border-t-2", "rounded", "mb-5", "mt-5", "text-left", "p-5", "bg-black");

    const addPResults = document.createElement("p");
    addPResults.innerHTML = "Your montly payment:";

    const addH2Results = document.createElement("h2");
    addH2Results.classList.add("font-bold", "text-2xl", "mb-5");
    addH2Results.innerHTML = `€ ${monthlyPayments}`;

    console.log(monthlyPayments);

    const addHRResults = document.createElement("hr");

    const totalPResults = document.createElement("p");
    totalPResults.classList.add("mt-5")
    totalPResults.innerHTML = "Total amount:";

    const total2Results = document.createElement("h2");
    total2Results.classList.add("font-bold", "text-xl");
    total2Results.innerHTML = `€ ${totalPayments}`;

    resultsSelector.appendChild(addDivWithResults);
    addDivWithResults.appendChild(addPResults);
    addDivWithResults.appendChild(addH2Results);

    addDivWithResults.appendChild(addHRResults);
    
    addDivWithResults.appendChild(totalPResults);
    addDivWithResults.appendChild(total2Results);
}