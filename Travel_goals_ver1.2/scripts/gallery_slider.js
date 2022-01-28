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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//second slides
var secondSlideIndex = 1;
secondShowSlides(secondSlideIndex);

// Next/previous controls
function secondPlusSlides(n) {
  secondShowSlides(secondSlideIndex += n);
}

// Thumbnail image controls
function secondCurrentSlide(n) {
  secondShowSlides(secondSlideIndex = n);
}

function secondShowSlides(n) {
  var i;
  var secondSlides = document.getElementsByClassName("secondSlides");
  var secondDots = document.getElementsByClassName("secondDemo");
  var secondCaptionText = document.getElementById("secondCaption");
  if (n > secondSlides.length) {secondSlideIndex = 1}
  if (n < 1) {secondSlideIndex = secondSlides.length}
  for (i = 0; i < secondSlides.length; i++) {
    secondSlides[i].style.display = "none";
  }
  for (i = 0; i < secondDots.length; i++) {
    secondDots[i].className = secondDots[i].className.replace(" active", "");
  }
  secondSlides[secondSlideIndex-1].style.display = "block";
  secondDots[secondSlideIndex-1].className += " active";
  secondCaptionText.innerHTML = secondDots[secondSlideIndex-1].alt;
}

//third slides
var thirdSlideIndex = 1;
thirdShowSlides(thirdSlideIndex);

// Next/previous controls
function thirdPlusSlides(n) {
thirdShowSlides(thirdSlideIndex += n);
}

// Thumbnail image controls
function thirdCurrentSlide(n) {
 thirdShowSlides(thirdSlideIndex = n);
}

function thirdShowSlides(n) {
 var i;
 var thirdSlides = document.getElementsByClassName("thirdSlides");
 var thirdDots = document.getElementsByClassName("thirdDemo");
 var thirdCaptionText = document.getElementById("thirdCaption");
 if (n > thirdSlides.length) {thirdSlideIndex = 1}
 if (n < 1) {thirdSlideIndex = thirdSlides.length}
 for (i = 0; i < thirdSlides.length; i++) {
 thirdSlides[i].style.display = "none";
 }
 for (i = 0; i < thirdDots.length; i++) {
 thirdDots[i].className = thirdDots[i].className.replace(" active", "");
 }
 thirdSlides[thirdSlideIndex-1].style.display = "block";
 thirdDots[thirdSlideIndex-1].className += " active";
 thirdCaptionText.innerHTML = thirdDots[thirdSlideIndex-1].alt;
}

//fourth slides
var fourthSlideIndex = 1;
fourthShowSlides(fourthSlideIndex);

// Next/previous controls
function fourthPlusSlides(n) {
  fourthShowSlides(fourthSlideIndex += n);
}

// Thumbnail image controls
function fourthCurrentSlide(n) {
  fourthShowSlides(fourthSlideIndex = n);
}

function fourthShowSlides(n) {
  var i;
  var fourthSlides = document.getElementsByClassName("fourthSlides");
  var fourthDots = document.getElementsByClassName("fourthDemo");
  var fourthCaptionText = document.getElementById("fourthCaption");
  if (n > fourthSlides.length) {fourthSlideIndex = 1}
  if (n < 1) {fourthSlideIndex = fourthSlides.length}
  for (i = 0; i < fourthSlides.length; i++) {
    fourthSlides[i].style.display = "none";
  }
  for (i = 0; i < fourthDots.length; i++) {
    fourthDots[i].className = fourthDots[i].className.replace(" active", "");
  }
  fourthSlides[fourthSlideIndex-1].style.display = "block";
fourthDots[fourthSlideIndex-1].className += " active";
  fourthCaptionText.innerHTML = fourthDots[fourthSlideIndex-1].alt;
}

//fifth slides
var fifthSlideIndex = 1;
fifthShowSlides(fifthSlideIndex);
 
// Next/previous controls
function fifthPlusSlides(n) {
  fifthShowSlides(fifthSlideIndex += n);
}
 
// Thumbnail image controls
function fifthCurrentSlide(n) {
  fifthShowSlides(fifthSlideIndex = n);
}
 
function fifthShowSlides(n) {
  var i;
  var fifthSlides = document.getElementsByClassName("fifthSlides");
  var fifthDots = document.getElementsByClassName("fifthDemo");
  var fifthCaptionText = document.getElementById("fifthCaption");
  if (n > fifthSlides.length) {fifthSlideIndex = 1}
  if (n < 1) {fifthSlideIndex = fifthSlides.length}
  for (i = 0; i < fifthSlides.length; i++) {
    fifthSlides[i].style.display = "none";
  }
  for (i = 0; i < fifthDots.length; i++) {
    fifthDots[i].className = fifthDots[i].className.replace(" active", "");
  }
  fifthSlides[fifthSlideIndex-1].style.display = "block";
  fifthDots[fifthSlideIndex-1].className += " active";
  fifthCaptionText.innerHTML = fifthDots[fifthSlideIndex-1].alt;
}

