const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

// Mobile Menu
if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        if (nav) {
            nav.classList.remove("open");
        }
    });
});

// Theme
if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            themeBtn.textContent = "☀";
            localStorage.setItem("theme", "dark");
        }

    });
}

// Remember theme on all pages
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "🌙";
    }
}

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: "i9L9wzq39vVkpxmVW"
    });

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const form = this;

            const templateParams = {
                name: form.querySelector('[name="name"]').value,
                email: form.querySelector('[name="email"]').value,
                subject: form.querySelector('[name="subject"]').value,
                message: form.querySelector('[name="message"]').value
            };

            emailjs.send(
                "service_g0lpu4c",
                "template_uzv4wz9",
                templateParams
            )
            .then(function() {
                alert("Message sent successfully! ♡");
                form.reset();
            })
            .catch(function(error) {
                console.log("FULL EMAILJS ERROR:", error);
                alert("EmailJS Error: " + JSON.stringify(error));
            });
        });

    }
}
