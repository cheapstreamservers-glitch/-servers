const slider1 = document.querySelectorAll(".slide1")
const slider2 = document.querySelectorAll(".slide12")
const slider3 = document.querySelectorAll(".slide13")
const slider4 = document.querySelectorAll(".slide4")
const slider5 = document.querySelectorAll(".slide5")
const slider6 = document.querySelectorAll(".slide6")
const slider7 = document.querySelectorAll(".slide7")
const slider8 = document.querySelectorAll(".slide8")
const slider9 = document.querySelectorAll(".slide9")
var rz = 1;
//console.log(slider)
slider1.forEach(
(slider1,index) => {
    slider1.style.left = `${index * 100}%`
}
)
slider2.forEach(
(slider2,index) => {
    slider2.style.left = `${index * 100}%`
}
)
slider3.forEach(
(slider3,index) => {
    slider3.style.left = `${index * 100}%`
}
)
slider4.forEach(
(slider4,index) => {
    slider4.style.left = `${index * 100}%`
}
)
slider5.forEach(
(slider5,index) => {
    slider5.style.left = `${index * 100}%`
}
)
slider6.forEach(
(slider6,index) => {
    slider6.style.left = `${index * 100}%`
}
)
slider7.forEach(
(slider7,index) => {
    slider7.style.left = `${index * 100}%`
}
)
slider8.forEach(
(slider8,index) => {
    slider8.style.left = `${index * 100}%`
}
)
slider9.forEach(
(slider9,index) => {
    slider9.style.left = `${index * 100}%`
}
)
var y;
const start = () => {
y = 4;
fastAg();
    }
const stop = () => {
y = 0;
        fastAg();
}
var slidelength = 10;
const seter = () => {
if (rz < slidelength) {
rz++
slider3Image();
slider2Image();
sliderImage();
slider4Image();
slider5Image();
slider6Image();
slider7Image();
slider8Image();
slider9Image();
}
if(rz > 9){
rz = 0;
slider3Image();
slider2Image();
sliderImage();
slider4Image();
slider5Image();
slider6Image();
slider7Image();
slider8Image();
slider9Image();
}
}

const sliderImage = () => {
slider1.forEach(
(slide1) => {
    slide1.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider2Image = () => {
slider2.forEach(
(slide12) => {
    slide12.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider3Image = () => {
slider3.forEach(
(slide13) => {
    slide13.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider4Image = () => {
slider4.forEach(
(slide4) => {
    slide4.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider5Image = () => {
slider5.forEach(
(slide5) => {
    slide5.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider6Image = () => {
slider6.forEach(
(slide6) => {
    slide6.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider7Image = () => {
slider7.forEach(
(slide7) => {
    slide7.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider8Image = () => {
slider8.forEach(
(slide8) => {
    slide8.style.transform = `translateX(-${rz * 100}%)`
}
)
}

const slider9Image = () => {
slider9.forEach(
(slide9) => {
    slide9.style.transform = `translateX(-${rz * 100}%)`
}
)
}
  let myIntervalFunc;
        function fastAg()  { if(y == 4){
    myIntervalFunc = setInterval(() =>{
      (seter());
       },01); }
    if (y !=4){
    clearTimeout(myIntervalFunc);}

                           }



