function sendMail() {
    var params = {

        email: document.getElementById("email").value,

    };

    const serviceID = "esmegfx";
    const templateID = "template_i5nlel1";

    emailjs.send(serviceID, templateID, params)
        .then(res => {

            document.getElementById("email").value = "";

            console.log(res);
            alert("La tua email è stata inviata correttamente, se non ricevi una mia risposta controlla nella casella spam.")

        })
        .catch(err => console.log(err));

}