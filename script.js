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
    { kanji:"自転車", hiragana:"じてんしゃ" },
    { kanji:"店", hiragana:"みせ" },
    { kanji:"病院", hiragana:"びょういん" },

    { kanji:"会社", hiragana:"かいしゃ" },
    { kanji:"銀行", hiragana:"ぎんこう" },
    { kanji:"郵便局", hiragana:"ゆうびんきょく" },
    { kanji:"公園", hiragana:"こうえん" },
    { kanji:"部屋", hiragana:"へや" },

    { kanji:"机", hiragana:"つくえ" },
    { kanji:"椅子", hiragana:"いす" },
    { kanji:"時計", hiragana:"とけい" },
    { kanji:"電話", hiragana:"でんわ" },
    { kanji:"新聞", hiragana:"しんぶん" },

    { kanji:"雑誌", hiragana:"ざっし" },
    { kanji:"映画", hiragana:"えいが" },
    { kanji:"音楽", hiragana:"おんがく" },
    { kanji:"料理", hiragana:"りょうり" },
    { kanji:"旅行", hiragana:"りょこう" },

    { kanji:"朝", hiragana:"あさ" },
    { kanji:"昼", hiragana:"ひる" },
    { kanji:"夜", hiragana:"よる" },
    { kanji:"今日", hiragana:"きょう" },
    { kanji:"明日", hiragana:"あした" },

    { kanji:"昨日", hiragana:"きのう" },
    { kanji:"一昨日", hiragana:"おととい" },
    { kanji:"明後日", hiragana:"あさって" },
    { kanji:"毎日", hiragana:"まいにち" },
    { kanji:"毎週", hiragana:"まいしゅう" },
    { kanji:"毎月", hiragana:"まいつき" },
    { kanji:"毎年", hiragana:"まいとし" },
    { kanji:"時間", hiragana:"じかん" },
    { kanji:"分", hiragana:"ふん" },
    { kanji:"半", hiragana:"はん" },

    { kanji:"今", hiragana:"いま" },
    { kanji:"午前", hiragana:"ごぜん" },
    { kanji:"午後", hiragana:"ごご" },
    { kanji:"月", hiragana:"つき" },
    { kanji:"年", hiragana:"とし" },
    { kanji:"週", hiragana:"しゅう" },
    { kanji:"春", hiragana:"はる" },
    { kanji:"夏", hiragana:"なつ" },
    { kanji:"秋", hiragana:"あき" },
    { kanji:"冬", hiragana:"ふゆ" },

    { kanji:"東", hiragana:"ひがし" },
    { kanji:"西", hiragana:"にし" },
    { kanji:"南", hiragana:"みなみ" },
    { kanji:"北", hiragana:"きた" },
    { kanji:"上", hiragana:"うえ" },
    { kanji:"下", hiragana:"した" },
    { kanji:"中", hiragana:"なか" },
    { kanji:"外", hiragana:"そと" },
    { kanji:"左", hiragana:"ひだり" },
    { kanji:"右", hiragana:"みぎ" },

    { kanji:"大", hiragana:"おお" },
    { kanji:"小", hiragana:"ちい" },
    { kanji:"高", hiragana:"たか" },
    { kanji:"安", hiragana:"やす" },
    { kanji:"新", hiragana:"あたら" },
    { kanji:"古", hiragana:"ふる" },
    { kanji:"長", hiragana:"なが" },
    { kanji:"短", hiragana:"みじか" },
    { kanji:"多", hiragana:"おお" },
    { kanji:"少", hiragana:"すく" },

    { kanji:"食べる", hiragana:"たべる" },
    { kanji:"飲む", hiragana:"のむ" },
    { kanji:"見る", hiragana:"みる" },
    { kanji:"聞く", hiragana:"きく" },
    { kanji:"話す", hiragana:"はなす" },
    { kanji:"読む", hiragana:"よむ" },
    { kanji:"書く", hiragana:"かく" },
    { kanji:"買う", hiragana:"かう" },
    { kanji:"行く", hiragana:"いく" },
    { kanji:"帰る", hiragana:"かえる" }
    
];

