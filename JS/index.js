//fetching data
async function fetchData() {
  await fetch(
    "https://api.github.com/repos/SauravMukherjee44/CodeIN-Community-Website/contributors"
  ) //api for the get request
    .then((response) => response.json())
    .then((data) => {
      /*  check if data is null or undefined using nullish collision js(2020)
            if undefined return no contributors  */
      let contributors = data ?? "No contributors";
      // preventing the printing of contributers data in console log
      // console.log(data);
      let contributorsName = [];
      let contributorImageURL = [];
      let contributorGitHubURL = [];
      let contributor = [];
      // getting contributors img and url
      for (let i = 0; i < contributors.length; i++) {
        contributorImageURL[i] = contributors[i].avatar_url;
        contributorGitHubURL[i] = contributors[i].html_url;
        contributorsName[i] = contributors[i].login;
        contributor[i] = `<a href="${contributorGitHubURL[i]}" target=”_blank”>
            <img src="${contributorImageURL[i]}" alt="${contributorsName[i]}">
            <span>${contributorsName[i]}</span>
            </a>`;
      }
      // console.log(contributor);
      // preventing the printing of contributers data in console log
      // getting dom elements
      let contributorBox = document.querySelector("#contributor");

      contributorBox.innerHTML = contributor.join("");
    })
    .catch((e) => {
      console.error(e);
    });
}

//call the function after 1s
setTimeout(() => {
  fetchData();
}, 1000);

const d=new Date();
let year=d.getFullYear();
document.querySelector(".year").innerHTML=year;


// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

// Button hover effects
const navButtons = document.querySelectorAll('.nav-link');

navButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      ease: "power2.out"
    });
  });

  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      y: 0,
      duration: 0.3,
      boxShadow: 'none',
      ease: "power2.in"
    });
  });
});

// Scroll animations
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top center",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});