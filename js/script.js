const scrollToTop = document.querySelector(".scrollToTop");
let isMilestonesLoaded = false;

window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
  window.scroll({ top: 0 });
});

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) startMilestonesCount();
  },
  { threshold: [0.5] }
);

observer.observe(document.querySelector(".milestones__container"));

const startMilestonesCount = () => {
  if (!isMilestonesLoaded) {
    isMilestonesLoaded = true;
    $(".milestone__number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
};

const html = document.querySelector("html");

const responsiveNavbar = document.querySelector(".responsive__navbar");

responsiveNavbar.addEventListener("click", (e) => e.stopPropagation());
html.addEventListener("click", () => responsiveNavbar.classList.remove("show"));

const responsiveToggle = document.querySelector(".responsive__toggle");

const navLinks = document.querySelectorAll("#nav__link");

navLinks.forEach((link) =>
  link.addEventListener("click", () =>
    responsiveNavbar.classList.remove("show")
  )
);

responsiveToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  responsiveNavbar.classList.toggle("show");
});