const n4Words = [
    { kanji:"練習", hiragana:"れんしゅう" },
    { kanji:"宿題", hiragana:"しゅくだい" },
    { kanji:"試験", hiragana:"しけん" },
    { kanji:"質問", hiragana:"しつもん" },
    { kanji:"答え", hiragana:"こたえ" },
    { kanji:"説明", hiragana:"せつめい" },
    { kanji:"意味", hiragana:"いみ" },
    { kanji:"約束", hiragana:"やくそく" },
    { kanji:"理由", hiragana:"りゆう" },
    { kanji:"都合", hiragana:"つごう" },

    { kanji:"必要", hiragana:"ひつよう" },
    { kanji:"便利", hiragana:"べんり" },
    { kanji:"不便", hiragana:"ふべん" },
    { kanji:"特別", hiragana:"とくべつ" },
    { kanji:"有名", hiragana:"ゆうめい" },
    { kanji:"大切", hiragana:"たいせつ" },
    { kanji:"簡単", hiragana:"かんたん" },
    { kanji:"複雑", hiragana:"ふくざつ" },
    { kanji:"自由", hiragana:"じゆう" },
    { kanji:"残念", hiragana:"ざんねん" },

    { kanji:"運転", hiragana:"うんてん" },
    { kanji:"出発", hiragana:"しゅっぱつ" },
    { kanji:"到着", hiragana:"とうちゃく" },
    { kanji:"利用", hiragana:"りよう" },
    { kanji:"案内", hiragana:"あんない" },
    { kanji:"準備", hiragana:"じゅんび" },
    { kanji:"整理", hiragana:"せいり" },
    { kanji:"片付け", hiragana:"かたづけ" },
    { kanji:"連絡", hiragana:"れんらく" },
    { kanji:"相談", hiragana:"そうだん" },

    { kanji:"経験", hiragana:"けいけん" },
    { kanji:"失敗", hiragana:"しっぱい" },
    { kanji:"成功", hiragana:"せいこう" },
    { kanji:"安心", hiragana:"あんしん" },
    { kanji:"心配", hiragana:"しんぱい" },
    { kanji:"感動", hiragana:"かんどう" },
    { kanji:"感謝", hiragana:"かんしゃ" },
    { kanji:"反対", hiragana:"はんたい" },
    { kanji:"賛成", hiragana:"さんせい" },
    { kanji:"我慢", hiragana:"がまん" },

    { kanji:"受付", hiragana:"うけつけ" },
    { kanji:"会議", hiragana:"かいぎ" },
    { kanji:"工場", hiragana:"こうじょう" },
    { kanji:"研究", hiragana:"けんきゅう" },
    { kanji:"技術", hiragana:"ぎじゅつ" },
    { kanji:"文化", hiragana:"ぶんか" },
    { kanji:"歴史", hiragana:"れきし" },
    { kanji:"世界", hiragana:"せかい" },
    { kanji:"社会", hiragana:"しゃかい" },
    { kanji:"未来", hiragana:"みらい" },

    { kanji:"環境", hiragana:"かんきょう" },
    { kanji:"交通", hiragana:"こうつう" },
    { kanji:"事故", hiragana:"じこ" },
    { kanji:"信号", hiragana:"しんごう" },
    { kanji:"駐車場", hiragana:"ちゅうしゃじょう" },
    { kanji:"道路", hiragana:"どうろ" },
    { kanji:"橋", hiragana:"はし" },
    { kanji:"建物", hiragana:"たてもの" },
    { kanji:"階段", hiragana:"かいだん" },
    { kanji:"玄関", hiragana:"げんかん" },

    { kanji:"台所", hiragana:"だいどころ" },
    { kanji:"冷蔵庫", hiragana:"れいぞうこ" },
    { kanji:"洗濯", hiragana:"せんたく" },
    { kanji:"掃除", hiragana:"そうじ" },
    { kanji:"料理人", hiragana:"りょうりにん" },
    { kanji:"材料", hiragana:"ざいりょう" },
    { kanji:"味", hiragana:"あじ" },
    { kanji:"甘い", hiragana:"あまい" },
    { kanji:"辛い", hiragana:"からい" },
    { kanji:"苦い", hiragana:"にがい" },

    { kanji:"熱心", hiragana:"ねっしん" },
    { kanji:"真面目", hiragana:"まじめ" },
    { kanji:"親切", hiragana:"しんせつ" },
    { kanji:"元気", hiragana:"げんき" },
    { kanji:"静か", hiragana:"しずか" },
    { kanji:"危険", hiragana:"きけん" },
    { kanji:"安全", hiragana:"あんぜん" },
    { kanji:"丁寧", hiragana:"ていねい" },
    { kanji:"十分", hiragana:"じゅうぶん" },
    { kanji:"普通", hiragana:"ふつう" },

    { kanji:"季節", hiragana:"きせつ" },
    { kanji:"天気予報", hiragana:"てんきよほう" },
    { kanji:"気温", hiragana:"きおん" },
    { kanji:"台風", hiragana:"たいふう" },
    { kanji:"風", hiragana:"かぜ" },
    { kanji:"雲", hiragana:"くも" },
    { kanji:"星", hiragana:"ほし" },
    { kanji:"光", hiragana:"ひかり" },
    { kanji:"音", hiragana:"おと" },
    { kanji:"声", hiragana:"こえ" },

    { kanji:"選ぶ", hiragana:"えらぶ" },
    { kanji:"続ける", hiragana:"つづける" },
    { kanji:"決める", hiragana:"きめる" },
    { kanji:"調べる", hiragana:"しらべる" },
    { kanji:"伝える", hiragana:"つたえる" },
    { kanji:"変わる", hiragana:"かわる" },
    { kanji:"増える", hiragana:"ふえる" },
    { kanji:"減る", hiragana:"へる" },
    { kanji:"残る", hiragana:"のこる" },
    { kanji:"戻る", hiragana:"もどる" }
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
    { kanji:"状況", hiragana:"じょうきょう" },

    { kanji:"原因", hiragana:"げんいん" },
    { kanji:"結果", hiragana:"けっか" },
    { kanji:"影響", hiragana:"えいきょう" },
    { kanji:"対策", hiragana:"たいさく" },
    { kanji:"解決", hiragana:"かいけつ" },
    { kanji:"課題", hiragana:"かだい" },
    { kanji:"提案", hiragana:"ていあん" },
    { kanji:"連絡", hiragana:"れんらく" },
    { kanji:"説明", hiragana:"せつめい" },
    { kanji:"発表", hiragana:"はっぴょう" },

    { kanji:"経験", hiragana:"けいけん" },
    { kanji:"成功", hiragana:"せいこう" },
    { kanji:"失敗", hiragana:"しっぱい" },
    { kanji:"関係", hiragana:"かんけい" },
    { kanji:"意見", hiragana:"いけん" },
    { kanji:"理解", hiragana:"りかい" },
    { kanji:"知識", hiragana:"ちしき" },
    { kanji:"能力", hiragana:"のうりょく" },
    { kanji:"活動", hiragana:"かつどう" },
    { kanji:"地域", hiragana:"ちいき" },

    { kanji:"現象", hiragana:"げんしょう" },
    { kanji:"傾向", hiragana:"けいこう" },
    { kanji:"評価", hiragana:"ひょうか" },
    { kanji:"観察", hiragana:"かんさつ" },
    { kanji:"比較", hiragana:"ひかく" },
    { kanji:"選択", hiragana:"せんたく" },
    { kanji:"条件", hiragana:"じょうけん" },
    { kanji:"基準", hiragana:"きじゅん" },
    { kanji:"内容", hiragana:"ないよう" },
    { kanji:"形式", hiragana:"けいしき" },

    { kanji:"特徴", hiragana:"とくちょう" },
    { kanji:"価値", hiragana:"かち" },
    { kanji:"目的", hiragana:"もくてき" },
    { kanji:"手段", hiragana:"しゅだん" },
    { kanji:"方針", hiragana:"ほうしん" },
    { kanji:"計画", hiragana:"けいかく" },
    { kanji:"実行", hiragana:"じっこう" },
    { kanji:"達成", hiragana:"たっせい" },
    { kanji:"成果", hiragana:"せいか" },
    { kanji:"進歩", hiragana:"しんぽ" },

    { kanji:"需要", hiragana:"じゅよう" },
    { kanji:"供給", hiragana:"きょうきゅう" },
    { kanji:"収入", hiragana:"しゅうにゅう" },
    { kanji:"支出", hiragana:"ししゅつ" },
    { kanji:"利益", hiragana:"りえき" },
    { kanji:"損失", hiragana:"そんしつ" },
    { kanji:"商品", hiragana:"しょうひん" },
    { kanji:"市場", hiragana:"しじょう" },
    { kanji:"価格", hiragana:"かかく" },
    { kanji:"消費", hiragana:"しょうひ" },

    { kanji:"交通", hiragana:"こうつう" },
    { kanji:"通信", hiragana:"つうしん" },
    { kanji:"運営", hiragana:"うんえい" },
    { kanji:"運用", hiragana:"うんよう" },
    { kanji:"設備", hiragana:"せつび" },
    { kanji:"資産", hiragana:"しさん" },
    { kanji:"資金", hiragana:"しきん" },
    { kanji:"協定", hiragana:"きょうてい" },
    { kanji:"契約", hiragana:"けいやく" },
    { kanji:"報告", hiragana:"ほうこく" },

    { kanji:"調査", hiragana:"ちょうさ" },
    { kanji:"統計", hiragana:"とうけい" },
    { kanji:"証明", hiragana:"しょうめい" },
    { kanji:"確認", hiragana:"かくにん" },
    { kanji:"予測", hiragana:"よそく" },
    { kanji:"期待", hiragana:"きたい" },
    { kanji:"信頼", hiragana:"しんらい" },
    { kanji:"維持", hiragana:"いじ" },
    { kanji:"拡大", hiragana:"かくだい" },
    { kanji:"縮小", hiragana:"しゅくしょう" }
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
    { kanji:"維持", hiragana:"いじ" },
    { kanji:"改善", hiragana:"かいぜん" },

    { kanji:"改革", hiragana:"かいかく" },
    { kanji:"組織", hiragana:"そしき" },
    { kanji:"制度", hiragana:"せいど" },
    { kanji:"責任", hiragana:"せきにん" },
    { kanji:"権利", hiragana:"けんり" },
    { kanji:"義務", hiragana:"ぎむ" },
    { kanji:"主張", hiragana:"しゅちょう" },
    { kanji:"根拠", hiragana:"こんきょ" },
    { kanji:"証拠", hiragana:"しょうこ" },
    { kanji:"判断", hiragana:"はんだん" },

    { kanji:"分析", hiragana:"ぶんせき" },
    { kanji:"比較", hiragana:"ひかく" },
    { kanji:"検討", hiragana:"けんとう" },
    { kanji:"調査", hiragana:"ちょうさ" },
    { kanji:"統計", hiragana:"とうけい" },
    { kanji:"実績", hiragana:"じっせき" },
    { kanji:"成果", hiragana:"せいか" },
    { kanji:"方針", hiragana:"ほうしん" },
    { kanji:"戦略", hiragana:"せんりゃく" },
    { kanji:"目標", hiragana:"もくひょう" },

    { kanji:"企業", hiragana:"きぎょう" },
    { kanji:"経済", hiragana:"けいざい" },
    { kanji:"金融", hiragana:"きんゆう" },
    { kanji:"市場", hiragana:"しじょう" },
    { kanji:"価格", hiragana:"かかく" },
    { kanji:"消費", hiragana:"しょうひ" },
    { kanji:"需要", hiragana:"じゅよう" },
    { kanji:"供給", hiragana:"きょうきゅう" },
    { kanji:"利益", hiragana:"りえき" },
    { kanji:"損失", hiragana:"そんしつ" },

    { kanji:"資産", hiragana:"しさん" },
    { kanji:"資金", hiragana:"しきん" },
    { kanji:"契約", hiragana:"けいやく" },
    { kanji:"交渉", hiragana:"こうしょう" },
    { kanji:"協力", hiragana:"きょうりょく" },
    { kanji:"競争", hiragana:"きょうそう" },
    { kanji:"開発", hiragana:"かいはつ" },
    { kanji:"技術", hiragana:"ぎじゅつ" },
    { kanji:"研究", hiragana:"けんきゅう" },
    { kanji:"情報", hiragana:"じょうほう" },

    { kanji:"通信", hiragana:"つうしん" },
    { kanji:"管理", hiragana:"かんり" },
    { kanji:"運営", hiragana:"うんえい" },
    { kanji:"運用", hiragana:"うんよう" },
    { kanji:"設備", hiragana:"せつび" },
    { kanji:"環境", hiragana:"かんきょう" },
    { kanji:"資源", hiragana:"しげん" },
    { kanji:"国際", hiragana:"こくさい" },
    { kanji:"外交", hiragana:"がいこう" },
    { kanji:"貿易", hiragana:"ぼうえき" },

    { kanji:"法律", hiragana:"ほうりつ" },
    { kanji:"裁判", hiragana:"さいばん" },
    { kanji:"犯罪", hiragana:"はんざい" },
    { kanji:"被害", hiragana:"ひがい" },
    { kanji:"事故", hiragana:"じこ" },
    { kanji:"安全", hiragana:"あんぜん" },
    { kanji:"危険", hiragana:"きけん" },
    { kanji:"防災", hiragana:"ぼうさい" },
    { kanji:"災害", hiragana:"さいがい" },
    { kanji:"避難", hiragana:"ひなん" },

    { kanji:"教育", hiragana:"きょういく" },
    { kanji:"文化", hiragana:"ぶんか" },
    { kanji:"歴史", hiragana:"れきし" },
    { kanji:"伝統", hiragana:"でんとう" },
    { kanji:"芸術", hiragana:"げいじゅつ" },
    { kanji:"宗教", hiragana:"しゅうきょう" },
    { kanji:"地域", hiragana:"ちいき" },
    { kanji:"社会", hiragana:"しゃかい" },
    { kanji:"世代", hiragana:"せだい" },
    { kanji:"人口", hiragana:"じんこう" }
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
    { kanji:"究極", hiragana:"きゅうきょく" },

    { kanji:"顕著", hiragana:"けんちょ" },
    { kanji:"潜在", hiragana:"せんざい" },
    { kanji:"普遍", hiragana:"ふへん" },
    { kanji:"革新", hiragana:"かくしん" },
    { kanji:"秩序", hiragana:"ちつじょ" },
    { kanji:"均衡", hiragana:"きんこう" },
    { kanji:"意義", hiragana:"いぎ" },
    { kanji:"要因", hiragana:"よういん" },
    { kanji:"側面", hiragana:"そくめん" },
    { kanji:"洞察", hiragana:"どうさつ" },

    { kanji:"推測", hiragana:"すいそく" },
    { kanji:"想定", hiragana:"そうてい" },
    { kanji:"仮定", hiragana:"かてい" },
    { kanji:"解釈", hiragana:"かいしゃく" },
    { kanji:"認知", hiragana:"にんち" },
    { kanji:"形成", hiragana:"けいせい" },
    { kanji:"構築", hiragana:"こうちく" },
    { kanji:"転換", hiragana:"てんかん" },
    { kanji:"適応", hiragana:"てきおう" },
    { kanji:"淘汰", hiragana:"とうた" },

    { kanji:"抽出", hiragana:"ちゅうしゅつ" },
    { kanji:"誘発", hiragana:"ゆうはつ" },
    { kanji:"促進", hiragana:"そくしん" },
    { kanji:"抑制", hiragana:"よくせい" },
    { kanji:"拡張", hiragana:"かくちょう" },
    { kanji:"縮減", hiragana:"しゅくげん" },
    { kanji:"派生", hiragana:"はせい" },
    { kanji:"連携", hiragana:"れんけい" },
    { kanji:"依存", hiragana:"いぞん" },
    { kanji:"自立", hiragana:"じりつ" },

    { kanji:"共存", hiragana:"きょうぞん" },
    { kanji:"対立", hiragana:"たいりつ" },
    { kanji:"融合", hiragana:"ゆうごう" },
    { kanji:"分離", hiragana:"ぶんり" },
    { kanji:"統合", hiragana:"とうごう" },
    { kanji:"包括", hiragana:"ほうかつ" },
    { kanji:"排除", hiragana:"はいじょ" },
    { kanji:"介入", hiragana:"かいにゅう" },
    { kanji:"介護", hiragana:"かいご" },
    { kanji:"監督", hiragana:"かんとく" },

    { kanji:"監視", hiragana:"かんし" },
    { kanji:"統制", hiragana:"とうせい" },
    { kanji:"規制", hiragana:"きせい" },
    { kanji:"緩和", hiragana:"かんわ" },
    { kanji:"是正", hiragana:"ぜせい" },
    { kanji:"妥協", hiragana:"だきょう" },
    { kanji:"譲歩", hiragana:"じょうほ" },
    { kanji:"配慮", hiragana:"はいりょ" },
    { kanji:"考慮", hiragana:"こうりょ" },
    { kanji:"懸念", hiragana:"けねん" },

    { kanji:"認可", hiragana:"にんか" },
    { kanji:"承認", hiragana:"しょうにん" },
    { kanji:"拒否", hiragana:"きょひ" },
    { kanji:"容認", hiragana:"ようにん" },
    { kanji:"履行", hiragana:"りこう" },
    { kanji:"遂行", hiragana:"すいこう" },
    { kanji:"達成", hiragana:"たっせい" },
    { kanji:"挫折", hiragana:"ざせつ" },
    { kanji:"克服", hiragana:"こくふく" },
    { kanji:"維持", hiragana:"いじ" },

    { kanji:"変遷", hiragana:"へんせん" },
    { kanji:"推移", hiragana:"すいい" },
    { kanji:"兆候", hiragana:"ちょうこう" },
    { kanji:"動機", hiragana:"どうき" },
    { kanji:"契機", hiragana:"けいき" },
    { kanji:"根本", hiragana:"こんぽん" },
    { kanji:"本来", hiragana:"ほんらい" },
    { kanji:"実践", hiragana:"じっせん" },
    { kanji:"検討", hiragana:"けんとう" },
    { kanji:"吟味", hiragana:"ぎんみ" }
];

