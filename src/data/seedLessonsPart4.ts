import { Lesson } from '../types/lesson';

export const stage1LessonsPart4: Lesson[] = [
  {
    id: "lesson_7",
    day: 7,
    title: "Bài 7: Số đếm",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Số đếm từ 1-100",
    objectives: [
      "Học số đếm cơ bản từ 1 đến 10.",
      "Cách ghép các số để đếm đến 100.",
      "Sử dụng biểu tượng tay đếm số của người Đài Loan."
    ],
    vocabulary: [
      {
        id: "v_7_1", traditional: "一 / 二 / 三", pinyin: "Yī / èr / sān", zhuyin: "ㄧ / ㄦˋ / ㄙㄢ", vietnamese: "1 / 2 / 3",
        partOfSpeech: "Số từ", exampleTraditional: "一二三。", examplePinyin: "Yī èr sān.", exampleVietnamese: "Một hai ba."
      },
      {
        id: "v_7_2", traditional: "四 / 五 / 六", pinyin: "Sì / wǔ / liù", zhuyin: "ㄙˋ / ㄨˇ / ㄌㄧㄡˋ", vietnamese: "4 / 5 / 6",
        partOfSpeech: "Số từ", exampleTraditional: "四五六。", examplePinyin: "Sì wǔ liù.", exampleVietnamese: "Bốn năm sáu."
      },
      {
        id: "v_7_3", traditional: "七 / 八 / 九", pinyin: "Qī / bā / jiǔ", zhuyin: "ㄑㄧ / ㄅㄚ / ㄐㄧㄡˇ", vietnamese: "7 / 8 / 9",
        partOfSpeech: "Số từ", exampleTraditional: "七八九。", examplePinyin: "Qī bā jiǔ.", exampleVietnamese: "Bảy tám chín."
      },
      {
        id: "v_7_4", traditional: "十", pinyin: "Shí", zhuyin: "ㄕˊ", vietnamese: "10 (Mười)",
        partOfSpeech: "Số từ", exampleTraditional: "十個人。", examplePinyin: "Shí gè rén.", exampleVietnamese: "Mười người."
      },
      {
        id: "v_7_5", traditional: "百", pinyin: "Bǎi", zhuyin: "ㄅㄞˇ", vietnamese: "100 (Trăm)",
        partOfSpeech: "Số từ", exampleTraditional: "一百", examplePinyin: "Yī bǎi", exampleVietnamese: "Một trăm."
      },
      {
        id: "v_7_6", traditional: "零", pinyin: "Líng", zhuyin: "ㄌㄧㄥˊ", vietnamese: "Số 0",
        partOfSpeech: "Số từ", exampleTraditional: "一零一", examplePinyin: "Yī líng yī", exampleVietnamese: "Một lẻ một (101)."
      },
      {
        id: "v_7_7", traditional: "個", pinyin: "Gè", zhuyin: "ㄍㄜ˙", vietnamese: "Cái, con, người (lượng từ chung)",
        partOfSpeech: "Lượng từ", exampleTraditional: "一個人。", examplePinyin: "Yī gè rén.", exampleVietnamese: "Một người."
      },
      {
        id: "v_7_8", traditional: "多少", pinyin: "Duōshǎo", zhuyin: "ㄉㄨㄛ ㄕㄠˇ", vietnamese: "Bao nhiêu",
        partOfSpeech: "Đại từ", exampleTraditional: "多少個人？", examplePinyin: "Duōshǎo gè rén?", exampleVietnamese: "Bao nhiêu người?"
      }
    ],
    sentencePatterns: [
      {
        traditional: "有幾個？", pinyin: "Yǒu jǐ gè?", zhuyin: "ㄧㄡˇ ㄐㄧˇ ㄍㄜ˙?",
        vietnamese: "Có mấy cái / mấy người?", usage: "Hỏi số lượng ít (dưới 10)."
      },
      {
        traditional: "有多少？", pinyin: "Yǒu duōshǎo?", zhuyin: "ㄧㄡˇ ㄉㄨㄛ ㄕㄠˇ?",
        vietnamese: "Có bao nhiêu?", usage: "Hỏi số lượng nhiều (trên 10)."
      },
      {
        traditional: "這是二十五。", pinyin: "Zhè shì èrshíwǔ.", zhuyin: "ㄓㄜˋ ㄕˋ ㄦˋ ㄕˊ ㄨˇ.",
        vietnamese: "Đây là hai mươi lăm (25).", usage: "Cách ghép Số + Mười + Số để tạo số từ 11-99."
      }
    ],
    listening: {
      title: "Đếm số lượng sinh viên",
      transcriptTraditional: "A: 請問，這個班有幾個學生？\nB: 我們班有十八個學生。\nA: 男生有幾個？\nB: 男生有十個，女生有八個。",
      transcriptPinyin: "A: Qǐngwèn, zhège bān yǒu jǐ gè xuéshēng?\nB: Wǒmen bān yǒu shíbā gè xuéshēng.\nA: Nánshēng yǒu jǐ gè?\nB: Nánshēng yǒu shí gè, nǚshēng yǒu bā gè.",
      transcriptVietnamese: "A: Xin hỏi, lớp này có bao nhiêu học sinh?\nB: Lớp chúng tôi có mười tám (18) học sinh.\nA: Nam sinh có mấy người?\nB: Nam sinh có mười (10) người, nữ sinh có tám (8) người.",
      questions: [
        {
          id: "l_7_q1", type: "multiple_choice", question: "Lớp này tổng cộng có bao nhiêu học sinh?",
          options: ["10", "8", "18", "28"], correctAnswer: "18", explanation: "B nói: 'yǒu shíbā gè xuéshēng' (Có 18 học sinh)."
        }
      ]
    },
    reading: {
      title: "Ký hiệu số bằng tay của Đài Loan",
      passageTraditional: "在台灣，買東西的時候，大家常常用手比數字。一到五跟外國一樣。但是，六到九很不一樣。例如比「七」的時候，大家會把大姆指和食指搓在一起，像拿筆一樣。",
      passagePinyin: "Zài Táiwān, mǎi dōngxī de shíhòu, dàjiā chángcháng yòng shǒu bǐ shùzì. Yī dào wǔ gēn wàiguó yīyàng. Dànshì, liù dào jiǔ hěn bù yīyàng. Lìrú bǐ 'qī' de shíhòu, dàjiā huì bǎ dàmǔzhǐ hé shízhǐ cuō zài yīqǐ, xiàng ná bǐ yīyàng.",
      passageVietnamese: "Ở Đài Loan, khi mua đồ, mọi người thường dùng tay để ra hiệu con số. Từ 1 đến 5 thì giống với nước ngoài. Tuy nhiên, 6 đến 9 thì rất khác. Ví dụ khi ra dấu số '7', mọi người sẽ chụm ngón cái và ngón trỏ lại với nhau, giống như đang cầm bút.",
      questions: [
        {
          id: "r_7_q1", type: "true_false", question: "Ký hiệu số bằng tay từ 6 đến 9 ở Đài Loan giống hệt ở Việt Nam. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn nói từ 1-5 thì giống, nhưng từ 6-9 thì rất khác."
        }
      ]
    },
    speaking: {
      promptTraditional: "請數一到十。",
      promptPinyin: "Qǐng shǔ yī dào shí.",
      promptVietnamese: "Hãy đếm từ 1 đến 10.",
      sampleAnswerTraditional: "一，二，三，四，五，六，七，八，九，十。",
      sampleAnswerPinyin: "Yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí.",
      sampleAnswerVietnamese: "Một, hai, ba, bốn, năm, sáu, bảy, tám, chín, mười."
    },
    writing: {
      promptVietnamese: "Viết số 85 và 99 bằng chữ phồn thể.",
      suggestedAnswerTraditional: "八十五，九十九",
      suggestedAnswerPinyin: "Bāshíwǔ, jiǔshíjiǔ",
      suggestedAnswerVietnamese: "Tám mươi lăm, chín mươi chín"
    },
    quiz: [
      {
        id: "q_7_1", type: "multiple_choice", question: "Số báo danh 48 viết thế nào trong tiếng Trung?",
        options: ["四八", "十四八", "四十八", "八十四"], correctAnswer: "四十八", explanation: "四 (4) + 十 (10) + 八 (8) = 四十八 (Sìshíbā = 48)."
      },
      {
        id: "q_7_2", type: "fill_blank", question: "Số 9 tiếng Trung là ____(Nhập pinyin).",
        correctAnswer: "jiǔ", explanation: "Chữ 九 (9) có pinyin là jiǔ."
      },
      {
        id: "q_7_3", type: "multiple_choice", question: "Lượng từ phổ biến nhất trong tiếng Trung để đếm người/vật là gì?",
        options: ["看 (kàn)", "個 (gè)", "是 (shì)", "哪 (nǎ)"], correctAnswer: "個 (gè)", explanation: "個 (gè) là lượng từ thông dụng nhất (một CÁI, một NGƯỜI)."
      },
      {
        id: "q_7_4", type: "true_false", question: "Từ 多少 (Duōshǎo) dùng để hỏi số lượng. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "多少 nghĩa là bao nhiêu, dùng hỏi số lượng."
      },
      {
        id: "q_7_5", type: "multiple_choice", question: "Một trăm tiếng Trung là gì?",
        options: ["一零", "一百 (Yībǎi)", "十十", "一五"], correctAnswer: "一百 (Yībǎi)", explanation: "百 (bǎi) là trăm, 一百 là 100."
      }
    ]
  },
  {
    id: "lesson_8",
    day: 8,
    title: "Bài 8: Ngày tháng năm",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Thời gian cơ bản",
    objectives: [
      "Cách gọi tên các ngày trong tuần.",
      "Cách gọi tên 12 tháng trong năm.",
      "Cách nói ngày tháng năm hoàn chỉnh."
    ],
    vocabulary: [
      {
        id: "v_8_1", traditional: "年", pinyin: "Nián", zhuyin: "ㄋㄧㄢˊ", vietnamese: "Năm",
        partOfSpeech: "Danh từ", exampleTraditional: "今年是哪一年？", examplePinyin: "Jīnnián shì nǎ yī nián?", exampleVietnamese: "Năm nay là năm nào?"
      },
      {
        id: "v_8_2", traditional: "月", pinyin: "Yuè", zhuyin: "ㄩㄝˋ", vietnamese: "Tháng",
        partOfSpeech: "Danh từ", exampleTraditional: "一月", examplePinyin: "Yī yuè", exampleVietnamese: "Tháng 1."
      },
      {
        id: "v_8_3", traditional: "號 / 日", pinyin: "Hào / Rì", zhuyin: "ㄏㄠˋ / ㄖˋ", vietnamese: "Ngày (trong tháng)",
        partOfSpeech: "Danh từ", exampleTraditional: "十月五號", examplePinyin: "Shí yuè wǔ hào", exampleVietnamese: "Ngày 5 tháng 10."
      },
      {
        id: "v_8_4", traditional: "星期 / 禮拜", pinyin: "Xīngqī / Lǐbài", zhuyin: "ㄒㄧㄥ ㄑㄧ / ㄌㄧˇ ㄅㄞˋ", vietnamese: "Thứ, tuần",
        partOfSpeech: "Danh từ", exampleTraditional: "星期一", examplePinyin: "Xīngqī yī", exampleVietnamese: "Thứ Hai."
      },
      {
        id: "v_8_5", traditional: "今天", pinyin: "Jīntiān", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ", vietnamese: "Hôm nay",
        partOfSpeech: "Danh từ", exampleTraditional: "今天很好。", examplePinyin: "Jīntiān hěn hǎo.", exampleVietnamese: "Hôm nay rất tốt."
      },
      {
        id: "v_8_6", traditional: "明天", pinyin: "Míngtiān", zhuyin: "ㄇㄧㄥˊ ㄊㄧㄢ", vietnamese: "Ngày mai",
        partOfSpeech: "Danh từ", exampleTraditional: "明天見。", examplePinyin: "Míngtiān jiàn.", exampleVietnamese: "Ngày mai gặp lại."
      },
      {
        id: "v_8_7", traditional: "昨天", pinyin: "Zuótiān", zhuyin: "ㄗㄨㄛˊ ㄊㄧㄢ", vietnamese: "Hôm qua",
        partOfSpeech: "Danh từ", exampleTraditional: "昨天很熱。", examplePinyin: "Zuótiān hěn rè.", exampleVietnamese: "Hôm qua rất nóng."
      },
      {
        id: "v_8_8", traditional: "生日", pinyin: "Shēngrì", zhuyin: "ㄕㄥ ㄖˋ", vietnamese: "Sinh nhật",
        partOfSpeech: "Danh từ", exampleTraditional: "祝你生日快樂！", examplePinyin: "Zhù nǐ shēngrì kuàilè!", exampleVietnamese: "Chúc bạn sinh nhật vui vẻ!"
      }
    ],
    sentencePatterns: [
      {
        traditional: "今天是幾月幾號？", pinyin: "Jīntiān shì jǐ yuè jǐ hào?", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄐㄧˇ ㄩㄝˋ ㄐㄧˇ ㄏㄠˋ?",
        vietnamese: "Hôm nay là ngày mấy tháng mấy?", usage: "Hỏi ngày tháng hiện tại."
      },
      {
        traditional: "今天是星期幾？", pinyin: "Jīntiān shì xīngqī jǐ?", zhuyin: "ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄒㄧㄥ ㄑㄧ ㄐㄧˇ?",
        vietnamese: "Hôm nay là thứ mấy?", usage: "Hỏi thứ trong tuần."
      },
      {
        traditional: "我的生日是五月一號。", pinyin: "Wǒ de shēngrì shì wǔ yuè yī hào.", zhuyin: "ㄨㄛˇ ㄉㄜ˙ ㄕㄥ ㄖˋ ㄕˋ ㄨˇ ㄩㄝˋ ㄧ ㄏㄠˋ.",
        vietnamese: "Sinh nhật của tôi là ngày 1 tháng 5.", usage: "Dùng để nói về ngày sinh."
      }
    ],
    listening: {
      title: "Hỏi ngày thi",
      transcriptTraditional: "A: 請問，今天是幾月幾號？\nB: 今天是九月十號，星期四。\nA: 明天有考試嗎？\nB: 沒有，考試是星期五。",
      transcriptPinyin: "A: Qǐngwèn, jīntiān shì jǐ yuè jǐ hào?\nB: Jīntiān shì jiǔ yuè shí hào, xīngqī sì.\nA: Míngtiān yǒu kǎoshì ma?\nB: Méiyǒu, kǎoshì shì xīngqī wǔ.",
      transcriptVietnamese: "A: Xin hỏi, hôm nay là ngày mấy tháng mấy?\nB: Hôm nay là ngày 10 tháng 9, Thứ Năm.\nA: Ngày mai có thi không?\nB: Không có, buổi thi vào Thứ Sáu.",
      questions: [
        {
          id: "l_8_q1", type: "multiple_choice", question: "Hôm nay là thứ mấy?",
          options: ["Thứ ba (星期三)", "Thứ tư (星期三)", "Thứ năm (星期四)", "Thứ sáu (星期五)"], correctAnswer: "Thứ năm (星期四)", explanation: "B nói: 'Jīntiān shì jiǔ yuè shí hào, xīngqī sì' (Hôm nay là thứ Năm)."
        }
      ]
    },
    reading: {
      title: "Sự khác biệt về Thứ trong tiếng Trung và tiếng Việt",
      passageTraditional: "在越南，星期一叫做「Thứ Hai」。但是在中文裡，星期一是「星期一」(Xīngqī yī)。所以，中文的數字總是比越南的數字少一天。例如：星期四是 Thứ Năm, 星期天是 Chủ Nhật。",
      passagePinyin: "Zài Yuènán, xīngqī yī jiàozuò 'Thứ Hai'. Dànshì zài zhōngwén lǐ, xīngqī yī shì 'xīngqī yī'. Suǒyǐ, zhōngwén de shùzì zǒng shì bǐ Yuènán de shùzì shǎo yī tiān. Lìrú: xīngqī sì shì Thứ Năm, xīngqī tiān shì Chủ Nhật.",
      passageVietnamese: "Ở Việt Nam, ngày đầu tuần gọi là 'Thứ Hai'. Nhưng trong tiếng Trung, ngày đầu tuần gọi là '星期一' (Thứ Một). Cho nên, con số trong tiếng Trung luôn nhỏ hơn 1 so với tiếng Việt. Ví dụ: '星期四' (Thứ Bốn) chính là Thứ Năm, '星期天' là Chủ Nhật.",
      questions: [
        {
          id: "r_8_q1", type: "true_false", question: "星期六 (Xīngqī liù) có nghĩa là Thứ Sáu trong tiếng Việt. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Tiếng Trung cộng thêm 1 ra tiếng Việt. 星期六 (liù = 6) nghĩa là Thứ Bảy."
        }
      ]
    },
    speaking: {
      promptTraditional: "請回答：你的生日是幾月幾號？",
      promptPinyin: "Qǐng huídá: Nǐ de shēngrì shì jǐ yuè jǐ hào?",
      promptVietnamese: "Hãy trả lời câu hỏi: Sinh nhật của bạn là ngày mấy tháng mấy?",
      sampleAnswerTraditional: "我的生日是十月八號。",
      sampleAnswerPinyin: "Wǒ de shēngrì shì shí yuè bā hào.",
      sampleAnswerVietnamese: "Sinh nhật của tôi là ngày 8 tháng 10."
    },
    writing: {
      promptVietnamese: "Viết cụm: 'Hôm nay là ngày 20 tháng 11'. Lưu ý trong tiếng Trung phải nói tháng trước, ngày sau.",
      suggestedAnswerTraditional: "今天是十一月二十號。",
      suggestedAnswerPinyin: "Jīntiān shì shíyī yuè èrshí hào.",
      suggestedAnswerVietnamese: "Hôm nay là ngày 20 tháng 11."
    },
    quiz: [
      {
        id: "q_8_1", type: "multiple_choice", question: "Trong tiếng Trung, thứ tự ghi ngày tháng năm là gì?",
        options: ["Ngày/Tháng/Năm", "Tháng/Ngày/Năm", "Năm/Tháng/Ngày", "Ngày/Năm/Tháng"], correctAnswer: "Năm/Tháng/Ngày", explanation: "Tiếng Trung đi từ lớn đến nhỏ: 年 (Năm) -> 月 (Tháng) -> 號/日 (Ngày)."
      },
      {
        id: "q_8_2", type: "multiple_choice", question: "Từ 'Hôm nay' là gì?",
        options: ["明天 (Míngtiān)", "昨天 (Zuótiān)", "今天 (Jīntiān)", "星期 (Xīngqī)"], correctAnswer: "今天 (Jīntiān)", explanation: "今天 (Jīntiān) nghĩa là hôm nay."
      },
      {
        id: "q_8_3", type: "fill_blank", question: "Thứ Hai tiếng Trung là 星期____.",
        correctAnswer: "一", explanation: "Thứ Hai là ngày bắt đầu tuần nên gọi là 星期一 (Xīngqī yī)."
      },
      {
        id: "q_8_4", type: "true_false", question: "Chủ nhật có thể nói là '星期天' (Xīngqī tiān) hoặc '星期日' (Xīngqī rì). (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Cả hai cách đều đúng và được dùng phổ biến để chỉ Chủ Nhật."
      },
      {
        id: "q_8_5", type: "multiple_choice", question: "Từ nào để hỏi 'Mấy' (số lượng dưới 10)?",
        options: ["哪 (Nǎ)", "幾 (Jǐ)", "什麼 (Shénme)", "多少 (Duōshǎo)"], correctAnswer: "幾 (Jǐ)", explanation: "幾 (jǐ) dùng để hỏi 'mấy'. VD: jǐ yuè jǐ hào (tháng mấy ngày mấy)."
      }
    ]
  }
];
