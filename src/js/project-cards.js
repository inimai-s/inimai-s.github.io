const projects = [
    {
        title: "SpaceX: Starlink On-Orbit Reliability Software Intern",
        image: "satellite.png",
        descriptionMarkdown: `- Developed detection algorithms of solar array debris impacts for risk assessment and anomaly attribution; put an upper bound on MMOD incidence rate.
- Established pipeline and criteria for magnet uniformity study which ruled out magnets as the source of undesired mode-shifting occurrences, a major issue in the propulsion system.
        `,
        demoLink: "#"
    },
    {
        title: "The Polyglot Persuader (MIT NLP Course 6.8611)",
        image: "attack.png",
        descriptionMarkdown: `- Examined influence of multi-turn attacks on LLMs for low vs high-resource languages.
- Tested the application of Continuous Adversarial Training (CAT) methods to better defend against misinformation.
- Proposed further techniques for improving model robustness.
        `,
        demoLink: "https://drive.google.com/file/d/1yGmWTxbeMIazfaZdlVylwU90HHbNQdDI/view"
    },
    {
        title: "Computer-Aided Diagnosis for Alzheimer’s Disease Via GANs (MIT CV Course 6.8300)",
        image: "brain.png",
        descriptionMarkdown: `- Improved performance of a standard convolutional neural network model to classify brain MRI scans into various degrees of dementia.
- Performed experiments with four different GAN-augmented CNN models to optimize classification accuracy.
- Concluded SR GANs perform better due to their structure.`,
        demoLink: "https://drive.google.com/file/d/1TJrx3EotwcJD38hOuwcnza9oT5SmMdir/view"
    },
    {
        title: "MIT Airport Rideshare",
        image: "airplane.png",
        descriptionMarkdown: `- Built a rideshare web app using HTML, CSS, React, Javascript, and Git. Used MongoDB to store and access app data. Coded frontend and backend, built API, called get and post requests to API.
- Deployed app online for use of MIT student body.
- Won Most Responsive UI Award in the MIT Web Lab Competition.`,
        demoLink: "#"
    }, 
];

function createProjectCard(project) {
    console.log('creating card')
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `
        <div class="flex flex-col w-full h-full bg-transparent">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <img class="h-full object-cover" src="src/img/${project.image}" alt="${project.title}">
        </div>
    `;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    
    const descriptionHtml = marked.parse(project.descriptionMarkdown)
    cardBack.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <div class="px-5 pb-5">${descriptionHtml}</div>
    `;

    if (project.demoLink !== '#') {
        cardBack.innerHTML = cardBack.innerHTML + `<a href="${project.demoLink}" class="text-blue-500 hover:underline">View Paper</a>`
    }

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);

    return card;
}

function addProjectsToContainer() {
    const projectContainer = document.getElementById("projectContainer");

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to generate project cards
addProjectsToContainer();
