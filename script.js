// Плавная прокрутка для всех ссылок
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Скрытие навбара при прокрутке вниз
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 120) {
    navbar.style.transform = "translateX(-50%) translateY(-120px)";
    navbar.style.opacity = "0";
  } else {
    navbar.style.transform = "translateX(-50%) translateY(0)";
    navbar.style.opacity = "1";
  }

  lastScroll = currentScroll;
});

// Анимация появления элементов
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll(".about-card, .skill-item, .contact-box, .hero-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);
  });

// Закрытие навбара при клике на ссылку (на мобильных)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    // Можно добавить логику закрытия меню, если сделаешь бургер-меню позже
  });
});