const grammarN5 = [
    { question:"私は毎日日本語___勉強します。", answer:"を" },
    { question:"学校___行きます。", answer:"へ" },
    { question:"友達___会いました。", answer:"に" },
    { question:"机___本があります。", answer:"に" },
    { question:"私はタイ___来ました。", answer:"から" },

    { question:"私は学生___。", answer:"です" },
    { question:"今日は暑い___。", answer:"です" },
    { question:"日本語___勉強します。", answer:"を" },
    { question:"水___飲みます。", answer:"を" },
    { question:"家___帰ります。", answer:"に" },

    { question:"朝ご飯___食べます。", answer:"を" },
    { question:"友達___電話します。", answer:"に" },
    { question:"学校___行きません。", answer:"に" },
    { question:"図書館___本を読みます。", answer:"で" },
    { question:"バス___行きます。", answer:"で" },

    { question:"私は犬___好きです。", answer:"が" },
    { question:"妹___います。", answer:"が" },
    { question:"部屋___テレビがあります。", answer:"に" },
    { question:"教室___学生がいます。", answer:"に" },
    { question:"日本語___少し分かります。", answer:"が" },

    { question:"昨日映画___見ました。", answer:"を" },
    { question:"何時___起きますか。", answer:"に" },
    { question:"友達___話しました。", answer:"と" },
    { question:"先生___質問しました。", answer:"に" },
    { question:"本___読みました。", answer:"を" },

    { question:"学校___先生がいます。", answer:"に" },
    { question:"家___猫がいます。", answer:"に" },
    { question:"私は日本語___話せます。", answer:"が" },
    { question:"毎日公園___散歩します。", answer:"で" },
    { question:"駅___行きます。", answer:"に" },

    { question:"東京___大阪___行きました。", answer:"から" },
    { question:"母___ケーキを作りました。", answer:"が" },
    { question:"弟___サッカーが好きです。", answer:"は" },
    { question:"私は毎朝六時___起きます。", answer:"に" },
    { question:"友達___手紙を書きました。", answer:"に" },

    { question:"学校___勉強します。", answer:"で" },
    { question:"家___勉強しません。", answer:"で" },
    { question:"日本___住んでいます。", answer:"に" },
    { question:"先生___本をもらいました。", answer:"に" },
    { question:"私は音楽___聞きます。", answer:"を" },

    { question:"朝___パンを食べます。", answer:"に" },
    { question:"机___ペンがあります。", answer:"に" },
    { question:"私は毎日学校___行きます。", answer:"に" },
    { question:"教室___入ります。", answer:"に" },
    { question:"教室___出ます。", answer:"を" },

    { question:"私は日本語___勉強したいです。", answer:"を" },
    { question:"友達___映画を見たいです。", answer:"と" },
    { question:"昨日雨___降りました。", answer:"が" },
    { question:"日本語___難しいです。", answer:"は" },
    { question:"私は学生___ありません。", answer:"では" },

    { question:"私は日本語___話すことができます。", answer:"を" },
    { question:"毎日日本語___勉強しています。", answer:"を" },
    { question:"明日友達___会う予定です。", answer:"に" },
    { question:"昨日学校___行きませんでした。", answer:"に" },
    { question:"駅___電車に乗ります。", answer:"で" },

    { question:"私はコーヒー___飲みたいです。", answer:"を" },
    { question:"妹___ピアノを弾きます。", answer:"は" },
    { question:"犬___公園で遊んでいます。", answer:"が" },
    { question:"友達___プレゼントをあげました。", answer:"に" },
    { question:"先生___日本語を教わりました。", answer:"に" },

    { question:"私は朝六時___起きます。", answer:"に" },
    { question:"図書館___勉強しました。", answer:"で" },
    { question:"家___帰ってから寝ます。", answer:"に" },
    { question:"教室___学生がたくさんいます。", answer:"に" },
    { question:"机___辞書があります。", answer:"の上に" },

    { question:"私は映画___見るのが好きです。", answer:"を" },
    { question:"毎日音楽___聞きます。", answer:"を" },
    { question:"日本___行ったことがあります。", answer:"へ" },
    { question:"父___車を運転します。", answer:"が" },
    { question:"私は友達___電話しました。", answer:"に" },

    { question:"学校___勉強しに行きます。", answer:"へ" },
    { question:"友達___一緒に旅行します。", answer:"と" },
    { question:"日本語___少し話せます。", answer:"が" },
    { question:"今日は雨___降っています。", answer:"が" },
    { question:"私は寿司___食べたことがあります。", answer:"を" },

    { question:"先生___質問してもいいですか。", answer:"に" },
    { question:"毎日公園___走っています。", answer:"で" },
    { question:"教室___入りました。", answer:"に" },
    { question:"教室___出ました。", answer:"を" },
    { question:"母___料理を作っています。", answer:"が" },

    { question:"兄___サッカーが上手です。", answer:"は" },
    { question:"私は漢字___読むことができます。", answer:"を" },
    { question:"友達___本を借りました。", answer:"から" },
    { question:"私は友達___本を貸しました。", answer:"に" },
    { question:"毎朝パン___食べます。", answer:"を" },

    { question:"学校___八時に着きます。", answer:"に" },
    { question:"駅___歩いて行きます。", answer:"まで" },
    { question:"私は日本語___勉強し続けます。", answer:"を" },
    { question:"友達___手紙を書きました。", answer:"に" },
    { question:"机___ノートがあります。", answer:"の上に" },

    { question:"私は昨日映画___見ました。", answer:"を" },
    { question:"毎日学校___通っています。", answer:"に" },
    { question:"友達___会えてうれしいです。", answer:"に" },
    { question:"日本語___話す練習をします。", answer:"を" },
    { question:"私は猫___飼っています。", answer:"を" },

    { question:"母___買い物に行きました。", answer:"が" },
    { question:"学校___遅れました。", answer:"に" },
    { question:"私は来年日本___行きたいです。", answer:"へ" },
    { question:"公園___子供たちがいます。", answer:"に" },
    { question:"友達___一緒に勉強しました。", answer:"と" }
];

