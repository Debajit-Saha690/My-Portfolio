document.addEventListener("DOMContentLoaded", function () {


    // ================= TYPING EFFECT =================

    const text = "B.Tech CSE Student | Software Developer | Problem Solver";

    let i = 0;

    const typingElement = document.getElementById("typing");


    function typeEffect() {

        if (i < text.length) {

            typingElement.textContent += text.charAt(i);

            i++;

            setTimeout(typeEffect, 60);

        }

    }


    typeEffect();



    // ================= THEME TOGGLE =================


    const themeButton = document.getElementById("theme-toggle");


    // Load saved theme

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeButton.textContent = "🌙";

    } 
    else {

        themeButton.textContent = "☀️";

    }



    // Toggle theme

    themeButton.addEventListener("click", function () {


        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {


            localStorage.setItem("theme", "light");

            themeButton.textContent = "🌙";


        } 
        else {


            localStorage.setItem("theme", "dark");

            themeButton.textContent = "☀️";


        }


    });


});
