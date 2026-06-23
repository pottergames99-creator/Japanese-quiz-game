let shuffledWords = [];
let words = [];
let currentWord = null;

let score = 0;
let questionCount = 0;
let maxQuestion = 10;
let readingQuestionIndex = 0;

let difficulty = "n5";
let category = "kanji";
let selectedKanjiLevel = "";
let selectedKanjiType = "";
let selectedGrammarLevel = "n5";
let selectedReadingLevel = "";
let selectedReadingType = "";


let questionPool = [];
let grammarPool = [];
let kanjiPool = [];
let readingPool = [];

let timer;
let timeLeft = 60;

let selectedLevel = "n5";

let gameMode = "normal";
let playerName = "";

let  furiganaMode = "on";
    furiganaMode = 
    localStorage.getItem("furiganaMode")
    || "on";

let wrongAnswers = [];


const menuScreen =
document.getElementById("menu-screen");

const gameScreen =
document.getElementById("game-screen");

const gameoverScreen =
document.getElementById("gameover-screen");




function startGame(){
    readingQuestionIndex = 0;

readingPool = [];
grammarPool = [];
kanjiPool = [];

shuffledWords = [];


    questionCount = 0;
    score = 0;

    wrongAnswers = [];
    
    difficulty = selectedLevel;

    if(gameMode === "time"){

    words = [

        ...n5KanjiReading,
        ...n4KanjiReading,
        ...n3KanjiReading,
        ...n2KanjiReading,
        ...n1KanjiReading,

        ...n5KanjiWriting,
        ...n4KanjiWriting,
        ...n3KanjiWriting,
        ...n2KanjiWriting,
        ...n1KanjiWriting

    ];

    words = [...words].sort(() => Math.random() - 0.5);

}

    else{


    if(category === "kanji"){

    if(selectedKanjiType === "reading"){

        if(selectedKanjiLevel === "n5") words = n5KanjiReading;
        else if(selectedKanjiLevel === "n4") words = n4KanjiReading;
        else if(selectedKanjiLevel === "n3") words = n3KanjiReading;
        else if(selectedKanjiLevel === "n2") words = n2KanjiReading;
        else if(selectedKanjiLevel === "n1") words = n1KanjiReading;

    }

    else if(selectedKanjiType === "writing"){

        if(selectedKanjiLevel === "n5") words = n5KanjiWriting;
        else if(selectedKanjiLevel === "n4") words = n4KanjiWriting;
        else if(selectedKanjiLevel === "n3") words = n3KanjiWriting;
        else if(selectedKanjiLevel === "n2") words = n2KanjiWriting;
        else if(selectedKanjiLevel === "n1") words = n1KanjiWriting;

    }

    else if(selectedKanjiType === "vocabulary"){

        if(selectedKanjiLevel === "n5") words = n5KanjiVocabulary;
        else if(selectedKanjiLevel === "n4") words = n4KanjiVocabulary;
        else if(selectedKanjiLevel === "n3") words = n3KanjiVocabulary;
        else if(selectedKanjiLevel === "n2") words = n2KanjiVocabulary;
        else if(selectedKanjiLevel === "n1") words = n1KanjiVocabulary;

    }

    else if(selectedKanjiType === "context"){

        if(selectedKanjiLevel === "n5") words = n5KanjiContext;
        else if(selectedKanjiLevel === "n4") words = n4KanjiContext;
        else if(selectedKanjiLevel === "n3") words = n3KanjiContext;
        else if(selectedKanjiLevel === "n2") words = n2KanjiContext;
        else if(selectedKanjiLevel === "n1") words = n1KanjiContext;

    }
}

    else if(category === "grammar"){
        
        if(selectedGrammarLevel === "n5"){
            words = grammarN5;
        }

        else if(selectedGrammarLevel === "n4"){
            words = grammarN4;

        }

        else if(selectedGrammarLevel === "n3"){
            words = grammarN3;
        }

        else if(selectedGrammarLevel === "n2"){
            words = grammarN2;
        }

        else if(selectedGrammarLevel === "n1"){
            words = grammarN1;
        }
    }

    else if(category === "reading"){


    if(
    selectedReadingLevel === "n5"
){
    words = n5_short;
}

else if(
    selectedReadingLevel === "n4"
){

    if(
        selectedReadingType === "short"
    ){
        words = n4_short;
    }

    else{
        words = n4_medium;
    }
}

else if(
    selectedReadingLevel === "n3"
){

    if(
        selectedReadingType === "short"
    ){
        words = n3_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n3_medium;
    }

    else{
        words = n3_long;
    }
    
    
}else if(
    selectedReadingLevel === "n2"
){

    if(
        selectedReadingType === "short"
    ){
        words = n2_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n2_medium;
    }

    else{
        words = n2_long;
    }
}
else if(
    selectedReadingLevel === "n1"
){

    if(
        selectedReadingType === "short"
    ){
        words = n1_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n1_medium;
    }

    else{
        words = n1_long;
    }
}

    

}

}
    if(category === "grammar"){

    if(grammarPool.length < 10){

        grammarPool =
        shuffle([...words]);
    }

    shuffledWords =
    grammarPool.splice(0,10);
    }else if(category === "kanji"){

    if(kanjiPool.length < 10){

        kanjiPool =
        shuffle([...words]);
    }

    shuffledWords =
    kanjiPool.splice(0,10);
    }else if(category === "reading"){

        console.log("readingPool =", readingPool);
        console.log("words =", words);
        console.log("words length =", words?.length);

    if(readingPool.length < 10){

        readingPool =
        shuffle([...words]);

    }


    shuffledWords =
    readingPool.splice(0,10);
    }

    menuScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    const progress = document.getElementById("progress");

if(progress){

    if(gameMode === "time"){
        progress.style.display = "none";
    }else{
        progress.style.display = "block";
        progress.innerHTML =
            "Question 1 / " + maxQuestion;
    }

}

    document.getElementById("score").innerHTML =
    "Score: 0";

    document.getElementById("timer").innerHTML =
    "time: " + timeLeft;

    if(gameMode === "time"){
        startTimer();
    }else{
        document.getElementById("timer").style.display =
        "none";
    }

    

    showQuestion();

}

