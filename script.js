let envelope = document.getElementById("envelope");
let coverLeft = document.getElementById("cover-left");
let coverRight = document.getElementById("cover-right");
 
const tl = gsap.timeline({defaults: {duration:0.5}})
envelope.addEventListener("click", animateonce);

/*function animateonce() {
    button.classList.add("animationjs");
    button2.classList.add("animation2js");

    setTimeout(() => {
        button.style.transform = "rotateX(180deg)";
        button.classList.remove("animationjs");
    }, 100);
    setTimeout(() => {
        button2.style.transform = "translateY(-100px)";
        button.classList.remove("animation2js");
    }, 1500);
}*/
function animateonce(){
    /*button.classList.add("animationjs");
    button2.classList.add("animationjs");
    button3.classList.add("animationjs");
    setTimeout(() => {
        button.style.opacity = 0;
        button2.style.opacity = 0;
        button3.style.opacity = 0;
        button.classList.remove("animationjs");
        button2.classList.remove("animationjs");
        button3.classList.remove("animationjs");
    }, 1000);*/
    gsap.to('.envelope' , {rotateX: '180deg' , duration:0.5})
    gsap.to('.envelope',{zIndex:1 , duration:1,delay:0})
    gsap.to('.envelope' , {opacity: 0 ,duration : 2  })
    gsap.to('.card',{y:-80 , duration:2,delay:1})
    gsap.to('.card',{y:0 , duration:1,delay:3})
    gsap.to('.cover-right' ,{opacity: 0 ,duration:0.5 , delay:2 , ease: "power2.out" })
    gsap.to('.cover-left' , {opacity: 0 ,duration:0.5 , delay:2 , ease: "power2.out"})
    gsap.to('.cover-left',{zIndex:1 , duration:1,delay:0})
    gsap.to('.cover-right',{zIndex:1 , duration:1,delay:0})
    gsap.to('.cover',{zIndex:1 , duration:1,delay:3})
    gsap.to('.card',{boxShadow: '-5px -5px 8px rgba(0, 0, 0, 0.559)', duration:1,delay:3})
    new Audio("/assets/sounds/pika-prop-sound.mp3").play();
}

let noClicks = -1;
const maxGifNoClicks = 3;
let gif = document.getElementById("pikachu-propose");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const gifs = ["/assets/images/pikachu-sad.gif","/assets/images/pikachu-very-sad.gif","/assets/images/pikachu-very-very-sad.gif"];
const messages = ["Please." , "I will be really sad." , "Pookie PLEASE."]
const nobuttonaudio = ["/assets/sounds/pikachucry1.mp3" , "/assets/sounds/pikachu-cry2.mp3" , "/assets/sounds/pikachu-cry3.mp3" ];
let message = document.getElementById("text")
yesButton.addEventListener("click",()=>{
    gif.src= "/assets/images/pikachu-happy.gif";
    message.innerHTML = "Yayyyy!";
    new Audio("/assets/sounds/pikachu-happy.mp3").play();
    yesButton.parentNode.removeChild(yesButton);
    noButton.parentNode.removeChild(noButton);
    

})
noButton.addEventListener("click",()=>{
    noClicks +=1;
    if(noClicks<maxGifNoClicks){
        gif.src = gifs[noClicks];
        message.innerHTML = messages[noClicks];
        new Audio(nobuttonaudio[noClicks]).play();
        
    }
    if(noClicks==maxGifNoClicks){
        noButton.parentNode.removeChild(noButton);
    }
    
})