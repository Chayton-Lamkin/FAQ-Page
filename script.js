const faqs = document.querySelectorAll(".faq");
const icon = document.querySelectorAll(".toggle")

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        icon.classList.rem("fa-cirlce-plug");
        icon.classList.toggle("fa-circle-minus");
    })
})