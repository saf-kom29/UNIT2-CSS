
// SEARCH BAR SEARCHING

const searchInput = document.getElementById("cardSearch");
const cards = document.querySelectorAll("#resourcelist .card");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }
    });
});

// FORM SEARCHING
const btnSubmit = document.querySelector("#btnSubmit")
const education = document.querySelector(".edu")
const extracurricular = document.querySelector(".extraCurr")
const pediatric = document.querySelector(".pediatric")
const transport = document.querySelector(".transport")
const afterschoolcare = document.querySelector(".afterschoolcare")
const foodbank = document.querySelector(".food")


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    cards.forEach(card => {

        // SHOW ALL FIRST (default reset)
        card.parentElement.style.display = "block";

        // EDUCATION
        if (education.checked) {
            if (!card.classList.contains("education")) {
                card.parentElement.style.display = "none";
            }
        }

        // EXTRACURRICULAR
        else if (extracurricular.checked) {
            if (!card.classList.contains("extracurriculars")) {
                card.parentElement.style.display = "none";
            }
        }

        // PEDIATRICS
        else if (pediatric.checked) {
            if (!card.classList.contains("pediatrics")) {
                card.parentElement.style.display = "none";
            }
        }

        //TRANSPORTATION
        else if (transport.checked) {
            if (!card.classList.contains("transportation")) {
                card.parentElement.style.display = "none"
            }
        }

        //AFTERSCHOOL CARE
        else if (afterschoolcare.checked) {
            if (!card.classList.contains("afterschool")) {
                card.parentElement.style.display = "none"
            }
        }

        //FOODBANKS
        else if (foodbank.checked) {
            if (!card.classList.contains("foodbank")) {
                card.parentElement.style.display = "none"
            }
        }

    });
});


//EXTRA ADD EVENT LISTENER TO GET RID OF THE CHECKS ON SECOND CLICK
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('click', function() {
    if (this.wasChecked) {
      this.checked = false;
    }
    // save state for next click
    this.wasChecked = this.checked;
  });
});