const grammarN4 = [
    { question:"雨が降りそう___。", answer:"です" },
    { question:"日本へ行く___です。", answer:"予定" },
    { question:"毎日運動する___しています。", answer:"ように" },
    { question:"漢字が読める___なりました。", answer:"ように" },
    { question:"友達に会う___しています。", answer:"ことに" },

    { question:"宿題をして___寝ました。", answer:"から" },
    { question:"昼ご飯を食べ___勉強します。", answer:"てから" },
    { question:"テレビを見___勉強しました。", answer:"ながら" },
    { question:"日本語を勉強し___います。", answer:"て" },
    { question:"ドアを閉め___ください。", answer:"て" },

    { question:"部屋を掃除し___おきます。", answer:"て" },
    { question:"財布を忘れ___しまいました。", answer:"て" },
    { question:"一度食べ___みたいです。", answer:"て" },
    { question:"日本へ行った___があります。", answer:"こと" },
    { question:"漢字を書く___ができます。", answer:"こと" },

    { question:"日本語を勉強する___です。", answer:"つもり" },
    { question:"駅へ行く___、右へ曲がります。", answer:"と" },
    { question:"暇な___遊びましょう。", answer:"とき" },
    { question:"寝る___歯を磨きます。", answer:"前に" },
    { question:"学校へ行った___宿題をします。", answer:"後で" },

    { question:"病気なので学校を休む___しました。", answer:"ことに" },
    { question:"毎日早く起きる___しています。", answer:"ように" },
    { question:"運転できる___なりました。", answer:"ように" },
    { question:"日本へ留学する___です。", answer:"予定" },
    { question:"雨が降る___です。", answer:"そう" },

    { question:"この本は読み___です。", answer:"やすい" },
    { question:"この漢字は覚え___です。", answer:"にくい" },
    { question:"先生の話を聞く___です。", answer:"べき" },
    { question:"時間がない___急ぎます。", answer:"ので" },
    { question:"雨だった___出かけました。", answer:"のに" },

    { question:"日本語___英語も話せます。", answer:"だけでなく" },
    { question:"休日は映画を見たり本を読んだり___。", answer:"します" },
    { question:"朝から何も食べて___。", answer:"いません" },
    { question:"駅まで歩いて___。", answer:"行きます" },
    { question:"その話を聞いて驚い___。", answer:"ました" },

    { question:"母は料理を作る___上手です。", answer:"のが" },
    { question:"私は泳ぐ___好きです。", answer:"のが" },
    { question:"友達が来る___待っています。", answer:"のを" },
    { question:"窓を開けた___涼しくなりました。", answer:"ら" },
    { question:"時間があっ___旅行したいです。", answer:"たら" },

    { question:"お金があれ___買います。", answer:"ば" },
    { question:"安けれ___買います。", answer:"ば" },
    { question:"日本へ行く___勉強しています。", answer:"ために" },
    { question:"試験に合格する___頑張ります。", answer:"ために" },
    { question:"先生に聞い___分かりました。", answer:"て" },

    { question:"電車に乗っ___学校へ行きます。", answer:"て" },
    { question:"本を読ん___います。", answer:"で" },
    { question:"テレビを見___いました。", answer:"て" },
    { question:"朝ご飯を食べ___出かけました。", answer:"て" },
    { question:"友達と話し___帰りました。", answer:"て" },

    { question:"日本へ行く___日本語を勉強しています。", answer:"ために" },
    { question:"健康の___毎日運動しています。", answer:"ために" },
    { question:"雨が降り___です。", answer:"そう" },
    { question:"おいし___そうです。", answer:"そう" },
    { question:"難し___そうです。", answer:"そう" },

    { question:"日本語が上手に話せる___なりました。", answer:"ように" },
    { question:"毎日復習する___しています。", answer:"ように" },
    { question:"忘れない___メモします。", answer:"ように" },
    { question:"早く寝る___しています。", answer:"ように" },
    { question:"泳げる___なりました。", answer:"ように" },

    { question:"友達と話し___勉強します。", answer:"ながら" },
    { question:"音楽を聞き___歩きます。", answer:"ながら" },
    { question:"テレビを見___ご飯を食べます。", answer:"ながら" },
    { question:"働き___勉強しています。", answer:"ながら" },
    { question:"歌い___料理します。", answer:"ながら" },

    { question:"宿題をし___しまいました。", answer:"て" },
    { question:"財布をなくし___しまいました。", answer:"て" },
    { question:"電車で寝___しまいました。", answer:"て" },
    { question:"約束を忘れ___しまいました。", answer:"て" },
    { question:"本を落とし___しまいました。", answer:"て" },

    { question:"日本へ行った___があります。", answer:"こと" },
    { question:"寿司を食べた___があります。", answer:"こと" },
    { question:"富士山に登った___があります。", answer:"こと" },
    { question:"漢字を書く___ができます。", answer:"こと" },
    { question:"日本語を話す___が好きです。", answer:"こと" },

    { question:"旅行する___です。", answer:"予定" },
    { question:"大学へ行く___です。", answer:"予定" },
    { question:"明日出張する___です。", answer:"予定" },
    { question:"来年結婚する___です。", answer:"予定" },
    { question:"今週引っ越す___です。", answer:"予定" },

    { question:"日本へ留学する___です。", answer:"つもり" },
    { question:"毎日勉強する___です。", answer:"つもり" },
    { question:"早く寝る___です。", answer:"つもり" },
    { question:"先生になる___です。", answer:"つもり" },
    { question:"本を買う___です。", answer:"つもり" },

    { question:"暇___映画を見ます。", answer:"なら" },
    { question:"行く___連絡してください。", answer:"なら" },
    { question:"安い___買います。", answer:"なら" },
    { question:"時間がある___手伝ってください。", answer:"なら" },
    { question:"日本へ行く___京都がおすすめです。", answer:"なら" },

    { question:"雨___試合があります。", answer:"でも" },
    { question:"子供___分かります。", answer:"でも" },
    { question:"忙しい___行きます。", answer:"けれども" },
    { question:"高い___買いました。", answer:"けれども" },
    { question:"難しい___面白いです。", answer:"けれども" },

    { question:"薬を飲んだ___元気になりました。", answer:"ので" },
    { question:"寒い___窓を閉めました。", answer:"ので" },
    { question:"病気だっ___休みました。", answer:"ので" },
    { question:"時間がない___急ぎます。", answer:"ので" },
    { question:"雨だった___出かけませんでした。", answer:"ので" }
];

