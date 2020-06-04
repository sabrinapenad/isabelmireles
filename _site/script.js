/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// MODAL

// COLLAGE

function collageBackgroundIn(obj) {
  document.getElementById('home-background').style.backgroundImage = "url('assets/collages-home.jpg')";
  document.getElementById('home-background').style.backgroundSize = "cover";
  document.getElementById('home-background').style.opacity = "0.7"
}

function collageBackgroundOut(obj) {
  document.getElementById('home-background').style.backgroundImage = "none";
}

// PORTRAIT

function portraitBackgroundIn(obj) {
  document.getElementById('home-background').style.backgroundImage = "url('assets/portraits-home.jpg')";
  document.getElementById('home-background').style.backgroundSize = "cover";
  document.getElementById('home-background').style.opacity = "0.7"
}

function portraitBackgroundOut(obj) {
  document.getElementById('home-background').style.backgroundImage = "none";
}
