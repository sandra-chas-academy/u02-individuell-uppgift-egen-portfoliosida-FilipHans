const aboutMe = document.querySelector('.me-wrapper');
const toProjectBtn = document.querySelector('.go-to-projects');

const projects = document.querySelector('.projects-page');
const toAboutBtn = document.querySelector('.go-to-about');

const aboutMeText = document.querySelector('.phone-text');

const experienceBox1 = document.querySelector('.experience-box1');
const experienceBox2 = document.querySelector('.experience-box2');
const experienceBox3 = document.querySelector('.experience-box3');
const experienceBox4 = document.querySelector('.experience-box4');
const experienceBox5 = document.querySelector('.experience-box5');

const skillsDiv = document.querySelector('.skills');
const skill1 = document.querySelector('.skill1');
const skill2 = document.querySelector('.skill2');
const skill3 = document.querySelector('.skill3');
const skill4 = document.querySelector('.skill4');

const proficiency1 = document.querySelector('.proficiency1');
const proficiency2 = document.querySelector('.proficiency2');
const proficiency3 = document.querySelector('.proficiency3');
const proficiency4 = document.querySelector('.proficiency4');

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');


fetch("resumeData/resume.json")
    .then(result => result.json())
    .then(value => resumePrinter(value));

    


    

function resumePrinter (data) {
    
    const {basics, work, education, skills, languages} = data;
    const {email, phone, name, location, profiles, summary} = basics;

    aboutMeText.textContent = summary;
    experienceBox1.innerHTML = `<p>${work[0].position}</p>
                                <span class="green-time">Full Time</span>
                                <span class="institute"><img src="./img/apartment_20dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Apartment"> ${work[0].company}</span>
                                <span class="location"><img src="./img/location_on_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Pindrop">${work[0].location}</span>
                                <span class="calendar"><img src="./img/calendar_month_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Calendar"> <time datetime="2018-05">${work[0].startDate}</time> - <time datetime="2019-05">${work[0].endDate}</time>
                                </span>`
    experienceBox2.innerHTML = `<p>${work[1].position}</p>
                                <span class="green-time">Full Time</span>
                                <span class="institute"><img src="./img/apartment_20dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Apartment"> ${work[1].company}</span>
                                <span class="location"><img src="./img/location_on_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Pindrop">${work[1].location}</span>
                                <span class="calendar"><img src="./img/calendar_month_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Calendar"> <time datetime="2018-05">${work[1].startDate}</time> - <time datetime="2019-05">${work[1].endDate}</time>
                                </span>`
    experienceBox3.innerHTML = `<p>${work[2].position}</p>
                                <span class="green-time">Full Time</span>
                                <span class="institute"><img src="./img/apartment_20dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Apartment"> ${work[2].company}</span>
                                <span class="location"><img src="./img/location_on_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Pindrop">${work[2].location}</span>
                                <span class="calendar"><img src="./img/calendar_month_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Calendar"> <time datetime="2018-05">${work[2].startDate}</time> - <time datetime="2019-05">${work[2].endDate}</time>
                                </span>`
    experienceBox4.innerHTML = `<p>${education[0].area}</p>
                                <span class="green-time">Full Time</span>
                                <span class="institute"><img src="./img/apartment_20dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Apartment"> ${education[0].institution}</span>
                                <span class="location"><img src="./img/location_on_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Pindrop">${education[0].location}</span>
                                <span class="calendar"><img src="./img/calendar_month_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Calendar"> <time datetime="2018-05">${education[0].startDate}</time> - <time datetime="2019-05">${education[0].endDate}</time>
                                </span>`
    experienceBox5.innerHTML = `<p>${education[1].area}</p>
                                <span class="green-time">Full Time</span>
                                <span class="institute"><img src="./img/apartment_20dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="Apartment"> ${education[1].institution}</span>
                                <span class="location"><img src="./img/location_on_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Pindrop">${education[1].location}</span>
                                <span class="calendar"><img src="./img/calendar_month_20dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg" alt="Calendar"> <time datetime="2018-05">${education[1].startDate}</time> - <time datetime="2019-05">${education[1].endDate}</time>
                                </span>`


                                skill1.textContent = skills[0].name;
                                skill2.textContent = skills[1].name;
                                skill3.textContent = skills[2].name;
                                skill4.textContent = skills[3].name;

                                proficiency1.textContent = skills[0].level;
                                proficiency2.textContent = skills[1].level;
                                proficiency3.textContent = skills[2].level;
                                proficiency4.textContent = skills[3].level;



}