const grammarN3 = [
    { question:"彼は来ない___だ。", answer:"よう" },
    { question:"雨が降る___です。", answer:"らしい" },
    { question:"彼は学生___見える。", answer:"のように" },
    { question:"彼が犯人___ない。", answer:"に違い" },
    { question:"日本語を勉強する___した。", answer:"ことに" },

    { question:"来月転勤する___なった。", answer:"ことに" },
    { question:"会議は中止___なった。", answer:"ことに" },
    { question:"年を取る___体力が落ちる。", answer:"につれて" },
    { question:"人口が増える___問題も増える。", answer:"につれて" },
    { question:"彼___私では考え方が違う。", answer:"に対して" },

    { question:"環境問題___話し合う。", answer:"に関して" },
    { question:"その件___説明します。", answer:"について" },
    { question:"努力した。___結果は出なかった。", answer:"しかし" },
    { question:"高い。___買う価値はある。", answer:"それでも" },
    { question:"疲れていた。___最後まで頑張った。", answer:"それでも" },

    { question:"日本へ行く___日本語を勉強している。", answer:"ために" },
    { question:"健康の___運動する。", answer:"ために" },
    { question:"事故を防ぐ___注意する。", answer:"ために" },
    { question:"分かる___説明してください。", answer:"ように" },
    { question:"忘れない___メモした。", answer:"ように" },

    { question:"雨が降り___だ。", answer:"そう" },
    { question:"おいし___そうだ。", answer:"そう" },
    { question:"今にも泣き出し___だ。", answer:"そう" },
    { question:"彼は来る___だ。", answer:"はず" },
    { question:"もう着いた___だ。", answer:"はず" },

    { question:"彼は来る___ない。", answer:"はずが" },
    { question:"そんなことはある___ない。", answer:"わけが" },
    { question:"彼は学生という___ではない。", answer:"わけ" },
    { question:"嫌いな___ではない。", answer:"わけ" },
    { question:"忙しい___、手伝います。", answer:"ながらも" },

    { question:"知ってい___、教えてください。", answer:"るなら" },
    { question:"行く___連絡してください。", answer:"なら" },
    { question:"暇___遊びましょう。", answer:"なら" },
    { question:"読む___読んでください。", answer:"なら" },
    { question:"学生___勉強すべきだ。", answer:"なら" },

    { question:"先生___褒められた。", answer:"に" },
    { question:"友達___誘われた。", answer:"に" },
    { question:"雨___試合が中止になった。", answer:"で" },
    { question:"病気___学校を休んだ。", answer:"で" },
    { question:"事故___電車が遅れた。", answer:"で" },

    { question:"彼は日本語___英語も話せる。", answer:"だけでなく" },
    { question:"彼___、私も参加する。", answer:"に限らず" },
    { question:"休日は映画を見たり本を読んだり___。", answer:"する" },
    { question:"彼は歌___踊り___上手だ。", answer:"も" },
    { question:"朝から何も食べて___。", answer:"いない" },

    { question:"時間があれ___行きます。", answer:"ば" },
    { question:"安けれ___買います。", answer:"ば" },
    { question:"行っ___よかった。", answer:"たら" },
    { question:"見___分かる。", answer:"れば" },
    { question:"勉強す___合格できる。", answer:"れば" },

    { question:"彼は来る___思う。", answer:"と" },
    { question:"成功する___信じている。", answer:"と" },
    { question:"先生___言われた通りにした。", answer:"に" },
    { question:"説明___理解できた。", answer:"で" },
    { question:"経験___学んだ。", answer:"から" },

    { question:"努力した___成功した。", answer:"結果" },
    { question:"彼の話___よると、明日は雨だ。", answer:"に" },
    { question:"新聞___よれば、景気が回復している。", answer:"に" },
    { question:"予定___変更があります。", answer:"に" },
    { question:"状況___応じて対応する。", answer:"に" },

    { question:"能力___応じた仕事をする。", answer:"に" },
    { question:"年齢___関係なく参加できる。", answer:"に" },
    { question:"国籍___関わらず応募できる。", answer:"に" },
    { question:"結果___かかわらず努力する。", answer:"に" },
    { question:"天候___試合は行われる。", answer:"にかかわらず" },

    { question:"学生___社会人まで参加した。", answer:"から" },
    { question:"東京___大阪まで新幹線で行く。", answer:"から" },
    { question:"朝___晩まで働いた。", answer:"から" },
    { question:"彼は勉強する___寝てしまった。", answer:"つもりで" },
    { question:"知っている___話していた。", answer:"つもりで" },

    { question:"まるで夢___。", answer:"みたいだ" },
    { question:"子供___笑っている。", answer:"みたいに" },
    { question:"彼は日本人___日本語が上手だ。", answer:"みたいに" },
    { question:"雪が降り___寒い。", answer:"そうなくらい" },
    { question:"倒れ___疲れている。", answer:"そうなくらい" },

    { question:"彼は医者___働いている。", answer:"として" },
    { question:"留学生___来日した。", answer:"として" },
    { question:"代表___参加した。", answer:"として" },
    { question:"趣味___写真を撮る。", answer:"として" },
    { question:"経験___役立った。", answer:"が" },

    { question:"この仕事は私___向いている。", answer:"に" },
    { question:"彼は教師___向いている。", answer:"に" },
    { question:"この本は初心者___向けだ。", answer:"に" },
    { question:"留学生___説明会がある。", answer:"向けの" },
    { question:"子供___番組です。", answer:"向けの" },

    { question:"彼は来る___来ない。", answer:"とか" },
    { question:"雨だ___聞いた。", answer:"とか" },
    { question:"彼女は結婚した___。", answer:"とか" },
    { question:"最近忙しい___。", answer:"という" },
    { question:"彼は天才だ___。", answer:"わけではない" },

    { question:"行きたい___行けない。", answer:"けれども" },
    { question:"難しい___面白い。", answer:"けれども" },
    { question:"高い___買った。", answer:"ものの" },
    { question:"勉強した___合格しなかった。", answer:"ものの" },
    { question:"知っている___教えてくれない。", answer:"のに" }
];


