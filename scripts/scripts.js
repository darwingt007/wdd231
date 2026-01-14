// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

// Course data
const courses = [
    { name: "WDD 130", credits: 3, type: "wdd", completed: true },
    { name: "WDD 131", credits: 3, type: "wdd", completed: true },
    { name: "WDD 231", credits: 3, type: "wdd", completed: false }
];

const list = document.getElementById("courseList");
const total = document.getElementById("creditTotal");

function displayCourses(filter = "all") {
    list.innerHTML = "";
    let creditSum = 0;

    courses
        .filter(course => filter === "all" || course.type === filter)
        .forEach(course => {
            const div = document.createElement("div");
            div.className = "course";

            if (course.completed) {
                div.classList.add("completed");
                creditSum += course.credits;
            }

            div.textContent = course.name;
            list.appendChild(div);
        });

    total.textContent = `The total credits for courses listed above is ${creditSum}`;
}

displayCourses();

document.querySelectorAll(".course-filters button").forEach(button => {
    button.addEventListener("click", () => {
        displayCourses(button.dataset.filter);
    });
});

