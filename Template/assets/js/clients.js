const testimonials = [
    {
        id: 1,
        imageSrc: "./assets/images/testimonial-user-cover-49.png",
        comment:
            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        starImgSrc: "./assets/images/Vector.png",
        starHalfImgSrc: "./assets/images/Vector2.png",
        name: "Regina Miles",
        profession: "Designer",
    },
    {
        id: 2,
        imageSrc: "./assets/images/testimonial-user-cover-50.png",
        comment:
            "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        starImgSrc: "./assets/images/Vector.png",
        starHalfImgSrc: "./assets/images/Vector2.png",
        name: "Jane Donald",
        profession: "Software Developer",
    },
];

const cards_container = document.querySelector(".row-card");



async function getApi() {
    try {
        const res = await fetch("https://testimonialapi.toolcarton.com/api");
        let data = await res.json();
        renderComments(data.splice(3, 2));
    } catch (error) {
        console.log(error);
    }
}
getApi();

for (let i = 0; i < testimonials.length; i++) {
    let star = testimonials[i].starImgSrc;
    let halfStar = testimonials[i].starHalfImgSrc;

    function renderComments(data) {
        for (let n = 0; n < data.length; n++) {
            let testm = `<div class="test-container">
               <div class="card">
              <img src="${data[n].avatar}" alt="testimonial">
              <p class="comment">${data[n].message}</p>
              <div class="stars">
                  <img src="${star}" alt="star">
                  <img src="${star}" alt="star">
                  <img src="${star}" alt="star">
                  <img src="${star}" alt="star">
                  <img src="${halfStar}" alt="star">
              </div>
              <h5>${data[n].name}</h5>
               <p>${data[n].designation}</p>
              </div>
              </div>
              `;
            cards_container.innerHTML += testm;
        }
    }
}

