// SIDENAV

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// HOME

const hoverLinks = document.querySelectorAll('[data-component=hoverLink]');

hoverLinks.forEach(hoverLink => {
  hoverLink.onmouseenter = event => {
    const image = document.querySelector(event.target.dataset.target);
    image.classList.remove("hidden");
    image.classList.remove("hide");
    image.classList.add("show");
  }

  hoverLink.onmouseleave = event => {
    const image = document.querySelector(event.target.dataset.target);
    image.classList.remove("show");
    image.classList.add("hide");
  }
});
