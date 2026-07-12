const texts = [
    "B.Tech CSE Student",
    "Software Developer",
    "Flask Backend Developer",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";

function typeEffect(){

    if(charIndex < texts[index].length){

        document.getElementById("typing").innerHTML += 
        texts[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);

    }
}


function eraseEffect(){

    if(charIndex > 0){

        document.getElementById("typing").innerHTML =
        texts[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        index++;

        if(index >= texts.length)
            index=0;

        setTimeout(typeEffect,500);
    }

}


typeEffect();
