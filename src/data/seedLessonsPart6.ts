import { Lesson } from '../types/lesson';

export const stage2LessonsPart1: Lesson[] = [
  {
    id: "lesson_11",
    day: 11,
    title: "Bài 11: Gia đình của tôi",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Gia đình",
    objectives: [
      "Học từ vựng về các thành viên trong gia đình.",
      "Biết cách giới thiệu gia đình mình.",
      "Hỏi về gia đình người khác."
    ],
    vocabulary: [
      {
        id: "v_11_1", traditional: "爸爸", pinyin: "Bàba", zhuyin: "ㄅㄚˋ ㄅㄚ˙", vietnamese: "Bố",
        partOfSpeech: "Danh từ", exampleTraditional: "這是我爸爸。", examplePinyin: "Zhè shì wǒ bàba.", exampleVietnamese: "Đây là bố tôi."
      },
      {
        id: "v_11_2", traditional: "媽媽", pinyin: "Māmā", zhuyin: "ㄇㄚ ㄇㄚ˙", vietnamese: "Mẹ",
        partOfSpeech: "Danh từ", exampleTraditional: "我很愛我的媽媽。", examplePinyin: "Wǒ hěn ài wǒ de māmā.", exampleVietnamese: "Tôi rất yêu mẹ tôi."
      },
      {
        id: "v_11_3", traditional: "哥哥", pinyin: "Gēgē", zhuyin: "ㄍㄜ ㄍㄜ˙", vietnamese: "Anh trai",
        partOfSpeech: "Danh từ", exampleTraditional: "我有一個哥哥。", examplePinyin: "Wǒ yǒu yí gè gēgē.", exampleVietnamese: "Tôi có một anh trai."
      },
      {
        id: "v_11_4", traditional: "姐姐", pinyin: "Jiějiě", zhuyin: "ㄐㄧㄝˇ ㄐㄧㄝ˙", vietnamese: "Chị gái",
        partOfSpeech: "Danh từ", exampleTraditional: "姐姐很漂亮。", examplePinyin: "Jiějiě hěn piàoliang.", exampleVietnamese: "Chị gái rất đẹp."
      },
      {
        id: "v_11_5", traditional: "弟弟", pinyin: "Dìdì", zhuyin: "ㄉㄧˋ ㄉㄧ˙", vietnamese: "Em trai",
        partOfSpeech: "Danh từ", exampleTraditional: "弟弟是學生。", examplePinyin: "Dìdì shì xuéshēng.", exampleVietnamese: "Em trai là học sinh."
      },
      {
        id: "v_11_6", traditional: "妹妹", pinyin: "Mèimèi", zhuyin: "ㄇㄟˋ ㄇㄟ˙", vietnamese: "Em gái",
        partOfSpeech: "Danh từ", exampleTraditional: "妹妹喜歡喝奶茶。", examplePinyin: "Mèimèi xǐhuān hē nǎichá.", exampleVietnamese: "Em gái thích uống trà sữa."
      },
      {
        id: "v_11_7", traditional: "家", pinyin: "Jiā", zhuyin: "ㄐㄧㄚ", vietnamese: "Nhà, gia đình",
        partOfSpeech: "Danh từ", exampleTraditional: "我的家在越南。", examplePinyin: "Wǒ de jiā zài Yuènán.", exampleVietnamese: "Nhà tôi ở Việt Nam."
      },
      {
        id: "v_11_8", traditional: "有", pinyin: "Yǒu", zhuyin: "ㄧㄡˇ", vietnamese: "Có",
        partOfSpeech: "Động từ", exampleTraditional: "我家有四口人。", examplePinyin: "Wǒ jiā yǒu sì kǒu rén.", exampleVietnamese: "Nhà tôi có 4 người."
      }
    ],
    sentencePatterns: [
      {
        traditional: "你家有幾口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", zhuyin: "ㄋㄧˇ ㄐㄧㄚ ㄧㄡˇ ㄐㄧˇ ㄎㄡˇ ㄖㄣˊ?",
        vietnamese: "Nhà bạn có mấy người?", usage: "Hỏi về số lượng thành viên trong gia đình."
      },
      {
        traditional: "我家有...口人。", pinyin: "Wǒ jiā yǒu... kǒu rén.", zhuyin: "ㄨㄛˇ ㄐㄧㄚ ㄧㄡˇ... ㄎㄡˇ ㄖㄣˊ.",
        vietnamese: "Nhà tôi có... người.", usage: "Trả lời số thành viên trong gia đình."
      }
    ],
    listening: {
      title: "Hỏi thăm gia đình",
      transcriptTraditional: "A: 你家有幾口人？\nB: 我家有四口人：爸爸、媽媽、哥哥和我。你呢？\nA: 我家有三口人：爸爸、媽媽和我。我沒有兄弟姐妹。",
      transcriptPinyin: "A: Nǐ jiā yǒu jǐ kǒu rén?\nB: Wǒ jiā yǒu sì kǒu rén: bàba, māmā, gēgē hé wǒ. Nǐ ne?\nA: Wǒ jiā yǒu sān kǒu rén: bàba, māmā hé wǒ. Wǒ méiyǒu xiōngdì jiěmèi.",
      transcriptVietnamese: "A: Nhà bạn có mấy người?\nB: Nhà tôi có 4 người: bố, mẹ, anh trai và tôi. Còn bạn?\nA: Nhà tôi có 3 người: bố, mẹ và tôi. Tôi không có anh chị em.",
      questions: [
        {
          id: "l_11_q1", type: "multiple_choice", question: "Nhà nhân vật B có bao nhiêu người?",
          options: ["3 người", "4 người", "5 người", "6 người"], correctAnswer: "4 người", explanation: "B nói: '我家有四口人' (Nhà tôi có 4 người)."
        }
      ]
    },
    reading: {
      title: "Gia đình của tôi",
      passageTraditional: "大家好，我來介紹一下。這是我家的照片。我家有五口人：爸爸、媽媽、哥哥、妹妹和我。我爸爸是老師，媽媽也是老師。我們一家人很幸福。",
      passagePinyin: "Dàjiā hǎo, wǒ lái jièshào yíxià. Zhè shì wǒ jiā de zhàopiàn. Wǒ jiā yǒu wǔ kǒu rén: bàba, māmā, gēgē, mèimèi hé wǒ. Wǒ bàba shì lǎoshī, māmā yě shì lǎoshī. Wǒmen yì jiā rén hěn xìngfú.",
      passageVietnamese: "Chào mọi người, tôi xin giới thiệu một chút. Đây là bức ảnh gia đình tôi. Nhà tôi có 5 người: bố, mẹ, anh trai, em gái và tôi. Bố tôi là giáo viên, mẹ tôi cũng là giáo viên. Cả nhà chúng tôi rất hạnh phúc.",
      questions: [
        {
          id: "r_11_q1", type: "true_false", question: "Nhà người viết có 5 người. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn có nói: 我家有五口人 (Nhà tôi có 5 người)."
        }
      ]
    },
    speaking: {
      promptTraditional: "請介紹你的家庭（幾口人，有誰）。",
      promptPinyin: "Qǐng jièshào nǐ de jiātíng (jǐ kǒu rén, yǒu shéi).",
      promptVietnamese: "Hãy giới thiệu về gia đình bạn (có mấy người, gồm những ai).",
      sampleAnswerTraditional: "我家有四口人：爸爸、媽媽、妹妹和我。",
      sampleAnswerPinyin: "Wǒ jiā yǒu sì kǒu rén: bàba, māmā, mèimèi hé wǒ.",
      sampleAnswerVietnamese: "Nhà tôi có 4 người: bố, mẹ, em gái và tôi."
    },
    writing: {
      promptVietnamese: "Viết bằng chữ phồn thể câu: 'Nhà tôi có 3 người: bố, mẹ và tôi.'",
      suggestedAnswerTraditional: "我家有三口人：爸爸、媽媽和我。",
      suggestedAnswerPinyin: "Wǒ jiā yǒu sān kǒu rén: bàba, māmā hé wǒ.",
      suggestedAnswerVietnamese: "Nhà tôi có 3 người: bố, mẹ và tôi."
    },
    quiz: [
      {
        id: "q_11_1", type: "multiple_choice", question: "Từ 'Anh trai' trong tiếng Trung là gì?",
        options: ["弟弟 (Dìdì)", "哥哥 (Gēgē)", "姐姐 (Jiějiě)", "爸爸 (Bàba)"], correctAnswer: "哥哥 (Gēgē)", explanation: "哥哥 (gēgē) nghĩa là anh trai."
      },
      {
        id: "q_11_2", type: "fill_blank", question: "Điền vào chỗ trống: 我家__(có)__四口人。",
        correctAnswer: "有", explanation: "有 (yǒu) nghĩa là có."
      }
    ]
  },
  {
    id: "lesson_12",
    day: 12,
    title: "Bài 12: Số đếm từ 1 đến 10",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Số đếm",
    objectives: [
      "Học cách đếm từ 1 đến 10 bằng tiếng Trung.",
      "Biết cách phát âm và nhận diện mặt chữ số."
    ],
    vocabulary: [
      { id: "v_12_1", traditional: "一", pinyin: "Yī", zhuyin: "ㄧ", vietnamese: "Một", partOfSpeech: "Số từ", exampleTraditional: "一個", examplePinyin: "Yí gè", exampleVietnamese: "Một cái" },
      { id: "v_12_2", traditional: "二", pinyin: "Èr", zhuyin: "ㄦˋ", vietnamese: "Hai", partOfSpeech: "Số từ", exampleTraditional: "二月", examplePinyin: "Èr yuè", exampleVietnamese: "Tháng hai" },
      { id: "v_12_3", traditional: "三", pinyin: "Sān", zhuyin: "ㄙㄢ", vietnamese: "Ba", partOfSpeech: "Số từ", exampleTraditional: "三天", examplePinyin: "Sān tiān", exampleVietnamese: "Ba ngày" },
      { id: "v_12_4", traditional: "四", pinyin: "Sì", zhuyin: "ㄙˋ", vietnamese: "Bốn", partOfSpeech: "Số từ", exampleTraditional: "四個人", examplePinyin: "Sì gè rén", exampleVietnamese: "Bốn người" },
      { id: "v_12_5", traditional: "五", pinyin: "Wǔ", zhuyin: "ㄨˇ", vietnamese: "Năm", partOfSpeech: "Số từ", exampleTraditional: "五本書", examplePinyin: "Wǔ běn shū", exampleVietnamese: "Năm quyển sách" },
      { id: "v_12_6", traditional: "六", pinyin: "Liù", zhuyin: "ㄌㄧㄡˋ", vietnamese: "Sáu", partOfSpeech: "Số từ", exampleTraditional: "六隻狗", examplePinyin: "Liù zhī gǒu", exampleVietnamese: "Sáu con chó" },
      { id: "v_12_7", traditional: "七", pinyin: "Qī", zhuyin: "ㄑㄧ", vietnamese: "Bảy", partOfSpeech: "Số từ", exampleTraditional: "七天", examplePinyin: "Qī tiān", exampleVietnamese: "Bảy ngày" },
      { id: "v_12_8", traditional: "八", pinyin: "Bā", zhuyin: "ㄅㄚ", vietnamese: "Tám", partOfSpeech: "Số từ", exampleTraditional: "八歲", examplePinyin: "Bā suì", exampleVietnamese: "Tám tuổi" },
      { id: "v_12_9", traditional: "九", pinyin: "Jiǔ", zhuyin: "ㄐㄧㄡˇ", vietnamese: "Chín", partOfSpeech: "Số từ", exampleTraditional: "九點", examplePinyin: "Jiǔ diǎn", exampleVietnamese: "Chín giờ" },
      { id: "v_12_10", traditional: "十", pinyin: "Shí", zhuyin: "ㄕˊ", vietnamese: "Mười", partOfSpeech: "Số từ", exampleTraditional: "十分鐘", examplePinyin: "Shí fēnzhōng", exampleVietnamese: "Mười phút" }
    ],
    sentencePatterns: [
      { traditional: "這是一。", pinyin: "Zhè shì yī.", zhuyin: "ㄓㄜˋ ㄕˋ ㄧ.", vietnamese: "Đây là số một.", usage: "Dùng để xác định số." }
    ],
    listening: {
      title: "Đếm số",
      transcriptTraditional: "A: 一、二、三，開始！\nB: 四、五、六、七、八、九、十。",
      transcriptPinyin: "A: Yī, èr, sān, kāishǐ!\nB: Sì, wǔ, liù, qī, bā, jiǔ, shí.",
      transcriptVietnamese: "A: Một, hai, ba, bắt đầu!\nB: Bốn, năm, sáu, bảy, tám, chín, mười.",
      questions: [
        { id: "l_12_q1", type: "multiple_choice", question: "Nhân vật A đếm tới số mấy thì nói bắt đầu?", options: ["Một", "Hai", "Ba", "Bốn"], correctAnswer: "Ba", explanation: "A đếm 1, 2, 3 rồi nói bắt đầu (開始)." }
      ]
    },
    reading: {
      title: "Ký hiệu số tay",
      passageTraditional: "在台灣，買東西的時候，大家喜歡用手比數字。一到五很簡單，六是大拇指和小指。七是大拇指和食指。",
      passagePinyin: "Zài Táiwān, mǎi dōngxī de shíhòu, dàjiā xǐhuān yòng shǒu bǐ shùzì. Yī dào wǔ hěn jiǎndān, liù shì dà mǔzhǐ hé xiǎozhǐ. Qī shì dà mǔzhǐ hé shízhǐ.",
      passageVietnamese: "Ở Đài Loan, khi mua đồ, mọi người thích dùng tay để ra hiệu số. Một đến năm rất đơn giản, số sáu là ngón cái và ngón út. Số bảy là ngón cái và ngón trỏ.",
      questions: [
        { id: "r_12_q1", type: "true_false", question: "Ký hiệu số 6 bằng tay ở Đài Loan là ngón cái và ngón út. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Trong đoạn trích nói số 6 là ngón cái và ngón út (六是大拇指和小指)." }
      ]
    },
    speaking: {
      promptTraditional: "請從一數到十。",
      promptPinyin: "Qǐng cóng yī shǔ dào shí.",
      promptVietnamese: "Hãy đếm từ 1 đến 10 bằng tiếng Trung.",
      sampleAnswerTraditional: "一、二、三、四、五、六、七、八、九、十。",
      sampleAnswerPinyin: "Yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí.",
      sampleAnswerVietnamese: "Một, hai, ba, bốn, năm, sáu, bảy, tám, chín, mười."
    },
    writing: {
      promptVietnamese: "Viết các số từ 1 đến 5 bằng chữ phồn thể.",
      suggestedAnswerTraditional: "一、二、三、四、五",
      suggestedAnswerPinyin: "Yī, èr, sān, sì, wǔ",
      suggestedAnswerVietnamese: "1, 2, 3, 4, 5"
    },
    quiz: [
      { id: "q_12_1", type: "multiple_choice", question: "Số 8 trong tiếng Trung đọc là gì?", options: ["Sì", "Bā", "Jiǔ", "Qī"], correctAnswer: "Bā", explanation: "Số 8 đọc là Bā (八)." },
      { id: "q_12_2", type: "fill_blank", question: "Điền vào chỗ trống: 一、二、三、__(bốn)__。", correctAnswer: "四", explanation: "Số 4 là 四 (Sì)." }
    ]
  },
  {
    id: "lesson_13",
    day: 13,
    title: "Bài 13: Số đếm từ 11 đến 100",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Số đếm",
    objectives: [
      "Biết cách hình thành các số từ 11 đến 100.",
      "Luyện tập nhận diện và nghe số đếm hai chữ số."
    ],
    vocabulary: [
      { id: "v_13_1", traditional: "十一", pinyin: "Shíyī", zhuyin: "ㄕˊ ㄧ", vietnamese: "Mười một", partOfSpeech: "Số từ", exampleTraditional: "十一個", examplePinyin: "Shíyī gè", exampleVietnamese: "11 cái" },
      { id: "v_13_2", traditional: "二十", pinyin: "Èrshí", zhuyin: "ㄦˋ ㄕˊ", vietnamese: "Hai mươi", partOfSpeech: "Số từ", exampleTraditional: "二十天", examplePinyin: "Èrshí tiān", exampleVietnamese: "20 ngày" },
      { id: "v_13_3", traditional: "九十九", pinyin: "Jiǔshíjiǔ", zhuyin: "ㄐㄧㄡˇ ㄕˊ ㄐㄧㄡˇ", vietnamese: "Chín mươi chín", partOfSpeech: "Số từ", exampleTraditional: "九十九分", examplePinyin: "Jiǔshíjiǔ fēn", exampleVietnamese: "99 điểm" },
      { id: "v_13_4", traditional: "百", pinyin: "Bǎi", zhuyin: "ㄅㄞˇ", vietnamese: "Trăm", partOfSpeech: "Số từ", exampleTraditional: "一百", examplePinyin: "Yìbǎi", exampleVietnamese: "Một trăm" }
    ],
    sentencePatterns: [
      { traditional: "我的學號是...。", pinyin: "Wǒ de xuéhào shì...", zhuyin: "ㄨㄛˇ ㄉㄜ˙ ㄒㄩㄝˊ ㄏㄠˋ ㄕˋ...", vietnamese: "Mã số học sinh của tôi là...", usage: "Dùng để nói mã số." }
    ],
    listening: {
      title: "Đọc số điện thoại",
      transcriptTraditional: "A: 你的電話號碼是多少？\nB: 零九一二，三四五，六七八。",
      transcriptPinyin: "A: Nǐ de diànhuà hàomǎ shì duōshǎo?\nB: Líng jiǔ yī èr, sān sì wǔ, liù qī bā.",
      transcriptVietnamese: "A: Số điện thoại của bạn là gì?\nB: 0912-345-678.",
      questions: [
        { id: "l_13_q1", type: "multiple_choice", question: "Số điện thoại của B là gì?", options: ["0912-345-678", "0921-345-876", "0987-654-321", "0912-435-678"], correctAnswer: "0912-345-678", explanation: "Líng jiǔ yī èr (0912), sān sì wǔ (345), liù qī bā (678)." }
      ]
    },
    reading: {
      title: "Giá tiền",
      passageTraditional: "這杯珍珠奶茶五十元。那個便當九十五元。總共一百四十五元。",
      passagePinyin: "Zhè bēi zhēnzhū nǎichá wǔshí yuán. Nà gè biàndāng jiǔshíwǔ yuán. Zǒnggòng yìbǎi sìshíwǔ yuán.",
      passageVietnamese: "Ly trà sữa trân châu này 50 tệ. Hộp cơm kia 95 tệ. Tổng cộng 145 tệ.",
      questions: [
        { id: "r_13_q1", type: "multiple_choice", question: "Hộp cơm giá bao nhiêu?", options: ["50", "95", "145", "100"], correctAnswer: "95", explanation: "Hộp cơm (便當) giá 九十五元 (95 tệ)." }
      ]
    },
    speaking: {
      promptTraditional: "請讀出以下數字：25, 48, 73, 99",
      promptPinyin: "Qǐng dú chū yǐxià shùzì: 25, 48, 73, 99",
      promptVietnamese: "Hãy đọc các con số sau bằng tiếng Trung: 25, 48, 73, 99",
      sampleAnswerTraditional: "二十五，四十八，七十三，九十九。",
      sampleAnswerPinyin: "Èrshíwǔ, sìshíbā, qīshísān, jiǔshíjiǔ.",
      sampleAnswerVietnamese: "Hai mươi lăm, bốn mươi tám, bảy mươi ba, chín mươi chín."
    },
    writing: {
      promptVietnamese: "Viết số 68 bằng chữ Hán.",
      suggestedAnswerTraditional: "六十八",
      suggestedAnswerPinyin: "Liùshíbā",
      suggestedAnswerVietnamese: "Sáu mươi tám"
    },
    quiz: [
      { id: "q_13_1", type: "multiple_choice", question: "Số 56 đọc là?", options: ["Wǔ liù", "Liù shí wǔ", "Wǔ shí liù", "Wǔ bǎi liù"], correctAnswer: "Wǔ shí liù", explanation: "56 là wǔ shí liù (五十六)." }
    ]
  },
  {
    id: "lesson_14",
    day: 14,
    title: "Bài 14: Giờ giấc",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Thời gian",
    objectives: [
      "Học cách hỏi và nói giờ giấc.",
      "Biết các từ vựng liên quan đến thời gian: phút, nửa tiếng, rưỡi..."
    ],
    vocabulary: [
      { id: "v_14_1", traditional: "點", pinyin: "Diǎn", zhuyin: "ㄉㄧㄢˇ", vietnamese: "Giờ", partOfSpeech: "Danh từ", exampleTraditional: "八點", examplePinyin: "Bā diǎn", exampleVietnamese: "8 giờ" },
      { id: "v_14_2", traditional: "分", pinyin: "Fēn", zhuyin: "ㄈㄣ", vietnamese: "Phút", partOfSpeech: "Danh từ", exampleTraditional: "二十分", examplePinyin: "Èrshí fēn", exampleVietnamese: "20 phút" },
      { id: "v_14_3", traditional: "半", pinyin: "Bàn", zhuyin: "ㄅㄢˋ", vietnamese: "Rưỡi, một nửa", partOfSpeech: "Danh từ", exampleTraditional: "九點半", examplePinyin: "Jiǔ diǎn bàn", exampleVietnamese: "9 rưỡi" },
      { id: "v_14_4", traditional: "現在", pinyin: "Xiànzài", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ", vietnamese: "Bây giờ", partOfSpeech: "Danh từ", exampleTraditional: "現在幾點？", examplePinyin: "Xiànzài jǐ diǎn?", exampleVietnamese: "Bây giờ mấy giờ?" }
    ],
    sentencePatterns: [
      { traditional: "現在幾點？", pinyin: "Xiànzài jǐ diǎn?", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧˇ ㄉㄧㄢˇ?", vietnamese: "Bây giờ là mấy giờ?", usage: "Hỏi giờ." },
      { traditional: "現在是...點...分。", pinyin: "Xiànzài shì... diǎn... fēn.", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ ㄕˋ... ㄉㄧㄢˇ... ㄈㄣ.", vietnamese: "Bây giờ là... giờ... phút.", usage: "Nói giờ." }
    ],
    listening: {
      title: "Bây giờ mấy giờ?",
      transcriptTraditional: "A: 請問，現在幾點？\nB: 現在是上午十點半。",
      transcriptPinyin: "A: Qǐngwèn, xiànzài jǐ diǎn?\nB: Xiànzài shì shàngwǔ shí diǎn bàn.",
      transcriptVietnamese: "A: Xin hỏi, bây giờ là mấy giờ?\nB: Bây giờ là 10 giờ rưỡi sáng.",
      questions: [
        { id: "l_14_q1", type: "multiple_choice", question: "Bây giờ là mấy giờ?", options: ["10:00", "10:30", "11:00", "11:30"], correctAnswer: "10:30", explanation: "十點半 (shí diǎn bàn) là 10 giờ rưỡi." }
      ]
    },
    reading: {
      title: "Lịch trình hàng ngày",
      passageTraditional: "我早上七點起床。八點去上學。中午十二點吃飯。下午五點半回家。",
      passagePinyin: "Wǒ zǎoshang qī diǎn qǐchuáng. Bā diǎn qù shàngxué. Zhōngwǔ shíèr diǎn chīfàn. Xiàwǔ wǔ diǎn bàn huí jiā.",
      passageVietnamese: "Buổi sáng tôi thức dậy lúc 7 giờ. 8 giờ đi học. Buổi trưa 12 giờ ăn cơm. Buổi chiều 5 giờ rưỡi về nhà.",
      questions: [
        { id: "r_14_q1", type: "multiple_choice", question: "Người này đi học lúc mấy giờ?", options: ["7 giờ", "8 giờ", "12 giờ", "5 rưỡi"], correctAnswer: "8 giờ", explanation: "八點去上學 (8 giờ đi học)." }
      ]
    },
    speaking: {
      promptTraditional: "請告訴我，現在幾點？(Giả sử bây giờ là 8:15)",
      promptPinyin: "Qǐng gàosù wǒ, xiànzài jǐ diǎn?",
      promptVietnamese: "Hãy nói cho tôi biết bây giờ là mấy giờ? (Giả sử 8:15)",
      sampleAnswerTraditional: "現在是八點十五分。",
      sampleAnswerPinyin: "Xiànzài shì bā diǎn shíwǔ fēn.",
      sampleAnswerVietnamese: "Bây giờ là 8 giờ 15 phút."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Bây giờ là mười hai giờ rưỡi.'",
      suggestedAnswerTraditional: "現在是十二點半。",
      suggestedAnswerPinyin: "Xiànzài shì shí'èr diǎn bàn.",
      suggestedAnswerVietnamese: "Bây giờ là 12 rưỡi."
    },
    quiz: [
      { id: "q_14_1", type: "multiple_choice", question: "Từ '半' (bàn) có nghĩa là gì trong giờ giấc?", options: ["Phút", "Giây", "Rưỡi (30 phút)", "Khắc (15 phút)"], correctAnswer: "Rưỡi (30 phút)", explanation: "半 (bàn) là một nửa, ứng với 30 phút." }
    ]
  },
  {
    id: "lesson_15",
    day: 15,
    title: "Bài 15: Ngày và tháng",
    level: "beginner",
    stage: "CHẶNG 2: TỪ VỰNG CƠ BẢN",
    topic: "Ngày tháng",
    objectives: [
      "Học cách nói thứ trong tuần.",
      "Biết cách nói ngày tháng trong năm."
    ],
    vocabulary: [
      { id: "v_15_1", traditional: "星期", pinyin: "Xīngqí", zhuyin: "ㄒㄧㄥ ㄑㄧˊ", vietnamese: "Thứ, tuần", partOfSpeech: "Danh từ", exampleTraditional: "星期一", examplePinyin: "Xīngqí yī", exampleVietnamese: "Thứ hai" },
      { id: "v_15_2", traditional: "月", pinyin: "Yuè", zhuyin: "ㄩㄝˋ", vietnamese: "Tháng", partOfSpeech: "Danh từ", exampleTraditional: "一月", examplePinyin: "Yī yuè", exampleVietnamese: "Tháng 1" },
      { id: "v_15_3", traditional: "號", pinyin: "Hào", zhuyin: "ㄏㄠˋ", vietnamese: "Ngày (khẩu ngữ)", partOfSpeech: "Danh từ", exampleTraditional: "五號", examplePinyin: "Wǔ hào", exampleVietnamese: "Ngày 5" },
      { id: "v_15_4", traditional: "今天", pinyin: "Jīntiān", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ", vietnamese: "Hôm nay", partOfSpeech: "Danh từ", exampleTraditional: "今天星期幾？", examplePinyin: "Jīntiān xīngqí jǐ?", exampleVietnamese: "Hôm nay thứ mấy?" },
      { id: "v_15_5", traditional: "明天", pinyin: "Míngtiān", zhuyin: "ㄇㄧㄥˊ ㄊㄧㄢ", vietnamese: "Ngày mai", partOfSpeech: "Danh từ", exampleTraditional: "明天見。", examplePinyin: "Míngtiān jiàn.", exampleVietnamese: "Ngày mai gặp." }
    ],
    sentencePatterns: [
      { traditional: "今天星期幾？", pinyin: "Jīntiān xīngqí jǐ?", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄒㄧㄥ ㄑㄧˊ ㄐㄧˇ?", vietnamese: "Hôm nay thứ mấy?", usage: "Hỏi thứ." },
      { traditional: "今天是幾月幾號？", pinyin: "Jīntiān shì jǐ yuè jǐ hào?", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄐㄧˇ ㄩㄝˋ ㄐㄧˇ ㄏㄠˋ?", vietnamese: "Hôm nay là ngày mấy tháng mấy?", usage: "Hỏi ngày tháng." }
    ],
    listening: {
      title: "Hỏi ngày tháng",
      transcriptTraditional: "A: 今天是幾月幾號？\nB: 今天是十月二十號，星期五。",
      transcriptPinyin: "A: Jīntiān shì jǐ yuè jǐ hào?\nB: Jīntiān shì shí yuè èrshí hào, xīngqí wǔ.",
      transcriptVietnamese: "A: Hôm nay là ngày mấy tháng mấy?\nB: Hôm nay là ngày 20 tháng 10, thứ Sáu.",
      questions: [
        { id: "l_15_q1", type: "multiple_choice", question: "Hôm nay là thứ mấy trong đoạn hội thoại?", options: ["Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ nhật"], correctAnswer: "Thứ Sáu", explanation: "星期五 (Xīngqí wǔ) là Thứ Sáu (vì bắt đầu từ 星期一 là Thứ Hai)." }
      ]
    },
    reading: {
      title: "Sinh nhật",
      passageTraditional: "我的生日是八月十五號。那天剛好是星期六。我們去吃飯。",
      passagePinyin: "Wǒ de shēngrì shì bā yuè shíwǔ hào. Nà tiān gānghǎo shì xīngqí liù. Wǒmen qù chīfàn.",
      passageVietnamese: "Sinh nhật của tôi là ngày 15 tháng 8. Hôm đó vừa vặn là Thứ Bảy. Chúng tôi đi ăn cơm.",
      questions: [
        { id: "r_15_q1", type: "multiple_choice", question: "Sinh nhật của tác giả là ngày nào?", options: ["8/15", "5/18", "5/8", "15/8"], correctAnswer: "15/8", explanation: "八月 (tháng 8) 十五號 (ngày 15)." }
      ]
    },
    speaking: {
      promptTraditional: "請用中文說你的生日。格式：...月...號",
      promptPinyin: "Qǐng yòng zhōngwén shuō nǐ de shēngrì.",
      promptVietnamese: "Hãy nói sinh nhật của bạn bằng tiếng Trung. (ví dụ tháng 9 ngày 2)",
      sampleAnswerTraditional: "我的生日是九月二號。",
      sampleAnswerPinyin: "Wǒ de shēngrì shì jiǔ yuè èr hào.",
      sampleAnswerVietnamese: "Sinh nhật của tôi là ngày 2 tháng 9."
    },
    writing: {
      promptVietnamese: "Dịch sang tiếng Trung: 'Hôm nay là Thứ Tư.'",
      suggestedAnswerTraditional: "今天是星期三。",
      suggestedAnswerPinyin: "Jīntiān shì xīngqísān.",
      suggestedAnswerVietnamese: "Hôm nay là Thứ Tư."
    },
    quiz: [
      { id: "q_15_1", type: "multiple_choice", question: "Thứ Hai trong tiếng Trung nói là gì?", options: ["星期二 (Xīngqí'èr)", "星期一 (Xīngqíyī)", "星期天 (Xīngqítiān)", "星期三 (Xīngqísān)"], correctAnswer: "星期一 (Xīngqíyī)", explanation: "Thứ Hai đánh dấu bắt đầu tuần nên là 星期一." }
    ]
  }
];
