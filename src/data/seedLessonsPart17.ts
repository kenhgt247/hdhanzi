import { Lesson } from '../types/lesson';

export const stage6LessonsPart1: Lesson[] = [
  {
    id: "lesson_57",
    day: 57,
    title: "Bài 57: Tại Sân bay",
    level: "beginner",
    stage: "CHẶNG 6: TỔNG KẾT & LÊN ĐƯỜNG",
    topic: "Du lịch / Chuyến bay",
    objectives: ["Từ vựng về sân bay và hành lý"],
    vocabulary: [
      { id: "v_57_1", traditional: "機場", pinyin: "Jīchǎng", zhuyin: "ㄐㄧ ㄔㄤˇ", vietnamese: "Sân bay", partOfSpeech: "Danh từ", exampleTraditional: "明天我要去機場。", examplePinyin: "Míngtiān wǒ yào qù jīchǎng.", exampleVietnamese: "Ngày mai tôi phải đi sân bay." },
      { id: "v_57_2", traditional: "行李", pinyin: "Xínglǐ", zhuyin: "ㄒㄧㄥˊ ㄌㄧˇ", vietnamese: "Hành lý", partOfSpeech: "Danh từ", exampleTraditional: "我的行李很重。", examplePinyin: "Wǒ de xínglǐ hěn zhòng.", exampleVietnamese: "Hành lý của tôi rất nặng." },
      { id: "v_57_3", traditional: "護照", pinyin: "Hùzhào", zhuyin: "ㄏㄨˋ ㄓㄠˋ", vietnamese: "Hộ chiếu", partOfSpeech: "Danh từ", exampleTraditional: "請給我看你的護照。", examplePinyin: "Qǐng gěi wǒ kàn nǐ de hùzhào.", exampleVietnamese: "Vui lòng cho tôi xem hộ chiếu của bạn." },
      { id: "v_57_4", traditional: "機票", pinyin: "Jīpiào", zhuyin: "ㄐㄧ ㄆㄧㄠˋ", vietnamese: "Vé máy bay", partOfSpeech: "Danh từ", exampleTraditional: "這是我的機票。", examplePinyin: "Zhè shì wǒ de jīpiào.", exampleVietnamese: "Đây là vé máy bay của tôi." },
      { id: "v_57_5", traditional: "登機", pinyin: "Dēngjī", zhuyin: "ㄉㄥ ㄐㄧ", vietnamese: "Lên máy bay (Boarding)", partOfSpeech: "Động từ", exampleTraditional: "準備登機", examplePinyin: "Zhǔnbèi dēngjī", exampleVietnamese: "Chuẩn bị lên máy bay" }
    ],
    sentencePatterns: [
      { traditional: "請給我看你的...", pinyin: "Qǐng gěi wǒ kàn nǐ de...", zhuyin: "ㄑㄧㄥˇ ㄍㄟˇ ㄨㄛˇ ㄎㄢˋ ㄋㄧˇ ㄉㄜ˙...", vietnamese: "Vui lòng cho tôi xem...", usage: "Xuất trình giấy tờ" }
    ],
    listening: { title: "Kiểm tra giấy tờ", transcriptTraditional: "A: 你好，請給我看你的護照和機票。\nB: 好的，給你。\nA: 謝謝，你的行李要托運嗎？\nB: 是的，我要托運。", transcriptPinyin: "A: Nǐ hǎo, qǐng gěi wǒ kàn nǐ de hùzhào hé jīpiào.\nB: Hǎo de, gěi nǐ.\nA: Xièxie, nǐ de xínglǐ yào tuōyùn ma?\nB: Shì de, wǒ yào tuōyùn.", transcriptVietnamese: "A: Xin chào, vui lòng cho tôi xem hộ chiếu và vé máy bay.\nB: Vâng, của bạn đây.\nA: Xin cảm ơn, hành lý của bạn có cần ký gửi không?\nB: Có, tôi muốn ký gửi.", questions: [{ id: "q1", type: "multiple_choice", question: "Nhân viên sân bay yêu cầu hành khách đưa xem những giấy tờ gì?", options: ["Sổ khám bệnh", "Hộ chiếu và Vé máy bay", "Thẻ ngân hàng", "Bằng lái xe"], correctAnswer: "Hộ chiếu và Vé máy bay", explanation: "Nhân viên bảo 請給我看你的護照和機票 (Xem hộ chiếu và vé máy bay)." }] },
    reading: { title: "Chuẩn bị đi xa", passageTraditional: "明天我要去台灣了。晚上，我在家整理行李。我帶了衣服、鞋子，還有電腦。當然，我沒有忘記帶護照和機票。", passagePinyin: "Míngtiān wǒ yào qù Táiwān le. Wǎnshàng, wǒ zài jiā zhěnglǐ xínglǐ. Wǒ dài le yīfú, xiézi, hái yǒu diànnǎo. Dāngrán, wǒ méiyǒu wàngjì dài hùzhào hé jīpiào.", passageVietnamese: "Ngày mai tôi sẽ đi Đài Loan rồi. Tối nay, tôi ở nhà sắp xếp hành lý. Tôi mang theo quần áo, giày, và cả máy tính nữa. Đương nhiên, tôi không quên mang theo hộ chiếu và vé máy bay.", questions: [{ id: "q1", type: "true_false", question: "Người đó suýt quên mất mang theo hộ chiếu (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 沒有忘記帶護照 (không quên mang hộ chiếu)." }] },
    speaking: { promptTraditional: "在機場，別人問你「護照在哪裡？」，你怎麼用中文回答並給他看？", promptPinyin: "Zài jīchǎng, biérén wèn nǐ 'Hùzhào zài nǎlǐ?', nǐ zěnme yòng zhōngwén huídá bìng gěi tā kàn?", promptVietnamese: "Ở sân bay, nếu người khác bảo bạn hộ chiếu đâu rồi, bạn sẽ nói và đưa họ xem thế nào?", sampleAnswerTraditional: "我的護照在這裡，給你。", sampleAnswerPinyin: "Wǒ de hùzhào zài zhèlǐ, gěi nǐ.", sampleAnswerVietnamese: "Hộ chiếu của tôi ở đây, gửi bạn ạ." },
    writing: { promptVietnamese: "Dịch: 'Hành lý của tôi rất nặng'", suggestedAnswerTraditional: "我的行李很重。", suggestedAnswerPinyin: "Wǒ de xínglǐ hěn zhòng.", suggestedAnswerVietnamese: "Hành lý của tôi rất nặng." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '護照' có nghĩa là gì?", options: ["Bức ảnh", "Hành lý", "Máy bay", "Hộ chiếu"], correctAnswer: "Hộ chiếu", explanation: "護照 (Hùzhào) là Hộ chiếu." }]
  },
  {
    id: "lesson_58",
    day: 58,
    title: "Bài 58: Hải quan Đài Loan",
    level: "beginner",
    stage: "CHẶNG 6: TỔNG KẾT & LÊN ĐƯỜNG",
    topic: "Nhập cảnh",
    objectives: ["Câu hỏi thường gặp khi nhập cảnh"],
    vocabulary: [
      { id: "v_58_1", traditional: "海關", pinyin: "Hǎiguān", zhuyin: "ㄏㄞˇ ㄍㄨㄢ", vietnamese: "Hải quan", partOfSpeech: "Danh từ", exampleTraditional: "過海關", examplePinyin: "Guò hǎiguān", exampleVietnamese: "Qua hải quan" },
      { id: "v_58_2", traditional: "目的", pinyin: "Mùdì", zhuyin: "ㄇㄨˋ ㄉㄧˋ", vietnamese: "Mục đích", partOfSpeech: "Danh từ", exampleTraditional: "你來台灣的目的是什麼？", examplePinyin: "Nǐ lái Táiwān de mùdì shì shénme?", exampleVietnamese: "Mục đích bạn đến Đài Loan là gì?" },
      { id: "v_58_3", traditional: "讀書", pinyin: "Dúshū", zhuyin: "ㄉㄨˊ ㄕㄨ", vietnamese: "Học tập, đi học", partOfSpeech: "Động từ", exampleTraditional: "我來台灣讀書。", examplePinyin: "Wǒ lái Táiwān dúshū.", exampleVietnamese: "Tôi đến Đài Loan để đi học." },
      { id: "v_58_4", traditional: "簽證", pinyin: "Qiānzhèng", zhuyin: "ㄑㄧㄢ ㄓㄥˋ", vietnamese: "Visa", partOfSpeech: "Danh từ", exampleTraditional: "這是我的學生簽證。", examplePinyin: "Zhè shì wǒ de xuéshēng qiānzhèng.", exampleVietnamese: "Đây là visa học sinh của tôi." },
      { id: "v_58_5", traditional: "多久", pinyin: "Duō jiǔ", zhuyin: "ㄉㄨㄛ ㄐㄧㄡˇ", vietnamese: "Bao lâu", partOfSpeech: "Câu hỏi", exampleTraditional: "你要在台灣住多久？", examplePinyin: "Nǐ yào zài Táiwān zhù duō jiǔ?", exampleVietnamese: "Bạn sẽ ở Đài Loan bao lâu?" }
    ],
    sentencePatterns: [
      { traditional: "你來台灣做什麼？", pinyin: "Nǐ lái Táiwān zuò shénme?", zhuyin: "ㄋㄧˇ ㄌㄞˊ ㄊㄞˊ ㄨㄢ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙?", vietnamese: "Bạn sang Đài Loan làm gì?", usage: "Câu hỏi phỏng vấn của hải quan" },
      { traditional: "我來讀書。", pinyin: "Wǒ lái dúshū.", zhuyin: "ㄨㄛˇ ㄌㄞˊ ㄉㄨˊ ㄕㄨ.", vietnamese: "Tôi sang để đi học.", usage: "Câu trả lời" }
    ],
    listening: { title: "Phỏng vấn hải quan", transcriptTraditional: "A: 你好，護照和簽證給我。\nB: 好的。\nA: 你來台灣做什麼？\nB: 我來台灣讀書。\nA: 祝你在台灣學習順利！", transcriptPinyin: "A: Nǐ hǎo, hùzhào hé qiānzhèng gěi wǒ.\nB: Hǎo de.\nA: Nǐ lái Táiwān zuò shénme?\nB: Wǒ lái Táiwān dúshū.\nA: Zhù nǐ zài Táiwān xuéxí shùnlì!", transcriptVietnamese: "A: Xin chào, đưa tôi Visa và hộ chiếu.\nB: Vâng.\nA: Bạn sang Đài Loan để làm gì?\nB: Tôi sang đài loan để học thuật.\nA: Chúc bạn học tập thuận lợi tại Đài Loan!", questions: [{ id: "q1", type: "multiple_choice", question: "Người nhập cảnh tới Đài Loan với mục đích gì?", options: ["Thăm thân nhân", "Làm việc", "Du lịch", "Du học"], correctAnswer: "Du học", explanation: "Người đó nói 我來台灣讀書 (Tôi sang học)." }] },
    reading: { title: "Cấm mang thịt", passageTraditional: "來台灣的時候，過海關要注意。台灣的海關很嚴。我們不能帶豬肉、水果和一些食物。如果帶了，會被罰錢。", passagePinyin: "Lái Táiwān de shíhòu, guò hǎiguān yào zhùyì. Táiwān de hǎiguān hěn yán. Wǒmen bù néng dài zhūròu, shuǐguǒ hé yìxiē shíwù. Rúguǒ dài le, huì bèi fá qián.", passageVietnamese: "Lúc đến Đài Loan, đi qua hải quan phải chú ý. Hải quan Đài Loan làm rất nghiêm. Chúng ta không được mang theo thịt heo, trái cây và một số đồ ăn. Nếu mang theo, sẽ bị phạt tiền.", questions: [{ id: "q1", type: "true_false", question: "Bạn có thể thoái mái mang theo hoa quả sang Đài Loan. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Bài đọc nói 不能帶豬肉、水果 (Không được mang theo thịt heo, trái cây)." }] },
    speaking: { promptTraditional: "如果海關問你：「你來台灣做什麼？」，你怎麼回答？", promptPinyin: "Rúguǒ hǎiguān wèn nǐ: 'Nǐ lái Táiwān zuò shénme?', nǐ zěnme huídá?", promptVietnamese: "Nếu hải quan hỏi 'Bạn đến Đài Loan làm gì?', bạn trả lời thế nào?", sampleAnswerTraditional: "你好，我來台灣讀書。", sampleAnswerPinyin: "Nǐ hǎo, wǒ lái Táiwān dúshū.", sampleAnswerVietnamese: "Chào ngài, tôi đến Đài Loan để đi học." },
    writing: { promptVietnamese: "Dịch: 'Đây là visa của tôi'", suggestedAnswerTraditional: "這是我的簽證。", suggestedAnswerPinyin: "Zhè shì wǒ de qiānzhèng.", suggestedAnswerVietnamese: "Đây là visa của tôi." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Visa (Thị thực) tiếng Trung là gì?", options: ["護照", "機票", "簽證", "學校"], correctAnswer: "簽證", explanation: "簽證 (Qiānzhèng) là Visa." }]
  },
  {
    id: "lesson_59",
    day: 59,
    title: "Bài 59: Chúc may mắn",
    level: "beginner",
    stage: "CHẶNG 6: TỔNG KẾT & LÊN ĐƯỜNG",
    topic: "Giao tiếp",
    objectives: ["Những cụm từ chúc chuyến đi may mắn, thuận buồm xuôi gió"],
    vocabulary: [
      { id: "v_59_1", traditional: "一路平安", pinyin: "Yílù píng'ān", zhuyin: "ㄧˊ ㄌㄨˋ ㄆㄧㄥˊ ㄢ", vietnamese: "Thượng lộ bình an", partOfSpeech: "Cụm từ", exampleTraditional: "祝你一路平安！", examplePinyin: "Zhù nǐ yílù píng'ān!", exampleVietnamese: "Chúc bạn thượng lộ bình an!" },
      { id: "v_59_2", traditional: "順利", pinyin: "Shùnlì", zhuyin: "ㄕㄨㄣˋ ㄌㄧˋ", vietnamese: "Thuận lợi", partOfSpeech: "Tính từ", exampleTraditional: "祝你一切順利。", examplePinyin: "Zhù nǐ yíqiè shùnlì.", exampleVietnamese: "Chúc bạn mọi điều thuận lợi." },
      { id: "v_59_3", traditional: "保重", pinyin: "Bǎozhòng", zhuyin: "ㄅㄠˇ ㄓㄨㄥˋ", vietnamese: "Bảo trọng", partOfSpeech: "Động từ", exampleTraditional: "請保重身體。", examplePinyin: "Qǐng bǎozhòng shēntǐ.", exampleVietnamese: "Xin hãy giữ gìn sức khỏe." },
      { id: "v_59_4", traditional: "保持聯絡", pinyin: "Bǎochí liánluò", zhuyin: "ㄅㄠˇ ㄔˊ ㄌㄧㄢˊ ㄌㄨㄛˋ", vietnamese: "Giữ liên lạc", partOfSpeech: "Cụm từ", exampleTraditional: "我們保持聯絡！", examplePinyin: "Wǒmen bǎochí liánluò!", exampleVietnamese: "Chúng ta hãy giữ liên lạc nhé!" },
      { id: "v_59_5", traditional: "再見", pinyin: "Zàijiàn", zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ", vietnamese: "Tạm biệt", partOfSpeech: "Cụm từ", exampleTraditional: "朋友，再見！", examplePinyin: "Péngyǒu, zàijiàn!", exampleVietnamese: "Tạm biệt bạn hiền!" }
    ],
    sentencePatterns: [
      { traditional: "祝你一路平安！", pinyin: "Zhù nǐ yílù píng'ān!", zhuyin: "ㄓㄨˋ ㄋㄧˇ ㄧˊ ㄌㄨˋ ㄆㄧㄥˊ ㄢ!", vietnamese: "Chúc bạn thượng lộ bình an!", usage: "Chào tạm biệt đi xa" }
    ],
    listening: { title: "Tạm biệt ở sân bay", transcriptTraditional: "A: 大山，時間到了，我要進去了。\nB: 好的。祝你一路平安，去台灣學習順利。\nA: 謝謝你，我們保持聯絡。再見！", transcriptPinyin: "A: Dàshān, shíjiān dào le, wǒ yào jìnqù le.\nB: Hǎo de. Zhù nǐ yílù píng'ān, qù Táiwān xuéxí shùnlì.\nA: Xièxie nǐ, wǒmen bǎochí liánluò. Zàijiàn!", transcriptVietnamese: "A: Đại Sơn, đến giờ rồi, mình phải vào trong thôi.\nB: Ừ. Chúc cậu thượng lộ bình an, qua Đài Loan học tập thuận lợi nhé.\nA: Cảm ơn cậu, mình giữ liên lạc nhé. Tạm biệt!", questions: [{ id: "q1", type: "multiple_choice", question: "Đại Sơn đã chúc A điều gì?", options: ["Thượng lộ bình an", "Sinh nhật vui vẻ", "Năm mới vui vẻ", "Cuối tuần tốt lành"], correctAnswer: "Thượng lộ bình an", explanation: "Đại Sơn nói 祝你一路平安 (Chúc cậu ấy thuận lợi đi đường bình an)." }] },
    reading: { title: "Khoảng khắc chia tay", passageTraditional: "明天我要去台灣了。今晚我的朋友來我家看我。我們聊天，喝茶。他們對我說：「祝你一路平安，記得保重身體。」我非常感動。", passagePinyin: "Míngtiān wǒ yào qù Táiwān le. Jīnwǎn wǒ de péngyǒu lái wǒ jiā kàn wǒ. Wǒmen liáotiān, hē chá. Tāmen duì wǒ shuō: 'Zhù nǐ yílù píng'ān, jìdé bǎozhòng shēntǐ.' Wǒ fēicháng gǎndòng.", passageVietnamese: "Ngày mai tôi sẽ đi Đài Loan. Tối nay các bạn đến nhà thăm tôi. Chúng tôi trò chuyện, uống trà. Mọi người nói với tôi: 'Chúc cậu đi dường bình an, nhớ bảo trọng sức khỏe nhé.' Tôi thấy vô cùng cảm động.", questions: [{ id: "q1", type: "true_false", question: "Bạn bè dặn dò người đó nhớ giữ gìn y tế sức khỏe. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Bạn bè nói 記得保重身體 (Nhớ bảo trọng sức khỏe)." }] },
    speaking: { promptTraditional: "你的朋友要去台灣了，你怎麼用中文跟他說再見？", promptPinyin: "Nǐ de péngyǒu yào qù Táiwān le, nǐ zěnme yòng zhōngwén gēn tā shuō zàijiàn?", promptVietnamese: "Bạn của bạn sắp sang Đài, bạn chào tạm biệt họ thế nào bằng tiếng Trung?", sampleAnswerTraditional: "再見，祝你一路平安！", sampleAnswerPinyin: "Zàijiàn, zhù nǐ yílù píng'ān!", sampleAnswerVietnamese: "Tạm biệt, chúc lên đường bình an!" },
    writing: { promptVietnamese: "Dịch: 'Bảo trọng nhé'", suggestedAnswerTraditional: "保重", suggestedAnswerPinyin: "Bǎozhòng", suggestedAnswerVietnamese: "Bảo trọng" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Cụm từ 'Giữ liên lạc' là gì?", options: ["再見", "保重身體", "一路平安", "保持聯絡"], correctAnswer: "保持聯絡", explanation: "保持聯絡 nghĩa là Giữ liên lạc." }]
  },
  {
    id: "lesson_60",
    day: 60,
    title: "Bài 60: Tổng kết hành trình",
    level: "beginner",
    stage: "CHẶNG 6: TỔNG KẾT & LÊN ĐƯỜNG",
    topic: "Luyện tập cuối khóa",
    objectives: ["Ôn tập các kỹ năng, chuẩn bị tốt nhất để cất cánh"],
    vocabulary: [
      { id: "v_60_1", traditional: "台灣", pinyin: "Táiwān", zhuyin: "ㄊㄞˊ ㄨㄢ", vietnamese: "Đài Loan", partOfSpeech: "Danh từ", exampleTraditional: "我愛台灣。", examplePinyin: "Wǒ ài Táiwān.", exampleVietnamese: "Tôi yêu Đài Loan." },
      { id: "v_60_2", traditional: "準備", pinyin: "Zhǔnbèi", zhuyin: "ㄓㄨㄣˇ ㄅㄟˋ", vietnamese: "Chuẩn bị", partOfSpeech: "Động từ", exampleTraditional: "我都準備好了。", examplePinyin: "Wǒ dōu zhǔnbèi hǎo le.", exampleVietnamese: "Tôi đã chuẩn bị xong hết rồi." },
      { id: "v_60_3", traditional: "開始", pinyin: "Kāishǐ", zhuyin: "ㄎㄞ ㄕˇ", vietnamese: "Bắt đầu", partOfSpeech: "Động từ", exampleTraditional: "新的生活開始了。", examplePinyin: "Xīn de shēnghuó kāishǐ le.", exampleVietnamese: "Cuộc sống mới đã bắt đầu." },
      { id: "v_60_4", traditional: "夢想", pinyin: "Mèngxiǎng", zhuyin: "ㄇㄥˋ ㄒㄧㄤˇ", vietnamese: "Ước mơ", partOfSpeech: "Danh từ", exampleTraditional: "去台灣是我的夢想。", examplePinyin: "Qù Táiwān shì wǒ de mèngxiǎng.", exampleVietnamese: "Đi Đài Loan là giấc mơ của tôi." },
      { id: "v_60_5", traditional: "加油", pinyin: "Jiāyóu", zhuyin: "ㄐㄧㄚ ㄧㄡˊ", vietnamese: "Cố lên", partOfSpeech: "Thán từ", exampleTraditional: "大家一起加油！", examplePinyin: "Dàjiā yìqǐ jiāyóu!", exampleVietnamese: "Mọi người cùng cố lên nào!" }
    ],
    sentencePatterns: [
      { traditional: "我都準備好了。", pinyin: "Wǒ dōu zhǔnbèi hǎo le.", zhuyin: "ㄨㄛˇ ㄉㄡ ㄓㄨㄣˇ ㄅㄟˋ ㄏㄠˇ ㄌㄜ˙.", vietnamese: "Tôi đều đã chuẩn bị xong xuôi rồi.", usage: "Khẳng định sự tự tin" }
    ],
    listening: { title: "Cố lên", transcriptTraditional: "A: 你的行李都準備好了嗎？\nB: 我都準備好了！護照、簽證和機票都有了。\nA: 太棒了！在台灣讀書要加油喔！\nB: 好的，我會的！", transcriptPinyin: "A: Nǐ de xínglǐ dōu zhǔnbèi hǎo le ma?\nB: Wǒ dōu zhǔnbèi hǎo le! Hùzhào, qiānzhèng hé jīpiào dōu yǒu le.\nA: Tài bàng le! Zài Táiwān dúshū yào jiāyóu o!\nB: Hǎo de, wǒ huì de!", transcriptVietnamese: "A: Hành lý của bạn đã chuẩn bị xong hết chưa?\nB: Tớ chuẩn bị xong hết rồi. Hộ chiếu, vé máy bay và cả visa đều mang đủ.\nA: Tuyệt vời! Sang Đài Loan học hãy cố gắng lên nhé!\nB: Vâng, em nhất định sẽ cố gắng!", questions: [{ id: "q1", type: "multiple_choice", question: "Người B đã chuẩn bị xong tất cả mọi thứ chưa?", options: ["Chưa chuẩn bị gì", "Chỉ mới chuẩn bị quần áo", "Đã chuẩn bị xong hết", "Quên hộ chiếu"], correctAnswer: "Đã chuẩn bị xong hết", explanation: "Người B nói 我都準備好了 (Tôi đã chuẩn bị xong hết cả rồi)." }] },
    reading: { title: "Ngày cuối cùng", passageTraditional: "今天是第六十天，也是我在越南的最後一天。明天我會坐飛機去台灣。我學了六十天的中文。現在，我可以聽、可以說、也可以看懂很多中文字。我對自己說：「加油，新的生活開始了！」", passagePinyin: "Jīntiān shì dì liùshí tiān, yě shì wǒ zài Yuènán de zuìhòu yì tiān. Míngtiān wǒ huì zuò fēijī qù Táiwān. Wǒ xué le liùshí tiān de zhōngwén. Xiànzài, wǒ kěyǐ tīng, kěyǐ shuō, yě kěyǐ kàndǒng hěnduō zhōngwén zì. Wǒ duì zìjǐ shuō: 'Jiāyóu, xīn de shēnghuó kāishǐ le!'", passageVietnamese: "Hôm nay là khóa học thứ 60, cũng là ngày cuối cùng ở Việt Nam. Ngày mai tôi sẽ lên phi cơ sang Đài Loan. Tôi đã học tiếng Trung 60 ngày rồi. Giờ đây, tôi có thể nghe, nói và đọc hiểu rất nhiều chữ tiếng Trung. Tôi nhủ lòng với mình rằng: 'Cố lên, cuộc sống mới bắt đầu rồi!'", questions: [{ id: "q1", type: "true_false", question: "Sau 60 ngày luyện tập, người kể chuyện tự tin mình bắt đầu hiểu nhiều tiếng Trung hơn (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết 現在我可以聽、可以說、也可以看懂很多 (bây giờ có thể nghe, nói và hiểu nhiều rồi)." }] },
    speaking: { promptTraditional: "對自己說一句鼓勵的話！", promptPinyin: "Duì zìjǐ shuō yí jù gǔlì de huà!", promptVietnamese: "Hãy nói 1 câu cổ vũ chính mình bằng tiếng Trung!", sampleAnswerTraditional: "我可以的，加油！", sampleAnswerPinyin: "Wǒ kěyǐ de, jiāyóu!", sampleAnswerVietnamese: "Tôi có thể làm được, cố lên nha!" },
    writing: { promptVietnamese: "Dịch: 'Tôi đã chuẩn bị xong rồi'", suggestedAnswerTraditional: "我準備好了。", suggestedAnswerPinyin: "Wǒ zhǔnbèi hǎo le.", suggestedAnswerVietnamese: "Tôi đã xong chuẩn bị." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ để nói 'Cố lên!' là gì?", options: ["再見", "加油", "保重", "準備"], correctAnswer: "加油", explanation: "加油 (Jiāyóu) có nghĩa là cố lên, một lời động viên rất quen thuộc." }]
  }
];
