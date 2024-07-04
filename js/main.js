/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* Remove menu when click  */

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHight = current.offsetHeight,
      sectionTop = current.offsetHeight - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Email */
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
  e.preventDefault();
  /* service id - template id , form ,public key */
  emailjs
    .sendForm(
      "service_edg3d6x",
      "template_l35safn",
      "#contact-form",
      "zGyPUWJSmye6OVkW5"
    )
    .then(
      () => {
        /* Show Send Message */
        contactMessage.textContent = " Message sent successfully ✅";
        /* Remove message after second */
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 4000);
        /* Clear input */
        contactForm.reset();
      },
      /* Show error message */
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
/* Show Scroll */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
