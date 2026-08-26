const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_istgfnc",

        "template_k3kwzs9",
        this,
        "S2ZgFRHO3AUzkyBLK"
    )
    .then(() => {

        alert("Message sent successfully!");

        form.reset();

    })
    .catch((error) => {

        console.log("EmailJS Error:", error);

        alert("Something went wrong. Please try again.");

    });

});