const init = () => {
  const btn = document.querySelector("#sub");
  const input = document.querySelector("#searchByID");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((err) => console.log(err));
  });
};

document.addEventListener("DOMContentLoaded", init);
