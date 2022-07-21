const projects = [
  {
    name: 'Project 1',
    desription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Project 2',
    desription:
      '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Project 3',
    desription:
      '3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Project 4',
    desription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Project 5',
    desription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
  {
    name: 'Project 6',
    desription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    featuredImg: [
      'images/popup.svg',
      'images/ic_link.svg',
      'images/github-logo.svg',
    ],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    linkLive: '#',
    linkSource: '#',
  },
];

function loadPopUp() {
  const popUpContainers = document.getElementsByClassName('popup-mobile');
  const worksSection = document.querySelector('.works-section');
  worksSection.innerHTML = `<div class="projects-container p1">
  <h1>Projects</h1>
  <div class="proj-content">
    <img class="project-img" src="./images/Projects-pc-pic1.svg" alt="A laptop computer">
    <div class="bottom-content">
      <h3>${projects[0].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>Ruby on Rails</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
  </div>
  <div class="popup-mobile"> </div>
</div>
  <div class="projects-container p2">
    <img class="project-img" src="./images/Projects-pc-pic2.svg" alt="A laptop computer">
    <img class="works-section-img middle-img" src="./images/woks-section-middle.png" alt="boxes">
    <div class="bottom-content">
      <h3>${projects[1].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[1].technologies[1]}</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
    <div class="popup-mobile"> </div>
  </div>
  <div class="projects-container p3">
    <img class="project-img" src="./images/Projects-pc-pic3.svg" alt="A laptop computer">
    <div class="bottom-content">
      <h3>${projects[2].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[1].technologies[1]}</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
    <div class="popup-mobile"> </div>
  </div>
  <div class="projects-container p4">
    <img class="project-img" src="./images/Projects-pc-pic4.svg" alt="A laptop computer">
    <div class="bottom-content">
      <h3>${projects[3].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[1].technologies[1]}</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
    <div class="popup-mobile"> </div>
  </div>
  <div class="projects-container p5">
    <img class="project-img" src="./images/Projects-pc-pic5.svg" alt="A laptop computer">
    <div class="bottom-content">
      <h3>${projects[4].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[1].technologies[1]}</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
    <div class="popup-mobile"> </div>
  </div>
  <div class="projects-container p6">
    <img class="project-img" src="./images/Projects-pc-pic6.svg" alt="A laptop computer">
    <div class="bottom-content">
      <h3>${projects[5].name}</h3>
      <ul>
        <li>${projects[0].technologies[0]}</li>
        <li>${projects[1].technologies[1]}</li>
        <li>${projects[2].technologies[2]}</li>
      </ul>
      <button data-popup-target=".popup-mobile" class="link-btn see-project-btn">See this project → </button>
    </div>
    <div class="popup-mobile"> </div>
  </div>`;
  projects.forEach((project, index) => {
    const closeBtn = document.createElement('button');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const div = document.createElement('div');
    const divNxtPrevProj = document.createElement('div');
    const p = document.createElement('p');
    const linkLive = document.createElement('a');
    const linkSource = document.createElement('a');
    const nxtProj = document.createElement('a');
    const prevProj = document.createElement('a');

    closeBtn.setAttribute('data-close-button', '');
    closeBtn.setAttribute('class', 'close-button');
    img1.setAttribute('id', 'pop-up-img-pc');
    img1.setAttribute('src', project.featuredImg[0]);
    img1.setAttribute('alt', 'laptop-computer');
    img2.setAttribute('src', project.featuredImg[1]);
    img2.setAttribute('alt', 'ic-link');
    img3.setAttribute('src', project.featuredImg[2]);
    img3.setAttribute('alt', 'github-logo');
    linkLive.setAttribute('href', '#');
    linkSource.setAttribute('href', '#');
    nxtProj.setAttribute('href', '#');
    prevProj.setAttribute('href', '#');
    div.setAttribute('class', 'popup-content');
    divNxtPrevProj.setAttribute('class', 'nxt-prev-proj');

    const closeBtnTxt = document.createTextNode(' \u00D7');
    const h2Txt = document.createTextNode(project.name);
    const paraTxt = document.createTextNode(project.desription);
    const linkLiveTxt = document.createTextNode('See Live');
    const linkSrcTxt = document.createTextNode('See Source');
    const nxtProjTxt = document.createTextNode('Next  project →');
    const prevProjTxt = document.createTextNode('← Previous project');

    h2.appendChild(h2Txt);
    closeBtn.appendChild(closeBtnTxt);
    for (let i = 0; i < 3; i += 1) {
      const liTxt = document.createTextNode(project.technologies[i]);
      if (i === 0) {
        li1.appendChild(liTxt);
        ul.appendChild(li1);
      } else if (i === 1) {
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
  });
}

const openPopUpButtons = document.querySelectorAll('[data-popup-target]');
const closePopUpButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openPopUp(popUp) {
  if (popUp == null) return;
  popUp.classList.add('active');
  overlay.classList.add('active');
}

function closePopUp(popUp) {
  if (popUp == null) return;
  popUp.classList.remove('active');
  overlay.classList.remove('active');
}

openPopUpButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const popUp = document.querySelectorAll(button.dataset.popupTarget);
    openPopUp(popUp[index]);
  });
});

overlay.addEventListener('click', () => {
  const popUps = document.querySelectorAll('.popup-mobile.active');
  popUps.forEach((popUp) => {
    closePopUp(popUp);
  });
});

closePopUpButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const popUp = button.closest('.popup-mobile');
    closePopUp(popUp);
  });
});

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

console.log(toggleMobileMenu);

const form = document.querySelector('.form-area');
const email = document.getElementById('email');
const errElt = document.getElementById('error-element');

form.addEventListener('submit', (e) => {
  if (!(email.value === String(email.value).toLowerCase())) {
    e.preventDefault();
    errElt.innerText = 'Invalid email, form not sent.';
    errElt.style.color = 'red';
  } else {
    errElt.innerText = '';
  }
});

const formObj = {
  name: String,
  email: String,
  comment: String,
};

const name = document.getElementById('name');
const txtArea = document.getElementById('msg-area');

function getFormData() {
  var lsForm = localStorage.getItem('Form values: ');
  var formDetails = JSON.parse(lsForm);
  if (formDetails !== null){
    name.value = formDetails.name;
    email.value = formDetails.email;
    txtArea.value = formDetails.txtArea;
  }
}

function saveOnLocalStorage(event) {
  event.preventDefault();
  formObj.name = name.value;
  formObj.email = email.value;
  formObj.txtArea = txtArea.value;
  localStorage.setItem('Form values: ', JSON.stringify(formObj));
}

console.log(saveOnLocalStorage);

window.onload = () => {
  loadPopUp();
  getFormData();
};