import { Lesson } from '../types/lesson';

export const stage1LessonsPart3: Lesson[] = [
  {
    id: "lesson_5",
    day: 5,
    title: "Bài 5: Giới thiệu bản thân",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Giới thiệu bản thân",
    objectives: [
      "Học cách xưng tên bằng mẫu câu cơ bản.",
      "Biết cách hỏi tên người khác một cách lịch sự.",
      "Sử dụng động từ '叫' (gọi là) và '是' (là)."
    ],
    vocabulary: [
      {
        id: "v_5_1", traditional: "叫", pinyin: "Jiào", zhuyin: "ㄐㄧㄠˋ", vietnamese: "Gọi, tên là",
        partOfSpeech: "Động từ", exampleTraditional: "我叫王小明。", examplePinyin: "Wǒ jiào Wáng Xiǎomíng.", exampleVietnamese: "Tôi tên là Vương Tiểu Minh."
      },
      {
        id: "v_5_2", traditional: "什麼", pinyin: "Shénme", zhuyin: "ㄕㄣˊ ㄇㄜ˙", vietnamese: "Cái gì",
        partOfSpeech: "Đại từ", exampleTraditional: "這是什麼？", examplePinyin: "Zhè shì shénme?", exampleVietnamese: "Đây là cái gì?"
      },
      {
        id: "v_5_3", traditional: "名字", pinyin: "Míngzi", zhuyin: "ㄇㄧㄥˊ ㄗ˙", vietnamese: "Tên",
        partOfSpeech: "Danh từ", exampleTraditional: "你的名字很好聽。", examplePinyin: "Nǐ de míngzi hěn hǎotīng.", exampleVietnamese: "Tên của bạn rất hay."
      },
      {
        id: "v_5_4", traditional: "是", pinyin: "Shì", zhuyin: "ㄕˋ", vietnamese: "Là",
        partOfSpeech: "Động từ", exampleTraditional: "我是學生。", examplePinyin: "Wǒ shì xuéshēng.", exampleVietnamese: "Tôi là học sinh."
      },
      {
        id: "v_5_5", traditional: "林", pinyin: "Lín", zhuyin: "ㄌㄧㄣˊ", vietnamese: "Họ Lâm",
        partOfSpeech: "Danh từ riêng", exampleTraditional: "他姓林。", examplePinyin: "Tā xìng Lín.", exampleVietnamese: "Anh ấy họ Lâm."
      },
      {
        id: "v_5_6", traditional: "陳", pinyin: "Chén", zhuyin: "ㄔㄣˊ", vietnamese: "Họ Trần",
        partOfSpeech: "Danh từ riêng", exampleTraditional: "陳老師很好。", examplePinyin: "Chén lǎoshī hěn hǎo.", exampleVietnamese: "Thầy Trần rất tốt."
      },
      {
        id: "v_5_7", traditional: "阮", pinyin: "Ruǎn", zhuyin: "ㄖㄨㄢˇ", vietnamese: "Họ Nguyễn",
        partOfSpeech: "Danh từ riêng", exampleTraditional: "我姓阮。", examplePinyin: "Wǒ xìng Ruǎn.", exampleVietnamese: "Tôi họ Nguyễn."
      },
      {
        id: "v_5_8", traditional: "姓", pinyin: "Xìng", zhuyin: "ㄒㄧㄥˋ", vietnamese: "Họ (là)",
        partOfSpeech: "Động từ / Danh từ", exampleTraditional: "請問您貴姓？", examplePinyin: "Qǐngwèn nín guìxìng?", exampleVietnamese: "Xin hỏi ngài họ gì?"
      }
    ],
    sentencePatterns: [
      {
        traditional: "你叫什麼名字？", pinyin: "Nǐ jiào shénme míngzi?", zhuyin: "ㄋㄧˇ ㄐㄧㄠˋ ㄕㄣˊ ㄇㄜ˙ ㄇㄧㄥˊ ㄗ˙?",
        vietnamese: "Bạn tên là gì?", usage: "Câu hỏi tên thông dụng."
      },
      {
        traditional: "我叫 [Tên]。", pinyin: "Wǒ jiào [Tên].", zhuyin: "ㄨㄛˇ ㄐㄧㄠˋ [Tên].",
        vietnamese: "Tôi tên là [Tên].", usage: "Cách trả lời khi được hỏi tên."
      },
      {
        traditional: "我姓阮，叫阮文安。", pinyin: "Wǒ xìng Ruǎn, jiào Ruǎn Wén'ān.", zhuyin: "ㄨㄛˇ ㄒㄧㄥˋ ㄖㄨㄢˇ, ㄐㄧㄠˋ ㄖㄨㄢˇ ㄨㄣˊ ㄢ.",
        vietnamese: "Tôi họ Nguyễn, tên là Nguyễn Văn An.", usage: "Cách giới thiệu đầy đủ cả họ và tên."
      }
    ],
    listening: {
      title: "Hỏi tên bạn học",
      transcriptTraditional: "A: 你好，我叫林心如。你叫什麼名字？\nB: 你好，我姓阮，叫阮明哲。\nA: 阮明哲，很高興認識你！\nB: 認識你，我也很高興。",
      transcriptPinyin: "A: Nǐ hǎo, wǒ jiào Lín Xīnrú. Nǐ jiào shénme míngzi?\nB: Nǐ hǎo, wǒ xìng Ruǎn, jiào Ruǎn Míngzhé.\nA: Ruǎn Míngzhé, hěn gāoxìng rènshí nǐ!\nB: Rènshí nǐ, wǒ yě hěn gāoxìng.",
      transcriptVietnamese: "A: Xin chào, tôi tên là Lâm Tâm Như. Bạn tên là gì?\nB: Chào bạn, tôi họ Nguyễn, tên là Nguyễn Minh Triết.\nA: Nguyễn Minh Triết, rất vui được quen biết bạn!\nB: Quen biết bạn tôi cũng rất vui.",
      questions: [
        {
          id: "l_5_q1", type: "multiple_choice", question: "Bạn B họ gì?",
          options: ["Lâm (林)", "Trần (陳)", "Nguyễn (阮)", "Không có họ"], correctAnswer: "Nguyễn (阮)", explanation: "B nói: 'wǒ xìng Ruǎn' (Tôi họ Nguyễn)."
        }
      ]
    },
    reading: {
      title: "Tên phổ biến ở Đài Loan và Việt Nam",
      passageTraditional: "在台灣，姓「陳」和姓「林」的人很多。在越南，姓「阮」的人最多。介紹自己的時候，可以說「我姓...，叫...」。這是一種禮貌的說法。",
      passagePinyin: "Zài Táiwān, xìng 'Chén' hé xìng 'Lín' de rén hěn duō. Zài Yuènán, xìng 'Ruǎn' de rén zuì duō. Jièshào zìjǐ de shíhòu, kěyǐ shuō 'Wǒ xìng..., jiào...'. Zhè shì yī zhǒng lǐmào de shuōfǎ.",
      passageVietnamese: "Ở Đài Loan, người họ Trần và họ Lâm rất nhiều. Ở Việt Nam, người họ Nguyễn là đông nhất. Khi giới thiệu bản thân, có thể nói 'Tôi họ..., tên là...'. Đây là một cách nói lịch sự.",
      questions: [
        {
          id: "r_5_q1", type: "multiple_choice", question: "Ở Đài Loan họ nào phổ biến?",
          options: ["Họ Nguyễn (阮)", "Họ Trần (陳) và họ Lâm (林)", "Họ Lê", "Họ Vũ"], correctAnswer: "Họ Trần (陳) và họ Lâm (林)", explanation: "Đoạn văn viết: Zài Táiwān, xìng 'Chén' hé xìng 'Lín' de rén hěn duō."
        }
      ]
    },
    speaking: {
      promptTraditional: "請介紹你的姓和名字。",
      promptPinyin: "Qǐng jièshào nǐ de xìng hé míngzi.",
      promptVietnamese: "Hãy giới thiệu họ và tên của bạn.",
      sampleAnswerTraditional: "你好，我姓王，叫王小明。",
      sampleAnswerPinyin: "Nǐ hǎo, wǒ xìng Wáng, jiào Wáng Xiǎomíng.",
      sampleAnswerVietnamese: "Xin chào, tôi họ Vương, tên là Vương Tiểu Minh."
    },
    writing: {
      promptVietnamese: "Hãy điền vào chỗ trống để tạo thành câu hoàn chỉnh: Wǒ _____ Ruǎn, _____ Ruǎn Wén'ān. (Tôi họ Nguyễn, tên là Nguyễn Văn An)",
      suggestedAnswerTraditional: "我姓阮，叫阮文安。",
      suggestedAnswerPinyin: "Wǒ xìng Ruǎn, jiào Ruǎn Wén'ān.",
      suggestedAnswerVietnamese: "Tôi họ Nguyễn, gọi là Nguyễn Văn An."
    },
    quiz: [
      {
        id: "q_5_1", type: "multiple_choice", question: "Từ để hỏi 'Cái gì' trong tiếng Trung là?",
        options: ["叫 (Jiào)", "是 (Shì)", "什麼 (Shénme)", "名字 (Míngzi)"], correctAnswer: "什麼 (Shénme)", explanation: "什麼 (Shénme) nghĩa là cái gì/gì."
      },
      {
        id: "q_5_2", type: "fill_blank", question: "Bạn tên là gì? 你____什麼名字？",
        correctAnswer: "叫", explanation: "Từ cần điền là 叫 (jiào - gọi là)."
      },
      {
        id: "q_5_3", type: "true_false", question: "姓 (Xìng) dùng để chỉ 'Tên'. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "姓 (Xìng) nghĩa là Họ. 名字 mới là Tên."
      },
      {
        id: "q_5_4", type: "multiple_choice", question: "Họ 'Nguyễn' trong tiếng Trung phồn thể viết thế nào?",
        options: ["陳 (Chén)", "林 (Lín)", "王 (Wáng)", "阮 (Ruǎn)"], correctAnswer: "阮 (Ruǎn)", explanation: "阮 (Ruǎn) là họ Nguyễn."
      },
      {
        id: "q_5_5", type: "fill_blank", question: "Tôi là học sinh. 我____學生。",
        correctAnswer: "是", explanation: "是 (shì) nghĩa là 'là'. 我是學生 (Tôi là học sinh)."
      }
    ]
  },
  {
    id: "lesson_6",
    day: 6,
    title: "Bài 6: Quốc tịch và quê quán",
    level: "beginner",
    stage: "CHẶNG 1: NHẬP MÔN TIẾNG TRUNG PHỒN THỂ",
    topic: "Quốc gia và Nơi chốn",
    objectives: [
      "Học từ vựng về các quốc gia phổ biến.",
      "Cách nói mình là người nước nào.",
      "Sử dụng từ nghi vấn '哪' (Nào) và từ '人' (Người)."
    ],
    vocabulary: [
      {
        id: "v_6_1", traditional: "哪", pinyin: "Nǎ", zhuyin: "ㄋㄚˇ", vietnamese: "Nào (Which)",
        partOfSpeech: "Đại từ", exampleTraditional: "你是哪國人？", examplePinyin: "Nǐ shì nǎ guó rén?", exampleVietnamese: "Bạn là người nước nào?"
      },
      {
        id: "v_6_2", traditional: "國", pinyin: "Guó", zhuyin: "ㄍㄨㄛˊ", vietnamese: "Quốc gia, nước",
        partOfSpeech: "Danh từ", exampleTraditional: "國家", examplePinyin: "Guójiā", exampleVietnamese: "Quốc gia."
      },
      {
        id: "v_6_3", traditional: "人", pinyin: "Rén", zhuyin: "ㄖㄣˊ", vietnamese: "Người",
        partOfSpeech: "Danh từ", exampleTraditional: "台灣人", examplePinyin: "Táiwān rén", exampleVietnamese: "Người Đài Loan."
      },
      {
        id: "v_6_4", traditional: "越南", pinyin: "Yuènán", zhuyin: "ㄩㄝˋ ㄋㄢˊ", vietnamese: "Việt Nam",
        partOfSpeech: "Danh từ", exampleTraditional: "我來自越南。", examplePinyin: "Wǒ láizì Yuènán.", exampleVietnamese: "Tôi đến từ Việt Nam."
      },
      {
        id: "v_6_5", traditional: "美國", pinyin: "Měiguó", zhuyin: "ㄇㄟˇ ㄍㄨㄛˊ", vietnamese: "Nước Mỹ",
        partOfSpeech: "Danh từ", exampleTraditional: "他是美國人。", examplePinyin: "Tā shì Měiguó rén.", exampleVietnamese: "Anh ấy là người Mỹ."
      },
      {
        id: "v_6_6", traditional: "日本", pinyin: "Rìběn", zhuyin: "ㄖˋ ㄅㄣˇ", vietnamese: "Nhật Bản",
        partOfSpeech: "Danh từ", exampleTraditional: "她去日本。", examplePinyin: "Tā qù Rìběn.", exampleVietnamese: "Cô ấy đi Nhật Bản."
      },
      {
        id: "v_6_7", traditional: "也", pinyin: "Yě", zhuyin: "ㄧㄝˇ", vietnamese: "Cũng",
        partOfSpeech: "Phó từ", exampleTraditional: "我也是學生。", examplePinyin: "Wǒ yě shì xuéshēng.", exampleVietnamese: "Tôi cũng là học sinh."
      },
      {
        id: "v_6_8", traditional: "來自", pinyin: "Láizì", zhuyin: "ㄌㄞˊ ㄗˋ", vietnamese: "Đến từ",
        partOfSpeech: "Động từ", exampleTraditional: "我來自河內。", examplePinyin: "Wǒ láizì Hénèi.", exampleVietnamese: "Tôi đến từ Hà Nội."
      }
    ],
    sentencePatterns: [
      {
        traditional: "你是哪國人？", pinyin: "Nǐ shì nǎ guó rén?", zhuyin: "ㄋㄧˇ ㄕˋ ㄋㄚˇ ㄍㄨㄛˊ ㄖㄣˊ?",
        vietnamese: "Bạn là người nước nào?", usage: "Hỏi quốc tịch của người đối diện."
      },
      {
        traditional: "我是越南人。", pinyin: "Wǒ shì Yuènán rén.", zhuyin: "ㄨㄛˇ ㄕˋ ㄩㄝˋ ㄋㄢˊ ㄖㄣˊ.",
        vietnamese: "Tôi là người Việt Nam.", usage: "Câu trả lời quốc tịch (Chủ ngữ + 是 + Tên Nước + 人)."
      },
      {
        traditional: "你來自哪裡？", pinyin: "Nǐ láizì nǎlǐ?", zhuyin: "ㄋㄧˇ ㄌㄞˊ ㄗˋ ㄋㄚˇ ㄌㄧˇ?",
        vietnamese: "Bạn đến từ đâu?", usage: "Hỏi quê quán, nơi sinh ra."
      }
    ],
    listening: {
      title: "Giao lưu sinh viên quốc tế",
      transcriptTraditional: "A: 你好，我是陳老師。你是哪國人？\nB: 老師好。我是越南人。\nA: 歡迎你來台灣。那個學生也是越南人嗎？\nB: 不是，他是日本人。",
      transcriptPinyin: "A: Nǐ hǎo, wǒ shì Chén lǎoshī. Nǐ shì nǎ guó rén?\nB: Lǎoshī hǎo. Wǒ shì Yuènán rén.\nA: Huānyíng nǐ lái Táiwān. Nàge xuéshēng yě shì Yuènán rén ma?\nB: Bù shì, tā shì Rìběn rén.",
      transcriptVietnamese: "A: Xin chào, tôi là cô Trần. Em là người nước nào?\nB: Chào cô ạ. Em là người Việt Nam.\nA: Hoan nghênh em đến Đài Loan. Học sinh kia cũng là người Việt Nam phải không?\nB: Không phải ạ, bạn ấy là người Nhật Bản.",
      questions: [
        {
          id: "l_6_q1", type: "multiple_choice", question: "Học sinh thứ hai (học sinh kia) là người nước nào?",
          options: ["Người Việt Nam", "Người Mỹ", "Người Nhật Bản", "Người Đài Loan"], correctAnswer: "Người Nhật Bản", explanation: "Bạn B nói: 'tā shì Rìběn rén' (Cậu ấy là người Nhật Bản)."
        }
      ]
    },
    reading: {
      title: "Trường Đại học Quốc tế",
      passageTraditional: "這是一個大班級。班裡有很多外國學生。有越南人、美國人和日本人。大家來台灣學中文，都很高興。",
      passagePinyin: "Zhè shì yī gè dà bānjí. Bān lǐ yǒu hěnduō wàiguó xuéshēng. Yǒu Yuènán rén, Měiguó rén hé Rìběn rén. Dàjiā lái Táiwān xué zhōngwén, dōu hěn gāoxìng.",
      passageVietnamese: "Đây là một lớp học lớn. Trong lớp có rất nhiều học sinh nước ngoài. Có người Việt Nam, người Mỹ và người Nhật Bản. Mọi người đến Đài Loan học tiếng Trung, đều rất vui.",
      questions: [
        {
          id: "r_6_q1", type: "true_false", question: "Trong lớp chỉ có sinh viên Việt Nam. (Đúng/Sai)",
          options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Trong lớp có người Việt, người Mỹ và người Nhật (yǒu Yuènán rén, Měiguó rén hé Rìběn rén)."
        }
      ]
    },
    speaking: {
      promptTraditional: "如何回答「你是哪國人？」？",
      promptPinyin: "Rúhé huídá 'Nǐ shì nǎ guó rén?'?",
      promptVietnamese: "Hãy trả lời câu hỏi: Bạn là người nước nào?",
      sampleAnswerTraditional: "我是越南人。我來自越南。",
      sampleAnswerPinyin: "Wǒ shì Yuènán rén. Wǒ láizì Yuènán.",
      sampleAnswerVietnamese: "Tôi là người Việt Nam. Tôi đến từ Việt Nam."
    },
    writing: {
      promptVietnamese: "Sắp xếp các từ sau thành câu đúng: 人 / 是 / 美國 / 他 / 。",
      suggestedAnswerTraditional: "他是美國人。",
      suggestedAnswerPinyin: "Tā shì Měiguó rén.",
      suggestedAnswerVietnamese: "Anh ấy là người Mỹ."
    },
    quiz: [
      {
        id: "q_6_1", type: "multiple_choice", question: "Từ 'Việt Nam' trong tiếng Trung là gì?",
        options: ["美國 (Měiguó)", "越南 (Yuènán)", "日本 (Rìběn)", "台灣 (Táiwān)"], correctAnswer: "越南 (Yuènán)", explanation: "Yuènán nghĩa là Việt Nam."
      },
      {
        id: "q_6_2", type: "fill_blank", question: "Bạn là người nước nào? 你是____國人？",
        correctAnswer: "哪", explanation: "哪 (nǎ) là từ để hỏi 'Nào'. 哪國人: Người nước nào."
      },
      {
        id: "q_6_3", type: "true_false", question: "Câu '我是越南人' dịch là 'Tôi là người Việt Nam'. (Đúng/Sai)",
        options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Wǒ (Tôi) shì (là) Yuènán (Việt Nam) rén (người)."
      },
      {
        id: "q_6_4", type: "multiple_choice", question: "Để nói 'Đến từ' ta dùng cụm từ nào?",
        options: ["來自 (láizì)", "也是 (yě shì)", "叫 (jiào)", "什麼 (shénme)"], correctAnswer: "來自 (láizì)", explanation: "來自 (láizì) mang nghĩa là từ đâu đến."
      },
      {
        id: "q_6_5", type: "fill_blank", question: "Anh ấy CŨNG là người Nhật Bản: 他____是日本人。",
        correctAnswer: "也", explanation: "也 (yě) nghĩa là CŨNG."
      }
    ]
  }
];
