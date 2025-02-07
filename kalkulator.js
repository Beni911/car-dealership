function calculateLoan() {
    // Get input values
    const price = parseFloat(document.getElementById("price").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);

    // Basic validations
    if (isNaN(price) || isNaN(downPayment) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    // Calculate the loan amount
    const loanAmount = price - downPayment;

    // Calculate monthly interest rate
    const monthlyRate = (interestRate / 100) / 12;

    // Calculate the monthly payment (using the formula for a fixed-rate loan)
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, loanTerm);
    const denominator = Math.pow(1 + monthlyRate, loanTerm) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);

    // Calculate total payment
    const totalPayment = monthlyPayment * loanTerm;

    // Display results
    document.getElementById("result").style.display = "block"; // Show result div

    document.getElementById("loanAmount").innerText = `Hitel összege: ${loanAmount.toFixed(2)} Ft`;
    document.getElementById("monthlyPayment").innerText = `Havi törlesztőrészlet: ${monthlyPayment.toFixed(2)} Ft`;
    document.getElementById("totalPayment").innerText = `Összes kifizetés: ${totalPayment.toFixed(2)} Ft`;
}
