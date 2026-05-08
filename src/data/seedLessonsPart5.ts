import { Lesson } from '../types/lesson';

export const stage1LessonsPart5: Lesson[] = [
  {
    id: "lesson_9",
    day: 9,
    title: "Bài 9: Thời gian (Giờ và Phút)",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Giờ giấc",
    objectives: [
      "Học cách nói giờ chẵn, giờ rưỡi và phút.",
      "Phân biệt 点 (điểm - giờ) và 分 (phân - phút).",
      "Sử dụng từ 半 (bán - rưỡi/nửa)."
    ],
    vocabulary: [
      {
        id: "v_9_1", traditional: "點 / 點鐘", pinyin: "Diǎn / Diǎnzhōng", zhuyin: "ㄉㄧㄢˇ / ㄉㄧㄢˇ ㄓㄨㄥ", vietnamese: "Giờ",
        partOfSpeech: "Danh từ", exampleTraditional: "現在十點。", examplePinyin: "Xiànzài shí diǎn.", exampleVietnamese: "Bây giờ là 10 giờ."
      },
      {
        id: "v_9_2", traditional: "分 / 分鐘", pinyin: "Fēn / Fēnzhōng", zhuyin: "ㄈㄣ / ㄈㄣ ㄓㄨㄥ", vietnamese: "Phút",
        partOfSpeech: "Danh từ", exampleTraditional: "十分鐘", examplePinyin: "Shí fēnzhōng", exampleVietnamese: "Mười phút."
      },
      {
        id: "v_9_3", traditional: "半", pinyin: "Bàn", zhuyin: "ㄅㄢˋ", vietnamese: "Rưỡi, một nửa",
        partOfSpeech: "Số từ", exampleTraditional: "七點半", examplePinyin: "Qī diǎn bàn", exampleVietnamese: "Bảy giờ rưỡi."
      },
      {
        id: "v_9_4", traditional: "現在", pinyin: "Xiànzài", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ", vietnamese: "Bây giờ",
        partOfSpeech: "Danh từ", exampleTraditional: "現在幾點？", examplePinyin: "Xiànzài jǐ diǎn?", exampleVietnamese: "Bây giờ là mấy giờ?"
      },
      {
        id: "v_9_5", traditional: "早上", pinyin: "Zǎoshang", zhuyin: "ㄗㄠˇ ㄕㄤ˙", vietnamese: "Buổi sáng (sớm)",
        partOfSpeech: "Danh từ", exampleTraditional: "早上八點", examplePinyin: "Zǎoshang bā diǎn", exampleVietnamese: "8 giờ sáng."
      },
      {
        id: "v_9_6", traditional: "晚上", pinyin: "Wǎnshàng", zhuyin: "ㄨㄢˇ ㄕㄤˋ", vietnamese: "Buổi tối",
        partOfSpeech: "Danh từ", exampleTraditional: "晚上九點半", examplePinyin: "Wǎnshàng jiǔ diǎn bàn", exampleVietnamese: "9 rưỡi tối."
      },
      {
        id: "v_9_7", traditional: "兩", pinyin: "Liǎng", zhuyin: "ㄌㄧㄤˇ", vietnamese: "Hai (dùng đếm số lượng)",
        partOfSpeech: "Số từ", exampleTraditional: "兩點", examplePinyin: "Liǎng diǎn", exampleVietnamese: "Hai giờ."
      },
      {
        id: "v_9_8", traditional: "上課", pinyin: "Shàngkè", zhuyin: "ㄕㄤˋ ㄎㄜˋ", vietnamese: "Vào lớp / đi học",
        partOfSpeech: "Động từ", exampleTraditional: "我們八點上課。", examplePinyin: "Wǒmen bā diǎn shàngkè.", exampleVietnamese: "Chúng ta 8 giờ vào lớp."
      }
    ],
    sentencePatterns: [
      {
        traditional: "現在幾點？", pinyin: "Xiànzài jǐ diǎn?", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧˇ ㄉㄧㄢˇ?",
        vietnamese: "Bây giờ là mấy giờ?", usage: "Hỏi giờ hiện tại."
      },
      {
        traditional: "現在是早上八點半。", pinyin: "Xiànzài shì zǎoshang bā diǎn bàn.", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ ㄕˋ ㄗㄠˇ ㄕㄤ˙ ㄅㄚ ㄉㄧㄢˇ ㄅㄢˋ.",
        vietnamese: "Bây giờ là 8 giờ rưỡi sáng.", usage: "Nói thời gian kèm buổi."
      },
      {
        traditional: "你幾點上課？", pinyin: "Nǐ jǐ diǎn shàngkè?", zhuyin: "ㄋㄧˇ ㄐㄧˇ ㄉㄧㄢˇ ㄕㄤˋ ㄎㄜˋ?",
        vietnamese: "Mấy giờ bạn vào học?", usage: "Hỏi lịch trình."
      }
    ],
    listening: {
      title: "Hẹn giờ đi học",
      transcriptTraditional: "A: 現在幾點？\nB: 現在早上七點半。你幾點上課？\nA: 我八點十分上課。你的課呢？\nB: 我的課是九點。",
      transcriptPinyin: "A: Xiànzài jǐ diǎn?\nB: Xiànzài zǎoshang qī diǎn bàn. Nǐ jǐ diǎn shàngkè?\nA: Wǒ bā diǎn shí fēn shàngkè. Nǐ de kè ne?\nB: Wǒ de kè shì jiǔ diǎn.",
      transcriptVietnamese: "A: Bây giờ là mấy giờ?\nB: Bây giờ là 7 giờ rưỡi sáng. Mấy giờ bạn vào lớp?\nA: Tôi 8 giờ 10 phút vào lớp. Còn môn học của bạn?\nB: Môn học của tôi là 9 giờ.",
      questions: [
        {
          id: "l_9_q1", type: "multiple_choice", question: "Bạn B mấy giờ vào lớp?",
          options: ["7 giờ rưỡi", "8 giờ 10", "9 giờ", "10 giờ"], correctAnswer: "9 giờ", explanation: "B nói: 'Wǒ de kè shì jiǔ diǎn' (Lớp của tôi là 9 giờ)."
        }
      ]
    },
    reading: {
      title: "Khác biệt khi nói số 2",
      passageTraditional: "在中文裡，說時間的時候，我們不說「二點」(Èr diǎn)，我們要說「兩點」(Liǎng diǎn)。但是，如果是分鐘，我們可以說「十二分」或是「二十四分」。大家要記住喔！",
      passagePinyin: "Zài zhōngwén lǐ, shuō shíjiān de shíhòu, wǒmen bù shuō 'èr diǎn', wǒmen yào shuō 'liǎng diǎn'. Dànshì, rúguǒ shì fēnzhōng, wǒmen kěyǐ shuō 'shí'èr fēn' huòshì 'èrshísì fēn'. Dàjiā yào jì zhù ō!",
      passageVietnamese: "Trong tiếng Trung, khi nói thời gian, chúng ta không nói 'èr diǎn' (hai giờ dùng số 2 èr), mà chúng ta phải nói 'liǎng diǎn'. Tuy nhiên, nếu là số phút, chúng ta có thể nói 'mười hai phút' hoặc 'hai mươi bốn phút' bình thường. Mọi người phải nhớ nhé!",
      questions: [
        {
          id: "r_9_q1", type: "true_false", question: "Hai giờ chiều tiếng Trung sẽ phân âm là 'Èr diǎn'. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Người ta nói 'Liǎng diǎn' chứ không nói 'Èr diǎn' đối với giờ."
        }
      ]
    },
    speaking: {
      promptTraditional: "請回答：現在幾點？",
      promptPinyin: "Qǐng huídá: Xiànzài jǐ diǎn?",
      promptVietnamese: "Hãy trả lời câu hỏi: Bây giờ là mấy giờ? (Tự chọn một giờ bất kỳ)",
      sampleAnswerTraditional: "現在是兩點半。",
      sampleAnswerPinyin: "Xiànzài shì liǎng diǎn bàn.",
      sampleAnswerVietnamese: "Bây giờ là hai giờ rưỡi."
    },
    writing: {
      promptVietnamese: "Viết thời gian '8 giờ 45 phút' bằng chữ phồn thể.",
      suggestedAnswerTraditional: "八點四十五分",
      suggestedAnswerPinyin: "Bā diǎn sìshíwǔ fēn",
      suggestedAnswerVietnamese: "Tám giờ bốn mươi lăm phút"
    },
    quiz: [
      {
        id: "q_9_1", type: "multiple_choice", question: "Thời gian 'người Trung Quốc dùng khi nói 2 giờ' là gì?",
        options: ["二點 (Èr diǎn)", "兩點 (Liǎng diǎn)", "分 (Fēn)", "半 (Bàn)"], correctAnswer: "兩點 (Liǎng diǎn)", explanation: "Hai giờ luôn dùng 兩 (Liǎng) thay vì 二 (Èr)."
      },
      {
        id: "q_9_2", type: "multiple_choice", question: "Từ 'Hiện tại/Bây giờ' tiếng Trung là gì?",
        options: ["現在 (Xiànzài)", "早上 (Zǎoshang)", "昨天 (Zuótiān)", "今天 (Jīntiān)"], correctAnswer: "現在 (Xiànzài)", explanation: "現在 (Xiànzài) là bây giờ / hiện tại."
      },
      {
        id: "q_9_3", type: "fill_blank", question: "7 giờ rưỡi: 七點____。",
        correctAnswer: "半", explanation: "半 (Bàn) là rưỡi/nửa."
      },
      {
        id: "q_9_4", type: "true_false", question: "分 (Fēn) dùng để chỉ giờ. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "分 (Fēn) là Phút. 點 (Diǎn) mới là giờ."
      },
      {
        id: "q_9_5", type: "multiple_choice", question: "Từ để hỏi 'mấy giờ' là gì?",
        options: ["幾號 (jǐ hào)", "幾點 (jǐ diǎn)", "什麼 (shénme)", "哪裡 (nǎlǐ)"], correctAnswer: "幾點 (jǐ diǎn)", explanation: "幾 (Mấy) + 點 (Giờ) = 幾點 (Mấy giờ)."
      }
    ]
  },
  {
    id: "lesson_10",
    day: 10,
    title: "Bài 10: Hỏi đường cơ bản",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Chỉ đường & Nơi chốn",
    objectives: [
      "Học một số địa điểm học tập cơ bản trong trường học.",
      "Biết cách hỏi 'Ở đâu?'.",
      "Học cách trả lời phương hướng đơn giản."
    ],
    vocabulary: [
      {
        id: "v_10_1", traditional: "哪裡", pinyin: "Nǎlǐ", zhuyin: "ㄋㄚˇ ㄌㄧˇ", vietnamese: "Ở đâu",
        partOfSpeech: "Đại từ", exampleTraditional: "你在哪裡？", examplePinyin: "Nǐ zài nǎlǐ?", exampleVietnamese: "Bạn ở đâu?"
      },
      {
        id: "v_10_2", traditional: "在", pinyin: "Zài", zhuyin: "ㄗㄞˋ", vietnamese: "Ở / Tại",
        partOfSpeech: "Giới từ / Động từ", exampleTraditional: "他在學校。", examplePinyin: "Tā zài xuéxiào.", exampleVietnamese: "Anh ấy ở trường."
      },
      {
        id: "v_10_3", traditional: "學校", pinyin: "Xuéxiào", zhuyin: "ㄒㄩㄝˊ ㄒㄧㄠˋ", vietnamese: "Trường học",
        partOfSpeech: "Danh từ", exampleTraditional: "這是一個好學校。", examplePinyin: "Zhè shì yī gè hǎo xuéxiào.", exampleVietnamese: "Đây là một ngôi trường tốt."
      },
      {
        id: "v_10_4", traditional: "教室", pinyin: "Jiàoshì", zhuyin: "ㄐㄧㄠˋ ㄕˋ", vietnamese: "Phòng học",
        partOfSpeech: "Danh từ", exampleTraditional: "我們去教室吧。", examplePinyin: "Wǒmen qù jiàoshì ba.", exampleVietnamese: "Chúng ta đi phòng học nhé."
      },
      {
        id: "v_10_5", traditional: "廁所 / 洗手間", pinyin: "Cèsuǒ / Xǐshǒujiān", zhuyin: "ㄘㄜˋ ㄙㄨㄛˇ / ㄒㄧˇ ㄕㄡˇ ㄐㄧㄢ", vietnamese: "Nhà vệ sinh",
        partOfSpeech: "Danh từ", exampleTraditional: "洗手間在哪裡？", examplePinyin: "Xǐshǒujiān zài nǎlǐ?", exampleVietnamese: "Nhà vệ sinh ở đâu?"
      },
      {
        id: "v_10_6", traditional: "前面", pinyin: "Qiánmiàn", zhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ", vietnamese: "Phía trước",
        partOfSpeech: "Phương vị từ", exampleTraditional: "老師在前面。", examplePinyin: "Lǎoshī zài qiánmiàn.", exampleVietnamese: "Giáo viên ở phía trước."
      },
      {
        id: "v_10_7", traditional: "後面", pinyin: "Hòumiàn", zhuyin: "ㄏㄡˋ ㄇㄧㄢˋ", vietnamese: "Phía sau",
        partOfSpeech: "Phương vị từ", exampleTraditional: "學校在後面。", examplePinyin: "Xuéxiào zài hòumiàn.", exampleVietnamese: "Trường học ở phía sau."
      },
      {
        id: "v_10_8", traditional: "那裡", pinyin: "Nàlǐ", zhuyin: "ㄋㄚˋ ㄌㄧˇ", vietnamese: "Ở kia, chỗ đó",
        partOfSpeech: "Đại từ", exampleTraditional: "廁所在那裡。", examplePinyin: "Cèsuǒ zài nàlǐ.", exampleVietnamese: "Nhà vệ sinh ở kia."
      }
    ],
    sentencePatterns: [
      {
        traditional: "[Địa điểm] 在哪裡？", pinyin: "[Địa điểm] zài nǎlǐ?", zhuyin: "[Địa điểm] ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ?",
        vietnamese: "[Địa điểm] ở đâu?", usage: "Hỏi vị trí của một nơi."
      },
      {
        traditional: "[Địa điểm] 在那裡。", pinyin: "[Địa điểm] zài nàlǐ.", zhuyin: "[Địa điểm] ㄗㄞˋ ㄋㄚˋ ㄌㄧˇ.",
        vietnamese: "[Địa điểm] ở đằng kia.", usage: "Chỉ vị trí khi nó nằm ở xa người nói."
      },
      {
        traditional: "不好意思，請問洗手間在哪裡？", pinyin: "Bù hǎoyìsi, qǐngwèn xǐshǒujiān zài nǎlǐ?", zhuyin: "ㄅㄨˋ ㄏㄠˇ ㄧˋ ㄙ˙, ㄑㄧㄥˇ ㄨㄣˋ ㄒㄧˇ ㄕㄡˇ ㄐㄧㄢ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ?",
        vietnamese: "Xin lỗi, xin hỏi nhà vệ sinh ở đâu?", usage: "Cách hỏi đường lịch sự nhất."
      }
    ],
    listening: {
      title: "Tìm phòng học ngày đầu tiên",
      transcriptTraditional: "A: 同學，你好。不好意思，請問教室在哪裡？\nB: 你好。教室在前面。\nA: 謝謝你。\nB: 不客氣。洗手間在後面喔。",
      transcriptPinyin: "A: Tóngxué, nǐ hǎo. Bù hǎoyìsi, qǐngwèn jiàoshì zài nǎlǐ?\nB: Nǐ hǎo. Jiàoshì zài qiánmiàn.\nA: Xièxiè nǐ.\nB: Bù kèqì. Xǐshǒujiān zài hòumiàn ō.",
      transcriptVietnamese: "A: Chào bạn. Xin lỗi, xin hỏi phòng học ở đâu?\nB: Chào bạn. Phòng học ở phía trước.\nA: Cảm ơn bạn.\nB: Không có gì. Nhà vệ sinh thì ở phía sau nhé.",
      questions: [
        {
          id: "l_10_q1", type: "multiple_choice", question: "Nhà vệ sinh ở phía nào?",
          options: ["Phía trước (前面)", "Phía sau (後面)", "Ở trong lớp (教室裡面)", "Không biết"], correctAnswer: "Phía sau (後面)", explanation: "B nói: 'Xǐshǒujiān zài hòumiàn ō' (Nhà vệ sinh ở phía sau)."
        }
      ]
    },
    reading: {
      title: "Làm thế nào để hỏi đường ở Đài Loan?",
      passageTraditional: "在台灣問路的時候，大家常常會先說「不好意思」(Bù hǎoyìsi)，然後說「請問」(qǐngwèn)。這代表你很有禮貌。台灣人很熱情，他們喜歡幫助外國學生。",
      passagePinyin: "Zài Táiwān wèn lù de shíhòu, dàjiā chángcháng huì xiān shuō 'Bù hǎoyìsi', ránhòu shuō 'qǐngwèn'. Zhè dàibiǎo nǐ hěn yǒu lǐmào. Táiwān rén hěn rèqíng, tāmen xǐhuān bāngzhù wàiguó xuéshēng.",
      passageVietnamese: "Ở Đài Loan khi hỏi đường, mọi người thường sẽ nói 'Bù hǎoyìsi' (Xin lỗi / Ngại quá) trước, sau đó nói 'qǐngwèn' (xin hỏi). Điều này thể hiện bạn rất lịch sự. Người Đài Loan rất nhiệt tình, họ rất thích giúp đỡ học sinh nước ngoài.",
      questions: [
        {
          id: "r_10_q1", type: "true_false", question: "Để tỏ ra lịch sự, bạn nên nói '不好意思，請問...' trước khi hỏi đường. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn nhấn mạnh việc dùng '不好意思，請問' thể hiện sự lịch sự."
        }
      ]
    },
    speaking: {
      promptTraditional: "請用中文問：Xin hỏi, nhà vệ sinh ở đâu?",
      promptPinyin: "Qǐng yòng zhōngwén wèn: Xin hỏi, nhà vệ sinh ở đâu?",
      promptVietnamese: "Hãy dùng tiếng Trung để hỏi: Xin hỏi, nhà vệ sinh ở đâu?",
      sampleAnswerTraditional: "請問，洗手間在哪裡？ / 請問，廁所在哪裡？",
      sampleAnswerPinyin: "Qǐngwèn, xǐshǒujiān zài nǎlǐ? / Qǐngwèn, cèsuǒ zài nǎlǐ?",
      sampleAnswerVietnamese: "Xin hỏi nhà vệ sinh ở đâu?"
    },
    writing: {
      promptVietnamese: "Sắp xếp câu: 前面 / 在 / 教室 / 。",
      suggestedAnswerTraditional: "教室在前面。",
      suggestedAnswerPinyin: "Jiàoshì zài qiánmiàn.",
      suggestedAnswerVietnamese: "Phòng học ở phía trước."
    },
    quiz: [
      {
        id: "q_10_1", type: "multiple_choice", question: "Từ 'Ở đâu' tiếng Trung là gì?",
        options: ["那裡 (nàlǐ)", "哪裡 (nǎlǐ)", "這裡 (zhèlǐ)", "什麼 (shénme)"], correctAnswer: "哪裡 (nǎlǐ)", explanation: "哪裡 dóng vai trò là từ để hỏi 'ở chỗ nào/ở đâu'."
      },
      {
        id: "q_10_2", type: "multiple_choice", question: "Từ 'Phía sau' trong tiếng Trung là?",
        options: ["前面 (qiánmiàn)", "後面 (hòumiàn)", "在 (zài)", "那裡 (nàlǐ)"], correctAnswer: "後面 (hòumiàn)", explanation: "後面 (hòumiàn) nghĩa là phía sau."
      },
      {
        id: "q_10_3", type: "fill_blank", question: "Xin lỗi (cách nói lịch sự trước khi làm phiền ai): 不好____。",
        correctAnswer: "意思", explanation: "不好意思 (Bù hǎoyìsi) là câu nói rất thông dụng biểu thị sự lịch sự."
      },
      {
        id: "q_10_4", type: "true_false", question: "洗手間 (Xǐshǒujiān) và 廁所 (Cèsuǒ) đều có nghĩa là nhà vệ sinh. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đúng, 廁所 chỉ nhà xí, 洗手間 chỉ phòng rửa tay. Cả hai thông dụng để gọi nvs."
      },
      {
        id: "q_10_5", type: "multiple_choice", question: "Làm thế nào để hỏi 'Trường học ở đâu?'",
        options: ["教室在哪裡？", "你在哪裡？", "學校在哪裡？", "那是學校嗎？"], correctAnswer: "學校在哪裡？", explanation: "學校 (xuéxiào) là trường học, 在哪裡 là ở đâu."
      }
    ]
  }
];
