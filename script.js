const skills = [
    {
      title: "HTML",
      description: "Semantic and accessible markup",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png"
    },
    {
      title: "CSS",
      description: "Flexbox, Grid, Animations",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
    },
    {
      title: "JavaScript",
      description: "DOM, ES6, API handling",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    },
    {
      title: "Git & GitHub",
      description: "Version control & collaboration",
      image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first, cross-browser",
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
    },
    {
      title: "Problem Solving",
      description: "Logic building, DSA basics",
      image: "https://cdn-icons-png.flaticon.com/512/545/545674.png"
    }
  ];
    const launchBtn = document.querySelector("button");
    const splash = document.querySelector(".splash");
    const container = document.querySelector(".container");

    launchBtn.addEventListener("click", () => {
        splash.classList.add("zoomOut");

        setTimeout(() => {
            splash.style.display = "none";
            container.classList.add("zoomIn");
        }, 600); // matches zoomOut duration
    });

  const grid = document.getElementById("skillsGrid");

  skills.forEach((skill, index) => {
    const card = document.createElement("div");
    card.classList.add("skill-card","animate");

    card.innerHTML = `
      <img src="${skill.image}" alt="${skill.title} logo">
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>
    `;

    grid.appendChild(card);

    // Animate each card in delay
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 150);
  });

// Sample dynamic project data
const projectData = [
  {
    title: "Entertainment Movies",
    description: "A movie browsing web app with trailers, info, and UI animations.",
    image: "https://cdn-icons-png.flaticon.com/512/1179/1179069.png",
    github: "https://github.com/madhavipentakota/Entertainment-Webpage",
    demo: "#"
  },
  {
    title: "Bus Tracking System",
    description: "Real-time student-driver app with live location sharing.",
    image: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    github: "#",
    demo: "#"
  },
  {
    title: "Arteum for Artists",
    description: "A platform where artists can upload and share their artwork.",
    image: "https://cdn-icons-png.flaticon.com/512/3389/3389626.png",
    github: "https://github.com/madhavipentakota/Arteum",
    demo: "#"
  },
  {
    title: "Tourism Website",
    description: "Explore travel destinations with visual highlights and guides.",
    image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    github: "https://github.com/madhavipentakota/Wander-Joy",
    demo: "#"
  }
];

// Render projects dynamically
const containers = document.getElementById("projectsContainer");

projectData.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card animate";
  card.innerHTML = `
  <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <div class="project-details">
      <p>${project.description}</p>
      <button class="view-btn">View</button>
    </div>
  `;

  // Add toggle functionality
  card.addEventListener("click", function () {
    const allDetails = document.querySelectorAll(".project-details");
    allDetails.forEach(d => {
      if (d !== this.querySelector(".project-details")) {
        d.style.display = "none";
      }
    });

    const details = this.querySelector(".project-details");
    details.style.display = details.style.display === "block" ? "none" : "block";
  });
  card.querySelector(".view-btn").addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the card's toggle event
    window.open(project.github, "_blank");
  });

  containers.appendChild(card);
});

// certificates
const certificates = [
  
  {
    title: "Cloud Computing",
    description: "Completed certification in cloud fundamentals and services.",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149646.png"
  },
  {
    title: "Topper of the Academic Year",
    description: "Awarded for securing highest academic performance.",
    image: "./certificates/3.jpg"
  },
  {
    title: "Front-End Completion - Simplilearn",
    description: "Completed front-end development course at Simplilearn.",
    image: "./certificates/simply.jpg"
  },
  {
    title: "Front-End Completion - Pupilfirst",
    description: "Completed web development module at Pupilfirst platform.",
    image: "./certificates/pupil.jpg"
  },
  {
    title: "Java Completion - Sololearn",
    description: "Earned certificate for completing Java fundamentals at Sololearn.",
    image: "./certificates/solo.jpg"
  }


];

const certContainer = document.getElementById("certificates-container");

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "card animate";

  card.innerHTML = `
    <img src="${cert.image}" alt="${cert.title}">
    <h3>${cert.title}</h3>
    <p>${cert.description}</p>
  `;

  certContainer.appendChild(card);
});



// contact 
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    // Optionally reset form
    this.reset();
  } else {
    alert("Please fill out all fields before sending.");
  }
});





document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Optional: only animate once
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
});
