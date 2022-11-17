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
    },
    {
        id:3,
        imageSrc:'./assets/images/testimonial-user-cover-49.png',
        comment:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        starImgSrc:'./assets/images/Vector.png',
        starHalfImgSrc:'./assets/images/Vector2.png',
        name:'Regina Miles',
        profession:'Designer'
    },
    {
        id:4,
        imageSrc:'./assets/images/testimonial-user-cover-50.png',
        comment:'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
        starImgSrc:'./assets/images/Vector.png',
        starHalfImgSrc:'./assets/images/Vector2.png',
        name:'Jane Donald',
        profession:'Software Developer'
    }
];

const cards_container=document.querySelector('.row-card');
let testimonialContainer = document.querySelector(".test-container");


let i = 0;
let j = testimonials.length;
let nextBtn = document.getElementById("left-arrow");
let prevBtn = document.getElementById("right-arrow");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
  <div class="card">
  <img src="${testimonials[i].imageSrc}" alt="testimonial">
  <p class="comment">${testimonials[i].comment}</p>
  <div class="stars">
      <img src="${testimonials[i].starImgSrc}" alt="star">
      <img src="${testimonials[i].starImgSrc}" alt="star">
      <img src="${testimonials[i].starImgSrc}" alt="star">
      <img src="${testimonials[i].starImgSrc}" alt="star">
      <img src="${testimonials[i].starHalfImgSrc}" alt="star">
  </div>
  <h5>${testimonials[i].name}</h5>
  <p>${testimonials[i].profession}</p>
  </div>
  `;
};

window.onload = displayTestimonial;

nextBtn.addEventListener('click',function () {
    let isOpen=cards_container.classList.contains('slide-in');
    cards_container.setAttribute('class', isOpen ? 'row-card cont slide-out' : 'row-card cont slide-in');
})
prevBtn.addEventListener('click',function () {
    let isOpen=cards_container.classList.contains('slide-in');
    cards_container.setAttribute('class', isOpen ? 'row-card cont slide-out' : 'row-card cont slide-in');
})



let p=fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comment => renderComments(comment));
// console.log(p);

async function getApi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}
getApi(p);

function renderComments(comment) {
    comment.forEach(data => {
        const div = document.createElement('div');
        div.textContent = post.title;
            postsContainer.appendChild(li);
        let testm=` <div class="card">
        <img src="${testimonials[i].imageSrc}" alt="testimonial">
        <p class="comment">${data.body}</p>
        <div class="stars">
            <img src="${testimonials[i].starImgSrc}" alt="star">
            <img src="${testimonials[i].starImgSrc}" alt="star">
            <img src="${testimonials[i].starImgSrc}" alt="star">
            <img src="${testimonials[i].starImgSrc}" alt="star">
            <img src="${testimonials[i].starHalfImgSrc}" alt="star">
        </div>
        <h5>${data.email}</h5>
        <p>${data.name}</p>
        </div>
        `;
        testimonialContainer.innerHTML+=testm;
    });
}