import { Lesson } from '../types/lesson';

export const stage3LessonsPart4: Lesson[] = [
  {
    id: "lesson_30",
    day: 30,
    title: "Bài 30: Cảm xúc",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Tâm lý",
    objectives: [
      "Học một số từ vựng về trạng thái cảm xúc.",
      "Biết cách diễn đạt bản thân đang vui hay buồn."
    ],
    vocabulary: [
      { id: "v_30_1", traditional: "高興", pinyin: "Gāoxìng", zhuyin: "ㄍㄠ ㄒㄧㄥˋ", vietnamese: "Vui vẻ", partOfSpeech: "Tính từ", exampleTraditional: "認識你我很高興。", examplePinyin: "Rènshí nǐ wǒ hěn gāoxìng.", exampleVietnamese: "Rất vui được biết bạn." },
      { id: "v_30_2", traditional: "開心", pinyin: "Kāixīn", zhuyin: "ㄎㄞ ㄒㄧㄣ", vietnamese: "Vui lòng, phấn khởi", partOfSpeech: "Tính từ", exampleTraditional: "今天我很開心。", examplePinyin: "Jīntiān wǒ hěn kāixīn.", exampleVietnamese: "Hôm nay tôi rất vui." },
      { id: "v_30_3", traditional: "難過", pinyin: "Nánguò", zhuyin: "ㄋㄢˊ ㄍㄨㄛˋ", vietnamese: "Buồn bã", partOfSpeech: "Tính từ", exampleTraditional: "小狗不見了，他很難過。", examplePinyin: "Xiǎo gǒu bú jiàn le, tā hěn nánguò.", exampleVietnamese: "Con cún bị mất rồi, anh ấy rất buồn." },
      { id: "v_30_4", traditional: "生氣", pinyin: "Shēngqì", zhuyin: "ㄕㄥ ㄑㄧˋ", vietnamese: "Tức giận", partOfSpeech: "Tính từ, Động từ", exampleTraditional: "請不要生氣。", examplePinyin: "Qǐng búyào shēngqì.", exampleVietnamese: "Xin đừng tức giận." },
      { id: "v_30_5", traditional: "為什麼", pinyin: "Wèishéme", zhuyin: "ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙", vietnamese: "Tại sao", partOfSpeech: "Đại từ", exampleTraditional: "你為什麼生氣？", examplePinyin: "Nǐ wèishéme shēngqì?", exampleVietnamese: "Tại sao bạn lại nổi giận?" },
      { id: "v_30_6", traditional: "因為", pinyin: "Yīnwèi", zhuyin: "ㄧㄣ ㄨㄟˋ", vietnamese: "Bởi vì", partOfSpeech: "Liên từ", exampleTraditional: "因為我生病了，所以我沒去學校。", examplePinyin: "Yīnwèi wǒ shēngbìng le, suǒyǐ wǒ méi qù xuéxiào.", exampleVietnamese: "Do tôi bị ốm nên tôi không đến trường." }
    ],
    sentencePatterns: [
      { traditional: "你為什麼...？", pinyin: "Nǐ wèi shén me...?", zhuyin: "ㄋㄧˇ ㄨㄟˋ ㄕㄣˊ ㄇㄜ˙...?", vietnamese: "Tại sao bạn...?", usage: "Hỏi lý do." },
      { traditional: "因為...", pinyin: "Yīn wèi...", zhuyin: "ㄧㄣ ㄨㄟˋ...", vietnamese: "Bởi vì...", usage: "Nêu lý do giải thích." }
    ],
    listening: {
      title: "Chuyện buồn",
      transcriptTraditional: "A: 你怎麼了？為什麼你很難過？\nB: 因為我的成績不好。\nA: 沒關係，下次努力！",
      transcriptPinyin: "A: Nǐ zěnme le? Wèishéme nǐ hěn nánguò?\nB: Yīnwèi wǒ de chéngjī bù hǎo.\nA: Méiguānxi, xià cì nǔlì!",
      transcriptVietnamese: "A: Bạn sao thế? Sao trông bạn có vẻ buồn?\nB: Bởi vì điểm của mình không tốt.\nA: Không sao, lần sau cố gắng lên!",
      questions: [
        { id: "l_30_q1", type: "multiple_choice", question: "Tại sao B lại buồn?", options: ["Vì đói", "Vì mệt", "Vì điểm kém", "Vì tức giận"], correctAnswer: "Vì điểm kém", explanation: "B nói 因為我的成績不好 (Vì thành tích của tôi không tốt)." }
      ]
    },
    reading: {
      title: "Sinh nhật vui vẻ",
      passageTraditional: "今天是我的生日。我的朋友來我家吃飯。我們一起唱歌、吃拉麵。我收到很多禮物。今天我非常開心。",
      passagePinyin: "Jīntiān shì wǒ de shēngrì. Wǒ de péngyǒu lái wǒ jiā chīfàn. Wǒmen yìqǐ chànggē, chī lāmiàn. Wǒ shōudào hěnduō lǐwù. Jīntiān wǒ fēicháng kāixīn.",
      passageVietnamese: "Hôm nay là sinh nhật của tôi. Các bạn đến nhà tôi ăn cơm. Chúng tôi cùng nhau hát, ăn mì ramen. Tôi nhận được rất nhiều quà. Hôm nay tôi cực kỳ vui.",
      questions: [
        { id: "r_30_q1", type: "true_false", question: "Tác giả cảm thấy rất buồn trong ngày sinh nhật. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Cuối đoạn viết 今天我非常開心 (Hôm nay tôi vô cùng phấn khởi)." }
      ]
    },
    speaking: {
      promptTraditional: "今天你覺得開心還是難過？為什麼？",
      promptPinyin: "Jīntiān nǐ juédé kāixīn háishì nánguò? Wèishéme?",
      promptVietnamese: "Hôm nay bạn thấy vui hay buồn? Tại sao?",
      sampleAnswerTraditional: "今天我很開心，因為天氣很好。",
      sampleAnswerPinyin: "Jīntiān wǒ hěn kāixīn, yīnwèi tiānqì hěn hǎo.",
      sampleAnswerVietnamese: "Hôm nay tôi rất vui vì thời tiết tốt."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Cậu ấy rất vui'.",
      suggestedAnswerTraditional: "他很高興。",
      suggestedAnswerPinyin: "Tā hěn gāoxìng.",
      suggestedAnswerVietnamese: "Cậu ấy rất vui."
    },
    quiz: [
      { id: "q_30_1", type: "multiple_choice", question: "Từ 'Cảm ơn' là 謝謝, vậy từ 'Vui vẻ' là gì?", options: ["生氣 (Shēngqì)", "高興 (Gāoxìng)", "難過 (Nánguò)", "對不起 (Duìbùqǐ)"], correctAnswer: "高興 (Gāoxìng)", explanation: "高興 (Gāoxìng) là vui vẻ." }
    ]
  },
  {
    id: "lesson_31",
    day: 31,
    title: "Bài 31: Mời rủ, đề nghị",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Giao tiếp",
    objectives: [
      "Học cách đề nghị, tham khảo ý kiến người khác.",
      "Biết cách sử dụng cụm từ '...好嗎? / 怎麼樣?'"
    ],
    vocabulary: [
      { id: "v_31_1", traditional: "一起", pinyin: "Yìqǐ", zhuyin: "ㄧˋ ㄑㄧˇ", vietnamese: "Cùng nhau", partOfSpeech: "Phó từ", exampleTraditional: "我們一起去吧！", examplePinyin: "Wǒmen yìqǐ qù ba!", exampleVietnamese: "Chúng ta cùng đi đi!" },
      { id: "v_31_2", traditional: "好嗎", pinyin: "Hǎo ma", zhuyin: "ㄏㄠˇ ㄇㄚ˙", vietnamese: "Được không?", partOfSpeech: "Trợ từ", exampleTraditional: "我們去喝茶，好嗎？", examplePinyin: "Wǒmen qù hē chá, hǎo ma?", exampleVietnamese: "Mình đi uống trà nhé, được không?" },
      { id: "v_31_3", traditional: "怎麼樣", pinyin: "Zěnme yàng", zhuyin: "ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ", vietnamese: "Thế nào, ra sao?", partOfSpeech: "Đại từ", exampleTraditional: "這本書怎麼樣？", examplePinyin: "Zhè běn shū zěnme yàng?", exampleVietnamese: "Cuốn sách này như thế nào?" },
      { id: "v_31_4", traditional: "太好了", pinyin: "Tài hǎo le", zhuyin: "ㄊㄞˋ ㄏㄠˇ ㄌㄜ˙", vietnamese: "Tốt quá rồi", partOfSpeech: "Cụm từ", exampleTraditional: "A: 一起吃飯吧！ B: 太好了！", examplePinyin: "A: Yìqǐ chīfàn ba! B: Tài hǎo le!", exampleVietnamese: "A: Cùng ăn cơm đi! B: Tuyệt quá!" },
      { id: "v_31_5", traditional: "不行", pinyin: "Bù xíng", zhuyin: "ㄅㄨˋ ㄒㄧㄥˊ", vietnamese: "Không được", partOfSpeech: "Tính từ", exampleTraditional: "明天不行，我很忙。", examplePinyin: "Míngtiān bù xíng, wǒ hěn máng.", exampleVietnamese: "Ngày mai không được đâu, tôi bận lắm." }
    ],
    sentencePatterns: [
      { traditional: "我們去...怎麼樣？", pinyin: "Wǒmen qù... zěnme yàng?", zhuyin: "ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ... ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ?", vietnamese: "Chúng ta đi... được không?", usage: "Xin ý kiến/Rủ rê." },
      { traditional: "我們一起...好嗎？", pinyin: "Wǒmen yì qǐ... hǎo ma?", zhuyin: "ㄨㄛˇ ㄇㄣ˙ ㄧˋ ㄑㄧˇ... ㄏㄠˇ ㄇㄚ˙?", vietnamese: "Chúng ta cùng... nhé?", usage: "Rủ rê một cách thân thiện." }
    ],
    listening: {
      title: "Rủ xem phim",
      transcriptTraditional: "A: 週末我們一起去看電影，好嗎？\nB: 週末不行，我要考試。\nA: 那下個星期怎麼樣？\nB: 太好了！",
      transcriptPinyin: "A: Zhōumò wǒmen yìqǐ qù kàn diànyǐng, hǎo ma?\nB: Zhōumò bù xíng, wǒ yào kǎoshì.\nA: Nà xià gè xīngqí zěnme yàng?\nB: Tài hǎo le!",
      transcriptVietnamese: "A: Cuối tuần này mình cùng đi xem phim nhé, được không?\nB: Cuối tuần không được, mình phải thi.\nA: Thế tuần sau thì sao?\nB: Tốt quá!",
      questions: [
        { id: "l_31_q1", type: "multiple_choice", question: "Họ quyết định khi nào sẽ đi xem phim?", options: ["Hôm nay", "Cuối tuần này", "Tuần sau", "Tháng sau"], correctAnswer: "Tuần sau", explanation: "A hẹn 下個星期怎麼樣？(Tuần sau thì sao) và B đồng ý 太好了 (Tuyệt quá)." }
      ]
    },
    reading: {
      title: "Hẹn ăn tối",
      passageTraditional: "大山，晚上我們去吃牛肉麵，好嗎？車站前面有一家很好吃的牛肉麵。吃完後我們去喝奶茶，怎麼樣？",
      passagePinyin: "Dàshān, wǎnshàng wǒmen qù chī niúròumiàn, hǎo ma? Chēzhàn qiánmiàn yǒu yì jiā hěn hǎochī de niúròumiàn. Chī wán hòu wǒmen qù hē nǎichá, zěnme yàng?",
      passageVietnamese: "Đại Sơn, buổi tối mình đi ăn mì bò nhé, được không? Phía trước nhà ga có một quán mì bò rất ngon. Ăn xong mình đi uống trà sữa, thế nào?",
      questions: [
        { id: "r_31_q1", type: "multiple_choice", question: "Người rủ muốn làm gì sau khi ăn xong mì bò?", options: ["Đi xem phim", "Đi uống trà sữa", "Đi dạo công viên", "Về nhà"], correctAnswer: "Đi uống trà sữa", explanation: "Đoạn văn viết: 吃完後我們去喝奶茶 (Ăn xong đi uống trà sữa)." }
      ]
    },
    speaking: {
      promptTraditional: "你想請朋友一起喝咖啡，你會怎麼用中文跟他說？",
      promptPinyin: "Nǐ xiǎng qǐng péngyǒu yìqǐ hē kāfēi, nǐ huì zěnme yòng zhōngwén gēn tā shuō?",
      promptVietnamese: "Bạn muốn rủ bạn bè đi uống cà phê, bạn sẽ nói bằng tiếng Trung như thế nào?",
      sampleAnswerTraditional: "我們一起去喝咖啡，好嗎？",
      sampleAnswerPinyin: "Wǒmen yìqǐ qù hē kāfēi, hǎo ma?",
      sampleAnswerVietnamese: "Chúng ta cùng đi uống cafe nhé, được không?"
    },
    writing: {
      promptVietnamese: "Hãy dùng tiếng Trung phồn thể viết: 'Chúng ta đi mua đồ, được không?'",
      suggestedAnswerTraditional: "我們去買東西，好嗎？",
      suggestedAnswerPinyin: "Wǒmen qù mǎi dōngxī, hǎo ma?",
      suggestedAnswerVietnamese: "Chúng mình đi mua đồ nhé?"
    },
    quiz: [
      { id: "q_31_1", type: "multiple_choice", question: "Mẫu câu '...怎麼樣?' (zěnme yàng) thường được dùng để làm gì?", options: ["Hỏi giờ", "Hỏi đường", "Hỏi ý kiến, rủ rê", "Từ chối"], correctAnswer: "Hỏi ý kiến, rủ rê", explanation: "怎么样 (zěnme yàng) có nghĩa là 'thế nào, được không', thường dùng để đề nghị hoặc hỏi ý kiến." }
    ]
  }
];