function startTimer(){

    clearInterval(timer);

    timer = setInterval(() => {

        document.getElementById("timer").innerHTML =
        "time: " + timeLeft;

         timeLeft--;

        if(timeLeft <= 0){
            clearInterval(timer);
            endGame();
        }

    },1000);
}



function showQuestion(){

    let percent =
    (questionCount / maxQuestion) * 100;

    document.getElementById("progressBar")
    .style.width = percent + "%";

    if(gameMode !== "time" &&
        questionCount >= shuffledWords.length){

            endGame();
            return;
        }

    if(gameMode === "time" &&
        questionCount >= shuffledWords.length){

            shuffledWords =
            [...words].sort(() => Math.random() - 0.5);

            questionCount = 0;
        }

    currentWord =
    shuffledWords[questionCount];

    let currentQuestion = currentWord;

if(
    category === "reading" &&
    currentWord.questions
){
    currentQuestion =
        currentWord.questions[
            readingQuestionIndex
        ];
}


    let answers = [];

    const questionText =

       furiganaMode === "on"

       ? currentQuestion.question

        : removeFurigana(
         currentQuestion.question
        );

        document
        .getElementById("question")
        .innerHTML =
        questionText;


    answers = [...currentQuestion.choices];
    answers.sort(() => Math.random() - 0.5);


    if(category === "grammar"){

    document.getElementById("question").innerHTML =
        questionText;

    answers = [...currentWord.choices];

    answers.sort(() => Math.random() - 0.5);
}

    if(category === "reading"){

    document.getElementById("question").innerHTML = `
    <div class="reading-passage">
        <h3>📖 Reading Passage</h3>
        <div class="reading-text">
        ${
            furiganaMode === "on"
            ? currentWord.passage
            : removeFurigana(currentWord.passage)
        }</div>
    </div>

    <hr>

    <div class="reading-question">
        <h3>❓ Question</h3>
        <p>${
            furiganaMode === "on"
            ? currentQuestion.question
            : removeFurigana(currentQuestion.question)
        }</p>
        
    </div>
    `;
    

    answers = [...currentQuestion.choices];

    

}

    if(category === "kanji"){

    document.getElementById("question").innerHTML =
        questionText;

    answers = [...currentWord.choices];

    answers.sort(() => Math.random() - 0.5);

}

    answers.sort(() => Math.random()-0.5);

    document.getElementById("btn1").innerHTML =
    answers[0];

    document.getElementById("btn2").innerHTML =
    answers[1];

    document.getElementById("btn3").innerHTML =
    answers[2];

    document.getElementById("btn4").innerHTML =
    answers[3];
}