//sixth slides
var sixthSlideIndex = 1;
sixthShowSlides(sixthSlideIndex);
 
// Next/previous controls
function sixthPlusSlides(n) {
  sixthShowSlides(sixthSlideIndex += n);
}
 
// Thumbnail image controls
function sixthCurrentSlide(n) {
  sixthShowSlides(sixthSlideIndex = n);
}
 
function sixthShowSlides(n) {
  var i;
  var sixthSlides = document.getElementsByClassName("sixthSlides");
  var sixthDots = document.getElementsByClassName("sixthDemo");
  var sixthCaptionText = document.getElementById("sixthCaption");
  if (n > sixthSlides.length) {sixthSlideIndex = 1}
  if (n < 1) {sixthSlideIndex = sixthSlides.length}
  for (i = 0; i < sixthSlides.length; i++) {
    sixthSlides[i].style.display = "none";
  }
  for (i = 0; i < sixthDots.length; i++) {
    sixthDots[i].className = sixthDots[i].className.replace(" active", "");
  }
  sixthSlides[sixthSlideIndex-1].style.display = "block";
  sixthDots[sixthSlideIndex-1].className += " active";
  sixthCaptionText.innerHTML = sixthDots[sixthSlideIndex-1].alt;
}

//seventh slides
var seventhSlideIndex = 1;
seventhShowSlides(seventhSlideIndex);
 
// Next/previous controls
function seventhPlusSlides(n) {
  seventhShowSlides(seventhSlideIndex += n);
}
 
// Thumbnail image controls
function seventhCurrentSlide(n) {
  seventhShowSlides(seventhSlideIndex = n);
}
 
function seventhShowSlides(n) {
  var i;
  var seventhSlides = document.getElementsByClassName("seventhSlides");
  var seventhDots = document.getElementsByClassName("seventhDemo");
  var seventhCaptionText = document.getElementById("seventhCaption");
  if (n > seventhSlides.length) {seventhSlideIndex = 1}
  if (n < 1) {seventhSlideIndex = seventhSlides.length}
  for (i = 0; i < seventhSlides.length; i++) {
    seventhSlides[i].style.display = "none";
  }
  for (i = 0; i < seventhDots.length; i++) {
    seventhDots[i].className = seventhDots[i].className.replace(" active", "");
  }
  seventhSlides[seventhSlideIndex-1].style.display = "block";
  seventhDots[seventhSlideIndex-1].className += " active";
  seventhCaptionText.innerHTML = seventhDots[seventhSlideIndex-1].alt;
}

//eight slides
var eightSlideIndex = 1;
eightShowSlides(eightSlideIndex);
 
// Next/previous controls
function eightPlusSlides(n) {
  eightShowSlides(eightSlideIndex += n);
}
 
// Thumbnail image controls
function eightCurrentSlide(n) {
  eightShowSlides(eightSlideIndex = n);
}
 
function eightShowSlides(n) {
  var i;
  var eightSlides = document.getElementsByClassName("eightSlides");
  var eightDots = document.getElementsByClassName("eightDemo");
  var eightCaptionText = document.getElementById("eightCaption");
  if (n > eightSlides.length) {eightSlideIndex = 1}
  if (n < 1) {eightSlideIndex = eightSlides.length}
  for (i = 0; i < eightSlides.length; i++) {
    eightSlides[i].style.display = "none";
  }
  for (i = 0; i < eightDots.length; i++) {
    eightDots[i].className = eightDots[i].className.replace(" active", "");
  }
  eightSlides[eightSlideIndex-1].style.display = "block";
  eightDots[eightSlideIndex-1].className += " active";
  eightCaptionText.innerHTML = eightDots[eightSlideIndex-1].alt;
}

//ninght slides
var ninghtSlideIndex = 1;
ninghtShowSlides(ninghtSlideIndex);
 
// Next/previous controls
function ninghtPlusSlides(n) {
  ninghtShowSlides(ninghtSlideIndex += n);
}
 
// Thumbnail image controls
function ninghtCurrentSlide(n) {
  ninghtShowSlides(ninghtSlideIndex = n);
}
 
