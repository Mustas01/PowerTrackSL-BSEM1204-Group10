/* =========================
   Outage Report Form
========================= */

const form = document.getElementById("reportForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
        document.getElementById("name").value;

        const email =
        document.getElementById("email").value;

        const phone =
        document.getElementById("phone").value;

        const area =
        document.getElementById("area").value;

        const problem =
        document.getElementById("problem").value;

        const description =
        document.getElementById("description").value;

        if(name === "" || email === "" ||
           phone === "" || area === "" ||
           problem === "" || description === ""){

            alert("Please fill in all fields!");

        }else{

            alert("Outage report submitted successfully!");

            form.reset();
        }

    });

}


/* =========================
   Contact Form Validation
========================= */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        const name =
        document.getElementById("contactName").value;

        const email =
        document.getElementById("contactEmail").value;

        const message =
        document.getElementById("contactMessage").value;

        if(name === "" || email === "" || message === ""){

            alert("Please complete all contact fields!");

        }else{

            alert("Message sent successfully!");

            contactForm.reset();
        }

    });

}

/* =========================
   Mobile Menu Toggle
========================= */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

if(menuToggle){

    menuToggle.addEventListener("click", function(){

        navLinks.classList.toggle("active");

    });

}


/* =========================
   Dark / Light Mode
========================= */

const themeBtn =
document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeBtn.innerHTML = "☀️";

        }else{

            themeBtn.innerHTML = "🌙";
        }

    });

}
