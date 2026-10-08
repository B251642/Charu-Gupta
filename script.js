// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

    const nav = document.getElementById("navbar");

    if (nav) {
        nav.classList.toggle("show");
    }
}


// =============================
// SEARCH
// =============================

function searchWebsite() {

    const input = document.getElementById("searchInput");
    const result = document.getElementById("searchResult");

    if (!input || !result) {
        return;
    }

    const value = input.value.trim().toLowerCase();

    if (value === "") {

        result.innerHTML =
            "Please enter something to search.";

        return;
    }

    const data = {

        water: "Smart Water Management Service",

        transport: "Smart Transportation Service",

        traffic: "Smart Traffic Management Project",

        waste: "Solid Waste Management Service",

        energy: "Smart Energy Management",

        heritage: "Heritage Conservation Project",

        tourism: "Tourist Places Information",

        hospital: "Healthcare Services"

    };

    let found = false;

    for (let key in data) {

        if (value.includes(key)) {

            result.innerHTML =
                "✅ Result: " + data[key];

            found = true;
            break;
        }
    }

    if (!found) {

        result.innerHTML =
            "❌ No result found. Try: water, transport, waste, energy, heritage.";
    }
}


// =============================
// CONTACT FORM
// =============================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const message =
                document.getElementById("message").value;

            const formMessage =
                document.getElementById("formMessage");


            if (
                name.trim() === "" ||
                email.trim() === "" ||
                message.trim() === ""
            ) {

                formMessage.innerHTML =
                    "❌ Please fill all fields.";

                return;
            }


            formMessage.innerHTML =
                "✅ Thank you! Your message has been submitted.";

            contactForm.reset();

        }
    );
}


// =============================
// PROJECT DETAILS
// =============================

function showProject(projectName) {

    alert(
        "Project: " +
        projectName +
        "\n\nMore information about this Smart City project."
    );

}