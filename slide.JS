//Scroll Glass//
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.Hidden') 
hiddenElements.forEach((el) => observer.observe(el));


/*Project show/display*/
function displayShow1() {
    const pro = document.getElementById("showClick1");
    if (pro.style.display === "none") {
        pro.style.display = "block";
    } else {
        pro.style.display = "none";
    }
}

function displayShow2() {
    const pro = document.getElementById("showClick2");
    if (pro.style.display === "none") {
        pro.style.display = "block";
    } else {
        pro.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const items = document.querySelectorAll(".item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            items.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

