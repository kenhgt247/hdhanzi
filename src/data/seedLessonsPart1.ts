import { Lesson } from '../types/lesson';

export const stage1Lessons: Lesson[] = [
  {
    id: "lesson_1",
    day: 1,
    title: "Bài 1: Làm quen tiếng Trung phồn thể",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Làm quen ngôn ngữ",
    objectives: [
      "Hiểu sự khác biệt giữa Tiếng Trung phồn thể và giản thể.",
      "Biết cách sử dụng các nét cơ bản trong tiếng Trung.",
      "Nắm được những từ vựng xin chào cơ bản nhất."
    ],
    vocabulary: [
      {
        id: "v_1_1", traditional: "你好", pinyin: "Nǐ hǎo", zhuyin: "ㄋㄧˇ ㄏㄠˇ", vietnamese: "Xin chào",
        partOfSpeech: "Danh từ", exampleTraditional: "你好，很高興認識你。", examplePinyin: "Nǐ hǎo, hěn gāoxìng rènshí nǐ.", exampleVietnamese: "Xin chào, rất vui được làm quen với bạn."
      },
      {
        id: "v_1_2", traditional: "台灣", pinyin: "Táiwān", zhuyin: "ㄊㄞˊ ㄨㄢ", vietnamese: "Đài Loan",
        partOfSpeech: "Danh từ", exampleTraditional: "我想去台灣留學。", examplePinyin: "Wǒ xiǎng qù Táiwān liúxué.", exampleVietnamese: "Tôi muốn đi du học Đài Loan."
      },
      {
        id: "v_1_3", traditional: "謝謝", pinyin: "Xièxiè", zhuyin: "ㄒㄧㄝˋ ㄒㄧㄝˋ", vietnamese: "Cảm ơn",
        partOfSpeech: "Động từ", exampleTraditional: "謝謝你的幫助。", examplePinyin: "Xièxiè nǐ de bāngzhù.", exampleVietnamese: "Cảm ơn sự giúp đỡ của bạn."
      },
      {
        id: "v_1_4", traditional: "對不起", pinyin: "Duìbùqǐ", zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ", vietnamese: "Xin lỗi",
        partOfSpeech: "Động từ", exampleTraditional: "對不起，我遲到了。", examplePinyin: "Duìbùqǐ, wǒ chídào le.", exampleVietnamese: "Xin lỗi, tôi đến trễ."
      },
      {
        id: "v_1_5", traditional: "繁體字", pinyin: "Fántǐzì", zhuyin: "ㄈㄢˊ ㄊㄧˇ ㄗˋ", vietnamese: "Chữ phồn thể",
        partOfSpeech: "Danh từ", exampleTraditional: "台灣使用繁體字。", examplePinyin: "Táiwān shǐyòng fántǐzì.", exampleVietnamese: "Đài Loan sử dụng chữ phồn thể."
      },
      {
        id: "v_1_6", traditional: "老師", pinyin: "Lǎoshī", zhuyin: "ㄌㄠˇ ㄕ", vietnamese: "Giáo viên",
        partOfSpeech: "Danh từ", exampleTraditional: "老師好。", examplePinyin: "Lǎoshī hǎo.", exampleVietnamese: "Chào thầy/cô."
      },
      {
        id: "v_1_7", traditional: "學生", pinyin: "Xuéshēng", zhuyin: "ㄒㄩㄝˊ ㄕㄥ", vietnamese: "Học sinh",
        partOfSpeech: "Danh từ", exampleTraditional: "我是學生。", examplePinyin: "Wǒ shì xuéshēng.", exampleVietnamese: "Tôi là học sinh."
      },
      {
        id: "v_1_8", traditional: "再見", pinyin: "Zàijiàn", zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ", vietnamese: "Tạm biệt",
        partOfSpeech: "Động từ", exampleTraditional: "大家再見。", examplePinyin: "Dàjiā zàijiàn.", exampleVietnamese: "Tạm biệt mọi người."
      }
    ],
    sentencePatterns: [
      {
        traditional: "你好，我是 [Name]。", pinyin: "Nǐ hǎo, wǒ shì [Name].", zhuyin: "ㄋㄧˇ ㄏㄠˇ, ㄨㄛˇ ㄕˋ [Name].",
        vietnamese: "Xin chào, tôi là [Name].", usage: "Dùng để chào hỏi và xưng tên."
      },
      {
        traditional: "謝謝（你）。", pinyin: "Xièxiè (nǐ).", zhuyin: "ㄒㄧㄝˋ ㄒㄧㄝˋ (ㄋㄧˇ).",
        vietnamese: "Cảm ơn (bạn).", usage: "Dùng khi nhận được sự giúp đỡ."
      },
      {
        traditional: "對不起，沒關係。", pinyin: "Duìbùqǐ, méiguānxi.", zhuyin: "ㄉㄨㄟˋ ㄅㄨˋ ㄑㄧˇ, ㄇㄟˊ ㄍㄨㄢ ㄒㄧ.",
        vietnamese: "Xin lỗi, không sao đâu.", usage: "Dùng để xin lỗi và đáp lại lời xin lỗi."
      }
    ],
    listening: {
      title: "Lời chào trong trường học",
      transcriptTraditional: "A: 老師好！\nB: 你好！你是新學生嗎？\nA: 是的，謝謝老師。\nB: 再見！\nA: 再見！",
      transcriptPinyin: "A: Lǎoshī hǎo!\nB: Nǐ hǎo! Nǐ shì xīn xuéshēng ma?\nA: Shì de, xièxiè lǎoshī.\nB: Zàijiàn!\nA: Zàijiàn!",
      transcriptVietnamese: "A: Chào cô ạ!\nB: Chào em! Em là học sinh mới phải không?\nA: Dạ vâng, cảm ơn cô.\nB: Tạm biệt em!\nA: Tạm biệt cô!",
      questions: [
        {
          id: "l_1_q1", type: "multiple_choice", question: "Học sinh đã gọi giáo viên là gì?",
          options: ["你好", "老師好", "對不起", "再見"], correctAnswer: "老師好", explanation: "Trong đoạn hội thoại, học sinh nói '老師好' (Chào cô/thầy)."
        }
      ]
    },
    reading: {
      title: "Chữ phồn thể ở Đài Loan",
      passageTraditional: "台灣, 香港和澳門使用繁體字。繁體字很漂亮，但是筆畫比較多。很多在台灣的留學生都在學習繁體字。",
      passagePinyin: "Táiwān, Xiānggǎng hé Àomén shǐyòng fántǐzì. Fántǐzì hěn piàoliang, dànshì bǐhuà bǐjiào duō. Hěnduō zài Táiwān de liúxuéshēng dōu zài xuéxí fántǐzì.",
      passageVietnamese: "Đài Loan, Hồng Kông và Ma Cao sử dụng chữ phồn thể. Chữ phồn thể rất đẹp, nhưng nét bút tương đối nhiều. Rất nhiều du học sinh ở Đài Loan đều đang học chữ phồn thể.",
      questions: [
        {
          id: "r_1_q1", type: "true_false", question: "Đài Loan sử dụng chữ giản thể. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đài Loan sử dụng chữ phồn thể (繁體字), không phải giản thể."
        }
      ]
    },
    speaking: {
      promptTraditional: "請用中文打招呼並說出謝謝和再見。",
      promptPinyin: "Qǐng yòng zhōngwén dǎ zhāohū bìng shuō chū xièxiè hé zàijiàn.",
      promptVietnamese: "Hãy dùng tiếng Trung để chào hỏi, nói cảm ơn và tạm biệt.",
      sampleAnswerTraditional: "你好！謝謝你。再見！",
      sampleAnswerPinyin: "Nǐ hǎo! Xièxiè nǐ. Zàijiàn!",
      sampleAnswerVietnamese: "Xin chào! Cảm ơn bạn. Tạm biệt!"
    },
    writing: {
      promptVietnamese: "Viết các cụm từ sau bằng chữ phồn thể: Xin chào, Cảm ơn, Tạm biệt.",
      suggestedAnswerTraditional: "你好，謝謝，再見",
      suggestedAnswerPinyin: "Nǐ hǎo, xièxiè, zàijiàn",
      suggestedAnswerVietnamese: "Xin chào, cảm ơn, tạm biệt"
    },
    grammar: [
      {
         title: "Câu hỏi với 'ma' (嗎)",
         explanation: "Trợ từ nghi vấn 'ma' (嗎) được đặt ở cuối câu trần thuật để tạo thành câu hỏi nghi vấn Có/Không.",
         structure: "S + V + O + 嗎?",
         examples: [
            { traditional: "你好嗎？", pinyin: "Nǐ hǎo ma?", vietnamese: "Bạn có khỏe không?" },
            { traditional: "你是學生嗎？", pinyin: "Nǐ shì xuéshēng ma?", vietnamese: "Bạn là học sinh phải không?" }
         ]
      },
      {
         title: "Động từ 'shì' (是)",
         explanation: "'shì' (是) tương đương với động từ 'tobe' (là) trong tiếng Anh. Dùng để định nghĩa hoặc xác nhận một sự vật, sự việc.",
         structure: "A 是 B",
         examples: [
            { traditional: "我是學生。", pinyin: "Wǒ shì xuéshēng.", vietnamese: "Tôi là học sinh." },
            { traditional: "他是老師。", pinyin: "Tā shì lǎoshī.", vietnamese: "Ông ấy là giáo viên." }
         ]
      }
    ],
    quiz: [
      {
        id: "q_1_1", type: "multiple_choice", question: "Từ 'Xin chào' trong tiếng Trung phồn thể là gì?",
        options: ["謝謝", "你好", "再見", "對不起"], correctAnswer: "你好", explanation: "你好 (Nǐ hǎo) nghĩa là Xin chào."
      },
      {
        id: "q_1_2", type: "multiple_choice", question: "Từ nào có nghĩa là 'Giáo viên'?",
        options: ["學生", "老師", "台灣", "繁體字"], correctAnswer: "老師", explanation: "老師 (Lǎoshī) nghĩa là giáo viên."
      },
      {
        id: "q_1_3", type: "fill_blank", question: "Đài Loan sử dụng chữ __(phồn thể)__.",
        correctAnswer: "繁體字", explanation: "Đài Loan sử dụng chữ phồn thể (繁體字)."
      },
      {
        id: "q_1_4", type: "true_false", question: "學生 (Xuéshēng) nghĩa là Tạm biệt. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "學生 nghĩa là học sinh. Tạm biệt là 再見."
      },
      {
        id: "q_1_5", type: "multiple_choice", question: "Khi ai đó nói '謝謝' (Cảm ơn), câu trả lời thích hợp là?",
        options: ["再見", "你好", "沒關係/不客氣", "對不起"], correctAnswer: "沒關係/不客氣", explanation: "Khi được cảm ơn, nên đáp lại là không có gì (不客氣 wú kè qì hoặc không sao)."
      }
    ]
  },
  {
    id: "lesson_2",
    day: 2,
    title: "Bài 2: Thanh điệu cơ bản",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Phát âm - Thanh điệu",
    objectives: [
      "Hiểu và phát âm được 4 thanh điệu chính trong tiếng Trung.",
      "Nhận biệt được thanh nhẹ.",
      "Luyện tập thanh điệu qua các từ vựng đơn giản."
    ],
    vocabulary: [
      {
        id: "v_2_1", traditional: "媽", pinyin: "Mā", zhuyin: "ㄇㄚ", vietnamese: "Mẹ (thanh 1)",
        partOfSpeech: "Danh từ", exampleTraditional: "我愛我媽媽。", examplePinyin: "Wǒ ài wǒ māmā.", exampleVietnamese: "Tôi yêu mẹ tôi."
      },
      {
        id: "v_2_2", traditional: "麻", pinyin: "Má", zhuyin: "ㄇㄚˊ", vietnamese: "Cây gai, lúa ma (thanh 2)",
        partOfSpeech: "Danh từ", exampleTraditional: "麻煩你了。", examplePinyin: "Máfan nǐ le.", exampleVietnamese: "Làm phiền bạn rồi."
      },
      {
        id: "v_2_3", traditional: "馬", pinyin: "Mǎ", zhuyin: "ㄇㄚˇ", vietnamese: "Con ngựa (thanh 3)",
        partOfSpeech: "Danh từ", exampleTraditional: "這是一匹馬。", examplePinyin: "Zhè shì yī pǐ mǎ.", exampleVietnamese: "Đây là một con ngựa."
      },
      {
        id: "v_2_4", traditional: "罵", pinyin: "Mà", zhuyin: "ㄇㄚˋ", vietnamese: "Mắng (thanh 4)",
        partOfSpeech: "Động từ", exampleTraditional: "不要罵人。", examplePinyin: "Bùyào mà rén.", exampleVietnamese: "Đừng mắng người khác."
      },
      {
        id: "v_2_5", traditional: "嗎", pinyin: "Ma", zhuyin: "ㄇㄚ˙", vietnamese: "Không? (trợ từ nghi vấn, thanh nhẹ)",
        partOfSpeech: "Trợ từ", exampleTraditional: "你好嗎？", examplePinyin: "Nǐ hǎo ma?", exampleVietnamese: "Bạn có khỏe không?"
      },
      {
        id: "v_2_6", traditional: "好", pinyin: "Hǎo", zhuyin: "ㄏㄠˇ", vietnamese: "Tốt, khỏe (thanh 3)",
        partOfSpeech: "Tính từ", exampleTraditional: "很好。", examplePinyin: "Hěn hǎo.", exampleVietnamese: "Rất tốt."
      },
      {
        id: "v_2_7", traditional: "不", pinyin: "Bù", zhuyin: "ㄅㄨˋ", vietnamese: "Không (thanh 4)",
        partOfSpeech: "Phó từ", exampleTraditional: "不是。", examplePinyin: "Bù shì.", exampleVietnamese: "Không phải."
      },
      {
        id: "v_2_8", traditional: "很", pinyin: "Hěn", zhuyin: "ㄏㄣˇ", vietnamese: "Rất (thanh 3)",
        partOfSpeech: "Phó từ", exampleTraditional: "很大。", examplePinyin: "Hěn dà.", exampleVietnamese: "Rất lớn."
      }
    ],
    sentencePatterns: [
      {
        traditional: "你好嗎？", pinyin: "Nǐ hǎo ma?", zhuyin: "ㄋㄧˇ ㄏㄠˇ ㄇㄚ˙?",
        vietnamese: "Bạn khỏe không?", usage: "Câu hỏi thăm sức khỏe."
      },
      {
        traditional: "我很好，謝謝。", pinyin: "Wǒ hěn hǎo, xièxiè.", zhuyin: "ㄨㄛˇ ㄏㄣˇ ㄏㄠˇ, ㄒㄧㄝˋ ㄒㄧㄝˋ.",
        vietnamese: "Tôi rất khỏe, cảm ơn.", usage: "Câu trả lời khi được hỏi thăm."
      },
      {
        traditional: "這是一匹馬。", pinyin: "Zhè shì yī pǐ mǎ.", zhuyin: "ㄓㄜˋ ㄕˋ ㄧ ㄆㄧˇ ㄇㄚˇ.",
        vietnamese: "Đây là một con ngựa.", usage: "Mẫu câu phân biệt từ vựng."
      }
    ],
    listening: {
      title: "Nghe và phân biệt thanh điệu",
      transcriptTraditional: "A: 你好嗎？\nB: 我很好。你的媽媽好嗎？\nA: 她也很好。謝謝！",
      transcriptPinyin: "A: Nǐ hǎo ma?\nB: Wǒ hěn hǎo. Nǐ de māmā hǎo ma?\nA: Tā yě hěn hǎo. Xièxiè!",
      transcriptVietnamese: "A: Bạn khỏe không?\nB: Tôi rất khỏe. Mẹ của bạn khỏe không?\nA: Bà ấy cũng rất khỏe. Cảm ơn!",
      questions: [
        {
          id: "l_2_q1", type: "multiple_choice", question: "Chữ 媽 (mā) là thanh mấy?",
          options: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], correctAnswer: "Thanh 1", explanation: "媽 (mā) mang thanh 1, là một âm bằng ngang."
        }
      ]
    },
    reading: {
      title: "Luật biến điệu",
      passageTraditional: "當兩個第三聲在一起時，第一個第三聲要變成第二聲。例如：「你好」(Nǐ hǎo) 要讀成 (Ní hǎo)。在台灣，大家說話常常很溫柔，所以聲調很重要。",
      passagePinyin: "Dāng liǎng gè dì sān shēng zài yīqǐ shí, dì yī gè dì sān shēng yào biànchéng dì èr shēng. Lìrú: 'Nǐ hǎo' yào dú chéng 'Ní hǎo'. Zài Táiwān, dàjiā shuōhuà chángcháng hěn wēnróu, suǒyǐ shēngdiào hěn zhòngyào.",
      passageVietnamese: "Khi hai thanh 3 đi liền nhau, thanh 3 thứ nhất sẽ biến thành thanh 2. Ví dụ: 'Nǐ hǎo' sẽ đọc là 'Ní hǎo'. Ở Đài Loan, mọi người nói chuyện thường rất nhẹ nhàng, cho nên thanh điệu rất quan trọng.",
      questions: [
        {
          id: "r_2_q1", type: "multiple_choice", question: "Khi 'Nǐ' (thanh 3) và 'hǎo' (thanh 3) đi liền nhau thì 'Nǐ' đọc thành thanh mấy?",
          options: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], correctAnswer: "Thanh 2", explanation: "Luật biến điệu cơ bản: 2 thanh 3 đi liền nhau, thanh thứ nhất biến thành thanh 2."
        }
      ]
    },
    speaking: {
      promptTraditional: "請讀出以下句子：你好嗎？我很好。",
      promptPinyin: "Qǐng dú chū yǐxià jùzi: Nǐ hǎo ma? Wǒ hěn hǎo.",
      promptVietnamese: "Hãy đọc to các câu sau, chú ý thanh điệu: Bạn khỏe không? Tôi rất khỏe.",
      sampleAnswerTraditional: "你好嗎？我很好。",
      sampleAnswerPinyin: "Nǐ hǎo ma? Wǒ hěn hǎo.",
      sampleAnswerVietnamese: "Bạn khỏe không? Tôi rất khỏe."
    },
    writing: {
      promptVietnamese: "Viết lại 4 từ sau bằng chữ phồn thể và điền đúng pinyin với thanh điệu: Mẹ, con ngựa, mắng, (trợ từ) không.",
      suggestedAnswerTraditional: "媽 (mā) - 馬 (mǎ) - 罵 (mà) - 嗎 (ma)",
      suggestedAnswerPinyin: "mā - mǎ - mà - ma",
      suggestedAnswerVietnamese: "Mẹ - con ngựa - mắng - không?"
    },
    grammar: [
      {
         title: "Luật biến điệu của thanh 3",
         explanation: "Khi hai âm tiết mang thanh 3 đi liền nhau, âm tiết thứ nhất sẽ đọc thành thanh 2 (tương tự dấu sắc trong tiếng Việt). Tuy nhiên, cách viết Pinyin thường vẫn giữ nguyên thanh 3 ban đầu.",
         structure: "Thanh 3 + Thanh 3 → Thanh 2 + Thanh 3",
         examples: [
            { traditional: "你好", pinyin: "Nǐ hǎo → Ní hǎo", vietnamese: "Xin chào" },
            { traditional: "很好", pinyin: "Hěn hǎo → Hén hǎo", vietnamese: "Rất tốt" }
         ]
      }
    ],
    quiz: [
      {
        id: "q_2_1", type: "multiple_choice", question: "Chữ 罵 (mà) là thanh mấy?",
        options: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], correctAnswer: "Thanh 4", explanation: "罵 (mà) có dấu sắc ngược (từ trên xuống), là thanh 4."
      },
      {
        id: "q_2_2", type: "true_false", question: "Thanh nhẹ là thanh không có dấu. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Thanh nhẹ không có dấu trên nguyên âm (ví dụ: ma trong 'Nǐ hǎo ma')."
      },
      {
        id: "q_2_3", type: "fill_blank", question: "Trong từ 你好嗎, chữ 嗎 mang thanh __(điền số 1,2,3,4 hoặc nhẹ)__.",
        correctAnswer: "nhẹ", explanation: "嗎 trong câu hỏi mang thanh nhẹ."
      },
      {
        id: "q_2_4", type: "multiple_choice", question: "Trong tiếng Trung có tất cả bao nhiêu thanh điệu chính (không tính thanh nhẹ)?",
        options: ["3", "4", "5", "6"], correctAnswer: "4", explanation: "Tiếng Trung có 4 thanh điệu chính: 1 (ngang bằng), 2 (ngang lên), 3 (xuống lên), 4 (xuống mạnh)."
      },
      {
        id: "q_2_5", type: "multiple_choice", question: "Từ 'Hěn hǎo' (rất tốt) khi đọc áp dụng quy tắc biến điệu, chữ 'Hěn' đọc thành thanh mấy?",
        options: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], correctAnswer: "Thanh 2", explanation: "Quy tắc 2 thanh 3 đi liền nhau, đứng trước đọc thành thanh 2."
      }
    ]
  }
];
