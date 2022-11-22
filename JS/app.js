$(document).ready(function () {
/**
 * 
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuild(){

    for(const section of allSections){
        //getting section details
        const sectionId =section.id;
        const title = section.getAttribute('data-nav');
        const navItem = document.createElement('li');
        const anchorItem= document.createElement('a');
        anchorItem.textContent=title;
        anchorItem.href=`#${sectionId}` //setting dynamic href with a different ID for each anchor tag
        anchorItem.classList.add('menu__Link');
        // Scroll to anchor ID using scrollIntOView on click
        $(anchorItem).click( function (e) {
                e.preventDefault();
                section.scrollIntoView({
                    behavior: "smooth"
                });
            })
        navItem.appendChild(anchorItem);
        fragment.appendChild(navItem);
     }
  navBar.appendChild(fragment);
}
navBuild();

//End nav build

// Add class active to sections & navbar links
function callBackFn(allSections){
    const anchors = navBar.querySelectorAll('a');

    for(const section of allSections){
        if (section.isIntersecting) {
             // Add active class from section
            section.target.classList.add('your-active-class');

            // Add active class to navbar anchors
            for(const anchor of anchors){
                if (anchor.textContent === section.target.getAttribute('data-nav')){
                    anchor.classList.add('active');
                }
                else{
                    anchor.classList.remove('active');
                }
            }
               
          } else {
            // Remove active class from section
            section.target.classList.remove('your-active-class');
          }
    }
  }
    // Setting a specific observer properties
    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.55,
    } 
    
   // Creating new Intersection Observer which calls a callback function with a specific observer properties 
    const intObs = new IntersectionObserver(callBackFn,observerOptions)

  // Declares what to observe, and observes its properties.
  for(const sec of allSections){
        intObs.observe(sec);
  }
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
})