const grammarN2 = [
    { question:"彼は来る___。", answer:"に違いない" },
    { question:"これは本物___。", answer:"に違いない" },
    { question:"彼が犯人___。", answer:"に違いない" },
    { question:"そんなことはある___。", answer:"はずがない" },
    { question:"彼は来る___。", answer:"はずだ" },

    { question:"約束だから行かない___。", answer:"わけにはいかない" },
    { question:"仕事なので休む___。", answer:"わけにはいかない" },
    { question:"試験前だから遊ぶ___。", answer:"わけにはいかない" },
    { question:"人生は難しい___。", answer:"ものだ" },
    { question:"時間が経つのは早い___。", answer:"ものだ" },

    { question:"なんと美しい___。", answer:"ことか" },
    { question:"なんと嬉しい___。", answer:"ことか" },
    { question:"彼は学生___。", answer:"にすぎない" },
    { question:"それは噂___。", answer:"にすぎない" },
    { question:"軽い風邪___。", answer:"にすぎない" },

    { question:"台風で被害が出る___。", answer:"おそれがある" },
    { question:"事故になる___。", answer:"おそれがある" },
    { question:"高い___買った。", answer:"ものの" },
    { question:"努力した___失敗した。", answer:"ものの" },
    { question:"知っている___説明できない。", answer:"ものの" },

    { question:"成功したのは努力___。", answer:"にほかならない" },
    { question:"原因は彼のミス___。", answer:"にほかならない" },
    { question:"日本へ行く___日本語を勉強した。", answer:"ために" },
    { question:"健康の___運動している。", answer:"ために" },
    { question:"事故を防ぐ___対策する。", answer:"ために" },

    { question:"年を取る___体力が落ちる。", answer:"につれて" },
    { question:"人口が増える___問題も増える。", answer:"につれて" },
    { question:"景気が回復する___雇用も増えた。", answer:"につれて" },
    { question:"彼___私では意見が違う。", answer:"に対して" },
    { question:"環境問題___議論する。", answer:"について" },

    { question:"その件___説明します。", answer:"に関して" },
    { question:"新聞___よると雨らしい。", answer:"に" },
    { question:"天気予報___よれば晴れる。", answer:"に" },
    { question:"彼の話___よると本当らしい。", answer:"に" },
    { question:"能力___応じて仕事をする。", answer:"に" },

    { question:"状況___応じて判断する。", answer:"に" },
    { question:"国籍___関係なく応募できる。", answer:"に" },
    { question:"結果___かかわらず努力する。", answer:"に" },
    { question:"雨___試合は行われる。", answer:"にもかかわらず" },
    { question:"病気___出勤した。", answer:"にもかかわらず" },

    { question:"彼は来る___来ない。", answer:"とか" },
    { question:"最近忙しい___聞いた。", answer:"とか" },
    { question:"結婚した___。", answer:"とか" },
    { question:"彼は天才___わけではない。", answer:"という" },
    { question:"全員が賛成した___。", answer:"わけではない" },

    { question:"勉強した___合格しなかった。", answer:"のに" },
    { question:"知っている___教えてくれない。", answer:"のに" },
    { question:"行きたい___行けない。", answer:"けれども" },
    { question:"難しい___面白い。", answer:"けれども" },
    { question:"高い___買う価値がある。", answer:"としても" },

    { question:"彼は医者___働いている。", answer:"として" },
    { question:"代表___参加した。", answer:"として" },
    { question:"留学生___来日した。", answer:"として" },
    { question:"教師___経験がある。", answer:"として" },
    { question:"趣味___写真を撮る。", answer:"として" },

    { question:"彼は子供___考え方だ。", answer:"のような" },
    { question:"夢___話だ。", answer:"のような" },
    { question:"鳥___空を飛ぶ。", answer:"ように" },
    { question:"先生が言った___してください。", answer:"ように" },
    { question:"忘れない___メモする。", answer:"ように" },

    { question:"彼は来る___だ。", answer:"よう" },
    { question:"雨が降る___だ。", answer:"らしい" },
    { question:"本当___話だ。", answer:"らしい" },
    { question:"彼は元気___見える。", answer:"そうに" },
    { question:"おいし___見える。", answer:"そうに" },

    { question:"時間がない___急ぐ。", answer:"以上" },
    { question:"引き受けた___最後までやる。", answer:"以上" },
    { question:"約束した___守るべきだ。", answer:"以上" },
    { question:"学生である___勉強しなさい。", answer:"からには" },
    { question:"やる___頑張ろう。", answer:"からには" },

    { question:"成功する___努力が必要だ。", answer:"には" },
    { question:"日本語が上手になる___練習する。", answer:"には" },
    { question:"彼の成功___驚いた。", answer:"には" },
    { question:"その結果___満足している。", answer:"には" },
    { question:"私___言わせれば簡単だ。", answer:"に" },

    { question:"彼___してみれば当然だ。", answer:"に" },
    { question:"子供___理解できない。", answer:"には" },
    { question:"初心者___難しい。", answer:"には" },
    { question:"私___無理だ。", answer:"には" },
    { question:"彼___できる仕事だ。", answer:"には" },

    { question:"彼は来る___来ない。", answer:"かどうか" },
    { question:"成功する___分からない。", answer:"かどうか" },
    { question:"行く___まだ決めていない。", answer:"かどうか" },
    { question:"本当___確認する。", answer:"かどうか" },
    { question:"必要___検討する。", answer:"かどうか" },

    { question:"彼は来る___期待している。", answer:"ものと" },
    { question:"成功する___信じている。", answer:"ものと" },
    { question:"当然___考えていた。", answer:"ものと" },
    { question:"問題ない___思っていた。", answer:"ものと" },
    { question:"彼ならできる___考えていた。", answer:"ものと" },

    { question:"忙しい___参加した。", answer:"ながら" },
    { question:"知ってい___黙っていた。", answer:"ながら" },
    { question:"残念___仕方がない。", answer:"で" },
    { question:"心配___たまらない。", answer:"で" },
    { question:"悔しく___ならない。", answer:"て" },
];

