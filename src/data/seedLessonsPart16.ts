import { Lesson } from '../types/lesson';

export const stage5LessonsPart2: Lesson[] = [
  {
    id: "lesson_52",
    day: 52,
    title: "Bài 52: Thuê phòng trọ",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Nhà ở",
    objectives: ["Từ vựng về nhà ở, phòng trọ"],
    vocabulary: [
      { id: "v_52_1", traditional: "租", pinyin: "Zū", zhuyin: "ㄗㄨ", vietnamese: "Thuê", partOfSpeech: "Động từ", exampleTraditional: "我想租房子。", examplePinyin: "Wǒ xiǎng zū fángzi.", exampleVietnamese: "Tôi muốn thuê nhà." },
      { id: "v_52_2", traditional: "房子", pinyin: "Fángzi", zhuyin: "ㄈㄤˊ ㄗ˙", vietnamese: "Căn nhà", partOfSpeech: "Danh từ", exampleTraditional: "這間房子很好。", examplePinyin: "Zhè jiān fángzi hěn hǎo.", exampleVietnamese: "Căn nhà này rất tốt." },
      { id: "v_52_3", traditional: "房租", pinyin: "Fángzū", zhuyin: "ㄈㄤˊ ㄗㄨ", vietnamese: "Tiền thuê nhà", partOfSpeech: "Danh từ", exampleTraditional: "房租很高。", examplePinyin: "Fángzū hěn gāo.", exampleVietnamese: "Tiền thuê nhà rất cao." },
      { id: "v_52_4", traditional: "房東", pinyin: "Fángdōng", zhuyin: "ㄈㄤˊ ㄉㄨㄥ", vietnamese: "Chủ nhà", partOfSpeech: "Danh từ", exampleTraditional: "我的房東人很好。", examplePinyin: "Wǒ de fángdōng rén hěn hǎo.", exampleVietnamese: "Chủ nhà của tôi rất tốt bụng." },
      { id: "v_52_5", traditional: "水電費", pinyin: "Shuǐdiànfèi", zhuyin: "ㄕㄨㄟˇ ㄉㄧㄢˋ ㄈㄟˋ", vietnamese: "Tiền điện nước", partOfSpeech: "Danh từ", exampleTraditional: "水電費多少錢？", examplePinyin: "Shuǐdiànfèi duōshǎo qián?", exampleVietnamese: "Tiền điện nước bao nhiêu?" }
    ],
    sentencePatterns: [
      { traditional: "我想租房子。", pinyin: "Wǒ xiǎng zū fángzi.", zhuyin: "ㄨㄛˇ ㄒㄧㄤˇ ㄗㄨ ㄈㄤˊ ㄗ˙.", vietnamese: "Tôi muốn thuê nhà.", usage: "Hỏi thuê nhà" },
      { traditional: "房租多少錢？", pinyin: "Fángzū duōshǎo qián?", zhuyin: "ㄈㄤˊ ㄗㄨ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ?", vietnamese: "Tiền thuê nhà bao nhiêu?", usage: "Hỏi giá" }
    ],
    listening: { title: "Tìm nhà", transcriptTraditional: "A: 房東你好，我想租這間房子。一個月房租多少錢？\nB: 一個月五千塊。水電費不包。\nA: 好的，我租了。", transcriptPinyin: "A: Fángdōng nǐ hǎo, wǒ xiǎng zū zhè jiān fángzi. Yí gè yuè fángzū duōshǎo qián?\nB: Yí gè yuè wǔqiān kuài. Shuǐdiànfèi bù bāo.\nA: Hǎo de, wǒ zū le.", transcriptVietnamese: "A: Chào chủ nhà, tôi muốn thuê căn hộ này. Một tháng tiền thuê là bao nhiêu?\nB: Một tháng năm ngàn tệ. Tiền điện nước không bao gồm.\nA: Vâng, tôi thuê ạ.", questions: [{ id: "q1", type: "multiple_choice", question: "Tiền thuê nhà một tháng là bao nhiêu?", options: ["5000", "500", "5500", "1500"], correctAnswer: "5000", explanation: "Chủ nhà nói 一個月五千塊 (1 tháng 5000 đồng)." }] },
    reading: { title: "Chuyển nhà", passageTraditional: "這個月我們要搬家。我們找到了一間新房子。房子很漂亮，房東也很好。雖然房租有點高，但是我們很喜歡。", passagePinyin: "Zhè gè yuè wǒmen yào bānjiā. Wǒmen zhǎodào le yì jiān xīn fángzi. Fángzi hěn piàoliang, fángdōng yě hěn hǎo. Suīrán fángzū yǒudiǎn gāo, dànshì wǒmen hěn xǐhuān.", passageVietnamese: "Tháng này chúng tôi phải chuyển nhà. Chúng tôi đã tìm được một căn nhà mới. Nhà rất đẹp, chủ nhà cũng tốt. Mặc dù tiền thuê hơi cao, nhưng chúng tôi rất thích.", questions: [{ id: "q1", type: "true_false", question: "Căn nhà mới giá thuê rất rẻ. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 房租有點高 (Tiền thuê hơi cao)." }] },
    speaking: { promptTraditional: "假如你要問房東水電費，你怎麼問？", promptPinyin: "Jiǎrú nǐ yào wèn fángdōng shuǐdiànfèi, nǐ zěnme wèn?", promptVietnamese: "Giả sử bạn hỏi chủ nhà tiền điện nước, hỏi thế nào?", sampleAnswerTraditional: "請問，水電費多少錢？", sampleAnswerPinyin: "Qǐngwèn, shuǐdiànfèi duōshǎo qián?", sampleAnswerVietnamese: "Xin hỏi, tiền điện nước bao nhiêu." },
    writing: { promptVietnamese: "Dịch: 'Tôi muốn thuê nhà'.", suggestedAnswerTraditional: "我想租房子。", suggestedAnswerPinyin: "Wǒ xiǎng zū fángzi.", suggestedAnswerVietnamese: "Tôi muốn thuê nhà." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '房東' (fángdōng) có nghĩa là gì?", options: ["Khách hàng", "Chủ nhà", "Phòng trọ", "Tiền thuê"], correctAnswer: "Chủ nhà", explanation: "房東 là Chủ nhà." }]
  },
  {
    id: "lesson_53",
    day: 53,
    title: "Bài 53: Bạn cùng phòng",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Trường học",
    objectives: ["Giao tiếp cơ bản với bạn ở chung phòng"],
    vocabulary: [
      { id: "v_53_1", traditional: "室友", pinyin: "Shìyǒu", zhuyin: "ㄕˋ ㄧㄡˇ", vietnamese: "Bạn cùng phòng", partOfSpeech: "Danh từ", exampleTraditional: "他是我的新室友。", examplePinyin: "Tā shì wǒ de xīn shìyǒu.", exampleVietnamese: "Cậu ấy là bạn cùng phòng mới của tôi." },
      { id: "v_53_2", traditional: "宿舍", pinyin: "Sùshè", zhuyin: "ㄙㄨˋ ㄕㄜˋ", vietnamese: "Ký túc xá", partOfSpeech: "Danh từ", exampleTraditional: "我住在學校的宿舍。", examplePinyin: "Wǒ zhù zài xuéxiào de sùshè.", exampleVietnamese: "Tôi sống ở ký túc xá của trường." },
      { id: "v_53_3", traditional: "幫忙", pinyin: "Bāngmáng", zhuyin: "ㄅㄤ ㄇㄤˊ", vietnamese: "Giúp đỡ", partOfSpeech: "Động từ", exampleTraditional: "謝謝你的幫忙。", examplePinyin: "Xièxie nǐ de bāngmáng.", exampleVietnamese: "Cảm ơn sự giúp đỡ của bạn." },
      { id: "v_53_4", traditional: "安靜", pinyin: "Ānjìng", zhuyin: "ㄢ ㄐㄧㄥˋ", vietnamese: "Yên tĩnh", partOfSpeech: "Tính từ", exampleTraditional: "請保持安靜。", examplePinyin: "Qǐng bǎochí ānjìng.", exampleVietnamese: "Vui lòng giữ yên lặng." },
      { id: "v_53_5", traditional: "吵", pinyin: "Chǎo", zhuyin: "ㄔㄠˇ", vietnamese: "Ồn ào", partOfSpeech: "Tính/Động từ", exampleTraditional: "外面很吵。", examplePinyin: "Wàimiàn hěn chǎo.", exampleVietnamese: "Bên ngoài rất ồn." }
    ],
    sentencePatterns: [
      { traditional: "請安靜一點。", pinyin: "Qǐng ānjìng yìdiǎn.", zhuyin: "ㄑㄧㄥˇ ㄢ ㄐㄧㄥˋ ㄧˋ ㄉㄧㄢˇ.", vietnamese: "Vui lòng giữ yên lặng 1 chút.", usage: "Yêu cầu trật tự" }
    ],
    listening: { title: "Phòng ktx ồn ào", transcriptTraditional: "A: 室友，你可以安靜一點嗎？我要睡覺了。\nB: 對不起，我不知道。我把音樂關小一點。\nA: 沒關係，謝謝。", transcriptPinyin: "A: Shìyǒu, nǐ kěyǐ ānjìng yìdiǎn ma? Wǒ yào shuìjiào le.\nB: Duìbùqǐ, wǒ bù zhīdào. Wǒ bǎ yīnyuè guān xiǎo yìdiǎn.\nA: Méiguānxi, xièxie.", transcriptVietnamese: "A: Bạn cùng phòng, cậu có thể yên tĩnh xíu không? Mình phải đi ngủ.\nB: Xin lỗi, mình không biết. Mình sẽ vặn nhỏ nhạc lại.\nA: Không sao, cảm ơn.", questions: [{ id: "q1", type: "multiple_choice", question: "Tại sao A muốn yên tĩnh?", options: ["Để học bài", "Để xem phim", "Để ngủ", "Để nghe điện thoại"], correctAnswer: "Để ngủ", explanation: "A nói 我要睡覺了 (Mình phải ngủ rồi)." }] },
    reading: { title: "Ký túc xá đại học", passageTraditional: "我是大學生，我住在學校宿舍。我的室友是日本人。他很客氣，晚上也很安靜。我們常常一起練習說中文。", passagePinyin: "Wǒ shì dàxuéshēng, wǒ zhù zài xuéxiào sùshè. Wǒ de shìyǒu shì Rìběnrén. Tā hěn kèqì, wǎnshàng yě hěn ānjìng. Wǒmen chángcháng yìqǐ liànxí shuō zhōngwén.", passageVietnamese: "Tôi là sinh viên, tôi sống ở KTX trường. Bạn cùng phòng của tôi là người Nhật Bản. Cậu ấy rất lịch sự, buổi tối cũng rất yên tĩnh. Chúng tôi thường cùng nhau luyện nói tiếng Trung.", questions: [{ id: "q1", type: "true_false", question: "Bạn cùng phòng của người viết rất ồn ào. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 他很客氣，晚上也很安靜 (Cậu ấy lịch sự và buổi tối rất yên tĩnh)." }] },
    speaking: { promptTraditional: "你的室友很吵，你怎麼跟他說？", promptPinyin: "Nǐ de shìyǒu hěn chǎo, nǐ zěnme gēn tā shuō?", promptVietnamese: "Bạn cùng phòng ồn ào, bạn nói thế nào với họ?", sampleAnswerTraditional: "不好意思，你可以安靜一點嗎？", sampleAnswerPinyin: "Bùhǎoyìsi, nǐ kěyǐ ānjìng yìdiǎn ma?", sampleAnswerVietnamese: "Ngại quá, cậu có thể yên tĩnh 1 lát được không?" },
    writing: { promptVietnamese: "Dịch: 'Đây là bạn cùng phòng của tôi'.", suggestedAnswerTraditional: "這是我的室友。", suggestedAnswerPinyin: "Zhè shì wǒ de shìyǒu.", suggestedAnswerVietnamese: "Bạn cùng phòng." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ 'Ký túc xá' tiếng Trung là gì?", options: ["銀行", "宿舍", "學校", "房東"], correctAnswer: "宿舍", explanation: "宿舍 (sùshè) là Ký túc xá." }]
  },
  {
    id: "lesson_54",
    day: 54,
    title: "Bài 54: Mùa và thời tiết nâng cao",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Thời tiết",
    objectives: ["Nhớ tên 4 mùa trong năm"],
    vocabulary: [
      { id: "v_54_1", traditional: "春天", pinyin: "Chūntiān", zhuyin: "ㄔㄨㄣ ㄊㄧㄢ", vietnamese: "Mùa xuân", partOfSpeech: "Danh từ", exampleTraditional: "春天很美。", examplePinyin: "Chūntiān hěn měi.", exampleVietnamese: "Mùa xuân rất đẹp." },
      { id: "v_54_2", traditional: "夏天", pinyin: "Xiàtiān", zhuyin: "ㄒㄧㄚˋ ㄊㄧㄢ", vietnamese: "Mùa hè", partOfSpeech: "Danh từ", exampleTraditional: "夏天很熱。", examplePinyin: "Xiàtiān hěn rè.", exampleVietnamese: "Mùa hè rất nóng." },
      { id: "v_54_3", traditional: "秋天", pinyin: "Qiūtiān", zhuyin: "ㄑㄧㄡ ㄊㄧㄢ", vietnamese: "Mùa thu", partOfSpeech: "Danh từ", exampleTraditional: "秋天不冷也不熱。", examplePinyin: "Qiūtiān bù lěng yě bú rè.", exampleVietnamese: "Mùa thu không lạnh cũng không nóng." },
      { id: "v_54_4", traditional: "冬天", pinyin: "Dōngtiān", zhuyin: "ㄉㄨㄥ ㄊㄧㄢ", vietnamese: "Mùa đông", partOfSpeech: "Danh từ", exampleTraditional: "台灣的冬天不太冷。", examplePinyin: "Táiwān de dōngtiān bú tài lěng.", exampleVietnamese: "Mùa đông Đài Loan không quá lạnh." },
      { id: "v_54_5", traditional: "颱風", pinyin: "Táifēng", zhuyin: "ㄊㄞˊ ㄈㄥ", vietnamese: "Bão", partOfSpeech: "Danh từ", exampleTraditional: "明天有颱風。", examplePinyin: "Míngtiān yǒu táifēng.", exampleVietnamese: "Ngày mai có bão." }
    ],
    sentencePatterns: [
      { traditional: "你最喜歡什麼季節？", pinyin: "Nǐ zuì xǐhuān shénme jìjié?", zhuyin: "ㄋㄧˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ ㄕㄣˊ ㄇㄜ˙ ㄐㄧˋ ㄐㄧㄝˊ?", vietnamese: "Bạn thích nhất mùa nào?", usage: "Hỏi sở thích mùa" },
      { traditional: "我最喜歡...天。", pinyin: "Wǒ zuì xǐhuān... tiān.", zhuyin: "ㄨㄛˇ ㄗㄨㄟˋ ㄒㄧˇ ㄏㄨㄢ... ㄊㄧㄢ.", vietnamese: "Tôi thích nhất là mùa...", usage: "Trả lời" }
    ],
    listening: { title: "Thảo luận thời tiết", transcriptTraditional: "A: 夏天太熱了，我不喜歡夏天。\nB: 那你喜歡冬天嗎？\nA: 我也不喜歡。我最喜歡秋天，因為天氣很好。", transcriptPinyin: "A: Xiàtiān tài rè le, wǒ bù xǐhuān xiàtiān.\nB: Nà nǐ xǐhuān dōngtiān ma?\nA: Wǒ yě bù xǐhuān. Wǒ zuì xǐhuān qiūtiān, yīnwèi tiānqì hěn hǎo.", transcriptVietnamese: "A: Mùa hè nóng quá, tôi không thích mùa hè.\nB: Vậy bạn có thích mùa đông không?\nA: Cũng không thích. Tôi thích nhất là mùa thu, bởi vì thời tiết đẹp.", questions: [{ id: "q1", type: "multiple_choice", question: "A thích nhất mùa nào?", options: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"], correctAnswer: "Mùa thu", explanation: "A nói 我最喜歡秋天 (Tôi thích nhất mùa thu)." }] },
    reading: { title: "Bão ở Đài Loan", passageTraditional: "在台灣的夏天，常常有颱風。颱風來的時候，有很多雨，風也很大。我們不能出去外面。", passagePinyin: "Zài Táiwān de xiàtiān, chángcháng yǒu táifēng. Táifēng lái de shíhòu, yǒu hěnduō yǔ, fēng yě hěn dà. Wǒmen bù néng chūqù wàimiàn.", passageVietnamese: "Mùa hè ở Đài Loan thường có các cơn bão. Lúc bão đến, có rất nhiều mưa, gió cũng rất lớn. Chúng tôi không thể đi ra ngoài.", questions: [{ id: "q1", type: "true_false", question: "Đài Loan thường có bão vào mùa đông. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết: 台灣的夏天常常有颱風 (Mùa hè Đài Loan thường có bão)." }] },
    speaking: { promptTraditional: "一年有四個季節，你最喜歡哪一個？", promptPinyin: "Yì nián yǒu sì gè jìjié, nǐ zuì xǐhuān nǎ yí gè?", promptVietnamese: "1 năm có 4 mùa, bạn thích nhất mùa nào?", sampleAnswerTraditional: "我最喜歡春天。", sampleAnswerPinyin: "Wǒ zuì xǐhuān chūntiān.", sampleAnswerVietnamese: "Tôi thích mùa xuân nhất." },
    writing: { promptVietnamese: "Dịch: 'Mùa đông Đài Loan không lạnh lắm'.", suggestedAnswerTraditional: "台灣的冬天不太冷。", suggestedAnswerPinyin: "Táiwān de dōngtiān bú tài lěng.", suggestedAnswerVietnamese: "Đài Loan mùa đông không lạnh mấy." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '颱風' có nghĩa là gì?", options: ["Động đất", "Trời nắng", "Bão", "Lũ lụt"], correctAnswer: "Bão", explanation: "颱風 (Táifēng) = Đài Phong, nghĩa là Bão." }]
  },
  {
    id: "lesson_55",
    day: 55,
    title: "Bài 55: Ngày lễ Tết",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Văn hóa",
    objectives: ["Từ vựng về lễ hội và cách nói chúc mừng năm mới"],
    vocabulary: [
      { id: "v_55_1", traditional: "新年", pinyin: "Xīnnián", zhuyin: "ㄒㄧㄣ ㄋㄧㄢˊ", vietnamese: "Năm mới", partOfSpeech: "Danh từ", exampleTraditional: "新年好！", examplePinyin: "Xīnnián hǎo!", exampleVietnamese: "Năm mới tốt lành!" },
      { id: "v_55_2", traditional: "快樂", pinyin: "Kuàilè", zhuyin: "ㄎㄨㄞˋ ㄌㄜˋ", vietnamese: "Vui vẻ", partOfSpeech: "Tính từ", exampleTraditional: "生日快樂！", examplePinyin: "Shēngrì kuàilè!", exampleVietnamese: "Sinh nhật vui vẻ!" },
      { id: "v_55_3", traditional: "紅包", pinyin: "Hóngbāo", zhuyin: "ㄏㄨㄥˊ ㄅㄠ", vietnamese: "Bao lì xì", partOfSpeech: "Danh từ", exampleTraditional: "過年的時候，我有紅包。", examplePinyin: "Guònián de shíhòu, wǒ yǒu hóngbāo.", exampleVietnamese: "Lúc ăn Tết, tôi có lì xì." },
      { id: "v_55_4", traditional: "節日", pinyin: "Jiérì", zhuyin: "ㄐㄧㄝˊ ㄖˋ", vietnamese: "Ngày lễ, Tết", partOfSpeech: "Danh từ", exampleTraditional: "這是一個重要的節日。", examplePinyin: "Zhè shì yí gè zhòngyào de jiérì.", exampleVietnamese: "Đây là một ngày lễ quan trọng." },
      { id: "v_55_5", traditional: "恭喜發財", pinyin: "Gōngxǐ fācái", zhuyin: "ㄍㄨㄥ ㄒㄧˇ ㄈㄚ ㄘㄞˊ", vietnamese: "Cung hỷ phát tài", partOfSpeech: "Cụm từ", exampleTraditional: "恭喜發財，紅包拿來。", examplePinyin: "Gōngxǐ fācái, hóngbāo ná lái.", exampleVietnamese: "Cung hỷ phát tài, lì xì đem lại đây." }
    ],
    sentencePatterns: [
      { traditional: "祝你...快樂！", pinyin: "Zhù nǐ... kuàilè!", zhuyin: "ㄓㄨˋ ㄋㄧˇ... ㄎㄨㄞˋ ㄌㄜˋ!", vietnamese: "Chúc bạn... vui vẻ!", usage: "Câu chúc thông dụng" },
      { traditional: "新年快樂！", pinyin: "Xīnnián kuàilè!", zhuyin: "ㄒㄧㄣ ㄋㄧㄢˊ ㄎㄨㄞˋ ㄌㄜˋ!", vietnamese: "Chúc mừng năm mới!", usage: "Dịp đầu năm" }
    ],
    listening: { title: "Chúc Tết", transcriptTraditional: "A: 老師，祝您新年快樂！\nB: 謝謝你，大山。也祝你新年快樂，學習進步。\nA: 恭喜發財！", transcriptPinyin: "A: Lǎoshī, zhù nín xīnnián kuàilè!\nB: Xièxie nǐ, Dàshān. Yě zhù nǐ xīnnián kuàilè, xuéxí jìnbù.\nA: Gōngxǐ fācái!", transcriptVietnamese: "A: Cô ơi, chúc cô mừng năm mới!\nB: Cảm ơn em, Đại Sơn. Cũng chúc em năm mới rạng rỡ, học tập tiến bộ.\nA: Cung hỉ phát tài!", questions: [{ id: "q1", type: "multiple_choice", question: "Họ đang nói chuyện trong dịp lễ nào?", options: ["Trung Thu", "Lễ Giáng Sinh", "Năm mới / Tết", "Sinh nhật"], correctAnswer: "Năm mới / Tết", explanation: "Người A nói 新年快樂 (Mừng năm mới)." }] },
    reading: { title: "Tết ở Đài Loan", passageTraditional: "在台灣，過年的時候大家常常一起吃飯。小孩子會說「恭喜發財」，然後爸爸媽媽會給他們紅包。他們非常開心。", passagePinyin: "Zài Táiwān, guònián de shíhòu dàjiā chángcháng yìqǐ chīfàn. Xiǎoháizi huì shuō 'gōngxǐ fācái', ránhòu bàba māma huì gěi tāmen hóngbāo. Tāmen fēicháng kāixīn.", passageVietnamese: "Ở Đài Loan, vào dịp năm mới mọi người thường cùng nhau ăn uống. Trẻ em sẽ nói câu 'Cung hỉ phát tài', sau đó cha mẹ sẽ cho chúng bao lì xì. Chúng rất là vui vẻ.", questions: [{ id: "q1", type: "true_false", question: "Trẻ em ở Đài Loan dịp Tết cũng được nhận lì xì (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết 爸爸媽媽會給他們紅包 (Cha mẹ cho chúng lì xì)." }] },
    speaking: { promptTraditional: "過年的時候，你會跟朋友說什麼？", promptPinyin: "Guònián de shíhòu, nǐ huì gēn péngyǒu shuō shénme?", promptVietnamese: "Dịp tết đến, bạn chúc bạn bè câu gì?", sampleAnswerTraditional: "新年快樂！", sampleAnswerPinyin: "Xīnnián kuàilè!", sampleAnswerVietnamese: "Chúc mừng năm mới!" },
    writing: { promptVietnamese: "Dịch: 'Bao lì xì'", suggestedAnswerTraditional: "紅包", suggestedAnswerPinyin: "Hóngbāo", suggestedAnswerVietnamese: "Lì xì" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '快樂' (kuàilè) có nghĩa là gì?", options: ["Năm mới", "Khỏe mạnh", "Vui vẻ", "Bình an"], correctAnswer: "Vui vẻ", explanation: "快樂 (kuàilè) là vui vẻ, hạnh phúc." }]
  },
  {
    id: "lesson_56",
    day: 56,
    title: "Bài 56: Mua vé tàu/vé máy bay",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Du lịch",
    objectives: ["Giao tiếp cơ bản để mua vé phương tiện"],
    vocabulary: [
      { id: "v_56_1", traditional: "票", pinyin: "Piào", zhuyin: "ㄆㄧㄠˋ", vietnamese: "Vé", partOfSpeech: "Danh từ", exampleTraditional: "買票", examplePinyin: "Mǎi piào", exampleVietnamese: "Mua vé" },
      { id: "v_56_2", traditional: "飛機", pinyin: "Fēijī", zhuyin: "ㄈㄟ ㄐㄧ", vietnamese: "Máy bay", partOfSpeech: "Danh từ", exampleTraditional: "坐飛機", examplePinyin: "Zuò fēijī", exampleVietnamese: "Đi máy bay" },
      { id: "v_56_3", traditional: "火車", pinyin: "Huǒchē", zhuyin: "ㄏㄨㄛˇ ㄔㄜ", vietnamese: "Tàu hỏa", partOfSpeech: "Danh từ", exampleTraditional: "火車站", examplePinyin: "Huǒchē zhàn", exampleVietnamese: "Trạm/ga tàu hỏa" },
      { id: "v_56_4", traditional: "高鐵", pinyin: "Gāotiě", zhuyin: "ㄍㄠ ㄊㄧㄝˇ", vietnamese: "Tàu cao tốc (HSR)", partOfSpeech: "Danh từ", exampleTraditional: "我想坐高鐵去台中。", examplePinyin: "Wǒ xiǎng zuò gāotiě qù Táizhōng.", exampleVietnamese: "Tôi muốn đi tàu cao tốc đến Đài Trung." },
      { id: "v_56_5", traditional: "單程", pinyin: "Dānchéng", zhuyin: "ㄉㄢ ㄔㄥˊ", vietnamese: "Một chiều", partOfSpeech: "Tính từ", exampleTraditional: "我要買單程票。", examplePinyin: "Wǒ yào mǎi dānchéng piào.", exampleVietnamese: "Tôi muốn mua vé một chiều." }
    ],
    sentencePatterns: [
      { traditional: "我要買一張去...的票。", pinyin: "Wǒ yào mǎi yì zhāng qù... de piào.", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄧˋ ㄓㄤ ㄑㄩˋ... ㄉㄜ˙ ㄆㄧㄠˋ.", vietnamese: "Tôi muốn mua 1 tấm vé đi...", usage: "Khi mua vé chuyển hành trình" }
    ],
    listening: { title: "Mua vé tàu cao tốc", transcriptTraditional: "A: 你好，我要買一張去高雄的高鐵票。\nB: 單程還是來回？\nA: 單程。多少錢？\nB: 單程票是一千四百九十塊。", transcriptPinyin: "A: Nǐ hǎo, wǒ yào mǎi yì zhāng qù Gāoxióng de gāotiě piào.\nB: Dānchéng háishì láihuí?\nA: Dānchéng. Duōshǎo qián?\nB: Dānchéng piào shì yìqiān sìbǎi jiǔshí kuài.", transcriptVietnamese: "A: Xin chào, tôi muốn mua 1 vé tàu cao tốc đi Cao Hùng.\nB: Vé 1 chiều hay khứ hồi?\nA: 1 chiều. Bao nhiêu tiền vây?\nB: Vé 1 chiều là 1490 tệ.", questions: [{ id: "q1", type: "multiple_choice", question: "Vị khách mua vé loại phương tiện nào?", options: ["Tàu hỏa", "Máy bay", "Tàu cao tốc (HSR)", "Tàu điện ngầm MRT"], correctAnswer: "Tàu cao tốc (HSR)", explanation: "Khách nói 高鐵票 (vé tàu cao tốc)." }] },
    reading: { title: "Trở về Việt Nam", passageTraditional: "下個月我要回越南。今天我去網路上買飛機票。我買的是單程票。我很期待回家看爸爸媽媽。", passagePinyin: "Xià gè yuè wǒ yào huí Yuènán. Jīntiān wǒ qù wǎnglù shàng mǎi fēijī piào. Wǒ mǎi de shì dānchéng piào. Wǒ hěn qídài huí jiā kàn bàba māma.", passageVietnamese: "Tháng sau tôi sẽ về Việt Nam. Hôm nay tôi lên mạng mua vé máy bay. Tôi đã mua vé một chiều. Tôi rất mong đợi về nhà gặp cha mẹ.", questions: [{ id: "q1", type: "true_false", question: "Người này mua vé máy bay hai chiều (khứ hồi). (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Bài viết ghi 單程票 (vé 1 chiều)." }] },
    speaking: { promptTraditional: "如果你想買火車票去台北，怎麼跟售票員說？", promptPinyin: "Rúguǒ nǐ xiǎng mǎi huǒchē piào qù Táiběi, zěnme gēn shòupiàoyuán shuō?", promptVietnamese: "Lúc mua vé tàu hỏa tới Đài Bắc, bạn nói nhân viên bán vé thế nào?", sampleAnswerTraditional: "你好，我要買一張去台北的火車票。", sampleAnswerPinyin: "Nǐ hǎo, wǒ yào mǎi yì zhāng qù Táiběi de huǒchē piào.", sampleAnswerVietnamese: "Xin chào, tôi muốn mua 1 vé hỏa xa đi Đài Bắc." },
    writing: { promptVietnamese: "Dịch: 'Tàu cao tốc Đài Loan vô cùng nhanh'", suggestedAnswerTraditional: "台灣高鐵非常快。", suggestedAnswerPinyin: "Táiwān gāotiě fēicháng kuài.", suggestedAnswerVietnamese: "Tàu cao tốc Đài Loan rất nhanh." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ để chỉ Tàu cao tốc là gì?", options: ["火車", "公車", "捷運", "高鐵"], correctAnswer: "高鐵", explanation: "高鐵 (gāotiě) là tàu cao tốc." }]
  }
];
