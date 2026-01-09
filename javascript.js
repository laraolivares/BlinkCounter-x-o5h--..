const boton = document.getElementById("btn");
const blinkTimesN = document.getElementById("blinkTimesN");
const eyeGif = document.getElementById("eyeBlink");
const careful = document.getElementById("careful");
let blinkTimes = 664; 
window.onload = function() {
   
    const allButton = document.querySelectorAll("button");
    allButton.forEach(button => {
     
        button.classList.add('btn-normal');
    });
};


document.getElementById('search').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'what.html';
});

document.getElementById('heart').addEventListener('click', function(event) {
    window.location.href = 'heart.html';
});


boton.addEventListener("click", () => {
    const originalSrc = "EyeOpen.gif";
    const temporarySrc = "EyeBlink.gif";
    const duration = 500; 

    function changeImageTemporarily() {
        eyeBlink.src = temporarySrc;
        setTimeout(() => {
            eyeBlink.src = originalSrc;
        }, duration); 
    }

    blinkTimes += 1;
    blinkTimesN.textContent = blinkTimes; 
    
   
    if (blinkTimes === 666) {

        const allParagraphs = document.querySelectorAll("p");
        allParagraphs.forEach(p => {
          p.style.color = "red";
        });
        
        careful.style.color = "red"
        const allPre = document.querySelectorAll("pre");
        allPre.forEach(pre => {
          pre.style.color = "red";
        });
        const allA = document.querySelectorAll("a");
        allA.forEach(a => {
            a.style.setProperty('color', 'red', 'important'); 
        });
        

        const allButton = document.querySelectorAll("button");
        allButton.forEach(button => {
          button.classList.remove('btn-normal'); 
          button.classList.add('btn-glitch');  
        });
        
        eyeBlink.src = "EyeGlitch.gif";

    } else {
       
        const allParagraphs = document.querySelectorAll("p");
        allParagraphs.forEach(p => {
          p.style.color = "#00FF41";
        });
        const allPre = document.querySelectorAll("pre");
        allPre.forEach(pre => {
          pre.style.color = "#00FF41";
        });
        const allA = document.querySelectorAll("a");
        allA.forEach(a => {
          a.style.color = "#00FF41";
        });
        careful.style.color = "#0D0208"
        

        const allButton = document.querySelectorAll("button");
        allButton.forEach(button => {
          button.classList.remove('btn-glitch'); 
          button.classList.add('btn-normal');  
        });
        

        changeImageTemporarily();
    }
    
});
