import { Lesson } from '../types/lesson';

export const stage1LessonsPart2: Lesson[] = [
  {
    id: "lesson_3",
    day: 3,
    title: "Bài 3: Zhuyin và Pinyin cơ bản",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Phát âm - Bính âm",
    objectives: [
      "Làm quen với hệ thống phát âm Zhuyin (Bopomofo) dùng tại Đài Loan.",
      "So sánh sự khác biệt giữa Pinyin và Zhuyin.",
      "Luyện phát âm các vận mẫu, thanh mẫu cơ bản."
    ],
    vocabulary: [
      {
        id: "v_3_1", traditional: "注音", pinyin: "Zhùyīn", zhuyin: "ㄓㄨˋ ㄧㄣ", vietnamese: "Chú âm (Zhuyin/Bopomofo)",
        partOfSpeech: "Danh từ", exampleTraditional: "台灣學生學注音。", examplePinyin: "Táiwān xuéshēng xué zhùyīn.", exampleVietnamese: "Học sinh Đài Loan học chú âm."
      },
      {
        id: "v_3_2", traditional: "拼音", pinyin: "Pīnyīn", zhuyin: "ㄆㄧㄣ ㄧㄣ", vietnamese: "Bính âm (Pinyin)",
        partOfSpeech: "Danh từ", exampleTraditional: "外國人學拼音。", examplePinyin: "Wàiguórén xué pīnyīn.", exampleVietnamese: "Người nước ngoài học bính âm."
      },
      {
        id: "v_3_3", traditional: "看", pinyin: "Kàn", zhuyin: "ㄎㄢˋ", vietnamese: "Nhìn, xem",
        partOfSpeech: "Động từ", exampleTraditional: "我看書。", examplePinyin: "Wǒ kàn shū.", exampleVietnamese: "Tôi xem sách."
      },
      {
        id: "v_3_4", traditional: "聽", pinyin: "Tīng", zhuyin: "ㄊㄧㄥ", vietnamese: "Nghe",
        partOfSpeech: "Động từ", exampleTraditional: "聽音樂。", examplePinyin: "Tīng yīnyuè.", exampleVietnamese: "Nghe nhạc."
      },
      {
        id: "v_3_5", traditional: "說", pinyin: "Shuō", zhuyin: "ㄕㄨㄛ", vietnamese: "Nói",
        partOfSpeech: "Động từ", exampleTraditional: "他說中文。", examplePinyin: "Tā shuō zhōngwén.", exampleVietnamese: "Anh ấy nói tiếng Trung."
      },
      {
        id: "v_3_6", traditional: "讀", pinyin: "Dú", zhuyin: "ㄉㄨˊ", vietnamese: "Đọc",
        partOfSpeech: "Động từ", exampleTraditional: "讀書。", examplePinyin: "Dú shū.", exampleVietnamese: "Đọc sách (đi học)."
      },
      {
        id: "v_3_7", traditional: "寫", pinyin: "Xiě", zhuyin: "ㄒㄧㄝˇ", vietnamese: "Viết",
        partOfSpeech: "Động từ", exampleTraditional: "寫字。", examplePinyin: "Xiě zì.", exampleVietnamese: "Viết chữ."
      },
      {
        id: "v_3_8", traditional: "字", pinyin: "Zì", zhuyin: "ㄗˋ", vietnamese: "Chữ",
        partOfSpeech: "Danh từ", exampleTraditional: "繁體字", examplePinyin: "Fántǐzì", exampleVietnamese: "Chữ phồn thể."
      }
    ],
    sentencePatterns: [
      {
        traditional: "我會看注音。", pinyin: "Wǒ huì kàn zhùyīn.", zhuyin: "ㄨㄛˇ ㄏㄨㄟˋ ㄎㄢˋ ㄓㄨˋ ㄧㄣ.",
        vietnamese: "Tôi biết đọc (nhìn) chú âm.", usage: "Dùng để diễn tả khả năng có được thông qua học tập (會 - huì)."
      },
      {
        traditional: "這個字怎麼唸？", pinyin: "Zhège zì zěnme niàn?", zhuyin: "ㄓㄜˋ ㄍㄜ˙ ㄗˋ ㄗㄣˇ ㄇㄜ˙ ㄋㄧㄢˋ?",
        vietnamese: "Chữ này đọc thế nào?", usage: "Hỏi cách phát âm của một chữ."
      },
      {
        traditional: "請你再說一次。", pinyin: "Qǐng nǐ zài shuō yī cì.", zhuyin: "ㄑㄧㄥˇ ㄋㄧˇ ㄗㄞˋ ㄕㄨㄛ ㄧ ㄘˋ.",
        vietnamese: "Xin bạn hãy nói lại một lần nữa.", usage: "Yêu cầu người khác lặp lại câu nói."
      }
    ],
    listening: {
      title: "Học ngoại ngữ",
      transcriptTraditional: "A: 這個字怎麼唸？\nB: 這個字唸「看」。\nA: 你會拼音還是注音？\nB: 我會拼音，我也在學注音。",
      transcriptPinyin: "A: Zhège zì zěnme niàn?\nB: Zhège zì niàn 'kàn'.\nA: Nǐ huì pīnyīn háishì zhùyīn?\nB: Wǒ huì pīnyīn, wǒ yě zài xué zhùyīn.",
      transcriptVietnamese: "A: Chữ này đọc thế nào?\nB: Chữ này đọc là 'kàn'.\nA: Bạn biết bính âm hay chú âm?\nB: Tôi biết bính âm, tôi cũng đang học chú âm.",
      questions: [
        {
          id: "l_3_q1", type: "multiple_choice", question: "Nhân vật B biết hệ thống phát âm nào?",
          options: ["Chỉ Pinyin", "Chỉ Zhuyin", "Biết Pinyin và đang học Zhuyin", "Không biết hệ thống nào"], correctAnswer: "Biết Pinyin và đang học Zhuyin", explanation: "B nói: Wǒ huì pīnyīn, wǒ yě zài xué zhùyīn."
        }
      ]
    },
    reading: {
      title: "Pinyin và Zhuyin ở Đài Loan",
      passageTraditional: "在台灣，小學生開始上學時會先學注音（ㄅㄆㄇㄈ）。外國人去台灣學中文，大部分先學拼音。現在，越來越多外國人也覺得注音很好用。",
      passagePinyin: "Zài Táiwān, xiǎoxuéshēng kāishǐ shàngxué shí huì xiān xué zhùyīn (b p m f). Wàiguórén qù Táiwān xué zhōngwén, dà bùfèn xiān xué pīnyīn. Xiànzài, yuè lái yuè duō wàiguórén yě juédé zhùyīn hěn hǎoyòng.",
      passageVietnamese: "Ở Đài Loan, học sinh tiểu học bắt đầu đi học sẽ học chú âm (Bopomofo) trước. Người nước ngoài đến Đài Loan học tiếng Trung, đa số học bính âm trước. Hiện nay, ngày càng nhiều người nước ngoài cũng cảm thấy chú âm rất dễ sử dụng.",
      questions: [
        {
          id: "r_3_q1", type: "true_false", question: "Học sinh tiểu học Đài Loan bắt đầu học bằng Pinyin. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Học sinh tiểu học Đài Loan học Zhuyin (Chú âm) trước."
        }
      ]
    },
    speaking: {
      promptTraditional: "請用中文說：「Xin bạn hãy nói lại một lần nữa.」",
      promptPinyin: "Qǐng yòng zhōngwén shuō: 「Xin bạn hãy nói lại một lần nữa.」",
      promptVietnamese: "Hãy dùng tiếng Trung nói: 'Xin bạn hãy nói lại một lần nữa.'",
      sampleAnswerTraditional: "請你再說一次。",
      sampleAnswerPinyin: "Qǐng nǐ zài shuō yī cì.",
      sampleAnswerVietnamese: "Xin bạn hãy nói lại một lần nữa."
    },
    writing: {
      promptVietnamese: "Viết cụm từ sau bằng chữ phồn thể: Nhìn, nghe, nói, viết.",
      suggestedAnswerTraditional: "看，聽，說，寫",
      suggestedAnswerPinyin: "Kàn, tīng, shuō, xiě",
      suggestedAnswerVietnamese: "Nhìn, nghe, nói, viết"
    },
    quiz: [
      {
        id: "q_3_1", type: "multiple_choice", question: "Từ 會 (huì) có nghĩa là gì trong câu 'wǒ huì pīnyīn'?",
        options: ["Biết (thông qua học tập)", "Quen biết", "Có thể (cho phép)", "Sẽ"], correctAnswer: "Biết (thông qua học tập)", explanation: "會 dùng để chỉ một kỹ năng đạt được do học tập."
      },
      {
        id: "q_3_2", type: "multiple_choice", question: "Hệ thống phát âm ㄅㄆㄇㄈ được gọi là gì?",
        options: ["Pinyin", "Hán ngữ", "Zhuyin (Chú âm)", "Chữ phồn thể"], correctAnswer: "Zhuyin (Chú âm)", explanation: "Hệ thống Bopomofo được gọi là Chú âm phù hiệu (Zhuyin)."
      },
      {
        id: "q_3_3", type: "fill_blank", question: "Để hỏi 'Chữ này đọc thế nào?', ta dùng câu: 這個字怎麼___？",
        correctAnswer: "唸", explanation: "唸 (niàn) nghĩa là đọc (phát âm). 這個字怎麼唸？"
      },
      {
        id: "q_3_4", type: "true_false", question: "聽 (Tīng) nghĩa là viết. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "聽 nghĩa là Nghe. Viết là 寫 (Xiě)."
      },
      {
        id: "q_3_5", type: "multiple_choice", question: "Động từ 'Nhìn/Xem' trong tiếng Trung là gì?",
        options: ["聽 (Tīng)", "說 (Shuō)", "寫 (Xiě)", "看 (Kàn)"], correctAnswer: "看 (Kàn)", explanation: "看 (Kàn) nghĩa là Nhìn hoặc Xem."
      }
    ]
  },
  {
    id: "lesson_4",
    day: 4,
    title: "Bài 4: Chào hỏi",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Giao tiếp cơ bản",
    objectives: [
      "Học cách chào hỏi theo thời gian trong ngày.",
      "Biết cách sử dụng các đại từ nhân xưng cơ bản.",
      "Giao tiếp trong lần gặp đầu tiên."
    ],
    vocabulary: [
      {
        id: "v_4_1", traditional: "早安", pinyin: "Zǎo ān", zhuyin: "ㄗㄠˇ ㄢ", vietnamese: "Chào buổi sáng",
        partOfSpeech: "Danh từ", exampleTraditional: "老師早安。", examplePinyin: "Lǎoshī zǎo ān.", exampleVietnamese: "Chào buổi sáng cô."
      },
      {
        id: "v_4_2", traditional: "午安", pinyin: "Wǔ ān", zhuyin: "ㄨˇ ㄢ", vietnamese: "Chào buổi trưa/chiều",
        partOfSpeech: "Danh từ", exampleTraditional: "同學午安。", examplePinyin: "Tóngxué wǔ ān.", exampleVietnamese: "Chào các bạn buổi trưa."
      },
      {
        id: "v_4_3", traditional: "晚安", pinyin: "Wǎn ān", zhuyin: "ㄨㄢˇ ㄢ", vietnamese: "Chào buổi tối / Chúc ngủ ngon",
        partOfSpeech: "Danh từ", exampleTraditional: "爸爸晚安。", examplePinyin: "Bàba wǎn ān.", exampleVietnamese: "Chúc bố ngủ ngon."
      },
      {
        id: "v_4_4", traditional: "我", pinyin: "Wǒ", zhuyin: "ㄨㄛˇ", vietnamese: "Tôi",
        partOfSpeech: "Đại từ", exampleTraditional: "我很好。", examplePinyin: "Wǒ hěn hǎo.", exampleVietnamese: "Tôi rất khỏe."
      },
      {
        id: "v_4_5", traditional: "你", pinyin: "Nǐ", zhuyin: "ㄋㄧˇ", vietnamese: "Bạn (ngôi thứ 2 số ít)",
        partOfSpeech: "Đại từ", exampleTraditional: "你好。", examplePinyin: "Nǐ hǎo.", exampleVietnamese: "Chào bạn."
      },
      {
        id: "v_4_6", traditional: "他/她/它", pinyin: "Tā", zhuyin: "ㄊㄚ", vietnamese: "Anh ấy / Cô ấy / Nó",
        partOfSpeech: "Đại từ", exampleTraditional: "他是學生。", examplePinyin: "Tā shì xuéshēng.", exampleVietnamese: "Cậu ấy là học sinh."
      },
      {
        id: "v_4_7", traditional: "們", pinyin: "Men", zhuyin: "ㄇㄣ˙", vietnamese: "Các... (Hậu tố số nhiều)",
        partOfSpeech: "Hậu tố", exampleTraditional: "我們", examplePinyin: "Wǒmen", exampleVietnamese: "Chúng tôi/chúng ta."
      },
      {
        id: "v_4_8", traditional: "很高興", pinyin: "Hěn gāoxìng", zhuyin: "ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ", vietnamese: "Rất vui",
        partOfSpeech: "Cụm tính từ", exampleTraditional: "我很高興。", examplePinyin: "Wǒ hěn gāoxìng.", exampleVietnamese: "Tôi rất vui."
      },
      {
        id: "v_4_9", traditional: "認識", pinyin: "Rènshí", zhuyin: "ㄖㄣˋ ㄕˋ", vietnamese: "Quen biết",
        partOfSpeech: "Động từ", exampleTraditional: "認識你很高興。", examplePinyin: "Rènshí nǐ hěn gāoxìng.", exampleVietnamese: "Rất vui được biết bạn."
      }
    ],
    sentencePatterns: [
      {
        traditional: "很高興認識你。", pinyin: "Hěn gāoxìng rènshí nǐ.", zhuyin: "ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄖㄣˋ ㄕˋ ㄋㄧˇ.",
        vietnamese: "Rất vui được quen biết bạn.", usage: "Dùng để chào hỏi khi gặp ai đó lần đầu tiên."
      },
      {
        traditional: "認識你，我也很高興。", pinyin: "Rènshí nǐ, wǒ yě hěn gāoxìng.", zhuyin: "ㄖㄣˋ ㄕˋ ㄋㄧˇ, ㄨㄛˇ ㄧㄝˇ ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ.",
        vietnamese: "Quen biết bạn, tôi cũng rất vui.", usage: "Dùng để đáp lời người khác khi mới gặp."
      },
      {
        traditional: "大家早安！", pinyin: "Dàjiā zǎo ān!", zhuyin: "ㄉㄚˋ ㄐㄧㄚ ㄗㄠˇ ㄢ!",
        vietnamese: "Chào buổi sáng mọi người!", usage: "Dùng để chào buổi sáng với đám đông (như trong lớp)."
      }
    ],
    listening: {
      title: "Gặp mặt buổi sáng",
      transcriptTraditional: "A: 老師，早安！\nB: 早安，你是新學生嗎？\nA: 是的，我是新學生。很高興認識老師。\nB: 認識你，我也很高興。",
      transcriptPinyin: "A: Lǎoshī, zǎo ān!\nB: Zǎo ān, nǐ shì xīn xuéshēng ma?\nA: Shì de, wǒ shì xīn xuéshēng. Hěn gāoxìng rènshí lǎoshī.\nB: Rènshí nǐ, wǒ yě hěn gāoxìng.",
      transcriptVietnamese: "A: Cô ơi, chào buổi sáng!\nB: Chào buổi sáng, em là học sinh mới phải không?\nA: Dạ vâng, em là học sinh mới. Rất vui được gặp cô.\nB: Cô cũng rất vui được biết em.",
      questions: [
        {
          id: "l_4_q1", type: "multiple_choice", question: "Học sinh chào cô giáo thời gian nào trong ngày?",
          options: ["Buổi sáng (早安)", "Buổi trưa (午安)", "Buổi tối (晚安)", "Không rõ"], correctAnswer: "Buổi sáng (早安)", explanation: "Học sinh nói '早安' nghĩa là chào buổi sáng."
        }
      ]
    },
    reading: {
      title: "Chào hỏi",
      passageTraditional: "在台灣，早上看到別人的時候，大家會說「早安」或者「早」。晚上睡覺以前，大家會說「晚安」。第一次見面時，會說「很高興認識你」。",
      passagePinyin: "Zài Táiwān, zǎoshang kàndào biérén de shíhòu, dàjiā huì shuō “zǎo ān” huòzhě “zǎo”. Wǎnshàng shuìjiào yǐqián, dàjiā huì shuō “wǎn ān”. Dì yī cì jiànmiàn shí, huì shuō “hěn gāoxìng rènshí nǐ”.",
      passageVietnamese: "Ở Đài Loan, buổi sáng khi gặp người khác, mọi người sẽ nói '早安' (zǎo ān) hoặc '早' (zǎo). Buổi tối trước khi đi ngủ, mọi người sẽ nói '晚安' (wǎn ān). Lần đầu tiên gặp mặt, sẽ nói '很高興認識你' (Rất vui được quen bạn).",
      questions: [
        {
          id: "r_4_q1", type: "multiple_choice", question: "Từ nào thường được dùng trước khi đi ngủ?",
          options: ["早安", "晚安", "你好", "再見"], correctAnswer: "晚安", explanation: "晚安 (Wǎn ān) nghĩa là chúc ngủ ngon / chào buổi tối muộn."
        }
      ]
    },
    speaking: {
      promptTraditional: "第一次看見新同學，你要說什麼？",
      promptPinyin: "Dì yī cì kànjiàn xīn tóngxué, nǐ yào shuō shénme?",
      promptVietnamese: "Lần đầu tiên gặp bạn học mới, bạn sẽ nói gì?",
      sampleAnswerTraditional: "你好，很高興認識你。",
      sampleAnswerPinyin: "Nǐ hǎo, hěn gāoxìng rènshí nǐ.",
      sampleAnswerVietnamese: "Xin chào, rất vui được làm quen với bạn."
    },
    writing: {
      promptVietnamese: "Viết câu sau bằng tiếng Trung: 'Chúng tôi rất vui'.",
      suggestedAnswerTraditional: "我們很高興。",
      suggestedAnswerPinyin: "Wǒmen hěn gāoxìng.",
      suggestedAnswerVietnamese: "Chúng tôi rất vui."
    },
    quiz: [
      {
        id: "q_4_1", type: "fill_blank", question: "Rất vui được biết bạn: 很高興____你。",
        correctAnswer: "認識", explanation: "認識 (Rènshí) nghĩa là quen biết."
      },
      {
        id: "q_4_2", type: "multiple_choice", question: "Đại từ chỉ 'chúng tôi / chúng ta' là gì?",
        options: ["我 (Wǒ)", "你們 (Nǐmen)", "他們 (Tāmen)", "我們 (Wǒmen)"], correctAnswer: "我們 (Wǒmen)", explanation: "我 (Tôi) + 們 (số nhiều) = 我們 (Chúng tôi)."
      },
      {
        id: "q_4_3", type: "multiple_choice", question: "Chào buổi sáng bằng tiếng Trung phồn thể là?",
        options: ["晚安", "早安", "午安", "你好"], correctAnswer: "早安", explanation: "早安 (Zǎo ān) là chào buổi sáng."
      },
      {
        id: "q_4_4", type: "true_false", question: "Ta có thể dùng chữ '早' (Zǎo) đứng một mình để chào buổi sáng. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Người Đài Loan rất hay nói ngắn gọn chữ '早' (Zǎo) thay cho '早安' với người quen."
      },
      {
        id: "q_4_5", type: "multiple_choice", question: "Từ '也' (yě) nghĩa là gì?",
        options: ["Rất", "Không", "Cũng", "Đều"], correctAnswer: "Cũng", explanation: "也 (yě) là phó từ mang ý nghĩa 'cũng'. Ví dụ: wǒ yě hěn hǎo (tôi cũng rất khỏe)."
      }
    ]
  }
];