toProjectBtn.addEventListener('click', () => {

    aboutMe.style.display = 'none';
    projects.style.display = 'block';
})

toAboutBtn.addEventListener('click', () => {
    aboutMe.style.display = 'block';
    projects.style.display = 'none';
})




async function pigGame () {
    const gitHubAPI = `https://api.github.com/repos/FilipHans/pig-game`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}
async function  chessApiGetter() {
    const gitHubAPI = `https://api.github.com/repos/juliangarnier/3D-Hartwig-chess-set`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}
async function  chessLibraryApiGetter() {
    const gitHubAPI = `https://api.github.com/repos/jhlywa/chess.js`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}
async function  minesweeperApi() {
    const gitHubAPI = `https://api.github.com/repos/nholthaus/minesweeper`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}
async function  isOdd() {
    const gitHubAPI = `https://api.github.com/repos/ascpixi/is-odd`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}
async function  tetrisApi() {
    const gitHubAPI = `https://api.github.com/repos/mkh2097/Tetris-Assembly-8086`;

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        return processedData;
    } 
    catch(error) {
        console.error(error);
        
    }
}


async function apiDataDisplay() {


    const data = await pigGame();
    const chessData = await chessApiGetter();
    const chessLibraryData = await chessLibraryApiGetter();
    const mineSweeperData = await minesweeperApi();
    const isItOdd = await isOdd();
    const tetris = await tetrisApi();

    const jsonData = await fetch("resumeData/resume.json");
    const {githubimg} =  await jsonData.json();
    cardDisplayData(data, chessData, chessLibraryData,mineSweeperData, isItOdd, tetris, githubimg);
    
}

function cardDisplayData (data, chessData, chessLibraryData, mineSweeperData, isItOdd, tetris, githubimg) {


    const dataArray = [data,chessLibraryData, chessData,  mineSweeperData, isItOdd, tetris];
    const cardArray = [card1, card2, card3, card4, card5, card6];
    let arrayTracker = 0;
    let i = 1;
    
    dataArray.forEach(element => {

        const {name, description, html_url, language, owner} = element;
        

        cardArray[arrayTracker].innerHTML = `      
        <img src="${githubimg[arrayTracker].image}" alt="">
        <h3 class="project-title-${i}">${name}</h3>
        <p class="description${i}">${description}</p>
        <p class="tech-stack${i}"><span>Main language:</span> ${language}</p>
        <p class="tech-stack${i}"><span>Owner:</span>${owner.login}  </p>
        <div class="card-footer">
            <a href="#" class="live-preview"><img src="./img/linkicon.svg" alt="Link icon">Live Preview</a>
            <a href="${html_url}" class="view-code"><img src="./img/githubicon.svg" alt="Github icon">View Code</a>
        </div>`;

        i++;
        arrayTracker++;


    });

    

}



const mainItem = document.querySelector('.main-item');
const skillsList = document.querySelector('.list-of-skills');



mainItem.addEventListener('click', ()  => {
    skillsList.classList.toggle('dropDownVisible');
})

// projects page slider

let items = document.querySelectorAll('.slider .card');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow () {
    let tracker = 0;
    
    items[active].style.backgroundColor = `solid`;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
        tracker++;
        items[i].style.transform = `translatex(${120*tracker}px) scale(${1 - 0.2*tracker}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -tracker;
        items[i].style.filter = 'blur(10px)';
        items[i].style.opacity = tracker > 2 ? 0 : 0.6;
    }

    tracker = 0;
    for (let i = active - 1; i >= 0; i--) {
        tracker++;
        items[i].style.transform = `translatex(${-120*tracker}px) scale(${1 - 0.2*tracker}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -tracker;
        items[i].style.filter = 'blur(10px)';
        items[i].style.opacity = tracker > 2 ? 0 : 0.6;
    }
}

loadShow();

document.addEventListener('keydown', (event) => {
    if (event.key.startsWith("Arrow")) {

        switch(event.key) {
            case "ArrowRight":
                active = active + 1 < items.length ? active + 1 : active;
                loadShow();
                break;
            case "ArrowLeft":
                active = active - 1 >= 0 ? active - 1 : active;
                loadShow();
                break;

        }
    }
})

next.addEventListener('click', () => {
    
    active = active + 1 < items.length ? active + 1 : active;
    console.log(active, items.length);
    loadShow();

})

prev.addEventListener('click', () => {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
})

apiDataDisplay();

