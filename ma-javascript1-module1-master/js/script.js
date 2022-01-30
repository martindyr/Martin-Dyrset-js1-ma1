const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// QUESTION 1

const cat = {
    complain: function catSound() {
        console.log("Meow!")
    }
}

// QUESTION 2

const heading = document.querySelector("h3")

heading.innerHTML = "Updated heading"

// QUESTION 3

heading.style.fontSize = "2em"


// QUESTION 4

heading.classList.add("subheading")

// QUESTION 5

const paragraphs = document.querySelectorAll("p")


for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"
}

// QUESTION 6

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = `<p style="background-color: yellow;">New paragraph</p>`

// QUESTION 7

/* function consoleLoop(list) {

    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}
consoleLoop(cats); */

// QUESTION 8

const catContainer = document.querySelector(".cat-container")

function createCats(cats) {
    html = "";

    for (let i = 0; i < cats.length; i++) {
        let hasAge = cats[i].age

        if (cats[i].age === undefined) {
            hasAge = "Unkown"
        }

        html += `<div>
                <h5> ${cats[i].name} </h5>
                <p> ${hasAge} </p>
                </div>`
    }
    catContainer.innerHTML = html
}
createCats(cats);