function checkAnswer(choice){

    let msg =
    document.getElementById("message");

    let correctAnswer;

    if(category === "kanji"){
    correctAnswer = currentWord.answer;
    }
    else if(category === "grammar"){
    correctAnswer = currentWord.answer;
    }
    else if(category === "reading"){
        if(currentWord.questions){
            correctAnswer =
            currentWord.questions[
                readingQuestionIndex
            ].correct;
        }else{
            correctAnswer =
            currentWord.correct;
        }
    }
    else{
    correctAnswer = currentWord.hiragana;
    }

    if(choice === correctAnswer){

        score ++;

        msg.innerHTML = "⭕ Correct!"
        msg.className = "correct";

    } else {

        wrongAnswers.push({
            question: document.getElementById("question").innerHTML,
            yourAnswer: choice,
            correctAnswer: correctAnswer
        });

        msg.innerHTML = "😆 Wrong!";
        msg.className = "wrong";
    }

    document.getElementById("score").innerHTML =
    "score: " + score;

    if(gameMode === "time"){

         words = [

        ...n5KanjiReading,
        ...n4KanjiReading,
        ...n3KanjiReading,
        ...n2KanjiReading,
        ...n1KanjiReading,

        ...n5KanjiWriting,
        ...n4KanjiWriting,
        ...n3KanjiWriting,
        ...n2KanjiWriting,
        ...n1KanjiWriting

    ];
    }

    else{

    if(category === "kanji"){

    if(difficulty === "n5"){

        if(selectedKanjiType === "reading"){
            words = n5KanjiReading;
        }

        else if(selectedKanjiType === "writing"){
            words = n5KanjiWriting;
        }

        else if(selectedKanjiType === "vocabulary"){
            words = n5KanjiVocabulary;
        }

        else if(selectedKanjiType === "context"){
            words = n5KanjiContext;
        }

    }
}

else if(category === "grammar"){
        
        if(selectedGrammarLevel === "n5"){
            words = grammarN5;
        }

        else if(selectedGrammarLevel === "n4"){
            words = grammarN4;
        }

        else if(selectedGrammarLevel === "n3"){
            words = grammarN3;
        }

        else if(selectedGrammarLevel === "n2"){
            words = grammarN2;
        }

        else if(selectedGrammarLevel === "n1"){
            words = grammarN1;
        }
    }

    else if(category === "reading"){


    if(
    selectedReadingLevel === "n5"
){
    words = n5_short;
}

else if(
    selectedReadingLevel === "n4"
){

    if(
        selectedReadingType === "short"
    ){
        words = n4_short;
    }

    else{
        words = n4_medium;
    }
}

else if(
    selectedReadingLevel === "n3"
){

    if(
        selectedReadingType === "short"
    ){
        words = n3_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n3_medium;
    }

    else{
        words = n3_long;
    }
    
    
}else if(
    selectedReadingLevel === "n2"
){

    if(
        selectedReadingType === "short"
    ){
        words = n2_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n2_medium;
    }

    else{
        words = n2_long;
    }
}
else if(
    selectedReadingLevel === "n1"
){

    if(
        selectedReadingType === "short"
    ){
        words = n1_short;
    }

    else if(
        selectedReadingType === "medium"
    ){
        words = n1_medium;
    }

    else{
        words = n1_long;
    }
}


}

}

    if(
    category === "reading" &&
    currentWord.questions
){

    if(
        readingQuestionIndex <
        currentWord.questions.length - 1
    ){

        readingQuestionIndex++;

        showQuestion();

        return;
    }

    readingQuestionIndex = 0;
}  

    document.getElementById("timer").innerHTML =
    "time: " + timeLeft;

    setTimeout(() => {

        msg.innerHTML = "";

        nextQuestion();

    }, 500);
    
}

function nextQuestion(){

    questionCount++;

    if(gameMode !== "time" &&
        questionCount >= maxQuestion){

            endGame();
            return;
        }

    if(gameMode !== "time"){
        document.getElementById("progress").innerHTML =
        "Question " + (questionCount + 1) + "/" + maxQuestion;
    }

    showQuestion();
}

