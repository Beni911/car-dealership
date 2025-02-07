function submitForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const carModel = document.getElementById("carModel").value;
    const connectService = document.getElementById("connectService").value;


    if (!name || !email || !phone) {
        alert("Kérjük, töltse ki az összes mezőt!");
        return;
    }


    document.getElementById("audiForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";


    console.log(`Autómodell: ${carModel}`);
    console.log(`Név: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Telefonszám: ${phone}`);
    console.log(`Audi Connect Szolgáltatás: ${connectService}`);
}
