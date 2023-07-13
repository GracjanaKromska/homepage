{
    const welcome = () => {
        console.log("Hi! Have a nice day!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("dark");
        nextColorName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

    const articlePicture = document.querySelector(".js-articlePicture");

    const hidePicture = () => {
        articlePicture.classList.add("hidden");
    };

    hidePicture();

    const removeHidden = () => {
        articlePicture.classList.remove("hidden")
    };

    const showPicture = () => {
        const toggleShowImageButton = document.querySelector(".js-toggleShowImageButton");
        toggleShowImageButton.addEventListener("click", removeHidden);
    };

    showPicture();
}