function endGame(){

    console.log("wrongAnswers =", wrongAnswers);
console.log("length =", wrongAnswers.length);

    clearInterval(timer);

    document
    .getElementById("kanji-type-screen")
    .classList.add("hidden");

    document
    .getElementById("reading-type-screen")
    .classList.add("hidden");

    menuScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    gameoverScreen.classList.remove("hidden");

    document.getElementById("level")
    .innerHTML = selectedLevel.toUpperCase();

    document.getElementById("final-score")
    .innerHTML = score;

    let percent =
    Math.round(score/maxQuestion*100);

    if(percent >= 60){
        document.getElementById("result")
        .innerHTML = "PASS";
    }

    else{
        document.getElementById("result")
        .innerHTML = "FAILED";
    }

    document.getElementById("percent")
    .innerHTML =
    percent + "%";

    if(gameMode === "time"){
        document.getElementById("percent").remove();
        document.getElementById("progress").remove();
        document.getElementById("level").remove();
        document.getElementById("progressBar").remove();
        document.getElementById("result").remove();
    }

    localStorage.setItem(
        "lastScore",
        score
    );

    let highScore = 
    localStorage.getItem("highScore") || 0;

    if(score > highScore){

        localStorage.setItem(
            "highScore",
            score
        );

        let percent = Math.round((score/maxQuestion) * 100);

        let rank = "";

        if(percent >= 90){
            rank = "🏆S";
        }
        else if(percent >= 80){
            rank = "🥇A";
        }
        else if(percent >= 70){
            rank = "🥈B";
        }
        else if(percent >= 60){
            rank = "🥉C";
        }
        else{
            rank = "D";
        }

        document.getElementById("rank").innerHTML =
        "Rank : " + rank;
    }

    let wrongList = document.getElementById("wrong-list");

    if (wrongAnswers.length === 0){

        wrongList.innerHTML =
        "<p style='color:lightgreen'>Perfect! No mistakes 👏</p>";

    }else {
        wrongList.innerHTML = "";

    wrongAnswers.forEach(item => {

        wrongList.innerHTML += `
        <div style="margin: 10px 0;padding:10px;border:1px solid #ccc;border-radius:px8;">
        <b>Question:</b> ${item.question}<br>
        <b>Your Answer:</b> ${item.yourAnswer}<br>
        <b>Correct:</b> ${item.correctAnswer}
        </div>
        `;
    });
   }

   let bestScore =
   localStorage.getItem(
    playerName + "_best"
   ) || 0;

   bestScore = Math.max(
    score,
    bestScore
   );

   localStorage.setItem(
    playerName + "_best",
    bestScore
   );

   document.getElementById("bestScore")
   .innerHTML =
   playerName +
   " Best: " +
   bestScore;

   if(gameMode === "time"){
    clearInterval(timer);
   }

   document.getElementById("bestScore")
   .innerHTML =
   playerName +
   " Best: " +
   bestScore;

   if(gameMode === "time"){

    console.log("ENDGAME NAME =", playerName);
    console.log("ENSGAME SCORE =", score);
    console.log(
        "LOCAL STORAGE NAME =",
    localStorage.getItem("playerName")
    );

    saveLeaderboard(
        localStorage.getItem("playerName"),
        score
    );

    console.log(
        "SAVE SCORE",
        localStorage.getItem("playerName"),
        score
    );
   }
}

function goMenu(){

    gameoverScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");

    let last =
    localStorage.getItem("lastScore") || 0;

    const lastScore =
document.getElementById("last-score");

if(lastScore){
    lastScore.innerHTML = last;
}

const highScore =
document.getElementById("high-score");

if(highScore){
    highScore.innerHTML =
    localStorage.getItem("highScore") || 0;
}
}

const highScore =
document.getElementById("high-score");

if(highScore){
    highScore.innerHTML =
    localStorage.getItem("highScore") || 0;
}

const level =
document.getElementById("level");

if(level){
    level.innerHTML =
    selectedLevel.toUpperCase();
}

localStorage.setItem(
    "bestScore",
    Math.max(
        score,
        Number(localStorage.getItem("bestScore")) || 0
    )
);

const bestScore =
document.getElementById("bestScore");

if(bestScore){
    bestScore.innerHTML =
    "Best Score : " +
    (localStorage.getItem("bestScore") || 0);
}


function login(){

    playerName = "Guest";

    localStorage.setItem(
        "playerName",
        playerName
    );

    startNormalGame();
}

function startGrammar(){

    category = "grammar";

    startGame();
}

function startKanji(){

    category = "kanji";

    startGame();
}

function startReading(){

    category = "reading";

    startGame();

}

function startTimeAttack(){

    let playerName =
    localStorage.getItem("playerName");

    if(!playerName){

        alert(
            "Please set your player name first"
        );

        openSettings();

        return;
    }

    gameMode = "time";

    startGame();

}

function startNormalGame(){

    gameMode = "normal";

    clearInterval(timer);

    startGame();

}

