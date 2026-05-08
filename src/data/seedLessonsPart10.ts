import { Lesson } from '../types/lesson';

export const stage3LessonsPart3: Lesson[] = [
  {
    id: "lesson_27",
    day: 27,
    title: "Bài 27: Các môn học",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Trường học",
    objectives: [
      "Học một số từ vựng về môn học.",
      "Biết cách nói mình thích hoặc giỏi môn học nào."
    ],
    vocabulary: [
      { id: "v_27_1", traditional: "中文", pinyin: "Zhōngwén", zhuyin: "ㄓㄨㄥ ㄨㄣˊ", vietnamese: "Tiếng Trung", partOfSpeech: "Danh từ", exampleTraditional: "我喜歡學中文。", examplePinyin: "Wǒ xǐhuān xué Zhōngwén.", exampleVietnamese: "Tôi thích học tiếng Trung." },
      { id: "v_27_2", traditional: "英文", pinyin: "Yīngwén", zhuyin: "ㄧㄥ ㄨㄣˊ", vietnamese: "Tiếng Anh", partOfSpeech: "Danh từ", exampleTraditional: "他的英文很好。", examplePinyin: "Tā de Yīngwén hěn hǎo.", exampleVietnamese: "Tiếng Anh của cậu ấy rất tốt." },
      { id: "v_27_3", traditional: "數學", pinyin: "Shùxué", zhuyin: "ㄕㄨˋ ㄒㄩㄝˊ", vietnamese: "Toán học", partOfSpeech: "Danh từ", exampleTraditional: "數學很難。", examplePinyin: "Shùxué hěn nán.", exampleVietnamese: "Môn toán rất khó." },
      { id: "v_27_4", traditional: "體育", pinyin: "Tǐyù", zhuyin: "ㄊㄧˇ ㄩˋ", vietnamese: "Thể dục", partOfSpeech: "Danh từ", exampleTraditional: "我們去上體育課。", examplePinyin: "Wǒmen qù shàng tǐyù kè.", exampleVietnamese: "Chúng ta đi học môn thể dục." },
      { id: "v_27_5", traditional: "課", pinyin: "Kè", zhuyin: "ㄎㄜˋ", vietnamese: "Môn học, bài học", partOfSpeech: "Danh từ", exampleTraditional: "今天有中文課。", examplePinyin: "Jīntiān yǒu Zhōngwén kè.", exampleVietnamese: "Hôm nay có tiết tiếng Trung." },
      { id: "v_27_6", traditional: "難", pinyin: "Nán", zhuyin: "ㄋㄢˊ", vietnamese: "Khó", partOfSpeech: "Tính từ", exampleTraditional: "這個不難。", examplePinyin: "Zhège bù nán.", exampleVietnamese: "Cái này không khó." }
    ],
    sentencePatterns: [
      { traditional: "你喜歡什麼課？", pinyin: "Nǐ xǐhuān shénme kè?", zhuyin: "ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄕㄣˊ ㄇㄜ˙ ㄎㄜˋ?", vietnamese: "Bạn thích học môn gì?", usage: "Hỏi về môn học yêu thích." },
      { traditional: "我喜歡...課。", pinyin: "Wǒ xǐhuān... kè.", zhuyin: "ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ... ㄎㄜˋ.", vietnamese: "Tôi thích môn...", usage: "Nói về môn yêu thích." }
    ],
    listening: {
      title: "Môn học yêu thích",
      transcriptTraditional: "A: 小明，你喜歡什麼課？\nB: 我喜歡體育課。你呢？\nA: 我不喜歡體育課，我喜歡中文課和英文課。",
      transcriptPinyin: "A: Xiǎomíng, nǐ xǐhuān shénme kè?\nB: Wǒ xǐhuān tǐyù kè. Nǐ ne?\nA: Wǒ bù xǐhuān tǐyù kè, wǒ xǐhuān Zhōngwén kè hé Yīngwén kè.",
      transcriptVietnamese: "A: Tiểu Minh, bạn thích môn gì?\nB: Mình thích môn Thể dục. Còn bạn?\nA: Mình không thích môn Thể dục, mình thích Tiếng Trung và Tiếng Anh.",
      questions: [
        { id: "l_27_q1", type: "multiple_choice", question: "Tiểu Minh thích môn học nào?", options: ["Tiếng Trung", "Tiếng Anh", "Toán", "Thể dục"], correctAnswer: "Thể dục", explanation: "Tiểu Minh nói: 我喜歡體育課 (Tôi thích môn Thể dục)." }
      ]
    },
    reading: {
      title: "Thời khóa biểu",
      passageTraditional: "星期一我有中文課和英文課。中文老師很好。我覺得中文不難。星期二我有數學課。數學很難。",
      passagePinyin: "Xīngqíyī wǒ yǒu Zhōngwén kè hé Yīngwén kè. Zhōngwén lǎoshī hěn hǎo. Wǒ juédé Zhōngwén bù nán. Xīngqí'èr wǒ yǒu Shùxué kè. Shùxué hěn nán.",
      passageVietnamese: "Thứ hai tôi có tiết Tiếng Trung và Tiếng Anh. Thầy giáo dạy tiếng Trung rất tốt. Tôi cảm thấy tiếng Trung không khó. Thứ ba tôi có tiết Toán. Môn toán rất khó.",
      questions: [
        { id: "r_27_q1", type: "true_false", question: "Người viết nghĩ rằng môn Tiếng Trung rất khó. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Người viết nói: 我覺得中文不難 (Tôi thấy tiếng Trung không quá khó)." }
      ]
    },
    speaking: {
      promptTraditional: "在學校，你最喜歡什麼課？為什麼？",
      promptPinyin: "Zài xuéxiào, nǐ zuì xǐhuān shénme kè? Wèishéme?",
      promptVietnamese: "Ở trường bạn thích học nhất môn gì? Tại sao?",
      sampleAnswerTraditional: "我最喜歡中文課，因為中文很有意思。",
      sampleAnswerPinyin: "Wǒ zuì xǐhuān Zhōngwén kè, yīnwèi Zhōngwén hěn yǒu yìsi.",
      sampleAnswerVietnamese: "Tôi thích học môn Tiếng Trung nhất, bởi vì tiếng Trung rất thú vị."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Ngày mai có tiết Tiếng Anh'.",
      suggestedAnswerTraditional: "明天有英文課。",
      suggestedAnswerPinyin: "Míngtiān yǒu Yīngwén kè.",
      suggestedAnswerVietnamese: "Ngày mai có tiết Tiếng Anh."
    },
    quiz: [
      { id: "q_27_1", type: "multiple_choice", question: "Môn Thể dục gọi là gì trong tiếng Trung?", options: ["英文 (Yīngwén)", "數學 (Shùxué)", "體育 (Tǐyù)", "音樂 (Yīnyuè)"], correctAnswer: "體育 (Tǐyù)", explanation: "體育 (Tǐyù) là Thể dục." }
    ]
  },
  {
    id: "lesson_28",
    day: 28,
    title: "Bài 28: Công việc / Nghề nghiệp",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Công việc",
    objectives: [
      "Học một số từ vựng về nghề nghiệp.",
      "Có thể hỏi và đáp về công việc hiện tại."
    ],
    vocabulary: [
      { id: "v_28_1", traditional: "工作", pinyin: "Gōngzuò", zhuyin: "ㄍㄨㄥ ㄗㄨㄛˋ", vietnamese: "Công việc, làm việc", partOfSpeech: "Danh từ, Động từ", exampleTraditional: "你做什麼工作？", examplePinyin: "Nǐ zuò shénme gōngzuò?", exampleVietnamese: "Bạn làm nghề gì?" },
      { id: "v_28_2", traditional: "老師", pinyin: "Lǎoshī", zhuyin: "ㄌㄠˇ ㄕ", vietnamese: "Giáo viên", partOfSpeech: "Danh từ", exampleTraditional: "我的媽媽是老師。", examplePinyin: "Wǒ de māmā shì lǎoshī.", exampleVietnamese: "Mẹ tôi là giáo viên." },
      { id: "v_28_3", traditional: "學生", pinyin: "Xuéshēng", zhuyin: "ㄒㄩㄝˊ ㄕㄥ", vietnamese: "Học sinh, sinh viên", partOfSpeech: "Danh từ", exampleTraditional: "我是大學生。", examplePinyin: "Wǒ shì dàxuéshēng.", exampleVietnamese: "Tôi là sinh viên đại học." },
      { id: "v_28_4", traditional: "醫生", pinyin: "Yīshēng", zhuyin: "ㄧ ㄕㄥ", vietnamese: "Bác sĩ", partOfSpeech: "Danh từ", exampleTraditional: "他在醫院當醫生。", examplePinyin: "Tā zài yīyuàn dāng yīshēng.", exampleVietnamese: "Anh ấy làm bác sĩ trong bệnh viện." },
      { id: "v_28_5", traditional: "店員", pinyin: "Diànyuán", zhuyin: "ㄉㄧㄢˋ ㄩㄢˊ", vietnamese: "Nhân viên bán hàng", partOfSpeech: "Danh từ", exampleTraditional: "那個店員很客氣。", examplePinyin: "Nà ge diànyuán hěn kèqì.", exampleVietnamese: "Người nhân viên đó rất lịch sự." },
      { id: "v_28_6", traditional: "老闆", pinyin: "Lǎobǎn", zhuyin: "ㄌㄠˇ ㄅㄢˇ", vietnamese: "Ông chủ", partOfSpeech: "Danh từ", exampleTraditional: "老闆，這多少錢？", examplePinyin: "Lǎobǎn, zhè duōshǎo qián?", exampleVietnamese: "Ông chủ, cái này bao nhiêu tiền?" }
    ],
    sentencePatterns: [
      { traditional: "你做什麼工作？", pinyin: "Nǐ zuò shénme gōngzuò?", zhuyin: "ㄋㄧˇ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙ ㄍㄨㄥ ㄗㄨㄛˋ?", vietnamese: "Bạn làm nghề gì?", usage: "Hỏi nghề nghiệp." },
      { traditional: "我是...。", pinyin: "Wǒ shì...", zhuyin: "ㄨㄛˇ ㄕˋ...", vietnamese: "Tôi là...", usage: "Nêu nghề nghiệp của mình." }
    ],
    listening: {
      title: "Phỏng vấn công việc",
      transcriptTraditional: "A: 你好，你叫什麼名字？\nB: 我叫大山。\nA: 你做什麼工作？\nB: 我是學生。我也在咖啡店當店員。",
      transcriptPinyin: "A: Nǐ hǎo, nǐ jiào shénme míngzi?\nB: Wǒ jiào Dàshān.\nA: Nǐ zuò shénme gōngzuò?\nB: Wǒ shì xuéshēng. Wǒ yě zài kāfēidiàn dāng diànyuán.",
      transcriptVietnamese: "A: Xin chào, bạn tên gì?\nB: Tôi tên Đại Sơn.\nA: Bạn làm công việc gì?\nB: Tôi là sinh viên. Tôi cũng làm nhân viên ở quán cà phê.",
      questions: [
        { id: "l_28_q1", type: "multiple_choice", question: "Đại Sơn làm công việc gì?", options: ["Giáo viên", "Bác sĩ", "Ông chủ", "Sinh viên kiêm làm thêm quán cafe"], correctAnswer: "Sinh viên kiêm làm thêm quán cafe", explanation: "Đại Sơn nói là sinh viên (學生) và làm nhân viên (店員)." }
      ]
    },
    reading: {
      title: "Gia đình tôi",
      passageTraditional: "我家有四口人。爸爸是老師。媽媽是醫生，在醫院工作。哥哥是老闆，他有一家商店。我是學生。",
      passagePinyin: "Wǒ jiā yǒu sì kǒu rén. Bàba shì lǎoshī. Māmā shì yīshēng, zài yīyuàn gōngzuò. Gēgē shì lǎobǎn, tā yǒu yì jiā shāngdiàn. Wǒ shì xuéshēng.",
      passageVietnamese: "Nhà tôi có 4 người. Bố làm giáo viên. Mẹ làm bác sĩ, làm việc ở bệnh viện. Anh trai là ông chủ, anh ấy có một cửa hàng. Tôi là học sinh.",
      questions: [
        { id: "r_28_q1", type: "true_false", question: "Mẹ là giáo viên. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 媽媽是醫生 (Mẹ là bác sĩ)." }
      ]
    },
    speaking: {
      promptTraditional: "請用中文告訴我你的工作。",
      promptPinyin: "Qǐng yòng zhōngwén gàosù wǒ nǐ de gōngzuò.",
      promptVietnamese: "Hãy dùng tiếng Trung nói cho tôi biết công việc của bạn.",
      sampleAnswerTraditional: "我是學生。",
      sampleAnswerPinyin: "Wǒ shì xuéshēng.",
      sampleAnswerVietnamese: "Tôi là học sinh/sinh viên."
    },
    writing: {
      promptVietnamese: "Viết bằng chữ Hán: 'Bạn làm nghề gì?'",
      suggestedAnswerTraditional: "你做什麼工作？",
      suggestedAnswerPinyin: "Nǐ zuò shénme gōngzuò?",
      suggestedAnswerVietnamese: "Bạn làm nghề gì?"
    },
    quiz: [
      { id: "q_28_1", type: "fill_blank", question: "Điền vào chỗ trống: 他在醫院當__(bác sĩ)__。", correctAnswer: "醫生", explanation: "醫生 (Yīshēng) là bác sĩ." }
    ]
  },
  {
    id: "lesson_29",
    day: 29,
    title: "Bài 29: Trạng thái cơ thể",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Sức khỏe",
    objectives: [
      "Học các từ chỉ cảm giác, trạng thái của cơ thể.",
      "Biết cách diễn đạt mệt, đói, khát."
    ],
    vocabulary: [
      { id: "v_29_1", traditional: "累", pinyin: "Lèi", zhuyin: "ㄌㄟˋ", vietnamese: "Mệt", partOfSpeech: "Tính từ", exampleTraditional: "我很累。", examplePinyin: "Wǒ hěn lèi.", exampleVietnamese: "Tôi rất mệt." },
      { id: "v_29_2", traditional: "餓", pinyin: "È", zhuyin: "ㄜˋ", vietnamese: "Đói", partOfSpeech: "Tính từ", exampleTraditional: "你肚子餓嗎？", examplePinyin: "Nǐ dùzi è ma?", exampleVietnamese: "Bạn có đói bụng không?" },
      { id: "v_29_3", traditional: "渴", pinyin: "Kě", zhuyin: "ㄎㄜˇ", vietnamese: "Khát", partOfSpeech: "Tính từ", exampleTraditional: "我很渴，想喝水。", examplePinyin: "Wǒ hěn kě, xiǎng hē shuǐ.", exampleVietnamese: "Tôi rất khát, muốn uống nước." },
      { id: "v_29_4", traditional: "生病", pinyin: "Shēngbìng", zhuyin: "ㄕㄥ ㄅㄧㄥˋ", vietnamese: "Ốm, bệnh", partOfSpeech: "Động từ", exampleTraditional: "他生病了，沒來學校。", examplePinyin: "Tā shēngbìng le, méi lái xuéxiào.", exampleVietnamese: "Anh ấy bị ốm rồi, không đến trường." },
      { id: "v_29_5", traditional: "休息", pinyin: "Xiūxí", zhuyin: "ㄒㄧㄡ ㄒㄧˊ", vietnamese: "Nghỉ ngơi", partOfSpeech: "Động từ", exampleTraditional: "你需要休息。", examplePinyin: "Nǐ xūyào xiūxí.", exampleVietnamese: "Bạn cần nghỉ ngơi." }
    ],
    sentencePatterns: [
      { traditional: "你怎麼了？", pinyin: "Nǐ zěnme le?", zhuyin: "ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄌㄜ˙?", vietnamese: "Bạn sao thế?", usage: "Hỏi thăm tình trạng sức khỏe." },
      { traditional: "我覺得很...", pinyin: "Wǒ juédé hěn...", zhuyin: "ㄨㄛˇ ㄐㄩㄝˊ ㄉㄜ˙ ㄏㄣˇ...", vietnamese: "Tôi cảm thấy rất...", usage: "Nói về cảm giác của cơ thể." }
    ],
    listening: {
      title: "Hỏi thăm sức khỏe",
      transcriptTraditional: "A: 你怎麼了？\nB: 我覺得很累，也有點兒餓。\nA: 那我們去吃飯，然後回家休息吧。",
      transcriptPinyin: "A: Nǐ zěnme le?\nB: Wǒ juédé hěn lèi, yě yǒu diǎnr è.\nA: Nà wǒmen qù chīfàn, ránhòu huí jiā xiūxí ba.",
      transcriptVietnamese: "A: Bạn sao thế?\nB: Tôi thấy rất mệt, cũng hơi đói.\nA: Vậy chúng ta đi ăn cơm, sau đó về nhà nghỉ ngơi nhé.",
      questions: [
        { id: "l_29_q1", type: "multiple_choice", question: "Bạn B đang cảm thấy thế nào?", options: ["Khát nước", "Chưa buồn ngủ", "Mệt và hơi đói", "Đau bụng"], correctAnswer: "Mệt và hơi đói", explanation: "B nói 我覺得很累，也有點兒餓 (Thấy mệt và hơi đói)." }
      ]
    },
    reading: {
      title: "Ngày hôm nay",
      passageTraditional: "今天我很忙。早上上課，下午去商店買東西，晚上工作。現在晚上十點了。我覺得很累，也很餓。我想吃一碗麵，然後睡覺。",
      passagePinyin: "Jīntiān wǒ hěn máng. Zǎoshang shàng kè, xiàwǔ qù shāngdiàn mǎi dōngxī, wǎnshàng gōngzuò. Xiànzài wǎnshàng shí diǎn le. Wǒ juédé hěn lèi, yě hěn è. Wǒ xiǎng chī yì wǎn miàn, ránhòu shuìjiào.",
      passageVietnamese: "Hôm nay tôi rất bận. Sáng đi học, chiều đi siêu thị mua đồ, tối thì làm việc. Hiện tại là 10 giờ tối. Tôi cảm thấy rất mệt, cũng rất đói. Tôi muốn ăn một tô mì, sau đó đi ngủ.",
      questions: [
        { id: "r_29_q1", type: "true_false", question: "Người viết muốn đi uống trà sữa vì rất khát. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Họ đói và muốn ăn mì, không phải uống trà sữa." }
      ]
    },
    speaking: {
      promptTraditional: "如果朋友問「你怎麼了？」，你想告訴他你很渴，你怎麼說？",
      promptPinyin: "Rúguǒ péngyǒu wèn 'nǐ zěnme le?', nǐ xiǎng gàosù tā nǐ hěn kě, nǐ zěnme shuō?",
      promptVietnamese: "Nếu bạn bè hỏi bạn 'Sao thế?', bạn muốn nói là bạn rất khát nước thì nói thế nào?",
      sampleAnswerTraditional: "我覺得很渴。",
      sampleAnswerPinyin: "Wǒ juédé hěn kě.",
      sampleAnswerVietnamese: "Tôi cảm thấy rất khát."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Tôi bị ốm rồi'.",
      suggestedAnswerTraditional: "我生病了。",
      suggestedAnswerPinyin: "Wǒ shēngbìng le.",
      suggestedAnswerVietnamese: "Tôi bị ốm rồi."
    },
    quiz: [
      { id: "q_29_1", type: "multiple_choice", question: "Từ '累' (Lèi) có nghĩa là gì?", options: ["Đói", "Khát", "Mệt", "Nóng"], correctAnswer: "Mệt", explanation: "累 (Lèi) là mệt mỏi." }
    ]
  }
];
