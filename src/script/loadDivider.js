function updateDividerImage() {
    const dividerImg = document.getElementById("dividerImg");
    const isMobile = window.innerWidth <= 640;

    if (isMobile) {
      dividerImg.src = "./images/pattern-divider-mobile.svg";
    } else {
      dividerImg.src = "./images/pattern-divider-desktop.svg";
    }
  }

window.addEventListener('load', updateDividerImage);
window.addEventListener('resize', updateDividerImage);