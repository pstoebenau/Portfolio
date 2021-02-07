const workSection = document.getElementById("work");

const websites = [
  {
    url: "https://crownheritagelaw.com",
    img: "img/websites/crownheritagelaw.jpg"
  },
  {
    url: "https://technights-website.netlify.app/",
    img: "img/websites/technightswebsite.jpg"
  },
  {
    url: "https://bicbacboe.pstoebenau.ml/",
    img: "img/websites/bicbacboe.jpg"
  },
  {
    url: "https://polynomial-regression-nn.netlify.app/",
    img: "img/websites/polyregnn.jpg"
  },
  {
    url: "https://4d-projection.netlify.app/",
    img: "img/websites/4dproj.jpg"
  },
  {
    url: "https://nnmnist.pstoebenau.ml",
    img: "img/websites/nnmnist.jpg"
  },
];

document.getElementById("contact-form").addEventListener("submit", (e) => sendForm(e))

function main() {
  createWebsitePreviews();
}

function createWebsitePreviews() {
  const template = document.getElementById("website-preview-template");
  
  for (let i in websites) {
    const copy = template.content.cloneNode(true);
    template.parentNode.appendChild(copy);
  }

  const websitePreviews = document.querySelectorAll(".website-preview");
  for(let i in websites) {
    websiteLink = websitePreviews[i].getElementsByTagName("a")[0];
    websiteLink.href = websites[i].url;
    websiteImage = websiteLink.getElementsByTagName("img")[0];
    websiteImage.src = websites[i].img;
  }
}

async function sendForm(e) {
  e.preventDefault();
  let formdata = new FormData(e.target);
  let response = await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfI21IUv8qtKSYvxYLNLIW8nvPxpMPbzqtw_K0OhUn0hvtC2w/formResponse", {
    method: "POST",
    mode: "no-cors",
    body: formdata,
  });

  alert("Form sent");
  e.target.reset();
}

main();
