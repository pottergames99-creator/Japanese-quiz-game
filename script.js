const n5Words = [
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

const n4Words = [
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

const n3Words = [
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
{ kanji:"目標", hiragana:"もくひょう" },
{ kanji:"状況", hiragana:"じょうきょう" }
];

const n2Words = [
{ kanji:"経営", hiragana:"けいえい" },
{ kanji:"投資", hiragana:"とうし" },
{ kanji:"需要", hiragana:"じゅよう" },
{ kanji:"供給", hiragana:"きょうきゅう" },
{ kanji:"景気", hiragana:"けいき" },
{ kanji:"失業", hiragana:"しつぎょう" },
{ kanji:"雇用", hiragana:"こよう" },
{ kanji:"収入", hiragana:"しゅうにゅう" },
{ kanji:"支出", hiragana:"ししゅつ" },
{ kanji:"税金", hiragana:"ぜいきん" },
{ kanji:"保険", hiragana:"ほけん" },
{ kanji:"制度", hiragana:"せいど" },
{ kanji:"政策", hiragana:"せいさく" },
{ kanji:"議論", hiragana:"ぎろん" },
{ kanji:"世論", hiragana:"よろん" },
{ kanji:"現象", hiragana:"げんしょう" },
{ kanji:"原因", hiragana:"げんいん" },
{ kanji:"結果", hiragana:"けっか" },
{ kanji:"影響", hiragana:"えいきょう" },
{ kanji:"対策", hiragana:"たいさく" },
{ kanji:"防止", hiragana:"ぼうし" },
{ kanji:"解決", hiragana:"かいけつ" },
{ kanji:"課題", hiragana:"かだい" },
{ kanji:"資料", hiragana:"しりょう" },
{ kanji:"報告", hiragana:"ほうこく" },
{ kanji:"発表", hiragana:"はっぴょう" },
{ kanji:"評価", hiragana:"ひょうか" },
{ kanji:"観察", hiragana:"かんさつ" },
{ kanji:"協定", hiragana:"きょうてい" },
{ kanji:"維持", hiragana:"いじ" }
];

const n1Words = [
{ kanji:"概念", hiragana:"がいねん" },
{ kanji:"抽象", hiragana:"ちゅうしょう" },
{ kanji:"理論", hiragana:"りろん" },
{ kanji:"仮説", hiragana:"かせつ" },
{ kanji:"検証", hiragana:"けんしょう" },
{ kanji:"根拠", hiragana:"こんきょ" },
{ kanji:"主張", hiragana:"しゅちょう" },
{ kanji:"反論", hiragana:"はんろん" },
{ kanji:"矛盾", hiragana:"むじゅん" },
{ kanji:"妥当", hiragana:"だとう" },
{ kanji:"慣習", hiragana:"かんしゅう" },
{ kanji:"慣例", hiragana:"かんれい" },
{ kanji:"風潮", hiragana:"ふうちょう" },
{ kanji:"倫理", hiragana:"りんり" },
{ kanji:"哲学", hiragana:"てつがく" },
{ kanji:"心理", hiragana:"しんり" },
{ kanji:"価値観", hiragana:"かちかん" },
{ kanji:"先入観", hiragana:"せんにゅうかん" },
{ kanji:"認識", hiragana:"にんしき" },
{ kanji:"本質", hiragana:"ほんしつ" },
{ kanji:"視点", hiragana:"してん" },
{ kanji:"観点", hiragana:"かんてん" },
{ kanji:"枠組み", hiragana:"わくぐみ" },
{ kanji:"動向", hiragana:"どうこう" },
{ kanji:"傾向", hiragana:"けいこう" },
{ kanji:"実態", hiragana:"じったい" },
{ kanji:"背景", hiragana:"はいけい" },
{ kanji:"過程", hiragana:"かてい" },
{ kanji:"展望", hiragana:"てんぼう" },
{ kanji:"究極", hiragana:"きゅうきょく" }
];

const vocabularyN5 = [
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
{ kanji:"自転車", hiragana:"じてんしゃ" },
{ kanji:"店", hiragana:"みせ" },
{ kanji:"病院", hiragana:"びょういん" },

{ kanji:"朝", hiragana:"あさ" },
{ kanji:"昼", hiragana:"ひる" },
{ kanji:"夜", hiragana:"よる" },
{ kanji:"今日", hiragana:"きょう" },
{ kanji:"明日", hiragana:"あした" },

{ kanji:"昨日", hiragana:"きのう" },
{ kanji:"時間", hiragana:"じかん" },
{ kanji:"年", hiragana:"とし" },
{ kanji:"月", hiragana:"つき" },
{ kanji:"日", hiragana:"ひ" },

{ kanji:"人", hiragana:"ひと" },
{ kanji:"子供", hiragana:"こども" },
{ kanji:"男", hiragana:"おとこ" },
{ kanji:"女", hiragana:"おんな" },
{ kanji:"名前", hiragana:"なまえ" },

{ kanji:"国", hiragana:"くに" },
{ kanji:"日本", hiragana:"にほん" },
{ kanji:"言葉", hiragana:"ことば" },
{ kanji:"電話", hiragana:"でんわ" },
{ kanji:"仕事", hiragana:"しごと" }
];

const vocabularyN4 = [
{ kanji:"学校", hiragana:"がっこう" },
{ kanji:"先生", hiragana:"せんせい" },
{ kanji:"学生", hiragana:"がくせい" },
{ kanji:"病院", hiragana:"びょういん" },
{ kanji:"銀行", hiragana:"ぎんこう" },
{ kanji:"郵便局", hiragana:"ゆうびんきょく" },
{ kanji:"会社", hiragana:"かいしゃ" },
{ kanji:"仕事", hiragana:"しごと" },
{ kanji:"電車", hiragana:"でんしゃ" },
{ kanji:"駅", hiragana:"えき" },
{ kanji:"飛行機", hiragana:"ひこうき" },
{ kanji:"旅行", hiragana:"りょこう" },
{ kanji:"写真", hiragana:"しゃしん" },
{ kanji:"音楽", hiragana:"おんがく" },
{ kanji:"映画", hiragana:"えいが" },
{ kanji:"料理", hiragana:"りょうり" },
{ kanji:"運動", hiragana:"うんどう" },
{ kanji:"試験", hiragana:"しけん" },
{ kanji:"宿題", hiragana:"しゅくだい" },
{ kanji:"会議", hiragana:"かいぎ" },
{ kanji:"経験", hiragana:"けいけん" },
{ kanji:"文化", hiragana:"ぶんか" },
{ kanji:"歴史", hiragana:"れきし" },
{ kanji:"世界", hiragana:"せかい" },
{ kanji:"地図", hiragana:"ちず" },
{ kanji:"理由", hiragana:"りゆう" },
{ kanji:"習慣", hiragana:"しゅうかん" },
{ kanji:"季節", hiragana:"きせつ" },
{ kanji:"天気", hiragana:"てんき" },
{ kanji:"花火", hiragana:"はなび" }
];

const vocabularyN3 = [
{ kanji:"環境", hiragana:"かんきょう" },
{ kanji:"情報", hiragana:"じょうほう" },
{ kanji:"経済", hiragana:"けいざい" },
{ kanji:"技術", hiragana:"ぎじゅつ" },
{ kanji:"研究", hiragana:"けんきゅう" },
{ kanji:"教育", hiragana:"きょういく" },
{ kanji:"社会", hiragana:"しゃかい" },
{ kanji:"企業", hiragana:"きぎょう" },
{ kanji:"管理", hiragana:"かんり" },
{ kanji:"資源", hiragana:"しげん" },
{ kanji:"開発", hiragana:"かいはつ" },
{ kanji:"貿易", hiragana:"ぼうえき" },
{ kanji:"法律", hiragana:"ほうりつ" },
{ kanji:"制度", hiragana:"せいど" },
{ kanji:"組織", hiragana:"そしき" },
{ kanji:"競争", hiragana:"きょうそう" },
{ kanji:"効果", hiragana:"こうか" },
{ kanji:"分析", hiragana:"ぶんせき" },
{ kanji:"改善", hiragana:"かいぜん" },
{ kanji:"協力", hiragana:"きょうりょく" },
{ kanji:"判断", hiragana:"はんだん" },
{ kanji:"挑戦", hiragana:"ちょうせん" },
{ kanji:"目標", hiragana:"もくひょう" },
{ kanji:"責任", hiragana:"せきにん" },
{ kanji:"提案", hiragana:"ていあん" },
{ kanji:"状況", hiragana:"じょうきょう" },
{ kanji:"原因", hiragana:"げんいん" },
{ kanji:"結果", hiragana:"けっか" },
{ kanji:"連絡", hiragana:"れんらく" },
{ kanji:"説明", hiragana:"せつめい" }
];

const vocabularyN2 = [
{ kanji:"方針", hiragana:"ほうしん" },
{ kanji:"現象", hiragana:"げんしょう" },
{ kanji:"傾向", hiragana:"けいこう" },
{ kanji:"観点", hiragana:"かんてん" },
{ kanji:"手段", hiragana:"しゅだん" },
{ kanji:"対策", hiragana:"たいさく" },
{ kanji:"影響", hiragana:"えいきょう" },
{ kanji:"需要", hiragana:"じゅよう" },
{ kanji:"供給", hiragana:"きょうきゅう" },
{ kanji:"統計", hiragana:"とうけい" },
{ kanji:"評価", hiragana:"ひょうか" },
{ kanji:"基準", hiragana:"きじゅん" },
{ kanji:"機能", hiragana:"きのう" },
{ kanji:"構造", hiragana:"こうぞう" },
{ kanji:"資産", hiragana:"しさん" },
{ kanji:"利益", hiragana:"りえき" },
{ kanji:"損失", hiragana:"そんしつ" },
{ kanji:"契約", hiragana:"けいやく" },
{ kanji:"証拠", hiragana:"しょうこ" },
{ kanji:"制度", hiragana:"せいど" },
{ kanji:"維持", hiragana:"いじ" },
{ kanji:"拡大", hiragana:"かくだい" },
{ kanji:"縮小", hiragana:"しゅくしょう" },
{ kanji:"改革", hiragana:"かいかく" },
{ kanji:"運営", hiragana:"うんえい" },
{ kanji:"組合", hiragana:"くみあい" },
{ kanji:"政策", hiragana:"せいさく" },
{ kanji:"外交", hiragana:"がいこう" },
{ kanji:"課題", hiragana:"かだい" },
{ kanji:"実績", hiragana:"じっせき" }
];

const vocabularyN1 = [
{ kanji:"概念", hiragana:"がいねん" },
{ kanji:"抽象", hiragana:"ちゅうしょう" },
{ kanji:"理論", hiragana:"りろん" },
{ kanji:"哲学", hiragana:"てつがく" },
{ kanji:"倫理", hiragana:"りんり" },
{ kanji:"価値観", hiragana:"かちかん" },
{ kanji:"認識", hiragana:"にんしき" },
{ kanji:"本質", hiragana:"ほんしつ" },
{ kanji:"仮説", hiragana:"かせつ" },
{ kanji:"検証", hiragana:"けんしょう" },
{ kanji:"議論", hiragana:"ぎろん" },
{ kanji:"主張", hiragana:"しゅちょう" },
{ kanji:"根拠", hiragana:"こんきょ" },
{ kanji:"妥当", hiragana:"だとう" },
{ kanji:"矛盾", hiragana:"むじゅん" },
{ kanji:"観察", hiragana:"かんさつ" },
{ kanji:"洞察", hiragana:"どうさつ" },
{ kanji:"側面", hiragana:"そくめん" },
{ kanji:"要因", hiragana:"よういん" },
{ kanji:"過程", hiragana:"かてい" },
{ kanji:"展望", hiragana:"てんぼう" },
{ kanji:"意義", hiragana:"いぎ" },
{ kanji:"枠組み", hiragana:"わくぐみ" },
{ kanji:"秩序", hiragana:"ちつじょ" },
{ kanji:"均衡", hiragana:"きんこう" },
{ kanji:"革新", hiragana:"かくしん" },
{ kanji:"普遍", hiragana:"ふへん" },
{ kanji:"顕著", hiragana:"けんちょ" },
{ kanji:"潜在", hiragana:"せんざい" },
{ kanji:"妥協", hiragana:"だきょう" }
];

const grammarN5 = [
 { question:"学校＿＿行きます", answer:"へ" },
 { question:"りんご＿＿食べます", answer:"を" },
 { question:"友達＿＿会いました", answer:"に" },
 { question:"日本＿＿来ました", answer:"から" },
 { question:"机＿＿本があります", answer:"の上に" }
];

const grammarN4 = [
{ question:"毎日日本語___勉強しています", answer:"を" },
{ question:"学校___行きます", answer:"へ" },
{ question:"友達___会いました", answer:"に" },
{ question:"日本___来ました", answer:"から" },
{ question:"本___読みました", answer:"を" },
{ question:"ご飯を食べる___テレビを見ます", answer:"前に" },
{ question:"勉強した___寝ます", answer:"あとで" },
{ question:"雨が降った___行きません", answer:"ので" },
{ question:"時間がない___急ぎましょう", answer:"から" },
{ question:"日本へ行く___お金を貯めています", answer:"ために" },
{ question:"疲れている___休みます", answer:"ので" },
{ question:"毎朝起きる___顔を洗います", answer:"と" },
{ question:"宿題をしない___遊びました", answer:"で" },
{ question:"彼は歌い___踊ります", answer:"ながら" },
{ question:"駅に着い___電話してください", answer:"たら" },
{ question:"寒い___コートを着ます", answer:"ので" },
{ question:"日曜日___買い物に行きます", answer:"に" },
{ question:"友達___映画を見ました", answer:"と" },
{ question:"仕事が終わっ___帰ります", answer:"たら" },
{ question:"日本語が上手に___たいです", answer:"なり" }
];

const grammarN3 = [
{ question:"日本語を勉強する___日本へ来ました", answer:"ために" },
{ question:"雨が降っている___出かけます", answer:"のに" },
{ question:"時間がない___急ぎましょう", answer:"ので" },
{ question:"先生に___宿題を出した", answer:"よって" },
{ question:"疲れている___休みたい", answer:"ので" },
{ question:"彼は学生___働いている", answer:"ながら" },
{ question:"寝る___歯を磨く", answer:"前に" },
{ question:"食事___映画を見た", answer:"のあとで" },
{ question:"駅に着く___電話してください", answer:"たら" },
{ question:"勉強した___試験に合格した", answer:"おかげで" }
];

const grammarN2 = [
{ question:"彼は行く___行かない", answer:"ともかく" },
{ question:"忙しい___参加した", answer:"にもかかわらず" },
{ question:"説明する___理解できない", answer:"にしては" },
{ question:"彼の話は信じる___", answer:"に値する" },
{ question:"この仕事は難しい___面白い", answer:"反面" },
{ question:"努力した___成功した", answer:"末に" },
{ question:"事故が起こる___注意してください", answer:"恐れがある" },
{ question:"勉強する___結果が出る", answer:"につれて" },
{ question:"彼は帰る___寝てしまった", answer:"なり" },
{ question:"試験が終わる___遊びに行った", answer:"や否や" }
];

const grammarN1 = [
{ question:"彼の実力は認める___", answer:"にかたくない" },
{ question:"努力なくして成功___", answer:"ありえない" },
{ question:"彼の態度は許す___", answer:"にたえない" },
{ question:"危険を承知の___挑戦する", answer:"うえで" },
{ question:"失敗した___やり直せばいい", answer:"までだ" },
{ question:"彼の説明は理解し___", answer:"かねる" },
{ question:"結果のいかん___責任を負う", answer:"によらず" },
{ question:"彼の行動は目に___", answer:"あまる" },
{ question:"努力する___成功できない", answer:"ものでもない" },
{ question:"彼が犯人でない___ない", answer:"とも限ら" }
];


let score = 0;
let questionCount = 0;
let maxQuestion = 10;

let currentWord;
let shuffledWords = [];
let words = [];

let difficulty = "n5";
let category = "kanji";

let timeLeft = 10;
let timer;

let wrongAnswers = [];


const menuScreen =
document.getElementById("menu-screen");

const gameScreen =
document.getElementById("game-screen");

const gameoverScreen =
document.getElementById("gameover-screen");

let selectedLevel = "n5"

function startGame(){

    questionCount = 0;
    score = 0;

    wrongAnswers = [];
    
    selectedLevel =
    document.getElementById("difficulty").value;
    difficulty =
    document.getElementById("difficulty").value;
    category =
    document.getElementById("category").value;


    if(category === "kanji"){

    if(difficulty === "n5"){
        words = n5Words;
        timeLeft = 20;
    }

    else if(difficulty === "n4"){
        words = n4Words;
        timeLeft = 15;
    }

    else if(difficulty === "n3"){
        words = n3Words;
        timeLeft = 12;
    }

    else if(difficulty === "n2"){
        words = n2Words;
        timeLeft = 10
    }

    else if(difficulty === "n1"){
        words = n1Words;
        timeLeft = 8;
    }

}

    else if(category === "vocabulary"){

        if(difficulty === "n5"){
            words = vocabularyN5
            timeLeft = 20;
        }

        else if(difficulty === "n4"){
            words = vocabularyN4
            timeLeft = 15;
        }

        else if(difficulty === "n3"){
            words = vocabularyN3
            timeLeft = 13;
        }

        else if(difficulty === "n2"){
            words = vocabularyN2
            timeLeft = 10;
        }

        else if(difficulty === "n1"){
            words = vocabularyN1
            timeLeft = 9;
        }
    }

    else if(category === "grammar"){
        
        if(difficulty === "n5"){
            words = grammarN5
            timeLeft = 20;
        }

        else if(difficulty === "n4"){
            words = grammarN4
            timeLeft = 15;
        }

        else if(difficulty === "n3"){
            words = grammarN3
            timeLeft = 13;
        }

        else if(difficulty === "n2"){
            words = grammarN2
            timeLeft = 10;
        }

        else if(difficulty === "n1"){
            words = grammarN1
            timeLeft = 9;
        }
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

    let percent =
    (questionCount / maxQuestion) * 100;

    document.getElementById("progressBar")
    .style.width = percent + "%";

    if(questionCount >= shuffledWords.length){
        endGame();
        return;
    }

    currentWord =
    shuffledWords[questionCount];

    if(!currentWord){
        endGame();
        return;
    }

    if(category === "vocabulary"){

    document.getElementById("question").innerHTML =
    currentWord.hiragana;

    }else{

    document.getElementById("question").innerHTML =
    currentWord.question || currentWord.kanji;

    }

    let answers = [];

    if(category === "vocabulary"){

    answers.push(currentWord.kanji);

    }else{

    answers.push(
        currentWord.answer || currentWord.hiragana
    );

    }


    while(answers.length < 4){

        let randomWord =
        words[Math.floor(Math.random()*words.length)];
        let random;

        if(category === "vocabulary"){

        random = randomWord.kanji;

        }else{

        random =
        randomWord.answer || randomWord.hiragana;

        }
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

    let correctAnswer;

    if(category === "vocabulary"){
    correctAnswer = currentWord.kanji;
    }
    else if(category === "grammar"){
    correctAnswer = currentWord.answer;
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

    if(category === "kanji"){
      if(difficulty === "n5"){
        words = n5Words;
        timeLeft = 20;
    }

    else if(difficulty === "n4"){
        words = n4Words;
        timeLeft = 15;
    }

    else if(difficulty === "n3"){
        words = n3Words;
        timeLeft = 12;
    }

    else if(difficulty === "n2"){
        words = n2Words;
        timeLeft = 10
    }

    else if(difficulty === "n1"){
        words = n1Words;
        timeLeft = 8;
    }

}

else if(category === "vocabulary"){

        if(difficulty === "n5"){
            words = vocabularyN5
            timeLeft = 20;
        }

        else if(difficulty === "n4"){
            words = vocabularyN4
            timeLeft = 15;
        }

        else if(difficulty === "n3"){
            words = vocabularyN3
            timeLeft = 13;
        }

        else if(difficulty === "n2"){
            words = vocabularyN2
            timeLeft = 10;
        }

        else if(difficulty === "n1"){
            words = vocabularyN1
            timeLeft = 9;
        }
    }

else if(category === "grammar"){
        
        if(difficulty === "n5"){
            words = grammarN5
            timeLeft = 20;
        }

        else if(difficulty === "n4"){
            words = grammarN4
            timeLeft = 15;
        }

        else if(difficulty === "n3"){
            words = grammarN3
            timeLeft = 13;
        }

        else if(difficulty === "n2"){
            words = grammarN2
            timeLeft = 10;
        }

        else if(difficulty === "n1"){
            words = grammarN1
            timeLeft = 9;
        }
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
        .innerHTML = "FALL";
    }

    document.getElementById("percent")
    .innerHTML =
    percent + "%";

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

    let wrongList = document.getElementById("wrong-list");

    if (wrongAnswers.length === 0){

        wrongList.innerHTML =
        "<p style=`color:ligthgreen`>Perfect! No mistakes 👏</p>";

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
}

function goMenu(){

    gameoverScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
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

console.log(difficulty);
document.getElementById("level")
.innerHTML = selectedLevel.toUpperCase();

localStorage.setItem(
    "bestScore",
    Math.max(
        score,
        localStorage.getItem("bestScore") || 0
    )
);

document.getElementById("bestScore")
.innerHTML =
"Best Score: " +
(localStorage.getItem("bestScore")) || 0;