const testimonials=[
    {
        id:1,
        imageSrc:'./assets/images/testimonial-user-cover-49.png',
        comment:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        starImgSrc:'./assets/images/Vector.png',
        starHalfImgSrc:'./assets/images/Vector2.png',
        name:'Regina Miles',
        profession:'Designer'
    },
    {
        id:2,
        imageSrc:'./assets/images/testimonial-user-cover-50.png',
        comment:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        starImgSrc:'./assets/images/Vector.png',
        starHalfImgSrc:'./assets/images/Vector2.png',
        name:'Jane Donald',
        profession:'Software Developer'
    }
];

const cards_container=document.querySelector('.row-card');

for (const testimonial of testimonials) {
    renderTestimonialCard(testimonial)
}

function renderTestimonialCard(testimonial) {
    const newElement=document.createElement('div');
    cards_container.appendChild(newElement);
    newElement.outerHTML=getTestimonialCardMarkup(testimonial);
}

function getTestimonialCardMarkup(testimonial) {
    return ` <div class="card">
    <img src="${testimonial.imageSrc}" alt="testimonial">
    <p class="comment">${testimonial.comment}</p>
    <div class="stars">
        <img src="${testimonial.starImgSrc}" alt="star">
        <img src="${testimonial.starImgSrc}" alt="star">
        <img src="${testimonial.starImgSrc}" alt="star">
        <img src="${testimonial.starImgSrc}" alt="star">
        <img src="${testimonial.starHalfImgSrc}" alt="star">
    </div>
    <h5>${testimonial.name}</h5>
    <p>${testimonial.profession}</p>
   </div>`;
}