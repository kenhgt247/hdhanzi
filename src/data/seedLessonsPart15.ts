import { Lesson } from '../types/lesson';

export const stage5LessonsPart1: Lesson[] = [
  {
    id: "lesson_47",
    day: 47,
    title: "Bài 47: Gọi điện thoại",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Giao tiếp công nghệ",
    objectives: ["Học cách nghe và gọi điện thoại cơ bản"],
    vocabulary: [
      { id: "v_47_1", traditional: "打電話", pinyin: "Dǎ diànhuà", zhuyin: "ㄉㄚˇ ㄉㄧㄢˋ ㄏㄨㄚˋ", vietnamese: "Gọi điện thoại", partOfSpeech: "Cụm động từ", exampleTraditional: "我要打電話給媽媽。", examplePinyin: "Wǒ yào dǎ diànhuà gěi māmā.", exampleVietnamese: "Tôi muốn gọi điện cho mẹ." },
      { id: "v_47_2", traditional: "接", pinyin: "Jiē", zhuyin: "ㄐㄧㄝ", vietnamese: "Nghe (máy), Đón", partOfSpeech: "Động từ", exampleTraditional: "請接電話。", examplePinyin: "Qǐng jiē diànhuà.", exampleVietnamese: "Xin hãy nghe mál." },
      { id: "v_47_3", traditional: "喂", pinyin: "Wèi", zhuyin: "ㄨㄟˋ", vietnamese: "Alo", partOfSpeech: "Thán từ", exampleTraditional: "喂，請問是小明嗎？", examplePinyin: "Wèi, qǐngwèn shì Xiǎomíng ma?", exampleVietnamese: "Alo, xin hỏi có phải Tiểu Minh không?" },
      { id: "v_47_4", traditional: "等一下", pinyin: "Děng yíxià", zhuyin: "ㄉㄥˇ ㄧˊ ㄒㄧㄚˋ", vietnamese: "Đợi một chút", partOfSpeech: "Cụm từ", exampleTraditional: "請等一下。", examplePinyin: "Qǐng děng yíxià.", exampleVietnamese: "Vui lòng đợi một chút." },
      { id: "v_47_5", traditional: "不在", pinyin: "Búzài", zhuyin: "ㄅㄨˊ ㄗㄞˋ", vietnamese: "Không có ở đây", partOfSpeech: "Tính từ", exampleTraditional: "他現在不在。", examplePinyin: "Tā xiànzài búzài.", exampleVietnamese: "Anh ấy bây giờ không có ở đây." }
    ],
    sentencePatterns: [
      { traditional: "喂，請問...在嗎？", pinyin: "Wèi, qǐngwèn... zài ma?", zhuyin: "ㄨㄟˋ, ㄑㄧㄥˇ ㄨㄣˋ... ㄗㄞˋ ㄇㄚ˙?", vietnamese: "Alo, xin hỏi có ... ở đó không?", usage: "Tìm người qua điện thoại" },
      { traditional: "請等一下。", pinyin: "Qǐng děng yíxià.", zhuyin: "ㄑㄧㄥˇ ㄉㄥˇ ㄧˊ ㄒㄧㄚˋ.", vietnamese: "Vui lòng đợi một chút.", usage: "Bảo ai đó chờ" }
    ],
    listening: { title: "Alo, ai đấy?", transcriptTraditional: "A: 喂，請問大山在嗎？\nB: 請等一下。大山，你的電話！\nC: 喂，我是大山。", transcriptPinyin: "A: Wèi, qǐngwèn Dàshān zài ma?\nB: Qǐng děng yíxià. Dàshān, nǐ de diànhuà!\nC: Wèi, wǒ shì Dàshān.", transcriptVietnamese: "A: Alo, xin hỏi Đại Sơn có ở đó không ạ?\nB: Vui lòng đợi một chút. Đại Sơn, điện thoại của cậu này!\nC: Alo, tôi là Đại Sơn.", questions: [{ id: "q1", type: "multiple_choice", question: "Người gọi (A) đang muốn gặp ai?", options: ["Tiểu Minh", "Đại Sơn", "Giáo viên", "Không rõ"], correctAnswer: "Đại Sơn", explanation: "A nói 請問大山在嗎 (Xin hỏi Đại Sơn có đây không)." }] },
    reading: { title: "Gọi lộn số", passageTraditional: "今天我打電話給朋友。但是接電話的人說：「對不起，他不在這裡。你打錯了。」我覺得很不好意思。", passagePinyin: "Jīntiān wǒ dǎ diànhuà gěi péngyǒu. Dànshì jiē diànhuà de rén shuō: 'Duìbùqǐ, tā búzài zhèlǐ. Nǐ dǎ cuò le.' Wǒ juédé hěn bùhǎoyìsi.", passageVietnamese: "Hôm nay tôi gọi điện cho bạn bè. Nhưng người nghe máy nói: 'Xin lỗi, anh ấy không ở đây. Bạn gọi nhầm rồi.' Tôi cảm thấy rất ngại.", questions: [{ id: "q1", type: "true_false", question: "Người gọi đã gọi nhầm số (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Người nhận nói 你打錯了 (Bạn gọi nhầm số rồi)." }] },
    speaking: { promptTraditional: "你接電話的時候，第一句會說什麼？", promptPinyin: "Nǐ jiē diànhuà de shíhòu, dì yí jù huì shuō shénme?", promptVietnamese: "Khi bạn nghe điện thoại, câu đầu tiên bạn thường nói là gì?", sampleAnswerTraditional: "喂，你好。", sampleAnswerPinyin: "Wèi, nǐ hǎo.", sampleAnswerVietnamese: "Alo, xin chào." },
    writing: { promptVietnamese: "Dịch: 'Vui lòng đợi 1 lát'.", suggestedAnswerTraditional: "請等一下。", suggestedAnswerPinyin: "Qǐng děng yíxià.", suggestedAnswerVietnamese: "Xin đợi chút." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ 'Alo' khi nghe điện thoại là gì?", options: ["哎", "喂", "啊", "哦"], correctAnswer: "喂", explanation: "喂 (wèi) có nghĩa là Alo." }]
  },
  {
    id: "lesson_48",
    day: 48,
    title: "Bài 48: Internet & Wifi",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Công nghệ",
    objectives: ["Hỏi mật khẩu Wifi, kết nối mạng"],
    vocabulary: [
      { id: "v_48_1", traditional: "網路", pinyin: "Wǎnglù", zhuyin: "ㄨㄤˇ ㄌㄨˋ", vietnamese: "Mạng internet", partOfSpeech: "Danh từ", exampleTraditional: "這裡有網路嗎？", examplePinyin: "Zhèlǐ yǒu wǎnglù ma?", exampleVietnamese: "Ở đây có internet không?" },
      { id: "v_48_2", traditional: "密碼", pinyin: "Mìmǎ", zhuyin: "ㄇㄧˋ ㄇㄚˇ", vietnamese: "Mật khẩu", partOfSpeech: "Danh từ", exampleTraditional: "請問密碼是什麼？", examplePinyin: "Qǐngwèn mìmǎ shì shénme?", exampleVietnamese: "Xin hỏi mật khẩu là gì?" },
      { id: "v_48_3", traditional: "連", pinyin: "Lián", zhuyin: "ㄌㄧㄢˊ", vietnamese: "Kết nối", partOfSpeech: "Động từ", exampleTraditional: "我的手機不能連網路。", examplePinyin: "Wǒ de shǒujī bù néng lián wǎnglù.", exampleVietnamese: "Điện thoại tôi không thể kết nối mạng." },
      { id: "v_48_4", traditional: "上網", pinyin: "Shàngwǎng", zhuyin: "ㄕㄤˋ ㄨㄤˇ", vietnamese: "Lướt web, lên mạng", partOfSpeech: "Động từ", exampleTraditional: "我喜歡上網。", examplePinyin: "Wǒ xǐhuān shàngwǎng.", exampleVietnamese: "Tôi thích lên mạng." }
    ],
    sentencePatterns: [
      { traditional: "請問，有Wifi嗎？", pinyin: "Qǐngwèn, yǒu Wifi ma?", zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ, ㄧㄡˇ Wifi ㄇㄚ˙?", vietnamese: "Xin hỏi, có Wifi không?", usage: "Hỏi mạng" },
      { traditional: "密碼是多少？", pinyin: "Mìmǎ shì duōshǎo?", zhuyin: "ㄇㄧˋ ㄇㄚˇ ㄕˋ ㄉㄨㄛ ㄕㄠˇ?", vietnamese: "Mật khẩu là bao nhiêu?", usage: "Hỏi pass wifi" }
    ],
    listening: { title: "Xin pass Wifi", transcriptTraditional: "A: 請問，這裡有Wifi嗎？\nB: 有的。\nA: 密碼是多少？\nB: 密碼是一到八。", transcriptPinyin: "A: Qǐngwèn, zhèlǐ yǒu Wifi ma?\nB: Yǒu de.\nA: Mìmǎ shì duōshǎo?\nB: Mìmǎ shì yī dào bā.", transcriptVietnamese: "A: Xin hỏi, ở đây có Wifi không?\nB: Có ạ.\nA: Mật khẩu là bao nhiêu?\nB: Mật khẩu là từ một đến tám.", questions: [{ id: "q1", type: "multiple_choice", question: "Mật khẩu Wifi là gì?", options: ["0 đến 9", "123456", "1 đến 8", "Không cần pass"], correctAnswer: "1 đến 8", explanation: "Người phục vụ nói: 一到八 (1 đến 8)." }] },
    reading: { title: "Cà phê và máy tính", passageTraditional: "週末，我帶電腦去咖啡店。咖啡店的網路很快。我在那裡上網，看電影，很舒服。", passagePinyin: "Zhōumò, wǒ dài diànnǎo qù kāfēidiàn. Kāfēidiàn de wǎnglù hěn kuài. Wǒ zài nǎlǐ shàngwǎng, kàn diànyǐng, hěn shūfú.", passageVietnamese: "Cuối tuần, tôi mang máy tính ra quán cà phê. Mạng ở quán rất nhanh. Tôi ở đó lướt web, xem phim, rất thoải mái.", questions: [{ id: "q1", type: "true_false", question: "Mạng internet ở quán cà phê rất chậm (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 網路很快 (Mạng internet rất nhanh)." }] },
    speaking: { promptTraditional: "你想問咖啡店的老闆Wifi密碼，你怎麼說？", promptPinyin: "Nǐ xiǎng wèn kāfēidiàn de lǎobǎn Wifi mìmǎ, nǐ zěnme shuō?", promptVietnamese: "Bạn muốn hỏi chủ tiệm cafe mật khẩu wifi, bạn nói thế nào?", sampleAnswerTraditional: "老闆，請問Wifi密碼是多少？", sampleAnswerPinyin: "Lǎobǎn, qǐngwèn Wifi mìmǎ shì duōshǎo?", sampleAnswerVietnamese: "Sếp ơi, xin hỏi pass wifi là bao nhiêu?" },
    writing: { promptVietnamese: "Dịch: 'Mật khẩu là gì?'", suggestedAnswerTraditional: "密碼是什麼？", suggestedAnswerPinyin: "Mìmǎ shì shénme?", suggestedAnswerVietnamese: "Mật khẩu là gì?" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '密碼' nghĩa là gì?", options: ["Điện thoại", "Kết nối", "Lên mạng", "Mật khẩu"], correctAnswer: "Mật khẩu", explanation: "密碼 (Mìmǎ) là mật khẩu." }]
  },
  {
    id: "lesson_49",
    day: 49,
    title: "Bài 49: Phim ảnh & Giải trí",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Sở thích",
    objectives: ["Nói về sở thích xem phim, âm nhạc"],
    vocabulary: [
      { id: "v_49_1", traditional: "電影", pinyin: "Diànyǐng", zhuyin: "ㄉㄧㄢˋ ㄧㄥˇ", vietnamese: "Phim chiếu rạp", partOfSpeech: "Danh từ", exampleTraditional: "這部電影很好看。", examplePinyin: "Zhè bù diànyǐng hěn hǎokàn.", exampleVietnamese: "Bộ phim này rất hay." },
      { id: "v_49_2", traditional: "電視", pinyin: "Diànshì", zhuyin: "ㄉㄧㄢˋ ㄕˋ", vietnamese: "Tivi, Phim truyền hình", partOfSpeech: "Danh từ", exampleTraditional: "他喜歡看電視。", examplePinyin: "Tā xǐhuān kàn diànshì.", exampleVietnamese: "Anh ấy thích xem TV." },
      { id: "v_49_3", traditional: "音樂", pinyin: "Yīnyuè", zhuyin: "ㄧㄣ ㄩㄝˋ", vietnamese: "Âm nhạc", partOfSpeech: "Danh từ", exampleTraditional: "聽音樂", examplePinyin: "Tīng yīnyuè", exampleVietnamese: "Nghe nhạc" },
      { id: "v_49_4", traditional: "好看", pinyin: "Hǎokàn", zhuyin: "ㄏㄠˇ ㄎㄢˋ", vietnamese: "Hay (khi xem)", partOfSpeech: "Tính từ", exampleTraditional: "電影很好看。", examplePinyin: "Diànyǐng hěn hǎokàn.", exampleVietnamese: "Phim rất hay." },
      { id: "v_49_5", traditional: "好聽", pinyin: "Hǎotīng", zhuyin: "ㄏㄠˇ ㄊㄧㄥ", vietnamese: "Hay (khi nghe)", partOfSpeech: "Tính từ", exampleTraditional: "這首歌很好聽。", examplePinyin: "Zhè shǒu gē hěn hǎotīng.", exampleVietnamese: "Bài hát này rất hay." }
    ],
    sentencePatterns: [
      { traditional: "這部電影好看嗎？", pinyin: "Zhè bù diànyǐng hǎokàn ma?", zhuyin: "ㄓㄜˋ ㄅㄨˋ ㄉㄧㄢˋ ㄧㄥˇ ㄏㄠˇ ㄎㄢˋ ㄇㄚ˙?", vietnamese: "Bộ phim này hay không?", usage: "Hỏi cảm nhận" },
      { traditional: "很好聽！", pinyin: "Hěn hǎotīng!", zhuyin: "ㄏㄣˇ ㄏㄠˇ ㄊㄧㄥ!", vietnamese: "Rất hay (nghe)!", usage: "Khen bài hát/âm nhạc" }
    ],
    listening: { title: "Rủ xem phim", transcriptTraditional: "A: 週末你有空嗎？我們去看電影好嗎？\nB: 好啊。這部新電影很好看。\nA: 太好了，我們一起去！", transcriptPinyin: "A: Zhōumò nǐ yǒu kòng ma? Wǒmen qù kàn diànyǐng hǎo ma?\nB: Hǎo a. Zhè bù xīn diànyǐng hěn hǎokàn.\nA: Tài hǎo le, wǒmen yìqǐ qù!", transcriptVietnamese: "A: Cuối tuần bạn rảnh không? Mình đi xem phim nhé?\nB: Ok. Bộ phim mới này rất hay.\nA: Tuyệt quá, chúng ta đi cùng nhau!", questions: [{ id: "q1", type: "multiple_choice", question: "Họ dự định làm gì cuối tuần?", options: ["Nghe nhạc", "Mua sắm", "Xem phim", "Đá bóng"], correctAnswer: "Xem phim", explanation: "A rủ 去看電影 (đi xem phim)." }] },
    reading: { title: "Âm nhạc", passageTraditional: "我不喜歡看電影，我只喜歡聽音樂。聽音樂讓我非常開心。台灣的音樂很好聽。", passagePinyin: "Wǒ bù xǐhuān kàn diànyǐng, wǒ zhǐ xǐhuān tīng yīnyuè. Tīng yīnyuè ràng wǒ fēicháng kāixīn. Táiwān de yīnyuè hěn hǎotīng.", passageVietnamese: "Tôi không thích xem phim, tôi chỉ thích nghe nhạc. Nghe nhạc khiến tôi vô cùng vui vẻ. Âm nhạc Đài Loan rất hay.", questions: [{ id: "q1", type: "true_false", question: "Tác giả của đoạn văn thích xem phim truyền hình (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Tác giả nói 我不喜歡看電影 (Tôi không thích xem phim)." }] },
    speaking: { promptTraditional: "你喜歡聽音樂嗎？", promptPinyin: "Nǐ xǐhuān tīng yīnyuè ma?", promptVietnamese: "Bạn có thích nghe nhạc không?", sampleAnswerTraditional: "我非常喜歡聽音樂。", sampleAnswerPinyin: "Wǒ fēicháng xǐhuān tīng yīnyuè.", sampleAnswerVietnamese: "Tôi vô cùng thích nghe nhạc." },
    writing: { promptVietnamese: "Dịch: 'Bài hát rất hay nghe'", suggestedAnswerTraditional: "音樂很好聽。", suggestedAnswerPinyin: "Yīnyuè hěn hǎotīng.", suggestedAnswerVietnamese: "Nhạc rất hay." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ để khen 1 bộ phim hay là gì?", options: ["好聽", "好多", "好看", "好吃"], correctAnswer: "好看", explanation: "好看 (Hǎokàn) dùng cho Mắt nhìn (phim ảnh)." }]
  },
  {
    id: "lesson_50",
    day: 50,
    title: "Bài 50: Nhờ vả sửa chữa",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Đời sống",
    objectives: ["Học cách diễn đạt món đồ bị móp, hỏng, hoặc cần giúp đỡ"],
    vocabulary: [
      { id: "v_50_1", traditional: "壞了", pinyin: "Huài le", zhuyin: "ㄏㄨㄞˋ ㄌㄜ˙", vietnamese: "Hỏng rồi", partOfSpeech: "Động/Tính từ", exampleTraditional: "我的手機壞了。", examplePinyin: "Wǒ de shǒujī huài le.", exampleVietnamese: "Điện thoại của tôi hỏng rồi." },
      { id: "v_50_2", traditional: "修理", pinyin: "Xiūlǐ", zhuyin: "ㄒㄧㄡ ㄌㄧˇ", vietnamese: "Sửa chữa", partOfSpeech: "Động từ", exampleTraditional: "我想修理電腦。", examplePinyin: "Wǒ xiǎng xiūlǐ diànnǎo.", exampleVietnamese: "Tôi muốn sửa máy tính." },
      { id: "v_50_3", traditional: "幫", pinyin: "Bāng", zhuyin: "ㄅㄤ", vietnamese: "Giúp", partOfSpeech: "Động từ", exampleTraditional: "請幫我。", examplePinyin: "Qǐng bāng wǒ.", exampleVietnamese: "Xin giúp tôi." },
      { id: "v_50_4", traditional: "沒電", pinyin: "Méi diàn", zhuyin: "ㄇㄟˊ ㄉㄧㄢˋ", vietnamese: "Hết pin", partOfSpeech: "Cụm từ", exampleTraditional: "手機沒電了。", examplePinyin: "Shǒujī méi diàn le.", exampleVietnamese: "Điện thoại hết pin rồi." },
      { id: "v_50_5", traditional: "冷氣", pinyin: "Lěngqì", zhuyin: "ㄌㄥˇ ㄑㄧˋ", vietnamese: "Điều hòa (máy lạnh)", partOfSpeech: "Danh từ", exampleTraditional: "房間的冷氣壞了。", examplePinyin: "Fángjiān de lěngqì huài le.", exampleVietnamese: "Điều hòa trong phòng hỏng rồi." }
    ],
    sentencePatterns: [
      { traditional: "可以幫我嗎？", pinyin: "Kěyǐ bāng wǒ ma?", zhuyin: "ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄇㄚ˙?", vietnamese: "Có thể giúp tôi không?", usage: "Nhờ người khác" },
      { traditional: "...壞了。", pinyin: "...huài le.", zhuyin: "...ㄏㄨㄞˋ ㄌㄜ˙.", vietnamese: "... hỏng rồi.", usage: "Báo cáo vấn đề" }
    ],
    listening: { title: "Điều hòa bị hỏng", transcriptTraditional: "A: 老闆，我的房間冷氣壞了。\nB: 是嗎？我明天找人去修理。\nA: 好的，謝謝老闆。", transcriptPinyin: "A: Lǎobǎn, wǒ de fángjiān lěngqì huài le.\nB: Shì ma? Wǒ míngtiān zhǎo rén qù xiūlǐ.\nA: Hǎo de, xièxie lǎobǎn.", transcriptVietnamese: "A: Ông chủ, điều hòa phòng tôi hỏng rồi.\nB: Thế à? Mai tôi sẽ tìm người đến sửa.\nA: Vâng, cảm ơn chủ nhà.", questions: [{ id: "q1", type: "multiple_choice", question: "Cái gì bị hỏng?", options: ["Tivi", "Máy tính", "Điều hòa", "Điện thoại"], correctAnswer: "Điều hòa", explanation: "Người A nói: 冷氣壞了 (Điều hòa hỏng rồi)." }] },
    reading: { title: "Hết pin", passageTraditional: "今天早上我在路上。我的手機沒電了。我不能看地圖，也不能打電話。最後我問路人才找到學校。", passagePinyin: "Jīntiān zǎoshang wǒ zài lù shàng. Wǒ de shǒujī méi diàn le. Wǒ bù néng kàn dìtú, yě bù néng dǎ diànhuà. Zuìhòu wǒ wèn lùrén cái zhǎodào xuéxiào.", passageVietnamese: "Sáng nay tôi đang đi trên đường. Điện thoại của tôi hết pin. Tôi không thể coi bản đồ, cũng không thể gọi điện. Cuối cùng tôi phải hỏi người đi đường mới tìm thấy trường học.", questions: [{ id: "q1", type: "true_false", question: "Tác giả bị hỏng điện thoại. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Điện thoại bị 沒電 (hết pin), không phải là 壞了 (hỏng)." }] },
    speaking: { promptTraditional: "你的電腦壞了，你怎麼請朋友幫忙？", promptPinyin: "Nǐ de diànnǎo huài le, nǐ zěnme qǐng péngyǒu bāngmáng?", promptVietnamese: "Máy tính bạn hỏng, bạn nhờ bạn bè giúp thế nào?", sampleAnswerTraditional: "我的電腦壞了，你可以幫我修理嗎？", sampleAnswerPinyin: "Wǒ de diànnǎo huài le, nǐ kěyǐ bāng wǒ xiūlǐ ma?", sampleAnswerVietnamese: "Máy tính tôi hỏng rồi, cậu có thể sửa giúp tôi không?" },
    writing: { promptVietnamese: "Dịch: 'Xin hãy giúp tôi'", suggestedAnswerTraditional: "請幫我。", suggestedAnswerPinyin: "Qǐng bāng wǒ.", suggestedAnswerVietnamese: "Vui lòng giúp tôi." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '壞了' (huài le) có nghĩa là gì?", options: ["Đẹp", "Mới", "Hỏng rồi", "Tuyệt vời"], correctAnswer: "Hỏng rồi", explanation: "壞了 có nghĩa là bị hư, hỏng." }]
  },
  {
    id: "lesson_51",
    day: 51,
    title: "Bài 51: Dọn dẹp nhà cửa",
    level: "beginner",
    stage: "CHẶNG 5: MÔI TRƯỜNG ĐẠI HỌC",
    topic: "Đời sống",
    objectives: ["Từ vựng về việc nội trợ dọn dẹp"],
    vocabulary: [
      { id: "v_51_1", traditional: "打掃", pinyin: "Dǎsǎo", zhuyin: "ㄉㄚˇ ㄙㄠˇ", vietnamese: "Dọn dẹp", partOfSpeech: "Động từ", exampleTraditional: "週末我要打掃房間。", examplePinyin: "Zhōumò wǒ yào dǎsǎo fángjiān.", exampleVietnamese: "Cuối tuần tôi phải dọn dẹp phòng." },
      { id: "v_51_2", traditional: "洗", pinyin: "Xǐ", zhuyin: "ㄒㄧˇ", vietnamese: "Giặt, rửa", partOfSpeech: "Động từ", exampleTraditional: "洗衣服", examplePinyin: "Xǐ yīfú", exampleVietnamese: "Giặt quần áo" },
      { id: "v_51_3", traditional: "垃圾", pinyin: "Lèsè", zhuyin: "ㄌㄜˋ ㄙㄜˋ", vietnamese: "Rác", partOfSpeech: "Danh từ", exampleTraditional: "倒垃圾", examplePinyin: "Dào lèsè", exampleVietnamese: "Đổ rác" },
      { id: "v_51_4", traditional: "乾淨", pinyin: "Gānjìng", zhuyin: "ㄍㄢ ㄐㄧㄥˋ", vietnamese: "Sạch sẽ", partOfSpeech: "Tính từ", exampleTraditional: "我的房間很乾淨。", examplePinyin: "Wǒ de fángjiān hěn gānjìng.", exampleVietnamese: "Phòng tôi rất sạch sẽ." },
      { id: "v_51_5", traditional: "整理", pinyin: "Zhěnglǐ", zhuyin: "ㄓㄥˇ ㄌㄧˇ", vietnamese: "Sắp xếp, dọn (bàn, giường)", partOfSpeech: "Động từ", exampleTraditional: "整理床", examplePinyin: "Zhěnglǐ chuáng", exampleVietnamese: "Dọn giường" }
    ],
    sentencePatterns: [
      { traditional: "我要去倒垃圾。", pinyin: "Wǒ yào qù dào lèsè.", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄑㄩˋ ㄉㄠˋ ㄌㄜˋ ㄙㄜˋ.", vietnamese: "Tôi muốn đi đổ rác.", usage: "Nói về việc nhà" }
    ],
    listening: { title: "Phân công việc nhà", transcriptTraditional: "A: 大山，今天你打掃房間好嗎？\nB: 沒問題。我打掃房間，你去洗衣服。\nA: 好，我們一起做。", transcriptPinyin: "A: Dàshān, jīntiān nǐ dǎsǎo fángjiān hǎo ma?\nB: Méi wèntí. Wǒ dǎsǎo fángjiān, nǐ qù xǐ yīfú.\nA: Hǎo, wǒmen yìqǐ zuò.", transcriptVietnamese: "A: Đại Sơn, hôm nay cậu dọn phòng nhé?\nB: Không vấn đề. Tớ dọn phòng, cậu đi giặt quần áo.\nA: Ok, chúng ta cùng làm.", questions: [{ id: "q1", type: "multiple_choice", question: "A sẽ làm việc gì?", options: ["Dọn phòng", "Giặt quần áo", "Đổ rác", "Nấu cơm"], correctAnswer: "Giặt quần áo", explanation: "B bảo A: 你去洗衣服 (Cậu đi giặt đồ đi) và A đồng ý." }] },
    reading: { title: "Sạch sẽ", passageTraditional: "我不喜歡房間很髒。每天我都會整理房間，也會把垃圾倒掉。看見乾淨的房間，我很高興。", passagePinyin: "Wǒ bù xǐhuān fángjiān hěn zāng. Měitiān wǒ dōu huì zhěnglǐ fángjiān, yě huì bǎ lèsè dàodiào. Kànjiàn gānjìng de fángjiān, wǒ hěn gāoxìng.", passageVietnamese: "Tôi không thích căn phòng bẩn. Mỗi ngày tôi đều sắp xếp phòng ốc gọn gàng, và đem rác đi đổ. Nhìn thấy căn phòng sạch sẽ, tôi rất vui lòng.", questions: [{ id: "q1", type: "true_false", question: "Tác giả chỉ dọn phòng vào cuối tuần. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Tác giả nói: 每天我都會整理房間 (Ngày nào tôi cũng dọn đồ đạc)." }] },
    speaking: { promptTraditional: "你喜歡打掃房間嗎？", promptPinyin: "Nǐ xǐhuān dǎsǎo fángjiān ma?", promptVietnamese: "Bạn có thích dọn dẹp phòng không?", sampleAnswerTraditional: "我喜歡打掃房間。", sampleAnswerPinyin: "Wǒ xǐhuān dǎsǎo fángjiān.", sampleAnswerVietnamese: "Tôi thích dọn dẹp phòng ngự." },
    writing: { promptVietnamese: "Dịch: 'Rất sạch sẽ'", suggestedAnswerTraditional: "很乾淨", suggestedAnswerPinyin: "Hěn gānjìng", suggestedAnswerVietnamese: "Rất sạch" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Đổ rác thì rác trong tiếng Trung là gì?", options: ["乾淨", "打掃", "垃圾", "水"], correctAnswer: "垃圾", explanation: "垃圾 (Lèsè - Đài Loan / Lājī - Đại Lục) nghĩa là Rác." }]
  }
];
