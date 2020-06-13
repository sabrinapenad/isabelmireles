/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// HOME COLLAGE

function collageBackgroundIn(obj) {
  document.getElementById('home-background').style.backgroundImage = "url('assets/collages-home.jpg')";
  document.getElementById('home-background').style.backgroundSize = "cover";
  document.getElementById('home-background').style.opacity = "0.7"
}

function collageBackgroundOut(obj) {
  document.getElementById('home-background').style.backgroundImage = "none";

}

// HOME PORTRAIT

function portraitBackgroundIn(obj) {
  document.getElementById('home-background').style.backgroundImage = "url('assets/portraits-home.jpg')";
  document.getElementById('home-background').style.backgroundSize = "cover";
  document.getElementById('home-background').style.opacity = "0.7"
}

function portraitBackgroundOut(obj) {
  document.getElementById('home-background').style.backgroundImage = "none";
}

// HOME ABOUT + Contact

function backgroundColorIn(obj) {
  document.getElementById('about-contact').style.backgroundColor = "#FF9F1C";
  document.getElementById('about-contact').style.opacity = "0.8";
}

function backgroundColorOut(obj) {
  document.getElementById('about-contact').style.backgroundColor = "white";
  document.getElementById('about-contact').style.opacity = "1";
}
