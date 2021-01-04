// slider

var i = 0;
var images = [];
var time = 2000;


function changeImg(){
    if (document.documentElement.clientWidth < 900) {
      images[0] = 'images/sd1-small.jpg'; 
      images[1] = 'images/sd2-small.jpg';
      images[2] = 'images/sd3-small.jpg';
      images[3] = 'images/sd4-small.jpg';
    } else {
      images[0] = 'images/sd2.jpg';
      images[1] = 'images/sd3.jpg';
      images[2] = 'images/sd1.jpg';
      images[3] = 'images/sd4.jpg';
    }

  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;




// Animation on scroll

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide_in');
const div = document.querySelector('.next_miss_india');

function checkslide (e) {
  sliderImages.forEach(slideImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 4;
    const imageBottom = slideImage.offsetTop + slideImage.height;

    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrollPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrollPast) {
      slideImage.classList.remove('active');
    } else {
      slideImage.classList.add('active'); 
    }
})
}

window.addEventListener('scroll', debounce(checkslide));




//Modal

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("blackk").style.display = "flex";
}


// Moblie Navigation

const nav = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const navigation = document.querySelector('.moblie_nav');

nav.addEventListener('click', function openSlide () {
    navigation.style.transform = 'translateX(0%)';
});

cross.addEventListener('click', function closeSlide () {
    navigation.style.transform = 'translateX(-100%)';
});


