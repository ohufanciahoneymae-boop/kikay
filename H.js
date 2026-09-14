const openButton = document.getElementById("openButton");

const nameModal = document.getElementById("nameModal");

const closeButton = document.getElementById("closeButton");

const nameInput = document.getElementById("nameInput");

const unlockButton = document.getElementById("unlockButton");

const errorMessage = document.getElementById("errorMessage");

const surprise = document.getElementById("surprise");

const celebrateButton =
    document.getElementById("celebrateButton");

const birthdayName =
    document.getElementById("birthdayName");


/* SECRET NAME */

const SECRET_NAME = "HUFANCIA";


/* CLICK ME */

openButton.addEventListener("click", () => {

    nameModal.classList.add("show");

    nameInput.focus();

});


/* CLOSE */

closeButton.addEventListener("click", () => {

    nameModal.classList.remove("show");

});


/* UNLOCK */

unlockButton.addEventListener("click", unlockBirthday);


/* ENTER KEY */

nameInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        unlockBirthday();

    }

});


/* CHECK NAME */

function unlockBirthday() {

    const enteredName =
        nameInput.value.trim();


    if (
        enteredName.toLowerCase()
        === SECRET_NAME.toLowerCase()
    ) {

     birthdayName.textContent = "HONEY ROSE";


        /* Hide name box */

        nameModal.classList.remove("show");


        /* Show birthday surprise */

        surprise.classList.add("show");


        errorMessage.textContent = "";


        /* Confetti */

        createConfetti();

    }

    else {

        errorMessage.textContent =
            "❌ Wrong name. Try again!";

        nameInput.focus();

    }

}


/* CELEBRATE BUTTON */

celebrateButton.addEventListener(
    "click",
    createConfetti
);


/* CONFETTI */

function createConfetti() {

    const pieces = [
        "🎉,🌹",
        "🎊,🌹",
        "✨,🌹",
        "💖🌹,",
        "🌹,🎈",
        "🥳,🌹"
    ];


    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.textContent =
            pieces[
                Math.floor(
                    Math.random() * pieces.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 3500);

    }

}