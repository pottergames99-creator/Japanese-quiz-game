const easyWords = [
{ kanji:"犬", hiragana:"いぬ" },
{ kanji:"猫", hiragana:"ねこ" },
{ kanji:"鳥", hiragana:"とり" },
{ kanji:"魚", hiragana:"さかな" },
{ kanji:"山", hiragana:"やま" },
{ kanji:"川", hiragana:"かわ" },
{ kanji:"海", hiragana:"うみ" },
{ kanji:"空", hiragana:"そら" },
{ kanji:"雨", hiragana:"あめ" },
{ kanji:"雪", hiragana:"ゆき" },
{ kanji:"火", hiragana:"ひ" },
{ kanji:"水", hiragana:"みず" },
{ kanji:"木", hiragana:"き" },
{ kanji:"金", hiragana:"きん" },
{ kanji:"土", hiragana:"つち" },
{ kanji:"花", hiragana:"はな" },
{ kanji:"草", hiragana:"くさ" },
{ kanji:"石", hiragana:"いし" },
{ kanji:"車", hiragana:"くるま" },
{ kanji:"駅", hiragana:"えき" },
{ kanji:"家", hiragana:"いえ" },
{ kanji:"学校", hiragana:"がっこう" },
{ kanji:"先生", hiragana:"せんせい" },
{ kanji:"学生", hiragana:"がくせい" },
{ kanji:"友達", hiragana:"ともだち" },
{ kanji:"本", hiragana:"ほん" },
{ kanji:"電車", hiragana:"でんしゃ" },
{ kanji:"時計", hiragana:"とけい" },
{ kanji:"電話", hiragana:"でんわ" },
{ kanji:"食べ物", hiragana:"たべもの" }
];

const normalWords = [
{ kanji:"練習", hiragana:"れんしゅう" },
{ kanji:"宿題", hiragana:"しゅくだい" },
{ kanji:"病院", hiragana:"びょういん" },
{ kanji:"銀行", hiragana:"ぎんこう" },
{ kanji:"郵便局", hiragana:"ゆうびんきょく" },
{ kanji:"買い物", hiragana:"かいもの" },
{ kanji:"料理", hiragana:"りょうり" },
{ kanji:"洗濯", hiragana:"せんたく" },
{ kanji:"掃除", hiragana:"そうじ" },
{ kanji:"運動", hiragana:"うんどう" },
{ kanji:"旅行", hiragana:"りょこう" },
{ kanji:"音楽", hiragana:"おんがく" },
{ kanji:"映画", hiragana:"えいが" },
{ kanji:"写真", hiragana:"しゃしん" },
{ kanji:"仕事", hiragana:"しごと" },
{ kanji:"会議", hiragana:"かいぎ" },
{ kanji:"経験", hiragana:"けいけん" },
{ kanji:"試験", hiragana:"しけん" },
{ kanji:"季節", hiragana:"きせつ" },
{ kanji:"天気", hiragana:"てんき" },
{ kanji:"熱帯", hiragana:"ねったい" },
{ kanji:"花火", hiragana:"はなび" },
{ kanji:"神様", hiragana:"かみさま" },
{ kanji:"世界", hiragana:"せかい" },
{ kanji:"文化", hiragana:"ぶんか" },
{ kanji:"歴史", hiragana:"れきし" },
{ kanji:"地図", hiragana:"ちず" },
{ kanji:"習慣", hiragana:"しゅうかん" },
{ kanji:"理由", hiragana:"りゆう" },
{ kanji:"約束", hiragana:"やくそく" }
];

