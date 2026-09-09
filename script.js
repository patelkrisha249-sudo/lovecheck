/* QUESTIONS */

const questions = [

    "Does your partner respect your boundaries?",

    "Do they support your dreams and goals?",

    "Do they listen when you are upset?",

    "Do they get extremely jealous when you talk to others?",

    "Do they respect your personal space?",

    "Do they apologize when they make a mistake?",

    "Do you feel comfortable being yourself around them?"

];


/* VARIABLES */

let questionNumber = 0;

let green = 0;

let red = 0;

let mixed = 0;


/* HOME */

function goHome() {

    document.getElementById("home").style.display = "flex";

    document.getElementById("test").style.display = "none";

    document.getElementById("result").style.display = "none";

    document.body.style.background = "#fff0f3";

}


/* TEST NAVIGATION */

function goTest() {

    document.getElementById("home").style.display = "none";

    document.getElementById("test").style.display = "block";

    document.getElementById("result").style.display = "none";

    showQuestion();

}


/* START TEST */

function startTest() {

    questionNumber = 0;

    green = 0;

    red = 0;

    mixed = 0;

    document.getElementById("home").style.display = "none";

    document.getElementById("test").style.display = "block";

    document.getElementById("result").style.display = "none";

    document.body.style.background = "#fff0f3";

    showQuestion();

}


/* SHOW QUESTION */

function showQuestion() {

    document.getElementById("question").innerHTML =
        questions[questionNumber];

    document.getElementById("number").innerHTML =
        "Question " + (questionNumber + 1) +
        " of " + questions.length;


    let percentage =
        ((questionNumber + 1) / questions.length) * 100;

    document.getElementById("progress").style.width =
        percentage + "%";

}


/* ANSWER */

function answer(type) {

    if (type === "green") {

        green++;

        greenEffect();

    }

    else if (type === "red") {

        red++;

        redEffect();

    }

    else {

        mixed++;

        mixedEffect();

    }


    questionNumber++;


    if (questionNumber < questions.length) {

        setTimeout(function () {

            showQuestion();

        }, 500);

    }

    else {

        setTimeout(function () {

            showResult();

        }, 600);

    }

}


/* GREEN EFFECT */

function greenEffect() {

    document.body.style.background =
        "linear-gradient(135deg, #d8f3dc, #95d5b2)";

}


/* RED EFFECT */

function redEffect() {

    document.body.style.background =
        "linear-gradient(135deg, #ffccd5, #ff4d6d)";

    document.body.classList.add("shake");


    setTimeout(function () {

        document.body.classList.remove("shake");

    }, 400);


    buzzer();

}


/* MIXED EFFECT */

function mixedEffect() {

    document.body.style.background =
        "linear-gradient(135deg, #fff3bf, #ffd166)";

}


/* RESULT */

function showResult() {

    document.getElementById("test").style.display = "none";

    document.getElementById("result").style.display = "block";


    if (red >= 4) {

        document.getElementById("resultIcon").innerHTML =
            "🚨";

        document.getElementById("resultTitle").innerHTML =
            "RED FLAG ALERT!";

        document.getElementById("score").innerHTML =
            "🚩 Red Flags: " + red +
            "<br>💚 Green Flags: " + green +
            "<br>🟡 Mixed: " + mixed;

        document.getElementById("message").innerHTML =
            "There are some serious warning signs. Take a step back and think about what feels right for you.";

        document.body.style.background =
            "linear-gradient(135deg, #ff0000, #780000)";

        buzzer();

    }


    else if (green >= 4) {

        document.getElementById("resultIcon").innerHTML =
            "💚";

        document.getElementById("resultTitle").innerHTML =
            "GREEN FLAG!";

        document.getElementById("score").innerHTML =
            "💚 Green Flags: " + green +
            "<br>🚩 Red Flags: " + red +
            "<br>🟡 Mixed: " + mixed;

        document.getElementById("message").innerHTML =
            "Looks like your relationship has some really positive signs! ✨";

        document.body.style.background =
            "linear-gradient(135deg, #56ab2f, #a8e063)";

        happySound();

    }


    else {

        document.getElementById("resultIcon").innerHTML =
            "🟡";

        document.getElementById("resultTitle").innerHTML =
            "MIXED SIGNALS!";

        document.getElementById("score").innerHTML =
            "💚 Green Flags: " + green +
            "<br>🚩 Red Flags: " + red +
            "<br>🟡 Mixed: " + mixed;

        document.getElementById("message").innerHTML =
            "Hmm... it's complicated. Some things look good, while others need attention. 🤔";

        document.body.style.background =
            "linear-gradient(135deg, #f9d423, #ffedbc)";

    }

}


/* BUZZER */

function buzzer() {

    try {

        const audio =
            new (window.AudioContext ||
                window.webkitAudioContext)();

        const sound = audio.createOscillator();

        sound.type = "sawtooth";

        sound.frequency.value = 100;

        sound.connect(audio.destination);

        sound.start();

        sound.stop(audio.currentTime + 0.5);

    }

    catch (error) {

        console.log("Audio not supported");

    }

}


/* HAPPY SOUND */

function happySound() {

    try {

        const audio =
            new (window.AudioContext ||
                window.webkitAudioContext)();

        const sound = audio.createOscillator();

        sound.type = "sine";

        sound.frequency.value = 700;

        sound.connect(audio.destination);

        sound.start();

        sound.stop(audio.currentTime + 0.3);

    }

    catch (error) {

        console.log("Audio not supported");

    }

}


/* RESTART */

function restart() {

    questionNumber = 0;

    green = 0;

    red = 0;

    mixed = 0;

    document.getElementById("result").style.display = "none";

    document.getElementById("test").style.display = "none";

    document.getElementById("home").style.display = "flex";

    document.body.style.background = "#fff0f3";

}