console.log("Cześć! Miłego dnia!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let toggleThemeButton = document.querySelector(".js-toggleThemeButton");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    toggleThemeButton.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

let toggleShowImageButton = document.querySelector(".js-toggleShowImageButton");
let article__picture = document.querySelector(".js-article__picture");
article__picture.classList.add("hidden");

toggleShowImageButton.addEventListener("click", () => {
    article__picture.classList.remove("hidden");
});