
const projectsData = [
    { name: "Project 1", image: "project1.jpg", description: "Description of Project 1" },
    { name: "Project 2", image: "project2.jpg", description: "Description of Project 2" },

];

function createProjectCards() {
    const projectContainer = document.querySelector('.project-container');

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        const projectName = document.createElement('h3');
        projectName.textContent = project.name;
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectName);
        projectCard.appendChild(projectDescription);

        projectContainer.appendChild(projectCard);
    });
}

window.addEventListener('load', createProjectCards);
