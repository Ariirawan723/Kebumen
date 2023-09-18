
//Function DropDown
$(document).ready(function() {
  $("#p").click(function() {
    $(".list").slideToggle("slow")
  });
});
//Function image slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}
//Function validasi email 
const nama = document.querySelector("#nama");
const email = document.querySelector("#email");
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const textArea = document.querySelector("#text");
const btn = document.querySelector("#btn");
const smnama = document.querySelector("#snama");
const smail = document.querySelector("#semail");
const spesan = document.querySelector("#spesan")
btn.onclick = (e) => {
  e.preventDefault();
  if((nama).value.length == 0) {
    snama.style.display ="block"
  }
  if(email.value.match(pattern) == false) {
    semail.style.display = "block";
    
  }
  if((textArea.value).length == 0) {
    spesan.style.display = 'block'
  }
}

