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

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

console.log(toggleMobileMenu);