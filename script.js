// ===============================
// WEBSITE DESA SEBURING
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website Desa Seburing berhasil dimuat.");

    // Animasi sederhana ketika halaman digulir
    const cards = document.querySelectorAll(
        ".gallery-card, .about-image, .nature-image"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "0.7s ease";

        observer.observe(card);

    });

});
