/* ======================================
   ZARUO WEBSITE
   Version 1.0 Script
====================================== */

// Smooth reveal animations

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// Navbar scroll effect

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.style.background = "rgba(10,10,10,.95)";
        nav.style.boxShadow = "0 15px 40px rgba(0,0,0,.45)";

    }

    else{

        nav.style.background = "rgba(8,8,8,.82)";
        nav.style.boxShadow = "none";

    }

});


// Hero logo glow

const logo = document.querySelector(".hero-logo");

document.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.clientX)/35;
    const y = (window.innerHeight/2 - e.clientY)/35;

    logo.style.transform =
    `translate(${-x}px,${-y}px)`;

});


// Button hover scaling

document.querySelectorAll(".buttons a").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});


// Current Year

const footer = document.querySelector("footer p:last-child");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Zaruo. All Rights Reserved.`;

}


// Console message 😎

console.log("%cWelcome to ZARUO",
"color:red;font-size:22px;font-weight:bold;");

console.log("Website built with ❤️");