const hardWords = [
{ kanji:"環境", hiragana:"かんきょう" },
{ kanji:"責任", hiragana:"せきにん" },
{ kanji:"情報", hiragana:"じょうほう" },
{ kanji:"経済", hiragana:"けいざい" },
{ kanji:"政治", hiragana:"せいじ" },
{ kanji:"技術", hiragana:"ぎじゅつ" },
{ kanji:"科学", hiragana:"かがく" },
{ kanji:"研究", hiragana:"けんきゅう" },
{ kanji:"教育", hiragana:"きょういく" },
{ kanji:"国際", hiragana:"こくさい" },
{ kanji:"社会", hiragana:"しゃかい" },
{ kanji:"企業", hiragana:"きぎょう" },
{ kanji:"管理", hiragana:"かんり" },
{ kanji:"資源", hiragana:"しげん" },
{ kanji:"開発", hiragana:"かいはつ" },
{ kanji:"貿易", hiragana:"ぼうえき" },
{ kanji:"法律", hiragana:"ほうりつ" },
{ kanji:"憲法", hiragana:"けんぽう" },
{ kanji:"制度", hiragana:"せいど" },
{ kanji:"組織", hiragana:"そしき" },
{ kanji:"戦略", hiragana:"せんりゃく" },
{ kanji:"競争", hiragana:"きょうそう" },
{ kanji:"効果", hiragana:"こうか" },
{ kanji:"分析", hiragana:"ぶんせき" },
{ kanji:"改善", hiragana:"かいぜん" },
{ kanji:"協力", hiragana:"きょうりょく" },
{ kanji:"判断", hiragana:"はんだん" },
{ kanji:"挑戦", hiragana:"ちょうせん" },
{ kanji:"成長", hiragana:"せいちょう" },
{ kanji:"目標", hiragana:"もくひょう" }
];

let score = 0;
let questionCount = 0;
let maxQuestion = 10;

let currentWord;
let shuffledWords = [];
let words = [];

let difficulty = "normal";

let timeLeft = 10;
let timer;


const menuScreen =
document.getElementById("menu-screen");

const gameScreen =
document.getElementById("game-screen");

const gameoverScreen =
document.getElementById("gameover-screen");

function startGame(){

    questionCount = 0;
    score = 0;

    difficulty =
    document.getElementById("difficulty").value;

    if(difficulty === "easy"){
        words = easyWords;
        timeLeft = 20;
    }

    else if(difficulty === "normal"){
        words = normalWords;
        timeLeft = 15;
    }

    else if(difficulty === "hard"){
        words = hardWords;
        timeLeft = 10;
    }

    else{
        timeLeft = 10;
    }

    shuffledWords =
    [...words].sort(() => Math.random() - 0.5);

    menuScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    document.getElementById("progress").innerHTML =
    "Question 1 /" + maxQuestion;

    document.getElementById("score").innerHTML =
    "คะแนน: 0";

    document.getElementById("timer").innerHTML =
    "time: " + timeLeft;

    showQuestion();

    startTimer();
}

function startTimer(){

    clearInterval(timer);

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerHTML =
        "time: " + timeLeft;

        if(timeLeft <= 0){
            endGame();
        }

    },1000);
}

function showQuestion(){

    currentWord =
    shuffledWords[questionCount];

    document.getElementById("question").innerHTML =
    currentWord.kanji;

    let answers =
    [currentWord.hiragana];

    while(answers.length < 4){

        let random =
        words[Math.floor(Math.random()*words.length)]
        .hiragana;

        if(!answers.includes(random)){
            answers.push(random);
        }
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

    if(choice === currentWord.hiragana){

        score ++;

        msg.innerHTML = "⭕ Correct!"
        msg.className = "correct";

    } else {

        msg.innerHTML = "😆 Wrong!";
        msg.className = "wrong";
    }

    document.getElementById("score").innerHTML =
    "score: " + score;

    if(difficulty === "easy"){
        words = easyWords;
        timeLeft = 20;
    }

    else if(difficulty === "normal"){
        words = normalWords;
        timeLeft = 15;
    }

    else if(difficulty === "hard"){
        words = hardWords;
        timeLeft = 10;
    }

    else{
        timeLeft = 10;
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

    if(questionCount >= maxQuestion){
        endGame();
        return;
    }

    document.getElementById("progress").innerHTML =
    "Question" +
    (questionCount + 1) +
    "/" +
    maxQuestion;

    showQuestion();
}

function endGame(){

    clearInterval(timer);

    gameScreen.classList.add("hidden");
    gameoverScreen.classList.remove("hidden");

    document.getElementById("final-score")
    .innerHTML = score;

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
    }
}

function goMenu(){

    gameoverScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");

    let last =
    localStorage.getItem("lastScore") || 0;

    document.getElementById("last-score")
    .innerHTML = last;

    document.getElementById("high-score")
    .innerHTML =
    localStorage.getItem("highScore") || 0;
}

document.getElementById("high-score")
.innerHTML =
localStorage.getItem("highScore") || 0;