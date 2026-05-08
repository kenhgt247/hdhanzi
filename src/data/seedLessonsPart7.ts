import { Lesson } from '../types/lesson';

export const stage2LessonsPart2: Lesson[] = [
  {
    id: "lesson_16",
    day: 16,
    title: "Bài 16: Màu sắc",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Màu sắc",
    objectives: [
      "Nhận biết được các màu sắc cơ bản.",
      "Có thể mô tả màu sắc của đồ vật."
    ],
    vocabulary: [
      { id: "v_16_1", traditional: "顏色", pinyin: "Yánsè", zhuyin: "ㄧㄢˊ ㄙㄜˋ", vietnamese: "Màu sắc", partOfSpeech: "Danh từ", exampleTraditional: "你喜歡什麼顏色？", examplePinyin: "Nǐ xǐhuān shénme yánsè?", exampleVietnamese: "Bạn thích màu gì?" },
      { id: "v_16_2", traditional: "紅色", pinyin: "Hóngsè", zhuyin: "ㄏㄨㄥˊ ㄙㄜˋ", vietnamese: "Màu đỏ", partOfSpeech: "Danh từ", exampleTraditional: "紅色的衣服", examplePinyin: "Hóngsè de yīfú", exampleVietnamese: "Quần áo màu đỏ" },
      { id: "v_16_3", traditional: "藍色", pinyin: "Lánsè", zhuyin: "ㄌㄢˊ ㄙㄜˋ", vietnamese: "Màu xanh dương", partOfSpeech: "Danh từ", exampleTraditional: "藍色的天空", examplePinyin: "Lánsè de tiānkōng", exampleVietnamese: "Bầu trời xanh dương" },
      { id: "v_16_4", traditional: "黃色", pinyin: "Huángsè", zhuyin: "ㄏㄨㄤˊ ㄙㄜˋ", vietnamese: "Màu vàng", partOfSpeech: "Danh từ", exampleTraditional: "黃色的花", examplePinyin: "Huángsè de huā", exampleVietnamese: "Hoa màu vàng" },
      { id: "v_16_5", traditional: "黑色", pinyin: "Hēisè", zhuyin: "ㄏㄟ ㄙㄜˋ", vietnamese: "Màu đen", partOfSpeech: "Danh từ", exampleTraditional: "黑色的鞋子", examplePinyin: "Hēisè de xiézǐ", exampleVietnamese: "Giày đen" },
      { id: "v_16_6", traditional: "白色", pinyin: "Báisè", zhuyin: "ㄅㄞˊ ㄙㄜˋ", vietnamese: "Màu trắng", partOfSpeech: "Danh từ", exampleTraditional: "白色的紙", examplePinyin: "Báisè de zhǐ", exampleVietnamese: "Giấy trắng" }
    ],
    sentencePatterns: [
      { traditional: "這是什麼顏色？", pinyin: "Zhè shì shénme yánsè?", zhuyin: "ㄓㄜˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ?", vietnamese: "Đây là màu gì?", usage: "Hỏi màu sắc." },
      { traditional: "我喜歡...色。", pinyin: "Wǒ xǐhuān... sè.", zhuyin: "ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ... ㄙㄜˋ.", vietnamese: "Tôi thích màu...", usage: "Nói về màu yêu thích." }
    ],
    listening: {
      title: "Màu sắc yêu thích",
      transcriptTraditional: "A: 你喜歡什麼顏色？\nB: 我喜歡紅色和白色。你呢？\nA: 我喜歡藍色。",
      transcriptPinyin: "A: Nǐ xǐhuān shénme yánsè?\nB: Wǒ xǐhuān hóngsè hé báisè. Nǐ ne?\nA: Wǒ xǐhuān lánsè.",
      transcriptVietnamese: "A: Bạn thích màu gì?\nB: Tôi thích màu đỏ và màu trắng. Còn bạn?\nA: Tôi thích màu xanh dương.",
      questions: [
        { id: "l_16_q1", type: "multiple_choice", question: "Nhân vật A thích màu gì?", options: ["Đỏ", "Trắng", "Xanh dương", "Đen"], correctAnswer: "Xanh dương", explanation: "A nói '我喜歡藍色' (Tôi thích màu xanh dương)." }
      ]
    },
    reading: {
      title: "Quần áo mới",
      passageTraditional: "今天我買了一件新衣服。這是一件紅色的外套。我很喜歡。我的朋友買了一件黑色的外套。",
      passagePinyin: "Jīntiān wǒ mǎile yí jiàn xīn yīfú. Zhè shì yí jiàn hóngsè de wàitào. Wǒ hěn xǐhuān. Wǒ de péngyǒu mǎile yí jiàn hēisè de wàitào.",
      passageVietnamese: "Hôm nay tôi đã mua một món quần áo mới. Đây là một chiếc áo khoác màu đỏ. Tôi rất thích. Bạn tôi đã mua một chiếc áo khoác đen.",
      questions: [
        { id: "r_16_q1", type: "true_false", question: "Người viết mua áo khoác màu đen. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Người viết mua áo đỏ (紅色的外套)." }
      ]
    },
    speaking: {
      promptTraditional: "請告訴我，你現在穿什麼顏色的衣服？",
      promptPinyin: "Qǐng gàosù wǒ, nǐ xiànzài chuān shénme yánsè de yīfú?",
      promptVietnamese: "Hãy nói cho tôi biết hiện tại bạn đang mặc quần áo màu gì?",
      sampleAnswerTraditional: "我現在穿白色的衣服。",
      sampleAnswerPinyin: "Wǒ xiànzài chuān báisè de yīfú.",
      sampleAnswerVietnamese: "Tôi đang mặc áo màu trắng."
    },
    writing: {
      promptVietnamese: "Viết bằng tiếng Trung: 'Tôi thích màu đỏ.'",
      suggestedAnswerTraditional: "我喜歡紅色。",
      suggestedAnswerPinyin: "Wǒ xǐhuān hóngsè.",
      suggestedAnswerVietnamese: "Tôi thích màu đỏ."
    },
    quiz: [
      { id: "q_16_1", type: "multiple_choice", question: "Từ '藍色' (lánsè) nghĩa là màu gì?", options: ["Đỏ", "Xanh dương", "Vàng", "Trắng"], correctAnswer: "Xanh dương", explanation: "藍色 (lánsè) là màu xanh dương." }
    ]
  },
  {
    id: "lesson_17",
    day: 17,
    title: "Bài 17: Động vật",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Động vật",
    objectives: [
      "Học từ vựng một số loài động vật quen thuộc.",
      "Sử dụng lượng từ thích hợp cho động vật."
    ],
    vocabulary: [
      { id: "v_17_1", traditional: "狗", pinyin: "Gǒu", zhuyin: "ㄍㄡˇ", vietnamese: "Chó", partOfSpeech: "Danh từ", exampleTraditional: "我有一隻狗。", examplePinyin: "Wǒ yǒu yì zhī gǒu.", exampleVietnamese: "Tôi có một con chó." },
      { id: "v_17_2", traditional: "貓", pinyin: "Māo", zhuyin: "ㄇㄠ", vietnamese: "Mèo", partOfSpeech: "Danh từ", exampleTraditional: "這隻貓很可愛。", examplePinyin: "Zhè zhī māo hěn kě'ài.", exampleVietnamese: "Con mèo này rất đáng yêu." },
      { id: "v_17_3", traditional: "鳥", pinyin: "Niǎo", zhuyin: "ㄋㄧㄠˇ", vietnamese: "Chim", partOfSpeech: "Danh từ", exampleTraditional: "樹上有一隻鳥。", examplePinyin: "Shù shàng yǒu yì zhī niǎo.", exampleVietnamese: "Trên cây có một con chim." },
      { id: "v_17_4", traditional: "魚", pinyin: "Yú", zhuyin: "ㄩˊ", vietnamese: "Cá", partOfSpeech: "Danh từ", exampleTraditional: "我不喜歡吃魚。", examplePinyin: "Wǒ bù xǐhuān chī yú.", exampleVietnamese: "Tôi không thích ăn cá." },
      { id: "v_17_5", traditional: "隻", pinyin: "Zhī", zhuyin: "ㄓ", vietnamese: "Con (Lượng từ)", partOfSpeech: "Lượng từ", exampleTraditional: "兩隻狗", examplePinyin: "Liǎng zhī gǒu", exampleVietnamese: "Hai con chó" }
    ],
    sentencePatterns: [
      { traditional: "這是一隻...。", pinyin: "Zhè shì yì zhī...", zhuyin: "ㄓㄜˋ ㄕˋ ㄧˋ ㄓ...", vietnamese: "Đây là một con...", usage: "Dùng để mô tả động vật." }
    ],
    listening: {
      title: "Thú cưng",
      transcriptTraditional: "A: 你家有寵物嗎？\nB: 有，我家有兩隻貓和一隻狗。你呢？\nA: 我沒有寵物，但是我很喜歡狗。",
      transcriptPinyin: "A: Nǐ jiā yǒu chǒngwù ma?\nB: Yǒu, wǒ jiā yǒu liǎng zhī māo hé yì zhī gǒu. Nǐ ne?\nA: Wǒ méiyǒu chǒngwù, dànshì wǒ hěn xǐhuān gǒu.",
      transcriptVietnamese: "A: Nhà bạn có thú cưng không?\nB: Có, nhà tôi có 2 con mèo và 1 con chó. Bạn thì sao?\nA: Tôi không có thú cưng, nhưng tôi rất thích chó.",
      questions: [
        { id: "l_17_q1", type: "multiple_choice", question: "Nhà B có bao nhiêu con mèo?", options: ["1 con", "2 con", "3 con", "Không có"], correctAnswer: "2 con", explanation: "B nói 兩隻貓 (2 con mèo)." }
      ]
    },
    reading: {
      title: "Động vật",
      passageTraditional: "公園裡有很多動物。有白色的鳥，水裡有紅色的魚。還有一隻可愛的小狗。",
      passagePinyin: "Gōngyuán lǐ yǒu hěnduō dòngwù. Yǒu báisè de niǎo, shuǐ lǐ yǒu hóngsè de yú. Hái yǒu yì zhī kě'ài de xiǎo gǒu.",
      passageVietnamese: "Trong công viên có rất nhiều động vật. Có con chim màu trắng, dưới nước có cá màu đỏ. Còn có một chú chó nhỏ đáng yêu.",
      questions: [
        { id: "r_17_q1", type: "multiple_choice", question: "Cá dưới nước có màu gì?", options: ["Trắng", "Đỏ", "Đen", "Xanh dương"], correctAnswer: "Đỏ", explanation: "Đoạn văn viết 紅色的魚 (Cá nàu đỏ)." }
      ]
    },
    speaking: {
      promptTraditional: "你喜歡貓還是狗？為什麼？",
      promptPinyin: "Nǐ xǐhuān māo háishì gǒu? Wèishéme?",
      promptVietnamese: "Bạn thích mèo hay chó? Tại sao?",
      sampleAnswerTraditional: "我喜歡貓，因為貓很可愛。",
      sampleAnswerPinyin: "Wǒ xǐhuān māo, yīnwèi māo hěn kě'ài.",
      sampleAnswerVietnamese: "Tôi thích mèo, vì mèo rất đáng yêu."
    },
    writing: {
      promptVietnamese: "Viết lượng từ dành cho động vật chung (ví dụ: một CON chó) trong tiếng Trung phồn thể.",
      suggestedAnswerTraditional: "隻",
      suggestedAnswerPinyin: "zhī",
      suggestedAnswerVietnamese: "lượng từ 隻"
    },
    quiz: [
      { id: "q_17_1", type: "multiple_choice", question: "Từ '貓' (māo) có nghĩa là gì?", options: ["Chó", "Cá", "Mèo", "Chim"], correctAnswer: "Mèo", explanation: "貓 (māo) là con mèo." }
    ]
  },
  {
    id: "lesson_18",
    day: 18,
    title: "Bài 18: Đồ ăn",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Ẩm thực",
    objectives: [
      "Học một số từ vựng về thức ăn phổ biến.",
      "Biết cách nói thích hoặc không thích đồ ăn gì."
    ],
    vocabulary: [
      { id: "v_18_1", traditional: "吃飯", pinyin: "Chīfàn", zhuyin: "ㄔ ㄈㄢˋ", vietnamese: "Ăn cơm", partOfSpeech: "Động từ", exampleTraditional: "我們去吃飯吧。", examplePinyin: "Wǒmen qù chīfàn ba.", exampleVietnamese: "Chúng ta đi ăn cơm thôi." },
      { id: "v_18_2", traditional: "麵", pinyin: "Miàn", zhuyin: "ㄇㄧㄢˋ", vietnamese: "Mì", partOfSpeech: "Danh từ", exampleTraditional: "牛肉麵", examplePinyin: "Niúròu miàn", exampleVietnamese: "Mì bò" },
      { id: "v_18_3", traditional: "肉", pinyin: "Ròu", zhuyin: "ㄖㄡˋ", vietnamese: "Thịt", partOfSpeech: "Danh từ", exampleTraditional: "我不吃肉。", examplePinyin: "Wǒ bù chī ròu.", exampleVietnamese: "Tôi không ăn thịt." },
      { id: "v_18_4", traditional: "菜", pinyin: "Cài", zhuyin: "ㄘㄞˋ", vietnamese: "Rau, món ăn", partOfSpeech: "Danh từ", exampleTraditional: "青菜", examplePinyin: "Qīngcài", exampleVietnamese: "Rau xanh" },
      { id: "v_18_5", traditional: "好吃", pinyin: "Hǎochī", zhuyin: "ㄏㄠˇ ㄔ", vietnamese: "Ngon", partOfSpeech: "Tính từ", exampleTraditional: "這個很好吃。", examplePinyin: "Zhège hěn hǎochī.", exampleVietnamese: "Món này rất ngon." }
    ],
    sentencePatterns: [
      { traditional: "你想吃什麼？", pinyin: "Nǐ xiǎng chī shénme?", zhuyin: "ㄋㄧˇ ㄒㄧㄤˇ ㄔ ㄕㄣˊ ㄇㄜ˙?", vietnamese: "Bạn muốn ăn gì?", usage: "Hỏi ý món ăn." },
      { traditional: "我想吃...", pinyin: "Wǒ xiǎng chī...", zhuyin: "ㄨㄛˇ ㄒㄧㄤˇ ㄔ...", vietnamese: "Tôi muốn ăn...", usage: "Nêu món muốn ăn." }
    ],
    listening: {
      title: "Chọn món",
      transcriptTraditional: "A: 你想吃什麼？\nB: 我想吃牛肉麵，你呢？\nA: 我不想吃麵，我想吃飯和吃菜。",
      transcriptPinyin: "A: Nǐ xiǎng chī shénme?\nB: Wǒ xiǎng chī niúròumiàn, nǐ ne?\nA: Wǒ bù xiǎng chī miàn, wǒ xiǎng chīfàn hé chī cài.",
      transcriptVietnamese: "A: Bạn muốn ăn gì?\nB: Tôi muốn ăn mì bò, còn bạn?\nA: Tôi không muốn ăn mì, tôi muốn ăn cơm và ăn rau.",
      questions: [
        { id: "l_18_q1", type: "true_false", question: "Nhân vật A muốn ăn mì. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "A nói 我不想吃麵 (Tôi không muốn ăn mì)." }
      ]
    },
    reading: {
      title: "Món ăn Đài Loan",
      passageTraditional: "台灣有很多好吃的食物。我很喜歡吃牛肉麵和臭豆腐。牛肉麵常常有很多肉。臭豆腐很香很好吃。",
      passagePinyin: "Táiwān yǒu hěnduō hǎochī de shíwù. Wǒ hěn xǐhuān chī niúròumiàn hé chòu dòufu. Niúròumiàn chángcháng yǒu hěnduō ròu. Chòu dòufu hěn xiāng hěn hǎochī.",
      passageVietnamese: "Đài Loan có rất nhiều thức ăn ngon. Tôi rất thích ăn mì bò và đậu phụ thối. Mì bò thường có rất nhiều thịt. Đậu phụ thối rất thơm và ngon.",
      questions: [
        { id: "r_18_q1", type: "multiple_choice", question: "Tác giả thích món ăn gì?", options: ["Mì bò", "Sủi cảo", "Gà rán", "Pizza"], correctAnswer: "Mì bò", explanation: "Tác giả nói thích ăn 牛肉麵 (Mì bò)." }
      ]
    },
    speaking: {
      promptTraditional: "你最喜歡吃什麼？",
      promptPinyin: "Nǐ zuì xǐhuān chī shénme?",
      promptVietnamese: "Bạn thích ăn món gì nhất?",
      sampleAnswerTraditional: "我最喜歡吃麵。",
      sampleAnswerPinyin: "Wǒ zuì xǐhuān chī miàn.",
      sampleAnswerVietnamese: "Tôi thích ăn mì nhất."
    },
    writing: {
      promptVietnamese: "Viết bằng tiếng Trung: 'Cái này rất ngon.'",
      suggestedAnswerTraditional: "這個很好吃。",
      suggestedAnswerPinyin: "Zhège hěn hǎochī.",
      suggestedAnswerVietnamese: "Cái này rất ngon."
    },
    quiz: [
      { id: "q_18_1", type: "fill_blank", question: "你想__(ăn)__什麼？", correctAnswer: "吃", explanation: "吃 (Chī) nghĩa là ăn." }
    ]
  },
  {
    id: "lesson_19",
    day: 19,
    title: "Bài 19: Đồ uống",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Ẩm thực",
    objectives: [
      "Học một số từ vựng về đồ uống.",
      "Cách gọi một số lượng đồ uống."
    ],
    vocabulary: [
      { id: "v_19_1", traditional: "喝", pinyin: "Hē", zhuyin: "ㄏㄜ", vietnamese: "Uống", partOfSpeech: "Động từ", exampleTraditional: "喝水", examplePinyin: "Hē shuǐ", exampleVietnamese: "Uống nước" },
      { id: "v_19_2", traditional: "水", pinyin: "Shuǐ", zhuyin: "ㄕㄨㄟˇ", vietnamese: "Nước", partOfSpeech: "Danh từ", exampleTraditional: "請給我一杯水。", examplePinyin: "Qǐng gěi wǒ yì bēi shuǐ.", exampleVietnamese: "Xin cho tôi một cốc nước." },
      { id: "v_19_3", traditional: "茶", pinyin: "Chá", zhuyin: "ㄔㄚˊ", vietnamese: "Trà", partOfSpeech: "Danh từ", exampleTraditional: "喝茶", examplePinyin: "Hē chá", exampleVietnamese: "Uống trà" },
      { id: "v_19_4", traditional: "珍珠奶茶", pinyin: "Zhēnzhū nǎichá", zhuyin: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", vietnamese: "Trà sữa trân châu", partOfSpeech: "Danh từ", exampleTraditional: "台灣珍珠奶茶很好喝。", examplePinyin: "Táiwān zhēnzhū nǎichá hěn hǎohē.", exampleVietnamese: "Trà sữa Đài Loan rất ngon." },
      { id: "v_19_5", traditional: "杯", pinyin: "Bēi", zhuyin: "ㄅㄟ", vietnamese: "Cốc, ly (Lượng từ)", partOfSpeech: "Lượng từ", exampleTraditional: "兩杯茶", examplePinyin: "Liǎng bēi chá", exampleVietnamese: "Hai cốc trà" },
      { id: "v_19_6", traditional: "好喝", pinyin: "Hǎohē", zhuyin: "ㄏㄠˇ ㄏㄜ", vietnamese: "Ngon (Dùng cho nước uống)", partOfSpeech: "Tính từ", exampleTraditional: "這杯奶茶很好喝。", examplePinyin: "Zhè bēi nǎichá hěn hǎohē.", exampleVietnamese: "Cốc trà sữa này rất ngon." }
    ],
    sentencePatterns: [
      { traditional: "我要一杯...", pinyin: "Wǒ yào yì bēi...", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄧˋ ㄅㄟ...", vietnamese: "Tôi muốn một ly...", usage: "Gọi đồ uống." }
    ],
    listening: {
      title: "Trong tiệm đồ uống",
      transcriptTraditional: "A: 你好，請問要喝什麼？\nB: 我要一杯珍珠奶茶，謝謝。\nA: 好的，五十元。",
      transcriptPinyin: "A: Nǐ hǎo, qǐngwèn yào hē shénme?\nB: Wǒ yào yì bēi zhēnzhū nǎichá, xièxiè.\nA: Hǎo de, wǔshí yuán.",
      transcriptVietnamese: "A: Xin chào, xin hỏi muốn uống gì?\nB: Tôi muốn 1 ly trà sữa trân châu, cảm ơn.\nA: Vâng, 50 tệ.",
      questions: [
        { id: "l_19_q1", type: "multiple_choice", question: "Nhân vật B đã gọi gì?", options: ["Nước lọc", "Cà phê", "Trà", "Trà sữa trân châu"], correctAnswer: "Trà sữa trân châu", explanation: "B nói 我要一杯珍珠奶茶 (Tôi muốn 1 ly trà sữa trân châu)." }
      ]
    },
    reading: {
      title: "Trà sữa",
      passageTraditional: "在台灣，很多人喜歡喝珍珠奶茶。天氣熱的時候，喝一杯冰珍珠奶茶很舒服。台灣的茶很好喝。",
      passagePinyin: "Zài Táiwān, hěnduō rén xǐhuān hē zhēnzhū nǎichá. Tiānqì rè de shíhòu, hē yì bēi bīng zhēnzhū nǎichá hěn shūfú. Táiwān de chá hěn hǎohē.",
      passageVietnamese: "Ở Đài Loan, có rất nhiều người thích uống trà sữa trân châu. Khi thời tiết nóng, uống một ly trà sữa trân châu đá rất thoải mái. Trà của Đài Loan rất ngon.",
      questions: [
        { id: "r_19_q1", type: "true_false", question: "Trà Đài Loan uống rất ngon. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết: 台灣的茶很好喝 (Trà Đài Loan rất ngon)." }
      ]
    },
    speaking: {
      promptTraditional: "去買飲料時，你怎麼點一杯珍珠奶茶？",
      promptPinyin: "Qù mǎi yǐnliào shí, nǐ zěnme diǎn yì bēi zhēnzhū nǎichá?",
      promptVietnamese: "Khi đi mua đồ uống, bạn gọi món trà sữa thế nào?",
      sampleAnswerTraditional: "你好，我要一杯珍珠奶茶，謝謝。",
      sampleAnswerPinyin: "Nǐ hǎo, wǒ yào yì bēi zhēnzhū nǎichá, xièxiè.",
      sampleAnswerVietnamese: "Xin chào, tôi lấy một ly trà sữa trân châu, cảm ơn."
    },
    writing: {
      promptVietnamese: "Viết lượng từ dùng cho 1 CỐC nước (chữ phồn thể).",
      suggestedAnswerTraditional: "杯",
      suggestedAnswerPinyin: "bēi",
      suggestedAnswerVietnamese: "Cốc"
    },
    quiz: [
      { id: "q_19_1", type: "multiple_choice", question: "Khi khen loại nước nào đó ngon, ta dùng từ gì?", options: ["好吃 (hǎochī)", "好喝 (hǎohē)", "好 (hǎo)", "很 (hěn)"], correctAnswer: "好喝 (hǎohē)", explanation: "Đồ uống thì phải dùng 好喝 (uống ngon), 好吃 (ăn ngon) dùng cho thức ăn." }
    ]
  },
  {
    id: "lesson_20",
    day: 20,
    title: "Bài 20: Tự giới thiệu cơ bản",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Giới thiệu bản thân",
    objectives: [
      "Tổng hợp từ vựng để tự giới thiệu mình.",
      "Có thể nói về tên, tuổi, quốc tịch."
    ],
    vocabulary: [
      { id: "v_20_1", traditional: "叫", pinyin: "Jiào", zhuyin: "ㄐㄧㄠˋ", vietnamese: "Gọi, tên là", partOfSpeech: "Động từ", exampleTraditional: "我叫阮文A。", examplePinyin: "Wǒ jiào Ruǎn Wén A.", exampleVietnamese: "Tôi tên là Nguyễn Văn A." },
      { id: "v_20_2", traditional: "名字", pinyin: "Míngzi", zhuyin: "ㄇㄧㄥˊ ㄗ˙", vietnamese: "Tên", partOfSpeech: "Danh từ", exampleTraditional: "你叫什麼名字？", examplePinyin: "Nǐ jiào shénme míngzi?", exampleVietnamese: "Bạn tên là gì?" },
      { id: "v_20_3", traditional: "歲", pinyin: "Suì", zhuyin: "ㄙㄨㄟˋ", vietnamese: "Tuổi", partOfSpeech: "Danh từ", exampleTraditional: "我二十歲。", examplePinyin: "Wǒ èrshí suì.", exampleVietnamese: "Tôi 20 tuổi." },
      { id: "v_20_4", traditional: "越南", pinyin: "Yuènán", zhuyin: "ㄩㄝˋ ㄋㄢˊ", vietnamese: "Việt Nam", partOfSpeech: "Danh từ", exampleTraditional: "我是越南人。", examplePinyin: "Wǒ shì Yuènán rén.", exampleVietnamese: "Tôi là người Việt Nam." },
      { id: "v_20_5", traditional: "人", pinyin: "Rén", zhuyin: "ㄖㄣˊ", vietnamese: "Người", partOfSpeech: "Danh từ", exampleTraditional: "台灣人", examplePinyin: "Táiwān rén", exampleVietnamese: "Người Đài Loan" }
    ],
    sentencePatterns: [
      { traditional: "我叫...，我...歲。", pinyin: "Wǒ jiào..., wǒ... suì.", zhuyin: "ㄨㄛˇ ㄐㄧㄠˋ..., ㄨㄛˇ... ㄙㄨㄟˋ.", vietnamese: "Tôi tên là..., tôi... tuổi.", usage: "Giới thiệu tên tuổi." },
      { traditional: "我是...人。", pinyin: "Wǒ shì... rén.", zhuyin: "ㄨㄛˇ ㄕˋ... ㄖㄣˊ.", vietnamese: "Tôi là người...", usage: "Giới thiệu quốc tịch." }
    ],
    listening: {
      title: "Làm quen học sinh mới",
      transcriptTraditional: "A: 你好，你叫什麼名字？\nB: 你好，我叫小明。我二十歲。我是台灣人，你呢？\nA: 我叫阿花。我是越南人。",
      transcriptPinyin: "A: Nǐ hǎo, nǐ jiào shénme míngzi?\nB: Nǐ hǎo, wǒ jiào Xiǎomíng. Wǒ èrshí suì. Wǒ shì Táiwān rén, nǐ ne?\nA: Wǒ jiào Āhuā. Wǒ shì Yuènán rén.",
      transcriptVietnamese: "A: Chào bạn, bạn tên là gì?\nB: Chào bạn, mình là Tiểu Minh. Mình 20 tuổi. Mình là người Đài Loan, còn bạn?\nA: Mình tên là A Hoa. Mình là người Việt Nam.",
      questions: [
        { id: "l_20_q1", type: "multiple_choice", question: "Bạn A Hoa là người nước nào?", options: ["Nhật Bản", "Đài Loan", "Việt Nam", "Mỹ"], correctAnswer: "Việt Nam", explanation: "Tiểu Hoa nói: 我是越南人 (Tôi là người VN)." }
      ]
    },
    reading: {
      title: "Bạn thân của tôi",
      passageTraditional: "這是我朋友。他叫王大山。他今年十八歲。他是台灣人。我們在學校認識的。他很喜歡喝奶茶。",
      passagePinyin: "Zhè shì wǒ péngyǒu. Tā jiào Wáng Dàshān. Tā jīnnián shíbā suì. Tā shì Táiwān rén. Wǒmen zài xuéxiào rènshí de. Tā hěn xǐhuān hē nǎichá.",
      passageVietnamese: "Đây là bạn tôi. Cậu ấy tên là Vương Đại Sơn. Cậu ấy năm nay 18 tuổi. Cậu ấy là người Đài Loan. Chúng mình quen nhau ở trường học. Cậu ấy rất thích uống trà sữa.",
      questions: [
        { id: "r_20_q1", type: "true_false", question: "Vương Đại Sơn 20 tuổi. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 他今年十八歲 (Năm nay cậu ấy 18 tuổi)." }
      ]
    },
    speaking: {
      promptTraditional: "請自我介紹（名字、年齡、國籍）。",
      promptPinyin: "Qǐng zìwǒ jièshào (míngzi, niánlíng, guójí).",
      promptVietnamese: "Hãy tự giới thiệu bản thân (Tên, tuổi, quốc tịch).",
      sampleAnswerTraditional: "你好，我叫___。我___歲。我是越南人。",
      sampleAnswerPinyin: "Nǐ hǎo, wǒ jiào___. Wǒ___suì. Wǒ shì Yuènán rén.",
      sampleAnswerVietnamese: "Xin chào, tôi tên là ___. Tôi ___ tuổi. Tôi là người Việt Nam."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Bạn tên là gì?'",
      suggestedAnswerTraditional: "你叫什麼名字？",
      suggestedAnswerPinyin: "Nǐ jiào shénme míngzi?",
      suggestedAnswerVietnamese: "Bạn tên là gì?"
    },
    quiz: [
      { id: "q_20_1", type: "multiple_choice", question: "Từ 'Việt Nam' trong tiếng Trung là gì?", options: ["越南 (Yuènán)", "台灣 (Táiwān)", "美國 (Měiguó)", "中國 (Zhōngguó)"], correctAnswer: "越南 (Yuènán)", explanation: "越南 (Yuènán) là Việt Nam." }
    ]
  }
];
