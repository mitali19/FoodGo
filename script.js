const filterButtons = document.querySelectorAll(".filter-btn");
const restaurantCards = document.querySelectorAll(".cuisine-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    restaurantCards.forEach((card) => {
      card.style.display =
        filter === "all" || card.classList.contains(filter) ? "block" : "none";
    });
  });
});

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".side-image.left").classList.add("show");
        document.querySelector(".side-image.right").classList.add("show");
        observer.disconnect(); // Stop observing after first reveal
      }
    });
  },
  {
    threshold: 0.4, // Adjust if needed — triggers when 40% of section is visible
  }
);

observer.observe(document.querySelector(".download-the-app"));

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Optional: stop observing after first trigger
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Select all elements with the .scroll-slide-up class
  document.querySelectorAll(".scroll-slide-up").forEach((el) => {
    observer.observe(el);
  });
});
