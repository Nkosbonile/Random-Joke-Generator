const jokes = document.querySelector(".jokes");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";

let getJokes = () => {
  jokes.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokes.textContent = `${item.joke}`;
      jokes.classList.add("fade");
    });
};
btn.addEventListener("click", getJokes);
// we done