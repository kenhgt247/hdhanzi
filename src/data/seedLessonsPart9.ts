import { Lesson } from '../types/lesson';

export const stage3LessonsPart2: Lesson[] = [
  {
    id: "lesson_24",
    day: 24,
    title: "Bài 24: Sở thích",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Sở thích",
    objectives: [
      "Học từ vựng một số hoạt động trong thời gian rảnh.",
      "Biết cách nói về sở thích của bản thân."
    ],
    vocabulary: [
      { id: "v_24_1", traditional: "喜歡", pinyin: "Xǐhuān", zhuyin: "ㄒㄧˇ ㄏㄨㄢ", vietnamese: "Thích", partOfSpeech: "Động từ", exampleTraditional: "我喜歡喝茶。", examplePinyin: "Wǒ xǐhuān hē chá.", exampleVietnamese: "Tôi thích uống trà." },
      { id: "v_24_2", traditional: "看書", pinyin: "Kàn shū", zhuyin: "ㄎㄢˋ ㄕㄨ", vietnamese: "Đọc sách", partOfSpeech: "Cụm động - danh", exampleTraditional: "我喜歡在家看書。", examplePinyin: "Wǒ xǐhuān zài jiā kàn shū.", exampleVietnamese: "Tôi thích đọc sách ở nhà." },
      { id: "v_24_3", traditional: "聽音樂", pinyin: "Tīng yīnyuè", zhuyin: "ㄊㄧㄥ ㄧㄣ ㄩㄝˋ", vietnamese: "Nghe nhạc", partOfSpeech: "Cụm động - danh", exampleTraditional: "他常常聽音樂。", examplePinyin: "Tā chángcháng tīng yīnyuè.", exampleVietnamese: "Anh ấy thường nghe nhạc." },
      { id: "v_24_4", traditional: "看電影", pinyin: "Kàn diànyǐng", zhuyin: "ㄎㄢˋ ㄉㄧㄢˋ ㄧㄥˇ", vietnamese: "Xem phim", partOfSpeech: "Cụm động - danh", exampleTraditional: "週末我們去看電影。", examplePinyin: "Zhōumò wǒmen qù kàn diànyǐng.", exampleVietnamese: "Cuối tuần chúng tôi đi xem phim." },
      { id: "v_24_5", traditional: "上網", pinyin: "Shàng wǎng", zhuyin: "ㄕㄤˋ ㄨㄤˇ", vietnamese: "Lên mạng", partOfSpeech: "Cụm động - danh", exampleTraditional: "哥哥每天都上網。", examplePinyin: "Gēgē měitiān dōu shàng wǎng.", exampleVietnamese: "Anh trai ngày nào cũng lên mạng." },
      { id: "v_24_6", traditional: "做什麼", pinyin: "Zuò shénme", zhuyin: "ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙", vietnamese: "Làm gì", partOfSpeech: "Cụm từ", exampleTraditional: "你在做什麼？", examplePinyin: "Nǐ zài zuò shénme?", exampleVietnamese: "Bạn đang làm gì?" }
    ],
    sentencePatterns: [
      { traditional: "你喜歡做什麼？", pinyin: "Nǐ xǐhuān zuò shénme?", zhuyin: "ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙?", vietnamese: "Bạn thích làm gì?", usage: "Hỏi sở thích." },
      { traditional: "我喜歡...", pinyin: "Wǒ xǐhuān...", zhuyin: "ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ...", vietnamese: "Tôi thích...", usage: "Nói về sở thích." }
    ],
    listening: {
      title: "Thời gian rảnh rỗi",
      transcriptTraditional: "A: 你週末喜歡做什麼？\nB: 我喜歡看書和聽音樂。你呢？\nA: 我不喜歡看書。我喜歡上網。",
      transcriptPinyin: "A: Nǐ zhōumò xǐhuān zuò shénme?\nB: Wǒ xǐhuān kàn shū hé tīng yīnyuè. Nǐ ne?\nA: Wǒ bù xǐhuān kàn shū. Wǒ xǐhuān shàng wǎng.",
      transcriptVietnamese: "A: Cuối tuần bạn thích làm gì?\nB: Tôi thích đọc sách và nghe nhạc. Còn bạn?\nA: Tôi không thích đọc sách. Tôi thích lên mạng.",
      questions: [
        { id: "l_24_q1", type: "multiple_choice", question: "Nhân vật A thích làm gì?", options: ["Đọc sách", "Lên mạng", "Nghe nhạc", "Nấu ăn"], correctAnswer: "Lên mạng", explanation: "A nói 我喜歡上網 (Tôi thích lên mạng)." }
      ]
    },
    reading: {
      title: "Sở thích của gia đình",
      passageTraditional: "我家每個人的愛好都不一樣。爸爸喜歡看電視。媽媽喜歡買東西。我喜歡聽音樂，弟弟喜歡上網玩遊戲。",
      passagePinyin: "Wǒ jiā měi gè rén de àihào dōu bù yíyàng. Bàba xǐhuān kàn diànshì. Māmā xǐhuān mǎi dōngxī. Wǒ xǐhuān tīng yīnyuè, dìdì xǐhuān shàngwǎng wán yóuxì.",
      passageVietnamese: "Sở thích của mỗi người trong nhà tôi đều không giống nhau. Bố thích xem TV. Mẹ thích đi mua sắm. Tôi thích nghe nhạc, còn em trai thích lên mạng chơi điện tử.",
      questions: [
        { id: "r_24_q1", type: "multiple_choice", question: "Mẹ thích làm gì?", options: ["Nghe nhạc", "Đi mua sắm", "Chơi điện tử", "Xem TV"], correctAnswer: "Đi mua sắm", explanation: "Đoạn văn viết 媽媽喜歡買東西 (Mẹ thích mua sắm đồ)." }
      ]
    },
    speaking: {
      promptTraditional: "請用中文告訴我，你放假的時候喜歡做什麼？",
      promptPinyin: "Qǐng yòng zhōngwén gàosù wǒ, nǐ fàngjià de shíhòu xǐhuān zuò shénme?",
      promptVietnamese: "Bằng tiếng Trung, hãy cho biết lúc nghỉ bạn thích làm gì?",
      sampleAnswerTraditional: "我放假的時候喜歡看電影。",
      sampleAnswerPinyin: "Wǒ fàngjià de shíhòu xǐhuān kàn diànyǐng.",
      sampleAnswerVietnamese: "Vào ngày lễ tôi thích đi xem phim."
    },
    writing: {
      promptVietnamese: "Viết câu 'Tôi thích nghe nhạc' bằng chữ phồn thể.",
      suggestedAnswerTraditional: "我喜歡聽音樂。",
      suggestedAnswerPinyin: "Wǒ xǐhuān tīng yīnyuè.",
      suggestedAnswerVietnamese: "Tôi thích nghe nhạc."
    },
    quiz: [
      { id: "q_24_1", type: "multiple_choice", question: "Từ '聽' (Tīng) có nghĩa là gì?", options: ["Nói", "Nhìn", "Nghe", "Ăn"], correctAnswer: "Nghe", explanation: "聽 (Tīng) nghĩa là nghe." }
    ]
  },
  {
    id: "lesson_25",
    day: 25,
    title: "Bài 25: Mua sắm cơ bản",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Mua sắm",
    objectives: [
      "Học từ vựng liên quan đến tiền và mua sắm.",
      "Biết cách hỏi giá và trả lời giá."
    ],
    vocabulary: [
      { id: "v_25_1", traditional: "買", pinyin: "Mǎi", zhuyin: "ㄇㄞˇ", vietnamese: "Mua", partOfSpeech: "Động từ", exampleTraditional: "我要買這個。", examplePinyin: "Wǒ yào mǎi zhège.", exampleVietnamese: "Tôi muốn mua cái này." },
      { id: "v_25_2", traditional: "東西", pinyin: "Dōngxī", zhuyin: "ㄉㄨㄥ ㄒㄧ", vietnamese: "Đồ vật, thứ gì đó", partOfSpeech: "Danh từ", exampleTraditional: "買東西", examplePinyin: "Mǎi dōngxī", exampleVietnamese: "Mua sắm đồ đạc" },
      { id: "v_25_3", traditional: "多少", pinyin: "Duōshǎo", zhuyin: "ㄉㄨㄛ ㄕㄠˇ", vietnamese: "Bao nhiêu", partOfSpeech: "Đại từ", exampleTraditional: "多少錢？", examplePinyin: "Duōshǎo qián?", exampleVietnamese: "Bao nhiêu tiền?" },
      { id: "v_25_4", traditional: "錢", pinyin: "Qián", zhuyin: "ㄑㄧㄢˊ", vietnamese: "Tiền", partOfSpeech: "Danh từ", exampleTraditional: "我有錢。", examplePinyin: "Wǒ yǒu qián.", exampleVietnamese: "Tôi có tiền." },
      { id: "v_25_5", traditional: "塊", pinyin: "Kuài", zhuyin: "ㄎㄨㄞˋ", vietnamese: "Đồng", partOfSpeech: "Lượng từ", exampleTraditional: "一百塊", examplePinyin: "Yìbǎi kuài", exampleVietnamese: "100 đồng" },
      { id: "v_25_6", traditional: "太貴了", pinyin: "Tài guì le", zhuyin: "ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙", vietnamese: "Đắt quá", partOfSpeech: "Cụm tính từ", exampleTraditional: "這個太貴了！", examplePinyin: "Zhège tài guì le!", exampleVietnamese: "Cái này đắt quá!" }
    ],
    sentencePatterns: [
      { traditional: "這個多少錢？", pinyin: "Zhè gè duō shǎo qián?", zhuyin: "ㄓㄜˋ ㄍㄜ˙ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", vietnamese: "Cái này bao nhiêu tiền?", usage: "Hỏi giá cả." },
      { traditional: "...塊錢。", pinyin: "...kuài qián.", zhuyin: "...ㄎㄨㄞˋ ㄑㄧㄢˊ.", vietnamese: "...đồng.", usage: "Nói số tiền." }
    ],
    listening: {
      title: "Hỏi giá đồ uống",
      transcriptTraditional: "A: 請問，這杯茶多少錢？\nB: 三十塊。\nA: 那杯奶茶呢？\nB: 奶茶五十塊。你要哪一個？\nA: 我買這杯茶。",
      transcriptPinyin: "A: Qǐngwèn, zhè bēi chá duōshǎo qián?\nB: Sānshí kuài.\nA: Nà bēi nǎichá ne?\nB: Nǎichá wǔshí kuài. Nǐ yào nǎ yí gè?\nA: Wǒ mǎi zhè bēi chá.",
      transcriptVietnamese: "A: Xin hỏi, ly trà này bao nhiêu tiền?\nB: 30 đồng.\nA: Thế ly trà sữa kia?\nB: Trà sữa 50 đồng. Bạn muốn lấy cái nào?\nA: Tôi mua ly trà này.",
      questions: [
        { id: "l_25_q1", type: "multiple_choice", question: "Khách hàng (A) quyết định mua món nào?", options: ["Cà phê", "Trà", "Trà sữa", "Không mua gì"], correctAnswer: "Trà", explanation: "Khách chốt câu 我買這杯茶 (Tôi mua ly trà này)." }
      ]
    },
    reading: {
      title: "Siêu thị buổi tối",
      passageTraditional: "晚上我去超市。超市的東西不貴。我買了麵和青菜。麵五十塊，青菜二十塊。總共七十塊錢。",
      passagePinyin: "Wǎnshàng wǒ qù chāoshì. Chāoshì de dōngxī bú guì. Wǒ mǎile miàn hé qīngcài. Miàn wǔshí kuài, qīngcài èrshí kuài. Zǒnggòng qīshí kuài qián.",
      passageVietnamese: "Tối nay tôi đi siêu thị. Đồ ở siêu thị không đắt. Tôi đã mua mì và rau. Mì 50 đồng, rau 20 đồng. Tổng cộng 70 đồng.",
      questions: [
        { id: "r_25_q1", type: "true_false", question: "Tổng số tiền người đó mua là 70 đồng. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết 總共七十塊錢 (Tổng cộng là 70 đồng)." }
      ]
    },
    speaking: {
      promptTraditional: "你想問老闆一件衣服的價錢，你怎麼說？",
      promptPinyin: "Nǐ xiǎng wèn lǎobān yí jiàn yīfú de jiàqián, nǐ zěnme shuō?",
      promptVietnamese: "Bạn muốn hỏi chủ quán giá của một cái quần/áo, bạn sẽ nói bằng tiếng Trung thế nào?",
      sampleAnswerTraditional: "老闆，請問這個多少錢？",
      sampleAnswerPinyin: "Lǎobān, qǐngwèn zhège duōshǎo qián?",
      sampleAnswerVietnamese: "Ông chủ, xin hỏi cái này bao nhiêu tiền?"
    },
    writing: {
      promptVietnamese: "Viết bằng chữ Hán: 'Bao nhiêu tiền?'",
      suggestedAnswerTraditional: "多少錢？",
      suggestedAnswerPinyin: "Duōshǎo qián?",
      suggestedAnswerVietnamese: "Bao nhiêu tiền?"
    },
    quiz: [
      { id: "q_25_1", type: "multiple_choice", question: "Mẫu câu chê món hàng đắt nói thế nào?", options: ["太好了 (Tài hǎo le)", "太貴了 (Tài guì le)", "太大了 (Tài dà le)", "多少錢 (Duōshǎo qián)"], correctAnswer: "太貴了 (Tài guì le)", explanation: "太貴了 nghĩa là đắt quá." }
    ]
  },
  {
    id: "lesson_26",
    day: 26,
    title: "Bài 26: Thời tiết",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Thời tiết",
    objectives: [
      "Học một số từ vựng về thời tiết.",
      "Biết cách hỏi và trả lời về thời tiết hôm nay."
    ],
    vocabulary: [
      { id: "v_26_1", traditional: "天氣", pinyin: "Tiānqì", zhuyin: "ㄊㄧㄢ ㄑㄧˋ", vietnamese: "Thời tiết", partOfSpeech: "Danh từ", exampleTraditional: "今天天氣很好。", examplePinyin: "Jīntiān tiānqì hěn hǎo.", exampleVietnamese: "Hôm nay thời tiết rất đẹp." },
      { id: "v_26_2", traditional: "熱", pinyin: "Rè", zhuyin: "ㄖㄜˋ", vietnamese: "Nóng", partOfSpeech: "Tính từ", exampleTraditional: "今天很熱。", examplePinyin: "Jīntiān hěn rè.", exampleVietnamese: "Hôm nay rất nóng." },
      { id: "v_26_3", traditional: "冷", pinyin: "Lěng", zhuyin: "ㄌㄥˇ", vietnamese: "Lạnh", partOfSpeech: "Tính từ", exampleTraditional: "我不喜歡冷的天氣。", examplePinyin: "Wǒ bù xǐhuān lěng de tiānqì.", exampleVietnamese: "Tôi không thích thời tiết lạnh." },
      { id: "v_26_4", traditional: "下雨", pinyin: "Xià yǔ", zhuyin: "ㄒㄧㄚˋ ㄩˇ", vietnamese: "Trời mưa", partOfSpeech: "Động từ", exampleTraditional: "明天會下雨。", examplePinyin: "Míngtiān huì xià yǔ.", exampleVietnamese: "Ngày mai trời sẽ mưa." },
      { id: "v_26_5", traditional: "晴天", pinyin: "Qíngtiān", zhuyin: "ㄑㄧㄥˊ ㄊㄧㄢ", vietnamese: "Trời nắng, tạnh ráo", partOfSpeech: "Danh từ", exampleTraditional: "今天是晴天。", examplePinyin: "Jīntiān shì qíngtiān.", exampleVietnamese: "Hôm nay trời đẹp tạnh ráo." }
    ],
    sentencePatterns: [
      { traditional: "今天天氣怎麼樣？", pinyin: "Jīntiān tiānqì zěnme yàng?", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄊㄧㄢ ㄑㄧˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ?", vietnamese: "Hôm nay thời tiết thế nào?", usage: "Hỏi về thời tiết." },
      { traditional: "今天很...", pinyin: "Jīntiān hěn...", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ...", vietnamese: "Hôm nay rất...", usage: "Nói về thời tiết." }
    ],
    listening: {
      title: "Dự báo thời tiết",
      transcriptTraditional: "A: 明天我們去公園好嗎？\nB: 明天會下雨，天氣不好。\nA: 那我們去喝茶吧。",
      transcriptPinyin: "A: Míngtiān wǒmen qù gōngyuán hǎo ma?\nB: Míngtiān huì xià yǔ, tiānqì bù hǎo.\nA: Nà wǒmen qù hē chá ba.",
      transcriptVietnamese: "A: Ngày mai chúng ta đi công viên được không?\nB: Ngày mai trời sẽ mưa, thời tiết không tốt.\nA: Vậy chúng ta đi uống trà đi.",
      questions: [
        { id: "l_26_q1", type: "multiple_choice", question: "Thời tiết ngày mai như thế nào?", options: ["Trời nắng", "Trời lạnh", "Trời mưa", "Trời nóng"], correctAnswer: "Trời mưa", explanation: "B nói: 明天會下雨 (Ngày mai sẽ mưa)." }
      ]
    },
    reading: {
      title: "Thời tiết ở Đài Loan",
      passageTraditional: "台灣的夏天很熱，常常下雨。冬天不太冷。我喜歡春天，因為春天不冷也不熱，天氣很好。",
      passagePinyin: "Táiwān de xiàtiān hěn rè, chángcháng xià yǔ. Dōngtiān bú tài lěng. Wǒ xǐhuān chūntiān, yīnwèi chūntiān bù lěng yě bú rè, tiānqì hěn hǎo.",
      passageVietnamese: "Mùa hè ở Đài Loan rất nóng, thường xuyên có mưa. Mùa đông không quá lạnh. Tôi thích mùa xuân, bởi vì mùa xuân không lạnh cũng không nóng, thời tiết rất đẹp.",
      questions: [
        { id: "r_26_q1", type: "true_false", question: "Mùa đông ở Đài Loan rất lạnh. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết: 冬天不太冷 (Mùa đông không quá lạnh)." }
      ]
    },
    speaking: {
      promptTraditional: "請用中文告訴我，今天的天氣怎麼樣？",
      promptPinyin: "Qǐng yòng zhōngwén gàosù wǒ, jīntiān de tiānqì zěnme yàng?",
      promptVietnamese: "Bằng tiếng Trung, hãy cho biết thời tiết hôm nay thế nào?",
      sampleAnswerTraditional: "今天天氣很熱，沒有下雨。",
      sampleAnswerPinyin: "Jīntiān tiānqì hěn rè, méiyǒu xià yǔ.",
      sampleAnswerVietnamese: "Hôm nay thời tiết rất nóng, không có mưa."
    },
    writing: {
      promptVietnamese: "Hãy viết bằng tiếng Trung: 'Hôm nay thời tiết rất đẹp'.",
      suggestedAnswerTraditional: "今天天氣很好。",
      suggestedAnswerPinyin: "Jīntiān tiānqì hěn hǎo.",
      suggestedAnswerVietnamese: "Hôm nay thời tiết rất đẹp."
    },
    quiz: [
      { id: "q_26_1", type: "multiple_choice", question: "Từ '下雨' (xià yǔ) nghĩa là gì?", options: ["Trời nắng", "Trời mưa", "Trời lạnh", "Có gió"], correctAnswer: "Trời mưa", explanation: "下雨 (xià yǔ) là trời mưa." }
    ]
  }
];
