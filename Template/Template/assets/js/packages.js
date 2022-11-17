const packages=[
    {
        id:1,
        iconClasses:'fa-regular fa-face-smile',
        header:'Books Liberary',
        summary:'The gradual accumulation of information about',
    },
    {
        id:2,
        iconClasses:'fa-solid fa-check-double',
        header:'Evaluation Time',
        summary:'The gradual accumulation of information about',
    },
    {
        id:3,
        iconClasses:'fa-regular fa-credit-card',
        header:'Market Analysis',
        summary:'The gradual accumulation of information about',
    },
    {
        id:4,
        iconClasses:'fa-regular fa-face-smile',
        header:'Books Liberary',
        summary:'The gradual accumulation of information about',
    },
    {
        id:5,
        iconClasses:'fa-solid fa-sliders',
        header:'Evaluation Time',
        summary:'The gradual accumulation of information about',
    },
    {
        id:6,
        iconClasses:'fa-regular fa-face-smile',
        header:'Books Liberary',
        summary:'The gradual accumulation of information about',
    },
    {
        id:7,
        iconClasses:'fa-solid fa-sliders',
        header:'Evaluation Time',
        summary:'The gradual accumulation of information about',
    },
    {
        id:8,
        iconClasses:'fa-regular fa-credit-card',
        header:'Market Analysis',
        summary:'The gradual accumulation of information about',
    }
];
const cards_container2=document.querySelector('#packages .carousel');

for (const package of packages) {
    renderPackageCard(package);
}

function renderPackageCard(package) {
    const newElement=document.createElement('div');
    cards_container2.appendChild(newElement);
    newElement.outerHTML=getPackageCardMarkup(package);
}

function getPackageCardMarkup(package) {
    return `<div class="card">
    <div class="icon-container"> 
        <i class="${package.iconClasses}"></i>
    </div>
    <h5>${package.header}</h5>
    <div class="line"></div>
    <p>${package.summary}</p>
    </div>`;
}
    function swapCard() {
        for (let i=0;i<cards_container2.children.length;i++) {
            let child=cards_container2.children[i];
            if ( i %2!==0) {
                child.className+=(" bottom");
            }
          }
    }
    swapCard();
 


//Carousel
const firstCard=cards_container2.firstChild;
const leftButton=document.querySelector('.fa-chevron-left'); 
const rightButton=document.querySelector('.fa-chevron-right'); 
const gap = 16;
const carousel=document.querySelector(".cards");
carousel.offsetWidth=firstCard.offsetWidth;
function handleCarouselButtonClick() {
    rightButton.addEventListener("click", e => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
          leftButton.style.color = "white";
        }
        if (cards_container2.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          rightButton.style.color = "gray";
        }
      });
      leftButton.addEventListener("click", e => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
          leftButton.style.color = "gray";
        }
        if (!cards_container2.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          rightButton.style.color = "white";
        }
      });
      
}
handleCarouselButtonClick();
let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