async function saveLeaderboard(name, score){

    console.log(
        "saveLeaderboard()",
        name,
        score
    );

    document
    .getElementById("leaderboardModal")
    .classList
    .remove("hidden");

    const url = "https://script.google.com/macros/s/AKfycbwvZIuKC7kF_PXcxpoN0xiC3rCXA1T7OuNkE7W1ldijEzOtWZ95BvFLVXxgmZIs-1KP3w/exec";

    await fetch(url,{
        method : "POST",
        body : JSON.stringify({
            name : name,
            score : score
        })
    });

    const response =
    await fetch(url);

    const data =
    await response.json();

    let html = "";

    data.forEach((row,index) => {

        html += `
        <div>
        ${index+1}. ${row[0]}
        - ${row[1]}
        </div>
        `;
    });

    document
    .getElementById("leaderboardList")
    .innerHTML = html;

}


async function showLeaderboard(){

    document
      .getElementById("leaderboardModal")
      .classList
      .remove("hidden");

    const url =
      "https://script.google.com/macros/s/AKfycbwvZIuKC7kF_PXcxpoN0xiC3rCXA1T7OuNkE7W1ldijEzOtWZ95BvFLVXxgmZIs-1KP3w/exec";

    const response =
      await fetch(url);

    const data =
      await response.json();

    let html = "";

    data.forEach((row,index)=>{

        html += `
        <div>
            🥇 ${index + 1}. ${row[0]}
            <span>${row[1]}</span>
        </div>
        `;
    });

    document
      .getElementById("leaderboardList")
      .innerHTML = html;
}

function closeLeaderboardModal(){

    document
        .getElementById("leaderboardModal")
        .classList.add("hidden");
}

let showFurigana = true;

function toggleFurigana() {

    showFurigana = !showFurigana;

    document.body.classList.toggle(
        "hide-furigana"
    );

    const btn =
        document.getElementById(
            "furigana-btn"
        );

    if(btn){
        btn.textContent =
            showFurigana
            ? "ON"
            : "OFF";
    }

    showToast(
        showFurigana
        ? "📖 Furigana ON"
        : "🙈 Furigana OFF"
    );
}

function openDifficultyModal(category){

    selectedCategory = category;

    document.getElementById(
        "difficultyModal"
    ).style.display = "flex";

}

function closeDifficultyModal(category){
    document.getElementById("difficultyModal")
    .style.display = "none";
}

function selectDifficulty(level){

    console.log("เลือก", level);
    
    selectedLevel = level;
    difficulty = level;

    category = selectedCategory;
    closeDifficultyModal();
    startGame();
}

function openKanjiLevels(){

    document
    .getElementById("menu-screen")
    .classList.add("hidden");

    document.
    getElementById("kanji-level-screen")
    .classList.remove("hidden");

}

function selectKanjiLevel(level){
    selectedKanjiLevel = level;

    document
    .getElementById("kanji-level-screen")
    .classList.add("hidden");

    document.
    getElementById("kanji-type-screen")
    .classList.remove("hidden");

}

function selectKanjiType(type){

    selectedKanjiType = type;

    startKanjiGame();
}

function backToMenu(){

    document.querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });

    document
        .getElementById("menu-screen")
        .classList.remove("hidden");
        
    document
    .getElementById("settings-screen")
    ?.classList.add("hidden");
}

function backToLevel(){

    document
        .getElementById("kanji-type-screen")
        .classList.add("hidden");

    document
        .getElementById("kanji-level-screen")
        .classList.remove("hidden");

}

function startKanjiGame(){

    document.getElementById("kanji-type-screen")
    .classList.add("hidden")

    category = "kanji";

    difficulty = selectedKanjiLevel;

    startGame();
}

function shouldShowFurigana(){

    let mode =
        localStorage.getItem(
            "furiganaMode"
        ) || "auto";

    if(mode === "on"){
        return true;
    }

    if(mode === "off"){
        return false;
    }

    // AUTO

    return (
        selectedKanjiType === "vocabulary" ||
        selectedKanjiType === "context"
    );
}

function openSettings(){

    document
    .getElementById("menu-screen")
    .classList.add("hidden");

    document
    .getElementById("settings-screen")
    .classList.remove("hidden");

    document.getElementById(
        "playerNameInput"
    ).value =
    localStorage.getItem(
        "playerName"
    ) || "";

}


function closeSettings(){

    document
    .getElementById("settings-screen")
    .classList.add("hidden");

    menuScreen.classList.remove("hidden");
}