const grammarN1 = [
    { question:"彼が成功したのは努力の結果___。", answer:"にほかならない" },
    { question:"この問題は教育制度そのもの___。", answer:"にかかわる" },
    { question:"環境保護は全人類の課題___。", answer:"にほかならない" },
    { question:"彼の説明は納得できる___。", answer:"に足る" },
    { question:"信頼する___人物だ。", answer:"に足る" },

    { question:"その計画は実現不可能___。", answer:"に等しい" },
    { question:"何もしないの___態度だ。", answer:"に等しい" },
    { question:"努力___成功できない。", answer:"なくしては" },
    { question:"準備___試験に合格できない。", answer:"なくしては" },
    { question:"彼の協力___完成しなかった。", answer:"なくしては" },

    { question:"年齢___経験が豊富だ。", answer:"のわりに" },
    { question:"値段___品質が高い。", answer:"のわりに" },
    { question:"初めて___上手だ。", answer:"にしては" },
    { question:"子供___大人びている。", answer:"にしては" },
    { question:"新人___よくできた。", answer:"にしては" },

    { question:"彼は行く___行かない___返事をしない。", answer:"とも" },
    { question:"本当___嘘___分からない。", answer:"とも" },
    { question:"成功する___失敗する___努力する。", answer:"とも" },
    { question:"誰が見ても明らか___。", answer:"だ" },
    { question:"そんな話は信じる___ない。", answer:"に" },

    { question:"彼の話は信用する___値しない。", answer:"に" },
    { question:"検討する___問題だ。", answer:"に値する" },
    { question:"賞賛する___行動だ。", answer:"に値する" },
    { question:"驚く___ことではない。", answer:"にはあたらない" },
    { question:"心配する___。", answer:"にはおよばない" },

    { question:"説明する___。", answer:"までもない" },
    { question:"言う___なく当然だ。", answer:"までも" },
    { question:"彼が怒るのも無理___。", answer:"はない" },
    { question:"失敗しても仕方___。", answer:"がない" },
    { question:"やる___やるが結果は分からない。", answer:"だけ" },

    { question:"努力した___成果が出ない。", answer:"にもかかわらず" },
    { question:"知ってい___黙っていた。", answer:"ながら" },
    { question:"危険___実行した。", answer:"をおして" },
    { question:"反対___計画を進めた。", answer:"をよそに" },
    { question:"周囲の心配___旅行した。", answer:"をよそに" },

    { question:"雨___試合は行われた。", answer:"にもかかわらず" },
    { question:"彼は疲れている___働き続けた。", answer:"にもかかわらず" },
    { question:"忙しい___手伝ってくれた。", answer:"ながらも" },
    { question:"知っている___教えない。", answer:"くせに" },
    { question:"何も知らない___偉そうだ。", answer:"くせに" },

    { question:"成功する___失敗する___挑戦する。", answer:"にせよ" },
    { question:"本当___嘘___確認が必要だ。", answer:"にせよ" },
    { question:"行く___行かない___連絡して。", answer:"にせよ" },
    { question:"彼は学生という___社会人のようだ。", answer:"より" },
    { question:"期待した___結果ではなかった。", answer:"ほどの" },

    { question:"努力した___ことはある。", answer:"だけの" },
    { question:"時間がない___急ごう。", answer:"以上" },
    { question:"引き受けた___最後までやる。", answer:"以上は" },
    { question:"約束した___守るべきだ。", answer:"からには" },
    { question:"やる___全力でやる。", answer:"からには" },

    { question:"彼の実力から___合格は当然だ。", answer:"すると" },
    { question:"状況から___中止は避けられない。", answer:"すると" },
    { question:"年齢から___信じられない若さだ。", answer:"すると" },
    { question:"彼の態度から___本気らしい。", answer:"すると" },
    { question:"結果から___成功だった。", answer:"すると" },

    { question:"彼は来る___来ない___分からない。", answer:"ともなく" },
    { question:"見る___見ていたら時間が過ぎた。", answer:"ともなく" },
    { question:"聞く___聞いていた。", answer:"ともなく" },
    { question:"考える___考えてしまう。", answer:"ともなく" },
    { question:"歩く___駅まで来た。", answer:"ともなく" },

    { question:"成功したのは運___努力だ。", answer:"というより" },
    { question:"彼は上司___友人のようだ。", answer:"というより" },
    { question:"勉強___研究に近い。", answer:"というより" },
    { question:"遊び___仕事だ。", answer:"というより" },
    { question:"偶然___必然だった。", answer:"というより" },

    { question:"彼の話は事実___。", answer:"に相違ない" },
    { question:"それは本物___。", answer:"に相違ない" },
    { question:"彼が犯人___。", answer:"に相違ない" },
    { question:"成功する___。", answer:"に決まっている" },
    { question:"そんなことは嘘___。", answer:"に決まっている" },

    { question:"この計画は中止___得ない。", answer:"せざるを" },
    { question:"そう判断___得ない。", answer:"せざるを" },
    { question:"受け入れ___得ない。", answer:"ざるを" },
    { question:"認め___得ない。", answer:"ざるを" },
    { question:"諦め___得なかった。", answer:"ざるを" },

    { question:"彼は成功して当然___。", answer:"だ" },
    { question:"失敗しても不思議___。", answer:"ではない" },
    { question:"怒るのも無理___。", answer:"はない" },
    { question:"感動せずには___。", answer:"いられない" },
    { question:"笑わずには___。", answer:"いられない" },

    { question:"考えずには___。", answer:"いられない" },
    { question:"努力なくして成功___。", answer:"なし" },
    { question:"協力なくして完成___。", answer:"なし" },
    { question:"信頼なくして友情___。", answer:"なし" },
    { question:"準備なくして合格___。", answer:"なし" },

    { question:"結果のいかん___責任を取る。", answer:"にかかわらず" },
    { question:"理由のいかん___参加できない。", answer:"を問わず" },
    { question:"年齢のいかん___応募可能。", answer:"を問わず" },
    { question:"国籍のいかん___歓迎する。", answer:"を問わず" },
    { question:"経験の有無___採用する。", answer:"を問わず" },

    { question:"彼は病気___働き続けた。", answer:"にもまして" },
    { question:"以前___忙しくなった。", answer:"にもまして" },
    { question:"去年___成績が上がった。", answer:"にもまして" },
    { question:"想像___難しかった。", answer:"を上回る" },
    { question:"予想___結果だった。", answer:"を超える" },

    { question:"期待___成果を出した。", answer:"以上の" },
    { question:"努力___結果が得られた。", answer:"以上の" },
    { question:"彼の能力___人はいない。", answer:"ほどの" },
    { question:"これ___嬉しいことはない。", answer:"ほど" },
    { question:"彼___信頼できる人はいない。", answer:"ほど" }
];


