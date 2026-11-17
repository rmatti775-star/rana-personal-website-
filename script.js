const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "ar";

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.textContent = element.dataset[currentLanguage];
    });
    languageToggle.textContent = currentLanguage === "ar" ? "English" : "العربية";
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = document.getElementById("formNote");
    note.textContent = currentLanguage === "ar"
      ? "شكراً لك! تم تجهيز رسالتك. هذا نموذج تجريبي ولا يرسل البيانات إلى خادم."
      : "Thank you! Your message is ready. This is a demo form and does not send data to a server.";
    contactForm.reset();
  });
}