function ninghtShowSlides(n) {
  var i;
  var ninghtSlides = document.getElementsByClassName("ninghtSlides");
  var ninghtDots = document.getElementsByClassName("ninghtDemo");
  var ninghtCaptionText = document.getElementById("ninghtCaption");
  if (n > ninghtSlides.length) {ninghtSlideIndex = 1}
  if (n < 1) {ninghtSlideIndex = ninghtSlides.length}
  for (i = 0; i < ninghtSlides.length; i++) {
    ninghtSlides[i].style.display = "none";
  }
  for (i = 0; i < ninghtDots.length; i++) {
    ninghtDots[i].className = ninghtDots[i].className.replace(" active", "");
  }
  ninghtSlides[ninghtSlideIndex-1].style.display = "block";
  ninghtDots[ninghtSlideIndex-1].className += " active";
  ninghtCaptionText.innerHTML = ninghtDots[ninghtSlideIndex-1].alt;
}

//tenth slides
var tenthSlideIndex = 1;
tenthShowSlides(tenthSlideIndex);
 
// Next/previous controls
function tenthPlusSlides(n) {
  tenthShowSlides(tenthSlideIndex += n);
}
 
// Thumbnail image controls
function tenthCurrentSlide(n) {
  tenthShowSlides(tenthSlideIndex = n);
}
 
function tenthShowSlides(n) {
  var i;
  var tenthSlides = document.getElementsByClassName("tenthSlides");
  var tenthDots = document.getElementsByClassName("tenthDemo");
  var tenthCaptionText = document.getElementById("tenthCaption");
  if (n > tenthSlides.length) {tenthSlideIndex = 1}
  if (n < 1) {tenthSlideIndex = tenthSlides.length}
  for (i = 0; i < tenthSlides.length; i++) {
    tenthSlides[i].style.display = "none";
  }
  for (i = 0; i < tenthDots.length; i++) {
    tenthDots[i].className = tenthDots[i].className.replace(" active", "");
  }
  tenthSlides[tenthSlideIndex-1].style.display = "block";
  tenthDots[tenthSlideIndex-1].className += " active";
  tenthCaptionText.innerHTML = tenthDots[tenthSlideIndex-1].alt;
}

//eleventh slides
var eleventhSlideIndex = 1;
eleventhShowSlides(eleventhSlideIndex);
 
// Next/previous controls
function eleventhPlusSlides(n) {
  eleventhShowSlides(eleventhSlideIndex += n);
}
 
// Thumbnail image controls
function eleventhCurrentSlide(n) {
  eleventhShowSlides(eleventhSlideIndex = n);
}
 
function eleventhShowSlides(n) {
  var i;
  var eleventhSlides = document.getElementsByClassName("eleventhSlides");
  var eleventhDots = document.getElementsByClassName("eleventhDemo");
  var eleventhCaptionText = document.getElementById("eleventhCaption");
  if (n > eleventhSlides.length) {eleventhSlideIndex = 1}
  if (n < 1) {eleventhSlideIndex = eleventhSlides.length}
  for (i = 0; i < eleventhSlides.length; i++) {
    eleventhSlides[i].style.display = "none";
  }
  for (i = 0; i < eleventhDots.length; i++) {
    eleventhDots[i].className = eleventhDots[i].className.replace(" active", "");
  }
  eleventhSlides[eleventhSlideIndex-1].style.display = "block";
  eleventhDots[eleventhSlideIndex-1].className += " active";
  eleventhCaptionText.innerHTML = eleventhDots[eleventhSlideIndex-1].alt;
}

//twelveth slides
var twelvethSlideIndex = 1;
twelvethShowSlides(twelvethSlideIndex);
 
// Next/previous controls
function twelvethPlusSlides(n) {
  twelvethShowSlides(twelvethSlideIndex += n);
}
 
// Thumbnail image controls
function twelvethCurrentSlide(n) {
  twelvethShowSlides(twelvethSlideIndex = n);
}
 
function twelvethShowSlides(n) {
  var i;
  var twelvethSlides = document.getElementsByClassName("twelvethSlides");
  var twelvethDots = document.getElementsByClassName("twelvethDemo");
  var twelvethCaptionText = document.getElementById("twelvethCaption");
  if (n > twelvethSlides.length) {twelvethSlideIndex = 1}
  if (n < 1) {twelvethSlideIndex = twelvethSlides.length}
  for (i = 0; i < twelvethSlides.length; i++) {
    twelvethSlides[i].style.display = "none";
  }
  for (i = 0; i < twelvethDots.length; i++) {
    twelvethDots[i].className = twelvethDots[i].className.replace(" active", "");
  }
  twelvethSlides[twelvethSlideIndex-1].style.display = "block";
  twelvethDots[twelvethSlideIndex-1].className += " active";
  twelvethCaptionText.innerHTML = twelvethDots[twelvethSlideIndex-1].alt;
}

