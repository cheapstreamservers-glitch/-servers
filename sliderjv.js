const slider = document.querySelectorAll(".slide")
const slides = document.querySelectorAll(".slide2")
const slided = document.querySelectorAll(".slide3")
var counter = 0;
console.log(slider)
console.log(slides)
console.log(slided)
slides.forEach(
(slides,index) => {
    slides.style.left = `${index * 100}%`
}
)
slider.forEach(
(slider,index) => {
    slider.style.left = `${index * 100}%`
}
)
slided.forEach(
(slided,index) => {
    slided.style.left = `${index * 100}%`
}
)

    var slide2length = 10;

const goPrev = () => {

if (counter != 0) {
counter--
slideImage();
slide2Image();
slide3Image();
}

    if(counter  == 0){
counter = 10;

if (counter > 0) {
counter--
slideImage();
slide2Image();
slide3Image();
    }
    } }
const goNext = () => {
if (counter < slide2length) {
counter++
slide3Image();
slide2Image();
slideImage();
}
if(counter > 9){
counter = 0;
slideImage();
slide3Image();
slide2Image();
}     }

const slideImage = () => {
slider.forEach(
(slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
}
)
}

const slide2Image = () => {
slides.forEach(
(slide2) => {
    slide2.style.transform = `translateX(-${counter * 100}%)`
}
)
}

const slide3Image = () => {
slided.forEach(
(slide3) => {
    slide3.style.transform = `translateX(-${counter * 100}%)`
}
)
}
      

    setInterval(goNext, 4000);



