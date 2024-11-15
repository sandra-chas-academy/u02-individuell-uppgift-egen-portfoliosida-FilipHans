const aboutMe = document.querySelector('.me-wrapper');
const toProjectBtn = document.querySelector('.go-to-projects');

const projects = document.querySelector('.projects-page');
const toAboutBtn = document.querySelector('.go-to-about');

const aboutMeText = document.querySelector('.phone-text');

const experienceBox1 = document.querySelector('.experience-box1');
const experienceBox2 = document.querySelector('.experience-box2');
const experienceBox3 = document.querySelector('.experience-box3');


fetch("resumeData/resume.json")
    .then(result => result.json())
    .then(value => resumePrinter(value))

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

    console.log(education[0].institution);
    console.log(data)

}

toProjectBtn.addEventListener('click', () => {

    aboutMe.style.display = 'none';
    projects.style.display = 'block';
})

toAboutBtn.addEventListener('click', () => {
    aboutMe.style.display = 'block';
    projects.style.display = 'none';
})


const gitHubAPI = `https://api.github.com/users/FilipHans/repos`;


async function apiGetter () {

    try {
        const apiData = await fetch(gitHubAPI);

        if (!apiData) {
        throw new Error("HTTP ERROR STATUS: " + apiData.status)
        }

        const processedData = await apiData.json();
        console.log(processedData);
    } 
    catch(error) {
        // console.error("error", error);
        
    }
    

    
}

const data = await apiGetter();


