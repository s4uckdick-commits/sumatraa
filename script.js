// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  // Proveravamo da li JS uopšte hvata klik
  console.log("Kliknuto na hamburger!");

  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  // Sprečavamo skrolovanje dok je meni otvoren
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const contactOverlay = document.getElementById("contact-overlay");
  const openBtn = document.querySelector(".nav-cta");
  const closeBtn = document.querySelector(".close-overlay");

  // Otvaranje
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Stop scroll
  });

  // Zatvaranje na dugme
  closeBtn.addEventListener("click", () => {
    contactOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Zatvaranje klikom van kontejnera
  contactOverlay.addEventListener("click", (e) => {
    if (e.target === contactOverlay) {
      contactOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Zatvaranje na ESC taster
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && contactOverlay.classList.contains("active")) {
      contactOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const inquiryModal = document.getElementById("inquiry-modal");
  const inquiryForm = document.getElementById("inquiry-form");
  const offerNameDisplay = document.getElementById("selected-offer-name");
  const offerIdInput = document.getElementById("modal-offer-id");
  const compactCards = document.querySelectorAll(".compact-card");

  // 1. Otvaranje modala na klik kartice
  compactCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.getAttribute("data-title");
      const id = card.getAttribute("data-id");

      // Popunjavanje podataka u modalu
      offerNameDisplay.textContent = title;
      offerIdInput.value = id;

      // Aktivacija modala
      inquiryModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Stop scroll pozadine
    });
  });

  // 2. Zatvaranje modala na klik van sadržaja (na overlay)
  inquiryModal.addEventListener("click", (e) => {
    if (e.target === inquiryModal) {
      closeInquiryModal();
    }
  });

  // 3. Funkcija za zatvaranje
  function closeInquiryModal() {
    inquiryModal.classList.remove("active");
    document.body.style.overflow = ""; // Vrati scroll
    inquiryForm.reset(); // Resetuj formu za sledeći put
  }

  // Opciono: Zatvaranje na ESC taster
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && inquiryModal.classList.contains("active")) {
      closeInquiryModal();
    }
  });
});
