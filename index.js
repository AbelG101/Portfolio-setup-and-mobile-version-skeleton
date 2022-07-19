const projects = [
  {
    name: "Project 1",
    desription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
  {
    name: "Project 2",
    desription:
      "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
  {
    name: "Project 3",
    desription:
      "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
  {
    name: "Project 4",
    desription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
  {
    name: "Project 5",
    desription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
  {
    name: "Project 6",
    desription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    featuredImg: [
      "images/popup.svg",
      "images/ic_link.svg",
      "images/github-logo.svg",
    ],
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    linkLive: "#",
    linkSource: "#",
  },
];

window.onload = loadPopUp();

const openPopUpButtons = document.querySelectorAll("[data-popup-target]");
const closePopUpButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");


function loadPopUp() {
  const popUpContainers = document.getElementsByClassName("popup-mobile");

  projects.forEach((project, index) => {
    
    let closeBtn = document.createElement("button");
    let h2 = document.createElement("h2");
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let div = document.createElement("div");
    let divNxtPrevProj = document.createElement("div");
    let p = document.createElement("p");
    let linkLive = document.createElement("a");
    let linkSource = document.createElement("a");
    let nxtProj = document.createElement("a");
    let prevProj = document.createElement("a");

    closeBtn.setAttribute("data-close-button", "");
    closeBtn.setAttribute("class", "close-button");
    img1.setAttribute("id", "pop-up-img-pc");
    img1.setAttribute("src", project.featuredImg[0]);
    img1.setAttribute("alt", "laptop-computer");
    img2.setAttribute("src", project.featuredImg[1]);
    img2.setAttribute("alt", "ic-link");
    img3.setAttribute("src", project.featuredImg[2]);
    img3.setAttribute("alt", "github-logo");
    linkLive.setAttribute("href", "#");
    linkSource.setAttribute("href", "#");
    nxtProj.setAttribute("href", "#");
    prevProj.setAttribute("href", "#");
    div.setAttribute("class", "popup-content");
    divNxtPrevProj.setAttribute("class", "nxt-prev-proj");

    let closeBtnTxt = document.createTextNode(" \u00D7");
    let h2Txt = document.createTextNode(project.name);
    let paraTxt = document.createTextNode(project.desription);
    let linkLiveTxt = document.createTextNode("See Live");
    let linkSrcTxt = document.createTextNode("See Source");
    let nxtProjTxt = document.createTextNode("Next  project →");
    let prevProjTxt = document.createTextNode("← Previous project");

    h2.appendChild(h2Txt);
    closeBtn.appendChild(closeBtnTxt);
    for (let i = 0; i < 3; i++) {
      let liTxt = document.createTextNode(project.technologies[i]);
      if (i == 0) {
        li1.appendChild(liTxt);
        ul.appendChild(li1);
      } else if (i == 1) {
        li2.appendChild(liTxt);
        ul.appendChild(li2);
      } else {
        li3.appendChild(liTxt);
        ul.appendChild(li3);
      }
    }
    p.appendChild(paraTxt);
    div.appendChild(p);
    nxtProj.appendChild(nxtProjTxt);
    prevProj.appendChild(prevProjTxt);
    divNxtPrevProj.appendChild(prevProj);
    divNxtPrevProj.appendChild(nxtProj);

    linkLive.appendChild(linkLiveTxt);
    linkLive.appendChild(img2);

    linkSource.appendChild(linkSrcTxt);
    linkSource.appendChild(img3);

    div.appendChild(linkLive);
    div.appendChild(linkSource);
    div.appendChild(divNxtPrevProj);

    popUpContainers[index].appendChild(closeBtn);
    popUpContainers[index].appendChild(h2);
    popUpContainers[index].appendChild(ul);
    popUpContainers[index].appendChild(img1);
    popUpContainers[index].appendChild(div);

    console.log(h2);
  });
}

openPopUpButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const popUp = document.querySelectorAll(button.dataset.popupTarget);
    openPopUp(popUp[index]);
  });
});

overlay.addEventListener("click", () => {
  const popUps = document.querySelectorAll(".popup-mobile.active");
  popUps.forEach((popUp) => {
    closePopUp(popUp);
  });
});

closePopUpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popUp = button.closest(".popup-mobile");
    closePopUp(popUp);
  });
});

function openPopUp(popUp) {
  if (popUp == null) return;
  console.log("hi");
  popUp.classList.add("active");
  overlay.classList.add("active");
}

function closePopUp(popUp) {
  if (popUp == null) return;
  popUp.classList.remove("active");
  overlay.classList.remove("active");
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

console.log(toggleMobileMenu);