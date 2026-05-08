import { Lesson } from '../types/lesson';

export const stage3LessonsPart1: Lesson[] = [
  {
    id: "lesson_21",
    day: 21,
    title: "Bài 21: Đồ vật trong phòng học",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Lớp học",
    objectives: [
      "Học từ vựng về các đồ vật quen thuộc trong phòng học.",
      "Sử dụng từ chỉ vị trí cơ bản (trên, dưới)."
    ],
    vocabulary: [
      { id: "v_21_1", traditional: "書", pinyin: "Shū", zhuyin: "ㄕㄨ", vietnamese: "Sách", partOfSpeech: "Danh từ", exampleTraditional: "這是一本書。", examplePinyin: "Zhè shì yì běn shū.", exampleVietnamese: "Đây là một quyển sách." },
      { id: "v_21_2", traditional: "筆", pinyin: "Bǐ", zhuyin: "ㄅㄧˇ", vietnamese: "Bút", partOfSpeech: "Danh từ", exampleTraditional: "我有一支筆。", examplePinyin: "Wǒ yǒu yì zhī bǐ.", exampleVietnamese: "Tôi có một cái bút." },
      { id: "v_21_3", traditional: "桌子", pinyin: "Zhuōzi", zhuyin: "ㄓㄨㄛ ㄗ˙", vietnamese: "Cái bàn", partOfSpeech: "Danh từ", exampleTraditional: "桌子上有一本書。", examplePinyin: "Zhuōzi shàng yǒu yì běn shū.", exampleVietnamese: "Trên bàn có một quyển sách." },
      { id: "v_21_4", traditional: "椅子", pinyin: "Yǐzi", zhuyin: "ㄧˇ ㄗ˙", vietnamese: "Cái ghế", partOfSpeech: "Danh từ", exampleTraditional: "請坐在椅子上。", examplePinyin: "Qǐng zuò zài yǐzi shàng.", exampleVietnamese: "Xin mời ngồi lên ghế." },
      { id: "v_21_5", traditional: "上", pinyin: "Shàng", zhuyin: "ㄕㄤˋ", vietnamese: "Trên", partOfSpeech: "Giới từ / Phương vị từ", exampleTraditional: "桌子上", examplePinyin: "Zhuōzi shàng", exampleVietnamese: "Trên bàn" },
      { id: "v_21_6", traditional: "下", pinyin: "Xià", zhuyin: "ㄒㄧㄚˋ", vietnamese: "Dưới", partOfSpeech: "Giới từ / Phương vị từ", exampleTraditional: "桌子下", examplePinyin: "Zhuōzi xià", exampleVietnamese: "Dưới bàn" }
    ],
    sentencePatterns: [
      { traditional: "...在哪裡？", pinyin: "...zài nǎlǐ?", zhuyin: "...ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ?", vietnamese: "...ở đâu?", usage: "Hỏi vị trí của đồ vật." },
      { traditional: "...在...上面/下面。", pinyin: "...zài... shàngmiàn/xiàmiàn.", zhuyin: "...ㄗㄞˋ... ㄕㄤˋ ㄇㄧㄢˋ/ㄒㄧㄚˋ ㄇㄧㄢˋ.", vietnamese: "...ở trên/dưới...", usage: "Chỉ vị trí." }
    ],
    listening: {
      title: "Tìm đồ vật",
      transcriptTraditional: "A: 請問，我的書在哪裡？\nB: 你的書在桌子上。\nA: 那我的筆呢？\nB: 筆在椅子下。",
      transcriptPinyin: "A: Qǐngwèn, wǒ de shū zài nǎlǐ?\nB: Nǐ de shū zài zhuōzi shàng.\nA: Nà wǒ de bǐ ne?\nB: Bǐ zài yǐzi xià.",
      transcriptVietnamese: "A: Xin hỏi, sách của tôi ở đâu?\nB: Sách của bạn ở trên bàn.\nA: Thế bút của tôi đâu?\nB: Bút ở dưới ghế.",
      questions: [
        { id: "l_21_q1", type: "multiple_choice", question: "Cái bút ở đâu?", options: ["Trên bàn", "Dưới bàn", "Trên ghế", "Dưới ghế"], correctAnswer: "Dưới ghế", explanation: "筆在椅子下 (Bút ở dưới ghế)." }
      ]
    },
    reading: {
      title: "Phòng học của tôi",
      passageTraditional: "這是我的教室。教室裡有很多桌子和椅子。桌子上有書和筆。老師在教室裡。",
      passagePinyin: "Zhè shì wǒ de jiàoshì. Jiàoshì lǐ yǒu hěnduō zhuōzi hé yǐzi. Zhuōzi shàng yǒu shū hé bǐ. Lǎoshī zài jiàoshì lǐ.",
      passageVietnamese: "Đây là phòng học của tôi. Trong phòng có rất nhiều bàn và ghế. Trên bàn có sách và bút. Giáo viên đang ở trong phòng học.",
      questions: [
        { id: "r_21_q1", type: "true_false", question: "Trên bàn không có đồ vật gì. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 桌子上有書和筆 (Trên bàn có sách và bút)." }
      ]
    },
    speaking: {
      promptTraditional: "看著你的桌子，告訴我桌上有什麼？",
      promptPinyin: "Kàn zhe nǐ de zhuōzi, gàosù wǒ zhuō shàng yǒu shénme?",
      promptVietnamese: "Nhìn vào cái bàn của bạn, hãy nói trên bàn có những gì?",
      sampleAnswerTraditional: "我的桌子上有一本書和兩支筆。",
      sampleAnswerPinyin: "Wǒ de zhuōzi shàng yǒu yì běn shū hé liǎng zhī bǐ.",
      sampleAnswerVietnamese: "Trên bàn tôi có một quyển sách và hai cây bút."
    },
    writing: {
      promptVietnamese: "Viết bằng tiếng Trung: 'Sách của tôi ở trên bàn'.",
      suggestedAnswerTraditional: "我的書在桌子上。",
      suggestedAnswerPinyin: "Wǒ de shū zài zhuōzi shàng.",
      suggestedAnswerVietnamese: "Sách của tôi ở trên bàn."
    },
    quiz: [
      { id: "q_21_1", type: "multiple_choice", question: "Từ 'Cái ghế' trong tiếng Trung là gì?", options: ["書 (Shū)", "筆 (Bǐ)", "桌子 (Zhuōzi)", "椅子 (Yǐzi)"], correctAnswer: "椅子 (Yǐzi)", explanation: "椅子 (Yǐzi) nghĩa là cái ghế." }
    ]
  },
  {
    id: "lesson_22",
    day: 22,
    title: "Bài 22: Các địa điểm",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Địa điểm",
    objectives: [
      "Học từ vựng một số địa điểm quen thuộc.",
      "Biết cách nói mình đang đi đến đâu."
    ],
    vocabulary: [
      { id: "v_22_1", traditional: "去", pinyin: "Qù", zhuyin: "ㄑㄩˋ", vietnamese: "Đi", partOfSpeech: "Động từ", exampleTraditional: "我要去學校。", examplePinyin: "Wǒ yào qù xuéxiào.", exampleVietnamese: "Tôi muốn đi đến trường." },
      { id: "v_22_2", traditional: "學校", pinyin: "Xuéxiào", zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ", vietnamese: "Trường học", partOfSpeech: "Danh từ", exampleTraditional: "這是一所好學校。", examplePinyin: "Zhè shì yì suǒ hǎo xuéxiào.", exampleVietnamese: "Đây là một trường học tốt." },
      { id: "v_22_3", traditional: "醫院", pinyin: "Yīyuàn", zhuyin: "ㄧ ㄩㄢˋ", vietnamese: "Bệnh viện", partOfSpeech: "Danh từ", exampleTraditional: "他生病了，去醫院了。", examplePinyin: "Tā shēngbìng le, qù yīyuàn le.", exampleVietnamese: "Anh ấy ốm rồi, đi bệnh viện rồi." },
      { id: "v_22_4", traditional: "商店", pinyin: "Shāngdiàn", zhuyin: "ㄕㄤ ㄉㄧㄢˋ", vietnamese: "Cửa hàng", partOfSpeech: "Danh từ", exampleTraditional: "我去商店買東西。", examplePinyin: "Wǒ qù shāngdiàn mǎi dōngxī.", exampleVietnamese: "Tôi đi cửa hàng mua đồ." },
      { id: "v_22_5", traditional: "家", pinyin: "Jiā", zhuyin: "ㄐㄧㄚ", vietnamese: "Nhà", partOfSpeech: "Danh từ", exampleTraditional: "我回家了。", examplePinyin: "Wǒ huí jiā le.", exampleVietnamese: "Tôi về nhà rồi." },
      { id: "v_22_6", traditional: "哪裡", pinyin: "Nǎlǐ", zhuyin: "ㄋㄚˇ ㄌㄧˇ", vietnamese: "Ở đâu", partOfSpeech: "Đại từ", exampleTraditional: "你要去哪裡？", examplePinyin: "Nǐ yào qù nǎlǐ?", exampleVietnamese: "Bạn muốn đi đâu?" }
    ],
    sentencePatterns: [
      { traditional: "你去哪裡？", pinyin: "Nǐ qù nǎlǐ?", zhuyin: "ㄋㄧˇ ㄑㄩˋ ㄋㄚˇ ㄌㄧˇ?", vietnamese: "Bạn đi đâu đấy?", usage: "Hỏi nơi đến." },
      { traditional: "我去...", pinyin: "Wǒ qù...", zhuyin: "ㄨㄛˇ ㄑㄩˋ...", vietnamese: "Tôi đi...", usage: "Nói nơi mình đến." }
    ],
    listening: {
      title: "Hỏi đường đi",
      transcriptTraditional: "A: 請問，你要去哪裡？\nB: 我去學校。你呢？\nA: 我去商店買東西。",
      transcriptPinyin: "A: Qǐngwèn, nǐ yào qù nǎlǐ?\nB: Wǒ qù xuéxiào. Nǐ ne?\nA: Wǒ qù shāngdiàn mǎi dōngxī.",
      transcriptVietnamese: "A: Xin hỏi, bạn muốn đi đâu?\nB: Tôi đi đến trường. Còn bạn?\nA: Tôi đi đến cửa hàng mua đồ.",
      questions: [
        { id: "l_22_q1", type: "multiple_choice", question: "Nhân vật B muốn đi đâu?", options: ["Cửa hàng", "Bệnh viện", "Trường học", "Nhà"], correctAnswer: "Trường học", explanation: "B nói 我去學校 (Tôi đi đến trường)." }
      ]
    },
    reading: {
      title: "Ngày cuối tuần",
      passageTraditional: "今天是星期天。早上，爸爸去商店買東西。媽媽在家做飯。下午，哥哥去醫院看朋友。我 在家看書。",
      passagePinyin: "Jīntiān shì xīngqítiān. Zǎoshang, bàba qù shāngdiàn mǎi dōngxī. Māmā zài jiā zuò fàn. Xiàwǔ, gēgē qù yīyuàn kàn péngyǒu. Wǒ zài jiā kàn shū.",
      passageVietnamese: "Hôm nay là Chủ Nhật. Buổi sáng, bố đi cửa hàng mua đồ. Mẹ ở nhà nấu cơm. Buổi chiều, anh trai đi bệnh viện thăm bạn. Tôi ở nhà đọc sách.",
      questions: [
        { id: "r_22_q1", type: "true_false", question: "Buổi chiều, anh trai ở nhà đọc sách. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Nhân vật 'tôi' ở nhà đọc sách, còn anh trai đi bệnh viện (哥哥去醫院)." }
      ]
    },
    speaking: {
      promptTraditional: "如果朋友問你「你去哪裡？」，你怎麼用中文回答說你要去商店？",
      promptPinyin: "Rúguǒ péngyǒu wèn nǐ 'nǐ qù nǎlǐ?', nǐ zěnme yòng zhōngwén huídá shuō nǐ yào qù shāngdiàn?",
      promptVietnamese: "Nếu bạn bè hỏi bạn 'Bạn đi đâu?', bạn sẽ trả lời bằng tiếng Trung thế nào khi muốn nói 'Tôi đi cửa hàng'?",
      sampleAnswerTraditional: "我去商店。",
      sampleAnswerPinyin: "Wǒ qù shāngdiàn.",
      sampleAnswerVietnamese: "Tôi đi cửa hàng."
    },
    writing: {
      promptVietnamese: "Hãy viết câu: 'Tôi muốn đi trường học' bằng chữ phồn thể.",
      suggestedAnswerTraditional: "我要去學校。",
      suggestedAnswerPinyin: "Wǒ yào qù xuéxiào.",
      suggestedAnswerVietnamese: "Tôi muốn đi trường học."
    },
    quiz: [
      { id: "q_22_1", type: "fill_blank", question: "Điền vào chỗ trống: 你要__(đi)__哪裡？", correctAnswer: "去", explanation: "去 (qù) nghĩa là đi." }
    ]
  },
  {
    id: "lesson_23",
    day: 23,
    title: "Bài 23: Phương tiện giao thông",
    level: "beginner",
    stage: "CHẶNG 3: GIAO TIẾP HÀNG NGÀY",
    topic: "Giao thông",
    objectives: [
      "Học từ vựng các loại xe cộ.",
      "Biết cách hỏi và trả lời đi bằng phương tiện gì."
    ],
    vocabulary: [
      { id: "v_23_1", traditional: "車", pinyin: "Chē", zhuyin: "ㄔㄜ", vietnamese: "Xe chung", partOfSpeech: "Danh từ", exampleTraditional: "路上有很多車。", examplePinyin: "Lù shàng yǒu hěnduō chē.", exampleVietnamese: "Trên đường có nhiều xe." },
      { id: "v_23_2", traditional: "公車", pinyin: "Gōngchē", zhuyin: "ㄍㄨㄥ ㄔㄜ", vietnamese: "Xe buýt", partOfSpeech: "Danh từ", exampleTraditional: "我坐公車去學校。", examplePinyin: "Wǒ zuò gōngchē qù xuéxiào.", exampleVietnamese: "Tôi ngồi xe buýt đi học." },
      { id: "v_23_3", traditional: "捷運", pinyin: "Jiéyùn", zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ", vietnamese: "Tàu điện ngầm (MRT)", partOfSpeech: "Danh từ", exampleTraditional: "在台北，很多人坐捷運。", examplePinyin: "Zài Táiběi, hěnduō rén zuò jiéyùn.", exampleVietnamese: "Ở Đài Bắc, rất nhiều người đi MRT." },
      { id: "v_23_4", traditional: "計程車", pinyin: "Jìchéngchē", zhuyin: "ㄐㄧˋ ㄔㄥˊ ㄔㄜ", vietnamese: "Xe taxi", partOfSpeech: "Danh từ", exampleTraditional: "這是一輛計程車。", examplePinyin: "Zhè shì yí liàng jìchéngchē.", exampleVietnamese: "Đây là một chiếc taxi." },
      { id: "v_23_5", traditional: "坐", pinyin: "Zuò", zhuyin: "ㄗㄨㄛˋ", vietnamese: "Ngồi, đi (tàu xe)", partOfSpeech: "Động từ", exampleTraditional: "坐車", examplePinyin: "Zuò chē", exampleVietnamese: "Đi xe" },
      { id: "v_23_6", traditional: "騎", pinyin: "Qí", zhuyin: "ㄑㄧˊ", vietnamese: "Cưỡi, đi (xe đạp, xe máy)", partOfSpeech: "Động từ", exampleTraditional: "騎摩托車", examplePinyin: "Qí mótuōchē", exampleVietnamese: "Đi xe máy" }
    ],
    sentencePatterns: [
      { traditional: "你怎麼去...？", pinyin: "Nǐ zěnme qù...?", zhuyin: "ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄑㄩˋ...?", vietnamese: "Bạn đi... bằng cách nào?", usage: "Hỏi phương tiện đi lại." },
      { traditional: "我坐/騎...去。", pinyin: "Wǒ zuò/qí... qù.", zhuyin: "ㄨㄛˇ ㄗㄨㄛˋ/ㄑㄧˊ... ㄑㄩˋ.", vietnamese: "Tôi đi bằng...", usage: "Trả lời phương tiện." }
    ],
    listening: {
      title: "Đi bằng gì?",
      transcriptTraditional: "A: 老師，你明天怎麼去學校？\nB: 我坐捷運去。你呢？\nA: 我坐公車去。",
      transcriptPinyin: "A: Lǎoshī, nǐ míngtiān zěnme qù xuéxiào?\nB: Wǒ zuò jiéyùn qù. Nǐ ne?\nA: Wǒ zuò gōngchē qù.",
      transcriptVietnamese: "A: Cô giáo, ngày mai thầy/cô đi đến trường bằng gì?\nB: Cô đi bằng MRT. Còn em?\nA: Em đi xe buýt.",
      questions: [
        { id: "l_23_q1", type: "multiple_choice", question: "Học sinh đi đến trường bằng phương tiện gì?", options: ["Đi bộ", "Taxi", "Xe buýt", "MRT"], correctAnswer: "Xe buýt", explanation: "Học sinh (A) nói 我坐公車去 (Em đi bằng xe buýt)." }
      ]
    },
    reading: {
      title: "Giao thông ở Đài Loan",
      passageTraditional: "台灣的交通很方便。在台北，你可以坐捷運或公車。捷運很快。如果你有錢，你可以坐計程車。",
      passagePinyin: "Táiwān de jiāotōng hěn fāngbiàn. Zài Táiběi, nǐ kěyǐ zuò jiéyùn huò gōngchē. Jiéyùn hěn kuài. Rúguǒ nǐ yǒu qián, nǐ kěyǐ zuò jìchéngchē.",
      passageVietnamese: "Giao thông Đài Loan rất thuận tiện. Ở Đài Bắc, bạn có thể đi MRT hoặc xe buýt. MRT rất nhanh. Nếu bạn có tiền, bạn có thể đi taxi.",
      questions: [
        { id: "r_23_q1", type: "multiple_choice", question: "Ở Đài Bắc di chuyển bằng phương tiện gì thường rất nhanh?", options: ["Xe đạp", "Tàu điện ngầm (MRT)", "Đi bộ", "Xe máy"], correctAnswer: "Tàu điện ngầm (MRT)", explanation: "Đoạn văn viết 捷運很快 (MRT rất nhanh)." }
      ]
    },
    speaking: {
      promptTraditional: "在你的家鄉，你常常怎麼去上學/上班？",
      promptPinyin: "Zài nǐ de jiāxiāng, nǐ chángcháng zěnme qù shàngxué/shàngbān?",
      promptVietnamese: "Ở quê bạn, bạn thường đi học/đi làm bằng phương tiện gì?",
      sampleAnswerTraditional: "我常常騎摩托車去上班。",
      sampleAnswerPinyin: "Wǒ chángcháng qí mótuōchē qù shàngbān.",
      sampleAnswerVietnamese: "Tôi thường chạy xe máy đi làm."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Tôi ngồi xe buýt đi học.'",
      suggestedAnswerTraditional: "我坐公車去學校。",
      suggestedAnswerPinyin: "Wǒ zuò gōngchē qù xuéxiào.",
      suggestedAnswerVietnamese: "Tôi đi xe buýt đến trường."
    },
    quiz: [
      { id: "q_23_1", type: "multiple_choice", question: "Từ '捷運' (Jiéyùn) trong ngữ cảnh giao thông Đài Loan là gì?", options: ["Tàu hỏa", "Máy bay", "Tàu điện ngầm (MRT)", "Xe đạp"], correctAnswer: "Tàu điện ngầm (MRT)", explanation: "捷運 (Jiéyùn) là hệ thống MRT ở Đài Loan." }
    ]
  }
];
