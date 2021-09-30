// Global variables
const mySections = document.querySelectorAll('section');
const fragment   = document.createDocumentFragment();
const myUl       = document.getElementById('navbar__list');
// ./Global variable

// function to build nave
function buildNavigation() {
  // Looping to get all section to create anchors
  for (let i = 0; i < mySections.length; i++) {
    myLi           = document.createElement('li');
    myLi.className = "navbar__menu li";
    myLi.innerHTML = `<a class="menu__link" href = '#${mySections[i].getAttribute("id")}'>${mySections[i].getAttribute("data-nav")}</a>`;
    fragment.append(myLi);
  }
  // ./ Looping to get all section to create anchors
  myUl.append(fragment);
}
// ./function to build nave


function toggleActiveState() {
  // get all anchor in here 
  const links = document.querySelectorAll(".menu__link");
  mySections.forEach((section, index) => {
    let rationPointOfView = window.innerHeight * 0.4;
    // ? check scrolling to target section 
    if (section.getBoundingClientRect().top < rationPointOfView && section.getBoundingClientRect().bottom > rationPointOfView) {
      // ?check section has class active and add
      if (!section.classList.contains("your-active-class")) {
        // adding active class to section
        section.classList.add("your-active-class");
        // adding active class to anchor 
        links[index].classList.add("activeLink");
      }
      // ? ./check section has class active and add
    } else if (section.classList.contains("your-active-class")) {
      // remove active class from section
      section.classList.remove("your-active-class");
      // remove active class from anchor
      links[index].classList.remove("activeLink");
    }
    // ?./ check scrolling to target section 
  });
};

// Scroll to anchor ID using scrollTO event
function linkScrollSmoothly() {
  // get all links in here 
  const anchors = document.querySelectorAll('.menu__link');
  // looping to get each anchor and make navigate to target section smoothly
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function (event) {
      event.preventDefault();
      mySections[i].scrollIntoView({
        behavior: "smooth",
        block   : "center"
      });
    });
    // .// looping to get each anchor and make navigate to target section smoothly
  }
}


//  Building Navigation
buildNavigation();
// ./ Building Navigation

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', toggleActiveState);
// ./Add class 'active' to section when near top of viewport

// scroll to section smoothly
linkScrollSmoothly();
// ./scroll to section smoothly