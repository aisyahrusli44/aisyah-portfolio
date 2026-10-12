
"use strict";

/* ===== MOBILE NAVIGATION ===== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* ===== PROJECT INFORMATION ===== */

const projects = {
    
nexride: {
    title: "UPSI NexRide",
    category: "TRANSPORTATION PROJECT",

    links: [
    {
        label: "GitHub",
        url: "",
        disabled: true
    }
],
status: "In Development",

    description:
        "A campus ride-sharing mobile application designed to " +
        "help UPSI students coordinate rides between KSAJS and KSAS.",

    problems: [
        "Students may face difficulties travelling between campuses.",
        "Ride arrangements and schedules can be difficult to coordinate.",
        "Students lack a dedicated platform for campus ride-sharing."
    ],

    solutions: [
        "Connect students who offer rides with students seeking rides.",
        "Support ride scheduling and booking in one platform.",
        "Provide tools to coordinate rides based on routes and timing."
    ],

    role:
        "Full Stack Developer. Responsible for developing the user interface, implementing application functionality, managing database operations and integrating Supabase backend services to support user management, ride scheduling, and booking features.",

    features: [
        "User Management",
        "Ride Scheduling",
        "Ride Booking",
        "Smart Matching",
        "Live Location",
        "In-App Chat",
        "Notifications",
        "Fare Suggestion"
    ]
},



travelbah: {
    title: "TravelBah!",
    category: "COMMUNITY PROJECT",

    links: [
    {
        label: "GitHub",
        url: "https://github.com/ncychannnn/TravelBah-"
    },
    {
        label: "Download APK",
        url: "https://drive.google.com/file/d/1FX_dKuMvrbXmXJooGjpsRl4FBu5__huI/view?usp=drive_link"
    }
],

    description:
        "A travel community mobile application designed to help " +
        "users discover attractions, share travel experiences " +
        "and organize travel wishlists.",

    problems: [
        "Finding and organizing travel attractions can be time-consuming.",
        "Travel recommendations and experiences may be scattered across different sources.",
        "Users need a convenient way to save places they want to visit."
    ],

    solutions: [
        "Provide an interface to explore attractions and categories.",
        "Allow users to share travel posts and experiences.",
        "Provide a wishlist to save attractions and track visited places."
    ],

    role:
    "Backend Developer. Responsible for implementing CRUD operations, managing application data and supporting the Explore, Community, and Wishlist features.",

    features: [
        "User Profile",
        "Explore Attractions",
        "Browse Categories",
        "Community Posts",
        "Add Posts",
        "Wishlist",
        "Visited Status",
        "Comments",
    ]
},

cptyres: {
    title: "CPTyres",
    category: "Software Engineering Project",

    links: [
    {
        label: "GitHub",
        url: "https://github.com/Alantan97/cptyres-system"
    },
    {
        label: "Watch Demo",
        url: "https://youtu.be/_BQOTaFezgI?si=V-26djAEmUNmsdBe"
    }
],

    description:
        "A car workshop management system designed to organize " +
        "customer and vehicle records, track service jobs, maintain " +
        "service histories and manage invoices and payments.",

    problems: [
        "Customer and vehicle records can be difficult to organize manually.",
        "Tracking service jobs and vehicle maintenance history can be inefficient.",
        "Managing invoices and payments separately can complicate record retrieval."
    ],

    solutions: [
        "Centralize customer and vehicle information.",
        "Organize service job tracking and vehicle service history.",
        "Provide structured invoice and payment record management."
    ],

    role:
        "Project Manager. Responsible for coordinating team activities, planning project milestones, monitoring progress and ensuring tasks were completed according to project requirements and deadlines.",

    features: [
        "Customer Management",
        "Vehicle Records",
        "Service Job Tracking",
        "Service History",
        "Invoice Management",
        "Payment Records"
    ]
},

smartgrade: {
    title: "SmartGrade",
    category: "Academic Project",

    links: [
    {
        label: "GitHub",
        url: "https://github.com/ainwhidan/SmartGrade"
    }
],

    description:
        "An academic platform focused on organizing student grade " +
        "information and making academic records easier to manage.",

    problems: [
        "Academic grade information can be difficult to organize.",
        "Finding relevant academic information may require manual effort.",
        "Unstructured records can make academic information harder to review."
    ],

    solutions: [
        "Organize grade information in a structured platform.",
        "Provide a centralized way to access academic records.",
        "Support easier review of grade information."
    ],

    role:
        "Tester and Documentation Lead. Responsible for testing application functionality, identifying bugs, documenting test results and preparing project documentation to ensure software quality and meet project requirements.",

    features: [
        "Grade Information Management",
        "Academic Record Organization",
        "Student Information",
        "Grade Viewing"
    ]
},

upsicareshare: {
    title: "UPSI Care & Share",
    category: "Team Project",

    description:
        "A university project focused on care, sharing and " +
        "community support within the UPSI community.",

    problems: [
        "Community support needs may be difficult to communicate.",
        "Coordinating support activities can require additional organization.",
        "Community initiatives need clear communication to encourage participation."
    ],

    solutions: [
        "Promote a community-focused approach to care and sharing.",
        "Encourage coordination among people involved in support activities.",
        "Raise awareness and encourage participation in community initiatives."
    ],

    role:
        "Tester and Documentation Lead. Responsible for testing application functionality, identifying bugs, documenting test results, and preparing project documentation to ensure software quality and meet project requirements.",

    features: [
        "Community Support",
        "Sharing Initiative",
        "Community Engagement",
        "Team Collaboration"
    ]
},

greencomputing: {
    title: "GreenComputing",
    category: "Awareness Project",

    links: [
    {
        label: "GitHub",
        url: "https://github.com/aisyahrusli44/GreenComputingWebsite"
    }
],

links: [
    {
        label: "GitHub",
        url: "GITHUB_GREEN_COMPUTING_URL"
    },
    {
        label: "Live Demo",
        url: "https://d06422.schtg.com/GreenComputingWebsite/index-web.html"
    }
],

    description:
        "A web-based awareness project promoting environmentally " +
        "responsible computing practices and sustainable technology use.",

    problems: [
        "Users may have limited awareness of green computing practices.",
        "Everyday technology use can contribute to unnecessary energy consumption.",
        "Practical green computing guidance may be difficult to discover."
    ],

    solutions: [
        "Present information about environmentally responsible computing.",
        "Encourage more sustainable use of computers and technology.",
        "Make green computing information accessible through a website."
    ],

    role:
        "Full Stack Developer. Responsible for developing the user interface, implementing application functionality, managing database operations, and integrating frontend and backend components to deliver a functional Green Computing application.",

    features: [
        "Green Computing Information",
        "Environmental Awareness",
        "Sustainable Technology Practices",
        "Educational Content"
    ]
}
};

