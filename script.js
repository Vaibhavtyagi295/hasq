


document.querySelector("#ram .h").addEventListener("mouseover",function(){
    document.querySelector(".aka").style.width= "100%";
    document.querySelector("#ram .h").style.display="none"
})
document.querySelector(".aka").addEventListener("mouseout",function(){
    document.querySelector(".aka").style.width= "0%";
    document.querySelector("#ram .h").style.display="initial"
})

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay:{
        delay:1005,
    }
  });

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `1.jfif
    2.jfif
    3.jfif
    4.jfif
    5.jfif
    6.jfif
    7.jfif
    
    
    `
       
    return data.split("\n")[index];
}
const frameCount = 7;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 3
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
};


gsap.to(".raam", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
   
    ease: Power0.easeNone,
  })
gsap.to(".raa", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".na", {
    y: "-100vh",
    duration: 5,
    repeat: -1,

    ease: Power0.easeNone,
  })
gsap.to(".ma", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".sa", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
  
    ease: Power0.easeNone,
  })
gsap.to(".hola", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".raamm", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".raammm", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".he", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".ll", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  })
gsap.to(".oo", {
    y: "-100vh",
    duration: 5,
    repeat: -1,
    rotate: "360deg",
    ease: Power0.easeNone,
  });

  var typed =new Typed(".auto-type",{
    strings:["Message","Mensaje","Molaetsa","Neges"],
    typeSpeed:150,
    backSpeed:150,
    loop:true,
  })

 /* var tl = gsap.timeline();

  tl.from("#header .left", {
    y: 50,
    opacity: 0,
    duration:1,
    duration: 1.2,
  })*/
  function reveal(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        var parent = document.createElement("span");
        var child = document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child)
        elem.innerHTML= "";
        elem.appendChild(parent)
    });
}
reveal();
var tl = gsap.timeline();

tl.from(".child span",{
    y:200,
    duration:1,
    stagger:.2,
    delay:0.4,
    opacity: 0,
    ease: Expo.easeInOut
})

tl.to(".parent .child",{
    y:"-100%",
    duration:1,
    delay:1,
    ease: Expo.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease: Circ.easeInOut
})
.to("#green",{
    height:"100%",
    duration:1,
    delay:-2,
    ease: Circ.easeInOut
})
tl.from("#header .left", {
  y: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#header .right", {
  y: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#center .brand", {
  y: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#center .spa", {
  y: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#center .goal", {
  x: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#center .exp", {
  x: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
tl.from("#center .dis", {
  y: 50,
  opacity: 0,
  duration:1,
  duration: 1.2,
})
