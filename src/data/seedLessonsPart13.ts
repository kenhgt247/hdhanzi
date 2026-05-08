import { Lesson } from '../types/lesson';

export const stage4LessonsPart2: Lesson[] = [
  {
    id: "lesson_37",
    day: 37,
    title: "Bài 37: Lời xin lỗi và tha thứ",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Giao tiếp",
    objectives: ["Cách nói xin lỗi và đáp lại lời xin lỗi"],
    vocabulary: [
      { id: "v_37_1", traditional: "對不起", pinyin: "Duìbùqǐ", zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", vietnamese: "Xin lỗi", partOfSpeech: "Cụm từ", exampleTraditional: "對不起，我遲到了。", examplePinyin: "Duìbùqǐ, wǒ chídào le.", exampleVietnamese: "Xin lỗi, tôi đến muộn." },
      { id: "v_37_2", traditional: "沒關係", pinyin: "Méiguānxi", zhuyin: "ㄇㄟˊ ㄍㄨㄢ ㄒㄧ˙", vietnamese: "Không sao đâu", partOfSpeech: "Cụm từ", exampleTraditional: "A: 對不起。 B: 沒關係。", examplePinyin: "A: Duìbùqǐ. B: Méiguānxi.", exampleVietnamese: "A: Xin lỗi. B: Không sao đâu." },
      { id: "v_37_3", traditional: "遲到", pinyin: "Chídào", zhuyin: "ㄔˊ ㄉㄠˋ", vietnamese: "Đến muộn", partOfSpeech: "Động từ", exampleTraditional: "請不要遲到。", examplePinyin: "Qǐng búyào chídào.", exampleVietnamese: "Xin đừng đến muộn." },
      { id: "v_37_4", traditional: "不好意思", pinyin: "Bùhǎoyìsi", zhuyin: "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙", vietnamese: "Ngại quá / Xin lỗi (nhẹ nhàng)", partOfSpeech: "Cụm từ", exampleTraditional: "不好意思，請問...", examplePinyin: "Bùhǎoyìsi, qǐngwèn...", exampleVietnamese: "Xin lỗi, cho hỏi..." }
    ],
    sentencePatterns: [
      { traditional: "對不起 / 不好意思", pinyin: "Duìbùqǐ / Bùhǎoyìsi", zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ / ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙", vietnamese: "Xin lỗi (trang trọng / nhẹ nhàng)", usage: "Biểu đạt sự hối lỗi hoặc làm phiền" }
    ],
    listening: { title: "Xin lỗi vì đến muộn", transcriptTraditional: "A: 老師，對不起，我遲到了。\nB: 沒關係，下次請早一點來。\nA: 好的，謝謝老師。", transcriptPinyin: "A: Lǎoshī, duìbùqǐ, wǒ chídào le.\nB: Méiguānxi, xià cì qǐng zǎo yìdiǎn lái.\nA: Hǎo de, xièxie lǎoshī.", transcriptVietnamese: "A: Thưa cô, em xin lỗi, em đến muộn.\nB: Không sao, lần sau nhớ đến sớm hơn chút nhé.\nA: Vâng ạ, cám ơn cô.", questions: [{ id: "q1", type: "multiple_choice", question: "A xin lỗi cô giáo vì chuyện gì?", options: ["Không làm bài tập", "Không mang sách", "Đến muộn", "Ngủ gật"], correctAnswer: "Đến muộn", explanation: "A nói 我遲到了 (Em đến muộn rồi)." }] },
    reading: { title: "Trên tàu MRT", passageTraditional: "在捷運上人很多。我不小心碰到一個人。我馬上說「不好意思」。他也說「沒關係」。大家都很客氣。", passagePinyin: "Zài jiéyùn shàng rén hěnduō. Wǒ bù xiǎoxīn pèngdào yí gè rén. Wǒ mǎshàng shuō 'bùhǎoyìsi'. Tā yě shuō 'méiguānxi'. Dàjiā dōu hěn kèqì.", passageVietnamese: "Trên MRT có rất nhiều người. Tôi vô tình đụng trúng một người. Tôi liền nói 'Ngại quá/Xin lỗi'. Người đó cũng nói 'Không sao'. Mọi người đều rất lịch sự.", questions: [{ id: "q1", type: "true_false", question: "Khi đụng trúng người khác, tác giả đã nói '對不起' (Duìbùqǐ). (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Tác giả dùng từ 不好意思 (Bùhǎoyìsi) thay vì 對不起." }] },
    speaking: { promptTraditional: "如果你遲到了，你怎麼跟朋友說？", promptPinyin: "Rúguǒ nǐ chídào le, nǐ zěnme gēn péngyǒu shuō?", promptVietnamese: "Nếu bạn đến muộn, bạn nói với bạn bè thế nào?", sampleAnswerTraditional: "對不起，我遲到了。", sampleAnswerPinyin: "Duìbùqǐ, wǒ chídào le.", sampleAnswerVietnamese: "Xin lỗi, tôi đến muộn rồi." },
    writing: { promptVietnamese: "Viết: 'Không sao đâu'", suggestedAnswerTraditional: "沒關係", suggestedAnswerPinyin: "Méiguānxi", suggestedAnswerVietnamese: "Không sao đâu" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Để mở lời hỏi đường một cách lịch sự, nên dùng cụm từ nào?", options: ["再見", "不好意思", "沒關係", "太好了"], correctAnswer: "不好意思", explanation: "不好意思 dùng để mở lời làm phiền ai đó rất lịch sự." }]
  },
  {
    id: "lesson_38",
    day: 38,
    title: "Bài 38: Giao tiếp trong lớp học",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Trường học",
    objectives: ["Từ vựng và mẫu câu thường dùng trong lớp học"],
    vocabulary: [
      { id: "v_38_1", traditional: "懂", pinyin: "Dǒng", zhuyin: "ㄉㄨㄥˇ", vietnamese: "Hiểu", partOfSpeech: "Động từ", exampleTraditional: "我懂了。", examplePinyin: "Wǒ dǒng le.", exampleVietnamese: "Tôi hiểu rồi." },
      { id: "v_38_2", traditional: "問題", pinyin: "Wèntí", zhuyin: "ㄨㄣˋ ㄊㄧˊ", vietnamese: "Câu hỏi / Vấn đề", partOfSpeech: "Danh từ", exampleTraditional: "我有問題。", examplePinyin: "Wǒ yǒu wèntí.", exampleVietnamese: "Tôi có câu hỏi." },
      { id: "v_38_3", traditional: "再說一次", pinyin: "Zài shuō yí cì", zhuyin: "ㄗㄞˋ ㄕㄨㄛ ㄧˊ ㄘˋ", vietnamese: "Nói lại một lần", partOfSpeech: "Cụm từ", exampleTraditional: "請再說一次。", examplePinyin: "Qǐng zài shuō yí cì.", exampleVietnamese: "Xin hãy nói lại một lần." },
      { id: "v_38_4", traditional: "意思", pinyin: "Yìsi", zhuyin: "ㄧˋ ㄙ˙", vietnamese: "Ý nghĩa", partOfSpeech: "Danh từ", exampleTraditional: "這是什麼意思？", examplePinyin: "Zhè shì shénme yìsi?", exampleVietnamese: "Cái này nghĩa là gì?" }
    ],
    sentencePatterns: [
      { traditional: "懂不懂？ / 懂嗎？", pinyin: "Dǒng bù dǒng? / Dǒng ma?", zhuyin: "ㄉㄨㄥˇ ㄅㄨˋ ㄉㄨㄥˇ? / ㄉㄨㄥˇ ㄇㄚ˙?", vietnamese: "Có hiểu không?", usage: "Giáo viên hỏi học sinh" },
      { traditional: "這是什麼意思？", pinyin: "Zhè shì shénme yìsi?", zhuyin: "ㄓㄜˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧˋ ㄙ˙?", vietnamese: "Cái này nghĩa là gì?", usage: "Hỏi nghĩa của từ" }
    ],
    listening: { title: "Trong lớp học", transcriptTraditional: "A: 同學們，懂不懂？\nB: 老師，我不懂。請再說一次。\nA: 好的，我再說一次。", transcriptPinyin: "A: Tóngxué men, dǒng bù dǒng?\nB: Lǎoshī, wǒ bù dǒng. Qǐng zài shuō yí cì.\nA: Hǎo de, wǒ zài shuō yí cì.", transcriptVietnamese: "A: Các em học sinh, hiểu chưa?\nB: Thưa thầy, em chưa hiểu. Xin thầy nói lại một lần.\nA: Được rồi, thầy nói lại.", questions: [{ id: "q1", type: "multiple_choice", question: "Học sinh yêu cầu thầy giáo làm gì?", options: ["Nghỉ học", "Kiểm tra bài", "Nói lại một lần", "Mở sách"], correctAnswer: "Nói lại một lần", explanation: "Học sinh nói 請再說一次 (Xin hãy nói lại)." }] },
    reading: { title: "Học tiếng Trung", passageTraditional: "上中文課的時候，我們說中文。如果不懂，我們可以問老師。老師會說：「這是這個意思。」", passagePinyin: "Shàng zhōngwén kè de shíhòu, wǒmen shuō zhōngwén. Rúguǒ bù dǒng, wǒmen kěyǐ wèn lǎoshī. Lǎoshī huì shuō: 'Zhè shì zhège yìsi.'", passageVietnamese: "Trong giờ tiếng Trung, chúng tôi nói tiếng Trung. Nếu không hiểu, chúng tôi có thể hỏi giáo viên. Giáo viên sẽ bảo: 'Cái này có nghĩa là thế này'.", questions: [{ id: "q1", type: "true_false", question: "Nếu không hiểu bài, học sinh có thể hỏi giáo viên. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết 如果不懂，我們可以問老師 (Nếu không hiểu, có thể hỏi giáo viên)." }] },
    speaking: { promptTraditional: "上課時，如果你有問題可以怎麼說？", promptPinyin: "Shàngkè shí, rúguǒ nǐ yǒu wèntí kěyǐ zěnme shuō?", promptVietnamese: "Lúc lên lớp, nếu bạn có câu hỏi bạn sẽ nói thế nào?", sampleAnswerTraditional: "老師，我有一個問題。", sampleAnswerPinyin: "Lǎoshī, wǒ yǒu yí gè wèntí.", sampleAnswerVietnamese: "Thưa thầy cô, em có 1 câu hỏi." },
    writing: { promptVietnamese: "Dịch: 'Xin nói lại 1 lần'.", suggestedAnswerTraditional: "請再說一次。", suggestedAnswerPinyin: "Qǐng zài shuō yí cì.", suggestedAnswerVietnamese: "Xin nói lại lần nữa." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ 'Hiểu' tiếng Trung là gì?", options: ["看", "懂", "聽", "說"], correctAnswer: "懂", explanation: "懂 (Dǒng) là hiểu." }]
  },
  {
    id: "lesson_39",
    day: 39,
    title: "Bài 39: Xin nghỉ phép",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Trường học & Làm việc",
    objectives: ["Học cách xin nghỉ học, nghỉ làm cơ bản"],
    vocabulary: [
      { id: "v_39_1", traditional: "請假", pinyin: "Qǐngjià", zhuyin: "ㄑㄧㄥˇ ㄐㄧㄚˋ", vietnamese: "Xin nghỉ phép", partOfSpeech: "Động từ", exampleTraditional: "我要請假。", examplePinyin: "Wǒ yào qǐngjià.", exampleVietnamese: "Tôi muốn xin nghỉ phép." },
      { id: "v_39_2", traditional: "不舒服", pinyin: "Bù shūfú", zhuyin: "ㄅㄨˋ ㄕㄨ ㄈㄨˊ", vietnamese: "Không khỏe, khó chịu", partOfSpeech: "Tính từ", exampleTraditional: "我今天不舒服。", examplePinyin: "Wǒ jīntiān bù shūfú.", exampleVietnamese: "Hôm nay tôi không khỏe." },
      { id: "v_39_3", traditional: "醫院", pinyin: "Yīyuàn", zhuyin: "ㄧ ㄩㄢˋ", vietnamese: "Bệnh viện", partOfSpeech: "Danh từ", exampleTraditional: "我要去醫院。", examplePinyin: "Wǒ yào qù yīyuàn.", exampleVietnamese: "Tôi muốn tới bệnh viện." },
      { id: "v_39_4", traditional: "看醫生", pinyin: "Kàn yīshēng", zhuyin: "ㄎㄢˋ ㄧ ㄕㄥ", vietnamese: "Khám bác sĩ", partOfSpeech: "Cụm động từ", exampleTraditional: "下午我要去看醫生。", examplePinyin: "Xiàwǔ wǒ yào qù kàn yīshēng.", exampleVietnamese: "Chiều tôi phải đi khám bác sĩ." }
    ],
    sentencePatterns: [
      { traditional: "我想請假。", pinyin: "Wǒ xiǎng qǐngjià.", zhuyin: "ㄨㄛˇ ㄒㄧㄤˇ ㄑㄧㄥˇ ㄐㄧㄚˋ.", vietnamese: "Tôi muốn xin nghỉ.", usage: "Xin nghỉ" },
      { traditional: "我不太舒服。", pinyin: "Wǒ búdài shūfú.", zhuyin: "ㄨㄛˇ ㄅㄨˊ ㄉㄞˋ ㄕㄨ ㄈㄨˊ.", vietnamese: "Tôi không khỏe lắm.", usage: "Nêu lý do nghỉ" }
    ],
    listening: { title: "Gọi điện xin nghỉ", transcriptTraditional: "A: 老師好。我是大山。\nB: 大山你好。\nA: 老師，我今天不舒服，我想請假。\nB: 好的，你去休息吧。", transcriptPinyin: "A: Lǎoshī hǎo. Wǒ shì Dàshān.\nB: Dàshān nǐ hǎo.\nA: Lǎoshī, wǒ jīntiān bù shūfú, wǒ xiǎng qǐngjià.\nB: Hǎo de, nǐ qù xiūxí ba.", transcriptVietnamese: "A: Chào thầy. Em là Đại Sơn.\nB: Chào em.\nA: Thầy ơi, hôm nay em không khỏe, em muốn xin phép nghỉ.\nB: Được rồi, em đi nghỉ ngơi đi.", questions: [{ id: "q1", type: "multiple_choice", question: "Tại sao Đại Sơn xin nghỉ?", options: ["Đi chơi", "Bạn ốm", "Không khỏe", "Làm thêm"], correctAnswer: "Không khỏe", explanation: "Đại Sơn nói 我今天不舒服 (Em hôm nay không khỏe)." }] },
    reading: { title: "Giấy xin phép", passageTraditional: "老師好，我是小月。我今天生病了，很不舒服。下午我要去醫院看醫生。我想請假一天，謝謝老師。", passagePinyin: "Lǎoshī hǎo, wǒ shì Xiǎoyuè. Wǒ jīntiān shēngbìng le, hěn bù shūfú. Xiàwǔ wǒ yào qù yīyuàn kàn yīshēng. Wǒ xiǎng qǐngjià yì tiān, xièxie lǎoshī.", passageVietnamese: "Thưa cô, em là Tiểu Nguyệt. Hôm nay em bị ốm, trong người rất khó chịu. Buổi chiều em phải tới bệnh viện khám bác sĩ. Em muốn xin phép nghỉ một ngày, cảm ơn cô.", questions: [{ id: "q1", type: "multiple_choice", question: "Buổi chiều Tiểu Nguyệt dự định đi đâu?", options: ["Siêu thị", "Bệnh viện", "Bưu điện", "Công viên"], correctAnswer: "Bệnh viện", explanation: "Đoạn văn viết: 下午我要去醫院看醫生 (Chiều em phải đi bệnh viện khám bệnh)." }] },
    speaking: { promptTraditional: "如果你生病了，你怎麼跟老闆請假？", promptPinyin: "Rúguǒ nǐ shēngbìng le, nǐ zěnme gēn lǎobǎn qǐngjià?", promptVietnamese: "Nếu bạn ốm, bạn xin nghỉ phép với sếp thế nào?", sampleAnswerTraditional: "老闆，我不舒服，我想請假。", sampleAnswerPinyin: "Lǎobǎn, wǒ bù shūfú, wǒ xiǎng qǐngjià.", sampleAnswerVietnamese: "Sếp ơi, tôi không khỏe, tôi muốn xin nghỉ phép." },
    writing: { promptVietnamese: "Dịch: 'Đi khám bác sĩ'", suggestedAnswerTraditional: "看醫生", suggestedAnswerPinyin: "Kàn yīshēng", suggestedAnswerVietnamese: "Khám bác sĩ" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '請假' (qǐngjià) có nghĩa là gì?", options: ["Xin đồ", "Xin lỗi", "Xin nghỉ phép", "Xin chào"], correctAnswer: "Xin nghỉ phép", explanation: "請假 là xin phép nghỉ, vắng mặt." }]
  },
  {
    id: "lesson_40",
    day: 40,
    title: "Bài 40: Ẩm thực Đài Loan",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Ẩm thực",
    objectives: ["Biết tên một số món ăn vặt, chợ đêm tại Đài Loan"],
    vocabulary: [
      { id: "v_40_1", traditional: "夜市", pinyin: "Yèshì", zhuyin: "ㄧㄝˋ ㄕˋ", vietnamese: "Chợ đêm", partOfSpeech: "Danh từ", exampleTraditional: "我們去逛夜市。", examplePinyin: "Wǒmen qù guàng yèshì.", exampleVietnamese: "Chúng tôi đi dạo chợ đêm." },
      { id: "v_40_2", traditional: "珍珠奶茶", pinyin: "Zhēnzhū nǎichá", zhuyin: "ㄓㄣ ㄓㄨ ㄋㄞˇ ㄔㄚˊ", vietnamese: "Trà sữa trân châu", partOfSpeech: "Danh từ", exampleTraditional: "我喜歡喝珍珠奶茶。", examplePinyin: "Wǒ xǐhuān hē zhēnzhū nǎichá.", exampleVietnamese: "Tôi thích uống trà sữa trân châu." },
      { id: "v_40_3", traditional: "小吃", pinyin: "Xiǎochī", zhuyin: "ㄒㄧㄠˇ ㄔ", vietnamese: "Món ăn vặt", partOfSpeech: "Danh từ", exampleTraditional: "台灣小吃很好吃。", examplePinyin: "Táiwān xiǎochī hěn hǎochī.", exampleVietnamese: "Đồ ăn vặt Đài Loan rất ngon." },
      { id: "v_40_4", traditional: "雞排", pinyin: "Jīpái", zhuyin: "ㄐㄧ ㄆㄞˊ", vietnamese: "Gà rán (miếng to)", partOfSpeech: "Danh từ", exampleTraditional: "我要一個雞排。", examplePinyin: "Wǒ yào yí gè jīpái.", exampleVietnamese: "Tôi muốn một miếng gà rán." },
      { id: "v_40_5", traditional: "臭豆腐", pinyin: "Chòu dòufǔ", zhuyin: "ㄔㄡˋ ㄉㄡˋ ㄈㄨˇ", vietnamese: "Đậu hũ thối", partOfSpeech: "Danh từ", exampleTraditional: "你敢吃臭豆腐嗎？", examplePinyin: "Nǐ gǎn chī chòu dòufǔ ma?", exampleVietnamese: "Bạn có dám ăn đậu hũ thối không?" }
    ],
    sentencePatterns: [
      { traditional: "你想吃什麼小吃？", pinyin: "Nǐ xiǎng chī shénme xiǎochī?", zhuyin: "ㄋㄧˇ ㄒㄧㄤˇ ㄔ ㄕㄣˊ ㄇㄜ˙ ㄒㄧㄠˇ ㄔ?", vietnamese: "Bạn muốn ăn vặt món gì?", usage: "Hỏi đồ ăn" }
    ],
    listening: { title: "Đi chợ đêm", transcriptTraditional: "A: 晚上我們去夜市好嗎？\nB: 好啊。夜市有很多小吃。\nA: 我想吃雞排和喝珍珠奶茶。", transcriptPinyin: "A: Wǎnshàng wǒmen qù yèshì hǎo ma?\nB: Hǎo a. Yèshì yǒu hěnduō xiǎochī.\nA: Wǒ xiǎng chī jīpái hé hē zhēnzhū nǎichá.", transcriptVietnamese: "A: Buổi tối chúng ta đi chợ đêm nhé?\nB: Được thôi. Chợ đêm có rất nhiều đồ ăn vặt.\nA: Tớ muốn ăn gà rán và uống trà sữa trân châu.", questions: [{ id: "q1", type: "multiple_choice", question: "A muốn ăn gì ở chợ đêm?", options: ["Đậu hũ thối", "Gà rán", "Mì bò", "Sủi cảo"], correctAnswer: "Gà rán", explanation: "A nói 我想吃雞排 (Tôi muốn ăn gà rán)." }] },
    reading: { title: "Ẩm thực Đài Loan", passageTraditional: "在台灣，夜市很有名。大家喜歡去夜市吃小吃。有珍珠奶茶、雞排和臭豆腐。我很喜歡夜市。", passagePinyin: "Zài Táiwān, yèshì hěn yǒumíng. Dàjiā xǐhuān qù yèshì chī xiǎochī. Yǒu zhēnzhū nǎichá, jīpái hé chòu dòufǔ. Wǒ hěn xǐhuān yèshì.", passageVietnamese: "Ở Đài Loan, chợ đêm rất nổi tiếng. Mọi người thích đi chợ đêm ăn vặt. Có trà sữa trân châu, gà rán, và đồ hũ thối. Tôi rất thích chợ đêm.", questions: [{ id: "q1", type: "true_false", question: "Chợ đêm ở Đài Loan đặc trưng bởi nhiều món ăn vặt. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Bài viết nói rõ chợ đêm có nhiều món như trà sữa, gà rán..." }] },
    speaking: { promptTraditional: "你喜歡吃什麼台灣小吃？", promptPinyin: "Nǐ xǐhuān chī shénme Táiwān xiǎochī?", promptVietnamese: "Bạn thích món ăn vặt Đài Loan nào?", sampleAnswerTraditional: "我喜歡喝珍珠奶茶。", sampleAnswerPinyin: "Wǒ xǐhuān hē zhēnzhū nǎichá.", sampleAnswerVietnamese: "Tôi thích uống trà sữa trân châu." },
    writing: { promptVietnamese: "Viết: 'Chợ đêm Đài Loan rất nổi tiếng'. (Nổi tiếng: 有名 - Yǒumíng)", suggestedAnswerTraditional: "台灣夜市很有名。", suggestedAnswerPinyin: "Táiwān yèshì hěn yǒumíng.", suggestedAnswerVietnamese: "Chợ đêm Đài Loan rất nổi tiếng." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Đậu hũ thối tiếng Trung là gì?", options: ["雞排", "臭豆腐", "夜市", "小吃"], correctAnswer: "臭豆腐", explanation: "臭豆腐 (Chòu dòufǔ) là Đậu hũ thối." }]
  },
  {
    id: "lesson_41",
    day: 41,
    title: "Bài 41: Thể thao dã ngoại",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Thể thao",
    objectives: ["Từ vựng về hoạt động rèn luyện thân thể"],
    vocabulary: [
      { id: "v_41_1", traditional: "運動", pinyin: "Yùndòng", zhuyin: "ㄩㄣˋ ㄉㄨㄥˋ", vietnamese: "Thể thao, vận động", partOfSpeech: "Danh từ, Động từ", exampleTraditional: "你喜歡運動嗎？", examplePinyin: "Nǐ xǐhuān yùndòng ma?", exampleVietnamese: "Bạn có thích thể thao không?" },
      { id: "v_41_2", traditional: "跑步", pinyin: "Pǎobù", zhuyin: "ㄆㄠˇ ㄅㄨˋ", vietnamese: "Chạy bộ", partOfSpeech: "Động từ", exampleTraditional: "我每天早上跑步。", examplePinyin: "Wǒ měitiān zǎoshang pǎobù.", exampleVietnamese: "Tôi chạy bộ mỗi sáng." },
      { id: "v_41_3", traditional: "游泳", pinyin: "Yóuyǒng", zhuyin: "ㄧㄡˊ ㄩㄥˇ", vietnamese: "Bơi lội", partOfSpeech: "Động từ", exampleTraditional: "夏天我喜歡游泳。", examplePinyin: "Xiàtiān wǒ xǐhuān yóuyǒng.", exampleVietnamese: "Mùa hè tôi thích bơi lội." },
      { id: "v_41_4", traditional: "打球", pinyin: "Dǎ qiú", zhuyin: "ㄉㄚˇ ㄑㄧㄡˊ", vietnamese: "Chơi bóng", partOfSpeech: "Cụm động từ", exampleTraditional: "週末我們去打球。", examplePinyin: "Zhōumò wǒmen qù dǎ qiú.", exampleVietnamese: "Cuối tuần chúng ta đi chơi bóng." },
      { id: "v_41_5", traditional: "公園", pinyin: "Gōngyuán", zhuyin: "ㄍㄨㄥ ㄩㄢˊ", vietnamese: "Công viên", partOfSpeech: "Danh từ", exampleTraditional: "在公園跑步", examplePinyin: "Zài gōngyuán pǎobù", exampleVietnamese: "Chạy bộ ở công viên" }
    ],
    sentencePatterns: [
      { traditional: "你常常做什麼運動？", pinyin: "Nǐ chángcháng zuò shénme yùndòng?", zhuyin: "ㄋㄧˇ ㄔㄤˊ ㄔㄤˊ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙ ㄩㄣˋ ㄉㄨㄥˋ?", vietnamese: "Bạn thường tập môn thể thao nào?", usage: "Hỏi về môn thể thao yêu thích" }
    ],
    listening: { title: "Rèn luyện sức khỏe", transcriptTraditional: "A: 你喜歡運動嗎？\nB: 喜歡。我常常去游泳。\nA: 我不喜歡游泳，我喜歡跑步。", transcriptPinyin: "A: Nǐ xǐhuān yùndòng ma?\nB: Xǐhuān. Wǒ chángcháng qù yóuyǒng.\nA: Wǒ bù xǐhuān yóuyǒng, wǒ xǐhuān pǎobù.", transcriptVietnamese: "A: Bạn có thích thể thao không?\nB: Thích chứ. Tôi thường xuyên đi bơi.\nA: Tôi không thích bơi, tôi thích chạy bộ.", questions: [{ id: "q1", type: "multiple_choice", question: "A thích môn thể thao nào?", options: ["Chạy bộ", "Bóng rổ", "Bơi lội", "Đá bóng"], correctAnswer: "Chạy bộ", explanation: "A nói 我喜歡跑步 (Tôi thích chạy bộ)." }] },
    reading: { title: "Sáng cuối tuần", passageTraditional: "週末早上，很多人去公園運動。有的人跑步，有的人打球。運動對身體很好。", passagePinyin: "Zhōumò zǎoshang, hěnduō rén qù gōngyuán yùndòng. Yǒu de rén pǎobù, yǒu de rén dǎ qiú. Yùndòng duì shēntǐ hěn hǎo.", passageVietnamese: "Sáng cuối tuần, rất nhiều người ra công viên tập thể dục. Có người chạy bộ, có người chơi bóng. Thể dục rất tốt cho cơ thể.", questions: [{ id: "q1", type: "true_false", question: "Tập thể thao rất có ích cho sức khỏe. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Câu cuối nói 運動對身體很好 (vận động rất tốt cho cơ thể)." }] },
    speaking: { promptTraditional: "週末你常常做什麼運動？", promptPinyin: "Zhōumò nǐ chángcháng zuò shénme yùndòng?", promptVietnamese: "Cuối tuần bạn thường chơi thể thao gì?", sampleAnswerTraditional: "週末我常常打球。", sampleAnswerPinyin: "Zhōumò wǒ chángcháng dǎ qiú.", sampleAnswerVietnamese: "Cuối tuần tôi thường chơi đánh bóng (bóng rổ, tennis...)." },
    writing: { promptVietnamese: "Dịch: 'Tôi thích bơi lội'.", suggestedAnswerTraditional: "我喜歡游泳。", suggestedAnswerPinyin: "Wǒ xǐhuān yóuyǒng.", suggestedAnswerVietnamese: "Tôi thích bơi lội." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Công viên tiếng Trung là gì?", options: ["商店", "學校", "公園", "醫院"], correctAnswer: "公園", explanation: "公園 (Gōngyuán) là công viên." }]
  }
];
