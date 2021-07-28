// import './style.css';

const ul = document.querySelector("ul");
const form = document.querySelector("#add-form");

async function addScore(e) {
  e.preventDefault();
  const input = document.querySelectorAll("input");
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/clgFLMtHrYVTrf5UzXrW/scores",
    {
      method: "POST",
      body: JSON.stringify({
        user: input[0].value,
        score: Number(input[1].value),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((response) => response.json())
    .then((json) => console.log(json));

  // const li = document.createElement("li");
  // const p = document.createElement("p");
  // p.innerHTML = `${input[0].value}: ${input[1].value}`;
  // li.appendChild(p);
  // ul.appendChild(li);
  // input[0].value = "";
  // input[1].value = "";
}

form.addEventListener("submit", addScore);
