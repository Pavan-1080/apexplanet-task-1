// Mobile Navigation
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";

        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.style.color = "green";

    contactForm.reset();
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.querySelector(".nav-links").classList.remove("active");

    });

});