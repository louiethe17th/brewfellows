'use strict';

 // Slide show functionality

 var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("slides");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}
* {box-sizing:border-box}

.slideshow-container {
 
 max-width: 600px;
 position: relative;
 margin: auto;
}

.slides {
   display: none;
}

.prev, .next {
 cursor: pointer;
 position: absolute;
 top: 50%;
 width: auto;
 margin-top: -22px;
 padding: 16px;
 color: white;
 font-weight: bold;
 font-size: 18px;
 transition: 0.6s ease;
 border-radius: 0 3px 3px 0;
}

.next {
 right: 0;
 border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
 background-color: rgba(0,0,0,0.8);
}

.text {
 color: #f2f2f2;
 font-size: 15px;
 padding: 8px 12px;
 position: absolute;
 bottom: 8px;
 width: 100%;
 text-align: center;
}

.slide-number {
 color: #f2f2f2;
 font-size: 12px;
 padding: 8px 12px;
 position: absolute;
 top: 0;
}

.dot {
 cursor: pointer;
 height: 15px;
 width: 15px;
 margin: 0 2px;
 background-color: #bbb;
 border-radius: 50%;
 display: inline-block;
 transition: background-color 0.6s ease;
}

.active, .dot:hover {
 background-color: #717171;
}

.fade {
 -webkit-animation-name: fade;
 -webkit-animation-duration: 1.5s;
 animation-name: fade;
 animation-duration: 1.5s;
}

@-webkit-keyframes fade {
 from {opacity: .4}
 to {opacity: 1}
}

@keyframes fade {
 from {opacity: .4}
 to {opacity: 1}
}