function setFurigana(mode){

    furiganaMode = mode;

    localStorage.setItem(
        "furiganaMode",
        mode
    );

    updateFuriganaButtons();
}

function updateFuriganaButtons(){

    const onBtn =
        document.getElementById("furigana-on");

    const offBtn =
        document.getElementById("furigana-off");

    if(!onBtn || !offBtn){
        return;
    }

    if(furiganaMode === "on"){

        onBtn.classList.add("active");
        offBtn.classList.remove("active");

    }else{

        offBtn.classList.add("active");
        onBtn.classList.remove("active");

    }
}

function openGrammarLevels(){

    document
    .getElementById("menu-screen")
    .classList.add("hidden");

    document
    .getElementById("grammar-level-screen")
    .classList.remove("hidden");

}

function selectGrammarLevel(level){

    selectedGrammarLevel = level;
    difficulty = level;

    document
    .getElementById("grammar-level-screen")
    .classList.add("hidden");

    startGrammar();

}

function openReadingLevels(){

    document
    .getElementById("menu-screen")
    .classList.add("hidden");

    document
    .getElementById("reading-type-screen")
    .classList.add("hidden");

    document
    .getElementById("reading-level-screen")
    .classList.remove("hidden");

}


function removeFurigana(text){

    return text
        .replace(
            /<rt>.*?<\/rt>/g,
            ""
        )
        .replace(
            /<\/?ruby>/g,
            ""
        );
}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [array[i], array[j]] =
        [array[j], array[i]];
    }

    return array;
}

const themeSelect =
document.getElementById("themeSelect");

if(themeSelect){

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme){
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }

    themeSelect.addEventListener(
        "change",
        () => {

            const theme =
                themeSelect.value;

            localStorage.setItem(
                "theme",
                theme
            );

            applyTheme(theme);
        }
    );
}


function setTheme(theme){

    localStorage.setItem(
        "theme",
        theme
    );

    applyTheme(theme);

    showToast(
        "🎨 Theme: " + theme
    );
}

function applyTheme(theme){

    switch(theme){

        case "blue":

            document.body.style.background =
            "radial-gradient(circle at top,#0d2450,#05122d 70%)";

            break;

        case "sakura":

            document.body.style.background =
            "linear-gradient(135deg,#ff9a9e,#fad0c4)";

            break;

        case "sunset":

            document.body.style.background =
            "linear-gradient(135deg,#ff7e5f,#feb47b)";

            break;

        case "forest":

            document.body.style.background =
            "linear-gradient(135deg,#134e5e,#71b280)";

            break;

        case "dark":

            document.body.style.background =
            "linear-gradient(135deg,#232526,#414345)";

            break;
    }
}

window.addEventListener(
    "load",
    function(){

        updateFuriganaButtons();
    }
);

function selectReadingLevel(level){

    selectedReadingLevel = level;

    document
        .getElementById("reading-level-screen")
        .classList.add("hidden");

    document
        .getElementById("reading-type-screen")
        .classList.remove("hidden");

    const box =
        document.getElementById(
            "reading-type-buttons"
        );

    box.innerHTML = "";

    if(level === "n5"){

        box.innerHTML += `
        <button onclick="
        selectReadingType('short')
        ">
        短文
        </button>
        `;
    }

    else if(level === "n4"){

        box.innerHTML += `
        <button onclick="
        selectReadingType('short')
        ">
        短文
        </button>

        <button onclick="
        selectReadingType('medium')
        ">
        中文
        </button>
        `;
    }

    else{

        box.innerHTML += `
        <button onclick="
        selectReadingType('short')
        ">
        短文
        </button>

        <button onclick="
        selectReadingType('medium')
        ">
        中文
        </button>

        <button onclick="
        selectReadingType('long')
        ">
        長文
        </button>
        `;
    }
}

function selectReadingType(type){
    selectedReadingType = type;

    console.log("LEVEL =", selectedReadingLevel);
    console.log("TYPE =", selectedReadingType);

    document
    .getElementById("reading-type-screen")
    .classList.add("hidden");

    startReading();
}

function loadData(path){
    const s = document.createElement("script");
    s.src = path;
    document.body.appendChild(s);
}

function savePlayerName(){

    const name =
    document.getElementById(
        "playerNameInput"
    ).value.trim();

    if(name === ""){
        showToast("Please enter a name");
        return;
    }

    localStorage.setItem(
        "playerName",
        name
    );

    showToast("Name Saved");

}

function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