//thrirteenth slides
var thrirteenthSlideIndex = 1;
thrirteenthShowSlides(thrirteenthSlideIndex);
 
// Next/previous controls
function thrirteenthPlusSlides(n) {
  thrirteenthShowSlides(thrirteenthSlideIndex += n);
}
 
// Thumbnail image controls
function thrirteenthCurrentSlide(n) {
  thrirteenthShowSlides(thrirteenthSlideIndex = n);
}
 
function thrirteenthShowSlides(n) {
  var i;
  var thrirteenthSlides = document.getElementsByClassName("thrirteenthSlides");
  var thrirteenthDots = document.getElementsByClassName("thrirteenthDemo");
  var thrirteenthCaptionText = document.getElementById("thrirteenthCaption");
  if (n > thrirteenthSlides.length) {thrirteenthSlideIndex = 1}
  if (n < 1) {thrirteenthSlideIndex = thrirteenthSlides.length}
  for (i = 0; i < thrirteenthSlides.length; i++) {
    thrirteenthSlides[i].style.display = "none";
  }
  for (i = 0; i < thrirteenthDots.length; i++) {
    thrirteenthDots[i].className = thrirteenthDots[i].className.replace(" active", "");
  }
  thrirteenthSlides[thrirteenthSlideIndex-1].style.display = "block";
  thrirteenthDots[thrirteenthSlideIndex-1].className += " active";
  thrirteenthCaptionText.innerHTML = thrirteenthDots[thrirteenthSlideIndex-1].alt;
}

//fourteenth slides
var fourteenthSlideIndex = 1;
fourteenthShowSlides(fourteenthSlideIndex);
 
// Next/previous controls
function fourteenthPlusSlides(n) {
  fourteenthShowSlides(fourteenthSlideIndex += n);
}
 
// Thumbnail image controls
function fourteenthCurrentSlide(n) {
  fourteenthShowSlides(fourteenthSlideIndex = n);
}
 
function fourteenthShowSlides(n) {
  var i;
  var fourteenthSlides = document.getElementsByClassName("fourteenthSlides");
  var fourteenthDots = document.getElementsByClassName("fourteenthDemo");
  var fourteenthCaptionText = document.getElementById("fourteenthCaption");
  if (n > fourteenthSlides.length) {fourteenthSlideIndex = 1}
  if (n < 1) {fourteenthSlideIndex = fourteenthSlides.length}
  for (i = 0; i < fourteenthSlides.length; i++) {
    fourteenthSlides[i].style.display = "none";
  }
  for (i = 0; i < fourteenthDots.length; i++) {
    fourteenthDots[i].className = fourteenthDots[i].className.replace(" active", "");
  }
  fourteenthSlides[fourteenthSlideIndex-1].style.display = "block";
  fourteenthDots[fourteenthSlideIndex-1].className += " active";
  fourteenthCaptionText.innerHTML = fourteenthDots[fourteenthSlideIndex-1].alt;
}

//fifteenth slides
var fifteenthSlideIndex = 1;
fifteenthShowSlides(fifteenthSlideIndex);
 
// Next/previous controls
function fifteenthPlusSlides(n) {
  fifteenthShowSlides(fifteenthSlideIndex += n);
}
 
// Thumbnail image controls
function fifteenthCurrentSlide(n) {
  fifteenthShowSlides(fifteenthSlideIndex = n);
}
 
function fifteenthShowSlides(n) {
  var i;
  var fifteenthSlides = document.getElementsByClassName("fifteenthSlides");
  var fifteenthDots = document.getElementsByClassName("fifteenthDemo");
  var fifteenthCaptionText = document.getElementById("fifteenthCaption");
  if (n > fifteenthSlides.length) {fifteenthSlideIndex = 1}
  if (n < 1) {fifteenthSlideIndex = fifteenthSlides.length}
  for (i = 0; i < fifteenthSlides.length; i++) {
    fifteenthSlides[i].style.display = "none";
  }
  for (i = 0; i < fifteenthDots.length; i++) {
    fifteenthDots[i].className = fifteenthDots[i].className.replace(" active", "");
  }
  fifteenthSlides[fifteenthSlideIndex-1].style.display = "block";
  fifteenthDots[fifteenthSlideIndex-1].className += " active";
  fifteenthCaptionText.innerHTML = fifteenthDots[fifteenthSlideIndex-1].alt;
}
