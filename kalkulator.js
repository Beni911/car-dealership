function calculateLoan() {

    const price = parseFloat(document.getElementById("price").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);


    if (isNaN(price) || isNaN(downPayment) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    const loanAmount = price - downPayment;


    const monthlyRate = (interestRate / 100) / 12;


    const numerator = monthlyRate * Math.pow(1 + monthlyRate, loanTerm);
    const denominator = Math.pow(1 + monthlyRate, loanTerm) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);


    const totalPayment = monthlyPayment * loanTerm;


    document.getElementById("result").style.display = "block";

    document.getElementById("loanAmount").innerText = `Hitel összege: ${loanAmount.toFixed(2)} Ft`;
    document.getElementById("monthlyPayment").innerText = `Havi törlesztőrészlet: ${monthlyPayment.toFixed(2)} Ft`;
    document.getElementById("totalPayment").innerText = `Összes kifizetés: ${totalPayment.toFixed(2)} Ft`;
}
