const text = "B. Tech CSE Student | Software Developer | Problem Solver";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();