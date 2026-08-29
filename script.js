const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// MENU HP

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// TUTUP MENU SETELAH LINK DIKLIK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});
