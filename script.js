```javascript
const form = document.getElementById("reportForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const area = document.getElementById("area").value;
    const problem = document.getElementById("problem").value;
    const description = document.getElementById("description").value;

    if(name === "" || email === "" || phone === ""
        || area === "" || problem === "" || description === "") {

        alert("Please fill in all fields!");

    } else {

        alert("Outage report submitted successfully!");

        form.reset();
    }

});
```
