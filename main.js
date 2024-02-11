let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
    let span=document.createElement("span");
    span.textContent=letter;
    span.className="letter";
    word.append(span);

    });
});

let currentWordIndex=0;
let maxWordIndex=words.length-1;
words[currentWordIndex].style.opacity="1";

let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextWord=currentWordIndex===maxWordIndex ? words[0] : words[currentWordIndex+1];
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout( ()=>{
            letter.className="letter out"
        },i*80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340+i*80);
    });
    currentWordIndex=currentWordIndex===maxWordIndex ? 0:currentWordIndex + 1;

};
changeText();
setInterval(changeText,3000)

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = 100; // Adjust the number of lines as needed for higher density
    var markedPercentage = 92; // Set the percentage of lines to be marked
    var marked = Math.floor(dots * markedPercentage / 100); // Calculate the number of lines to be marked
    var rotation = 360 / dots;

    var points = "";
    for (let i = 0; i < dots; i++) {
        let angle = (360 / dots) * i;
        points += `<div class="points" style="--i:${i};--rot:${angle}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < Math.min(dots, marked); i++) {
        pointsMarked[i].classList.add('marked');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var mixer = mixitup('.portfolio-gallery', {
        selectors: {
            control: '[data-filter]'
        }
    });
});


let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
    let len = sections.length;
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>50)
})

let menuIcon=document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");
}

window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});



const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollSBottom = document.querySelectorAll(".scroll-bottom");
scrollSBottom.forEach((el) => observer.observe(el)); // Use 'observe' to add elements to the observer

const scrollTop = document.querySelectorAll(".scroll-toop");
scrollTop.forEach((el) => observer.observe(el)); // Use 'observe' to add elements to the observer