let score = 0;
let questionCount = 0;
let maxQuestion = 10;

let currentWord;
let shuffledWords = [];
let words = [];

let difficulty = "n5";
let category = "kanji";

let timer;
let timeLeft = 60;

let selectedLevel = "n5"

let gameMode = "normal";
let playerName = "";

let wrongAnswers = [];


const menuScreen =
document.getElementById("menu-screen");

const gameScreen =
document.getElementById("game-screen");

const gameoverScreen =
document.getElementById("gameover-screen");


function startGame(){

    questionCount = 0;
    score = 0;

    wrongAnswers = [];
    
    difficulty = selectedLevel;

    if(gameMode === "time"){

        words = [
            ...n5Words,
            ...n4Words,
            ...n3Words,
            ...n2Words,
            ...n1Words
        ];
    }

    else{


    if(category === "kanji"){

    if(difficulty === "n5"){
        words = n5Words;
    }

    else if(difficulty === "n4"){
        words = n4Words;
    }

    else if(difficulty === "n3"){
        words = n3Words;
    }

    else if(difficulty === "n2"){
        words = n2Words;
    }

    else if(difficulty === "n1"){
        words = n1Words;
    }

}

    else if(category === "vocabulary"){

        if(difficulty === "n5"){
            words = vocabularyN5;
        }

        else if(difficulty === "n4"){
            words = vocabularyN4;

        }

        else if(difficulty === "n3"){
            words = vocabularyN3;
        }

        else if(difficulty === "n2"){
            words = vocabularyN2;
            timeLeft = 10;
        }

        else if(difficulty === "n1"){
            words = vocabularyN1;
        }
    }

    else if(category === "grammar"){
        
        if(difficulty === "n5"){
            words = grammarN5;
        }

        else if(difficulty === "n4"){
            words = grammarN4;

        }

        else if(difficulty === "n3"){
            words = grammarN3;
        }

        else if(difficulty === "n2"){
            words = grammarN2;
        }

        else if(difficulty === "n1"){
            words = grammarN1;
        }
    }
}
    shuffledWords =
    [...words].sort(() => Math.random() - 0.5);

    menuScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    if(gameMode === "time"){
        document.getElementById("progress").style.display = "none";
    }else{
        document.getElementById("progress").style.display = "block";
        document.getElementById("progress").innerHTML =
        "Question 1 /" + maxQuestion;
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

    if(gameMode === "time"){

        words = [
            ...n5Words,
            ...n4Words,
            ...n3Words,
            ...n2Words,
            ...n1Words
        ];
    }

    else{

    if(category === "kanji"){
      if(difficulty === "n5"){
        words = n5Words;
    }

    else if(difficulty === "n4"){
        words = n4Words;

    }
    else if(difficulty === "n3"){
        words = n3Words;

    }
    else if(difficulty === "n2"){
        words = n2Words;

    }
    else if(difficulty === "n1"){
        words = n1Words;

    }
}

else if(category === "grammar"){
        
        if(difficulty === "n5"){
            words = grammarN5;
        }

        else if(difficulty === "n4"){
            words = grammarN4;
        }

        else if(difficulty === "n3"){
            words = grammarN3;
        }

        else if(difficulty === "n2"){
            words = grammarN2;
        }

        else if(difficulty === "n1"){
            words = grammarN1;
        }
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
        Number(localStorage.getItem("bestScore")) || 0
    )
);

document.getElementById("bestScore")
.innerHTML =
"Best Score: " +
(localStorage.getItem("bestScore")) || 0;


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

function startTimeAttack(){

    gameMode = "time";

    timeLeft = 60;

    words = [
        ...n5Words,
        ...n4Words,
        ...n3Words,
        ...n2Words,
        ...n1Words
    ];

    shuffledWords =
    [...words].sort(() => Math.random() - 0.5);

    startGame();

    document.getElementById("timer").style.display = "block";

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

function openDifficultyModal(){
    document
        .getElementById("difficultyModal")
        .classList.remove("hidden");
}

function closeDifficultyModal(){
    document
        .getElementById("difficultyModal")
        .classList.add("hidden");
}

function setLevel(level){

    selectedDifficulty = level;

    document
        .getElementById("selected-level")
        .innerText =
        level.toUpperCase();

    closeDifficultyModal();
}


function closeLeaderboardModal(){

    document
        .getElementById("leaderboardModal")
        .classList.add("hidden");
}