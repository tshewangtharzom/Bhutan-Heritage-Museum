// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");

        menuToggle.textContent =
            navMenu.classList.contains("open")
                ? "✕"
                : "☰";
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}


// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Check saved theme
    const savedTheme = localStorage.getItem("museumTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("museumTheme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("museumTheme", "light");
        }
    });
}


// ===============================
// COLLECTION FILTER
// ===============================

const filters =
    document.querySelectorAll(".filter");

const cards =
    document.querySelectorAll(".collection-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.getAttribute("data-filter");

        cards.forEach(card => {

            const cardCategory =
                card.getAttribute("data-category");

            if (
                category === "all" ||
                category === cardCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    });

});


// ===============================
// COLLECTION POPUP
// ===============================

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalInfo =
    document.getElementById("modalInfo");

const modalClose =
    document.getElementById("modalClose");


document.querySelectorAll(".learn-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            modalTitle.textContent =
                button.dataset.title;

            modalInfo.textContent =
                button.dataset.info;

            modal.classList.add("show");

        });

    });


if (modalClose) {
    modalClose.addEventListener("click", () => {
        modal.classList.remove("show");
    });
}


if (modal) {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            modal.classList.remove("show");
        }

    });

}


document.addEventListener("keydown", event => {

    if (event.key === "Escape" && modal) {
        modal.classList.remove("show");
    }

});


// ===============================
// VISITOR PLANNER
// ===============================

const visitForm =
    document.getElementById("visitForm");

if (visitForm) {

    visitForm.addEventListener("submit", event => {

        event.preventDefault();

        const visitors =
            Number(
                document.getElementById("visitors").value
            );

        const visitType =
            document.getElementById("visitType").value;

        const interest =
            document.getElementById("interest").value;

        const result =
            document.getElementById("planResult");


        const visitNames = {

            general: "General Tour",

            family: "Family Tour",

            student: "Student Tour"

        };


        const interestNames = {

            all: "all major collections",

            art: "art and textiles",

            history: "history",

            culture: "culture and festivals",

            royal: "royal heritage"

        };


        const duration =
            interest === "all"
                ? "about 2 hours"
                : "about 90 minutes";


        result.innerHTML = `
            <strong>✨ Your Museum Route</strong>
            <br><br>

            👥 Visitors:
            ${visitors}

            <br>

            🎟️ Tour:
            ${visitNames[visitType]}

            <br>

            🏛️ Focus:
            ${interestNames[interest]}

            <br>

            ⏱️ Suggested time:
            ${duration}
        `;

        result.style.display = "block";

    });

}


// ===============================
// BACK TO TOP
// ===============================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ===============================
// CURRENT YEAR
// ===============================

const year =
    document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}