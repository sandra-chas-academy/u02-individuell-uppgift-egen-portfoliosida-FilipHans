const aboutMe = document.querySelector('.me-wrapper');
const toProjectBtn = document.querySelector('.go-to-projects');

const projects = document.querySelector('.projects-page');
const toAboutBtn = document.querySelector('.go-to-about');

fetch("resumeData/resume.json")
    .then(result => result.json())
    .then(value => resumePrinter(value))

function resumePrinter (data) {

    console.log(data);
}

toProjectBtn.addEventListener('click', () => {

    aboutMe.style.display = 'none';
    projects.style.display = 'block';
})

toAboutBtn.addEventListener('click', () => {
    aboutMe.style.display = 'block';
    projects.style.display = 'none';
})

// const gitHubAPI = `https://raw.githubusercontent.com/FilipHans/quizTest/tree/main/testingCode`;

// const gitHubAPI = "https://github.com/FilipHans/quizTest/tree/main/testingCode";

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