/* ===== PROJECT DETAILS POPUP ===== */

const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");

const modalProblems = document.getElementById("modal-problems");
const modalSolutions = document.getElementById("modal-solutions");
const modalRole = document.getElementById("modal-role");
const modalFeatures = document.getElementById("modal-features");


let previousFocus = null;

function openProjectModal(projectKey, triggerButton) {
    const project = projects[projectKey];

    if (!project) {
        return;
    }

    previousFocus = triggerButton;

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;

    const projectLinks = document.getElementById("modal-project-links");
projectLinks.replaceChildren();

if (project.status) {
    const status = document.createElement("span");
    status.className = "project-status";
    status.textContent = project.status;
    projectLinks.appendChild(status);
}

(project.links || []).forEach((link) => {
    const button = document.createElement("a");

    button.className = "project-action-btn";
    button.textContent = link.label;

    if (link.disabled || !link.url) {
        button.classList.add("project-link-disabled");
        button.setAttribute("aria-disabled", "true");
        button.removeAttribute("href");
        button.tabIndex = -1;
    } else {
        button.href = link.url;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    }

    projectLinks.appendChild(button);
});
    
modalProblems.replaceChildren();
modalSolutions.replaceChildren();
modalFeatures.replaceChildren();

project.problems.forEach((problem) => {
    const item = document.createElement("li");
    item.textContent = problem;
    modalProblems.appendChild(item);
});

project.solutions.forEach((solution) => {
    const item = document.createElement("li");
    item.textContent = solution;
    modalSolutions.appendChild(item);
});

modalRole.textContent = project.role;

project.features.forEach((feature) => {
    const tag = document.createElement("span");
    tag.className = "core-feature-tag";
    tag.textContent = feature;
    modalFeatures.appendChild(tag);
});

    projectModal.classList.add("active");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    modalClose.focus();
}

function closeProjectModal() {
    if (!projectModal.classList.contains("active")) {
        return;
    }

    projectModal.classList.remove("active");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (previousFocus) {
        previousFocus.focus();
    }
}

document.querySelectorAll(".project-details-btn").forEach((button) => {
    button.addEventListener("click", () => {
        openProjectModal(button.dataset.project, button);
    });
});


/* ===== EXPERIENCE & ACTIVITIES IMAGE SLIDERS ===== */

document.querySelectorAll(".photo-slider").forEach((slider) => {
  const images = Array.from(slider.querySelectorAll(".slider-image"));
  const prevButton = slider.querySelector(".slider-prev");
  const nextButton = slider.querySelector(".slider-next");
  const counter = slider.querySelector(".slider-counter");
  const dotsContainer = slider.querySelector(".slider-dots");

  if (images.length === 0) return;

  let currentIndex = 0;

  // Create one navigation dot for each image
  images.forEach((image, index) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Show photo ${index + 1}`);

    dot.addEventListener("click", () => {
      showImage(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.querySelectorAll(".slider-dot"));

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    images.forEach((image, i) => {
      image.classList.toggle("active", i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
      dot.setAttribute("aria-current", i === currentIndex ? "true" : "false");
    });

    counter.textContent =
      `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
  }

  prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Initialise the slider
  showImage(0);
});

/* Close with the close button */

modalClose.addEventListener("click", closeProjectModal);

/* Close when clicking the backdrop */

projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

/* Close with Escape and keep keyboard focus in the popup */

document.addEventListener("keydown", (event) => {
    if (!projectModal.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeProjectModal();
        return;
    }

    if (event.key === "Tab") {
        const focusableElements = projectModal.querySelectorAll(
            'button, a[href], input, select, textarea, ' +
            '[tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
        ) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});


/* ===== ABOUT PHOTO SLIDER ===== */
document.querySelectorAll("[data-about-slider]").forEach((slider) => {
    const track = slider.querySelector(".about-photo-track");
    const images = track.querySelectorAll("img");
    const counter = slider.querySelector(".about-photo-counter");
    const dots = slider.querySelectorAll(".about-photo-dots button");
    const previous = slider.querySelector(".prev");
    const next = slider.querySelector(".next");

    let currentIndex = 0;

    function showPhoto(index) {
        currentIndex = (index + images.length) % images.length;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        counter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    previous.addEventListener("click", () => {
        showPhoto(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showPhoto(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showPhoto(index));
    });

    showPhoto(0);
});


/* ===== FOOTER YEAR ===== */

document.getElementById("year").textContent =
    new Date().getFullYear();
