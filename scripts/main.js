// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Course data
const courses = [
    { code: "CSE 110", credits: 2, category: "cse", completed: true },
    { code: "CSE 111", credits: 2, category: "cse", completed: true },
    { code: "WDD 130", credits: 3, category: "wdd", completed: true },
    { code: "WDD 231", credits: 3, category: "wdd", completed: false },
    { code: "CSS 200", credits: 2, category: "css", completed: false }
];

const courseContainer = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(filter = "all") {
    courseContainer.innerHTML = "";

    const filtered = filter === "all"
        ? courses
        : courses.filter(course => course.category === filter);

    let credits = 0;

    filtered.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course");
        if (course.completed) div.classList.add("completed");

        div.textContent = `${course.code} – ${course.credits} credits`;
        courseContainer.appendChild(div);

        credits += course.credits;
    });

    totalCredits.textContent = `Total Credits: ${credits}`;
}

displayCourses();

// Filter buttons
document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});
