let images = [
  "assets/photos/photo1.jpg",
  "assets/photos/photo2.jpg",
  "assets/photos/photo3.jpg",
  "assets/photos/photo4.jpg",
  "assets/photos/photo5.jpg",
  "assets/photos/photo6.jpg",
];
let next = document.querySelector(".next");
let prew = document.querySelector(".prew");
let img = document.querySelector(".slider img");
let a = 0;
//create inputs
for (let i = 0; i < images.length; i++) {
  document.querySelector(
    "#div-radio"
  ).innerHTML += `<input type="radio" name="radio-btn" id="radio${i}">`;
}

//input checked
let radios = document.querySelectorAll("input");
for (const item of radios) {
  item.addEventListener("click", () => {
    let att = item.getAttribute("id");
    let b = att.slice(-1);
    img.src = images[b]; 
    
    
  });
}
// slide next click
next.addEventListener("click", () => {
  a++;

  if (a > images.length - 1) {
    a = 0;
  }
  img.src = images[a];
  if (radios[a].checked==false) {
    radios[a].focus();
    
  } 
});
// slide back click

prew.addEventListener("click", () => {
  a--;
  if (a < 0) {
    a = images.length - 1;
  }
  img.src = images[a];
  if (radios[a].checked==false) {
    radios[a].focus();
    
  }
});
//autoPlay code

var autoPlay = () => {
  a++;
  if (a > images.length - 1) {
    a = 0;
  }
  img.src = images[a];
  if (radios[a].checked==false) {
    radios[a].focus();
    
  }
};
//auto slide

// setInterval(() => {
//     autoPlay();
// }, 5000);
