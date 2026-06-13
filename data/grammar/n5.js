const grammarN5 = [

{
 question:"私は<ruby>毎日<rt>まいにち</rt></ruby><ruby>日本語<rt>にほんご</rt></ruby>＿<ruby>勉強<rt>べんきょう</rt></ruby>します。",
 answer:"を",
 choices:["を","が","に","で"]
},

{
 question:"学校＿行きます。",
 answer:"に",
 choices:["に","へ","で","を"]
},

{
 question:"友達＿会いました。",
 answer:"に",
 choices:["に","と","を","で"]
},

{
 question:"水＿飲みます。",
 answer:"を",
 choices:["を","が","に","で"]
},

{
 question:"私は犬＿好きです。",
 answer:"が",
 choices:["が","を","に","で"]
},

{
 question:"友達＿映画を見ました。",
 answer:"と",
 choices:["と","に","を","で"]
},

{
 question:"<ruby>図書館<rt>としょかん</rt></ruby>＿本を読みます。",
 answer:"で",
 choices:["で","に","へ","を"]
},

{
 question:"私は日本＿住んでいます。",
 answer:"に",
 choices:["に","へ","を","で"]
},

{
 question:"バス＿学校へ行きます。",
 answer:"で",
 choices:["で","に","を","が"]
},

{
 question:"私は先生＿<ruby>質問<rt>しつもん</rt></ruby>しました。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"私は学生＿。",
 answer:"です",
 choices:[
  "です",
  "でした",
  "ではありません",
  "ではありませんでした"
 ]
},

{
 question:"昨日は日曜日＿。",
 answer:"でした",
 choices:[
  "です",
  "でした",
  "ではありません",
  "ではありませんでした"
 ]
},

{
 question:"私は医者＿。",
 answer:"ではありません",
 choices:[
  "です",
  "でした",
  "ではありません",
  "ではありませんでした"
 ]
},

{
 question:"昨日は休み＿。",
 answer:"でした",
 choices:[
  "です",
  "でした",
  "ではありません",
  "ではありませんでした"
 ]
},

{
 question:"兄は高校生＿。",
 answer:"です",
 choices:[
  "です",
  "でした",
  "ではありません",
  "ではありませんでした"
 ]
},

{
 question:"私は<ruby>毎日<rt>まいにち</rt></ruby>学校へ行き＿。",
 answer:"ます",
 choices:[
  "ます",
  "ました",
  "ません",
  "ませんでした"
 ]
},

{
 question:"昨日<ruby>映画<rt>えいが</rt></ruby>を見＿。",
 answer:"ました",
 choices:[
  "ます",
  "ました",
  "ません",
  "ませんでした"
 ]
},

{
 question:"今日はコーヒーを飲み＿。",
 answer:"ません",
 choices:[
  "ます",
  "ました",
  "ません",
  "ませんでした"
 ]
},

{
 question:"昨日<ruby>宿題<rt>しゅくだい</rt></ruby>をし＿。",
 answer:"ませんでした",
 choices:[
  "ます",
  "ました",
  "ません",
  "ませんでした"
 ]
},

{
 question:"明日<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>し＿。",
 answer:"ます",
 choices:[
  "ます",
  "ました",
  "ません",
  "ませんでした"
 ]
},

{
 question:"＿＿学校へ行きますか。",
 answer:"いつ",
 choices:["いつ","どこ","だれ","なに"]
},

{
 question:"＿＿と話しましたか。",
 answer:"だれ",
 choices:["だれ","なに","どこ","いつ"]
},

{
 question:"昨日＿＿を食べましたか。",
 answer:"なに",
 choices:["なに","だれ","どこ","いつ"]
},

{
 question:"＿＿で勉強しますか。",
 answer:"どこ",
 choices:["どこ","だれ","なに","いつ"]
},

{
 question:"＿＿日本へ行きますか。",
 answer:"いつ",
 choices:["いつ","どこ","なに","だれ"]
},

{
 question:"机の上に本が＿。",
 answer:"あります",
 choices:["あります","います","ありません","いません"]
},

{
 question:"公園に子どもが＿。",
 answer:"います",
 choices:["います","あります","いません","ありません"]
},

{
 question:"部屋にテレビが＿。",
 answer:"あります",
 choices:["あります","います","ありません","いません"]
},

{
 question:"学校に先生が＿。",
 answer:"います",
 choices:["います","あります","いません","ありません"]
},

{
 question:"<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>が＿。",
 answer:"あります",
 choices:["あります","います","ありません","いません"]
},

{
 question:"教室に学生が＿。",
 answer:"います",
 choices:["います","あります","いません","ありません"]
},

{
 question:"かばんの中にペンが＿。",
 answer:"あります",
 choices:["あります","います","ありません","いません"]
},

{
 question:"私の家に犬が＿。",
 answer:"います",
 choices:["います","あります","いません","ありません"]
},

{
 question:"＿＿日本語を勉強していますか。",
 answer:"どうして",
 choices:["どうして","いつ","どこ","だれ"]
},

{
 question:"＿＿学校へ行きますか。",
 answer:"どうやって",
 choices:["どうやって","いつ","どこ","だれ"]
},

{
 question:"＿＿人家族ですか。",
 answer:"何",
 choices:["何","どこ","いつ","だれ"]
},

{
 question:"＿＿本を買いましたか。",
 answer:"どこで",
 choices:["どこで","いつ","だれ","なに"]
},

{
 question:"＿＿と映画を見ましたか。",
 answer:"だれ",
 choices:["だれ","どこ","なに","いつ"]
},

{
 question:"この本は＿です。",
 answer:"おもしろい",
 choices:["おもしろい","つまらない","高い","古い"]
},

{
 question:"富士山は＿です。",
 answer:"高い",
 choices:["高い","低い","古い","新しい"]
},

{
 question:"この部屋は＿です。",
 answer:"広い",
 choices:["広い","狭い","古い","高い"]
},

{
 question:"このケーキは＿です。",
 answer:"甘い",
 choices:["甘い","辛い","苦い","酸っぱい"]
},

{
 question:"私の家は学校から＿です。",
 answer:"近い",
 choices:["近い","遠い","高い","広い"]
},

{
 question:"この町は<ruby>有名<rt>ゆうめい</rt></ruby>＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"図書館は静か＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"今日は元気＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"この駅は<ruby>便利<rt>べんり</rt></ruby>＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"この部屋はきれい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は犬が好き＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は納豆が嫌い＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"兄はサッカーが上手＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は料理が下手＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"田中さんは日本語が上手＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"ここに名前を書いて＿。",
 answer:"ください",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"少し待って＿。",
 answer:"ください",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"ドアを開けて＿。",
 answer:"ください",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"先生の話を聞いて＿。",
 answer:"ください",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"この漢字を読んで＿。",
 answer:"ください",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"この本を読んで＿。",
 answer:"もいいです",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"ここで写真を撮って＿。",
 answer:"もいいです",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"この部屋を使って＿。",
 answer:"もいいです",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"今日は早く帰って＿。",
 answer:"もいいです",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"このペンを使って＿。",
 answer:"もいいです",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"ここでタバコを吸って＿。",
 answer:"はいけません",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"教室で走って＿。",
 answer:"はいけません",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"図書館で大きい声で話して＿。",
 answer:"はいけません",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"ここに車を止めて＿。",
 answer:"はいけません",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"授業中に寝て＿。",
 answer:"はいけません",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"私は今<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>して＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"父はテレビを見て＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"友達は本を読んで＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"母は料理を作って＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"私は学校へ行って＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"私は日本へ行きたい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"今日は寿司を食べたい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は<ruby>映画<rt>えいが</rt></ruby>を見たい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は<ruby>新幹線<rt>しんかんせん</rt></ruby>に乗りたい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は<ruby>日本語<rt>にほんご</rt></ruby>をもっと<ruby>勉強<rt>べんきょう</rt></ruby>したい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"一緒に公園へ行き＿。",
 answer:"ましょう",
 choices:["ましょう","ます","ません","ました"]
},

{
 question:"一緒にコーヒーを飲み＿。",
 answer:"ましょう",
 choices:["ましょう","ます","ません","ました"]
},

{
 question:"明日早く起き＿。",
 answer:"ましょう",
 choices:["ましょう","ます","ません","ました"]
},

{
 question:"一緒に宿題をし＿。",
 answer:"ましょう",
 choices:["ましょう","ます","ません","ました"]
},

{
 question:"週末に買い物へ行き＿。",
 answer:"ましょう",
 choices:["ましょう","ます","ません","ました"]
},

{
 question:"私は毎朝六時＿起きます。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"授業は九時＿始まります。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"昨日十時＿寝ました。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"私は七時＿朝ご飯を食べます。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"会議は午後二時＿終わります。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"りんごを三＿買いました。",
 answer:"つ",
 choices:["つ","人","本","枚"]
},

{
 question:"学生が二＿います。",
 answer:"人",
 choices:["人","本","枚","つ"]
},

{
 question:"本を五＿読みました。",
 answer:"冊",
 choices:["冊","人","枚","つ"]
},

{
 question:"紙を三＿ください。",
 answer:"枚",
 choices:["枚","冊","人","つ"]
},

{
 question:"犬が一＿います。",
 answer:"匹",
 choices:["匹","冊","枚","人"]
},

{
 question:"私は駅＿歩いて行きます。",
 answer:"まで",
 choices:["まで","から","で","を"]
},

{
 question:"学校＿家まで帰ります。",
 answer:"から",
 choices:["から","まで","で","を"]
},

{
 question:"飛行機＿日本へ行きます。",
 answer:"で",
 choices:["で","に","を","が"]
},

{
 question:"私は友達＿駅へ行きました。",
 answer:"と",
 choices:["と","に","を","で"]
},

{
 question:"公園＿子どもが遊んでいます。",
 answer:"で",
 choices:["で","に","を","へ"]
},

{
 question:"<ruby>病院<rt>びょういん</rt></ruby>＿先生がいます。",
 answer:"に",
 choices:["に","で","を","へ"]
},

{
 question:"私は<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>＿飲みません。",
 answer:"を",
 choices:["を","が","に","で"]
},

{
 question:"<ruby>図書館<rt>としょかん</rt></ruby>で本を読んで＿。",
 answer:"います",
 choices:["ください","います","もいいです","はいけません"]
},

{
 question:"この町は<ruby>有名<rt>ゆうめい</rt></ruby>＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
},

{
 question:"私は来年日本へ行きたい＿。",
 answer:"です",
 choices:["です","でした","ではありません","ではありませんでした"]
}

];

window.grammarN5 = grammarN5;