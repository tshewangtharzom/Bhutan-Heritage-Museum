/* =========================
   MOBILE MENU
========================= */

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {

    menuToggle.textContent = "✕";

  } else {

    menuToggle.textContent = "☰";

  }

});


/* Close mobile menu after clicking link */

document
  .querySelectorAll("#navMenu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");

      menuToggle.textContent = "☰";

    });

  });


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle =
  document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const darkMode =
    document.body.classList.contains("dark");


  themeToggle.textContent =
    darkMode ? "☀️" : "🌙";


  localStorage.setItem(
    "museumTheme",
    darkMode ? "dark" : "light"
  );

});


/* Remember selected theme */

if (
  localStorage.getItem("museumTheme")
  === "dark"
) {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀️";

}


/* =========================
   COLLECTION FILTER
========================= */

const filters =
  document.querySelectorAll(".filter");

const cards =
  document.querySelectorAll(".collection-card");


filters.forEach(filter => {

  filter.addEventListener("click", () => {

    /* Remove active class */

    filters.forEach(btn => {

      btn.classList.remove("active");

    });


    /* Add active class */

    filter.classList.add("active");


    const category =
      filter.dataset.filter;


    /* Show / hide cards */

    cards.forEach(card => {

      const visible =
        category === "all" ||
        card.dataset.category === category;


      if (visible) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


/* =========================
   COLLECTION MODAL
========================= */

const modal =
  document.getElementById("modal");

const modalTitle =
  document.getElementById("modalTitle");

const modalInfo =
  document.getElementById("modalInfo");

const modalClose =
  document.getElementById("modalClose");


const learnButtons =
  document.querySelectorAll(".learn-btn");


learnButtons.forEach(button => {

  button.addEventListener("click", () => {

    modalTitle.textContent =
      button.dataset.title;

    modalInfo.textContent =
      button.dataset.info;

    modal.classList.add("show");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  });

});


/* Close modal */

function closeModal() {

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


modalClose.addEventListener(
  "click",
  closeModal
);


/* Close modal when clicking outside */

modal.addEventListener("click", event => {

  if (event.target === modal) {

    closeModal();

  }

});


/* Close modal with Escape key */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* =========================
   VISITOR PLANNER
========================= */

const visitForm =
  document.getElementById("visitForm");


visitForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const visitors =
      Number(
        document.getElementById("visitors").value
      );


    const type =
      document.getElementById("visitType").value;


    const interest =
      document.getElementById("interest").value;


    const result =
      document.getElementById("planResult");


    const typeName = {

      general: "General Tour",

      family: "Family Tour",

      student: "Student Tour"

    }[type];


    const interestName = {

      all: "all major collections",

      art: "art and textiles",

      history: "history",

      culture: "culture and festivals",

      royal: "royal heritage"

    }[interest];


    const duration =
      interest === "all"
        ? "about 2 hours"
        : "about 90 minutes";


    result.innerHTML = `

      <strong>
        ✨ Route Ready!
      </strong>

      <br>

      ${visitors}
      visitor${visitors > 1 ? "s" : ""}

      ·

      ${typeName}

      <br>

      Focus on
      ${interestName};

      allow
      ${duration}.

    `;


    result.style.display = "block";

  }
);


/* =========================
   BACK TO TOP
========================= */

const topBtn =
  document.getElementById("topBtn");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 500) {

      topBtn.classList.add("show");

    } else {

      topBtn.classList.remove("show");

    }

  }
);


topBtn.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();