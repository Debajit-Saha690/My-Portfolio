document.addEventListener("DOMContentLoaded", function () {

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

});
