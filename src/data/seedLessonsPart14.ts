import { Lesson } from '../types/lesson';

export const stage4LessonsPart3: Lesson[] = [
  {
    id: "lesson_42",
    day: 42,
    title: "Bài 42: Mua quần áo",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Mua sắm",
    objectives: ["Từ vựng về trang phục"],
    vocabulary: [
      { id: "v_42_1", traditional: "衣服", pinyin: "Yīfú", zhuyin: "ㄧ ㄈㄨˊ", vietnamese: "Quần áo", partOfSpeech: "Danh từ", exampleTraditional: "買衣服", examplePinyin: "Mǎi yīfú", exampleVietnamese: "Mua quần áo" },
      { id: "v_42_2", traditional: "褲子", pinyin: "Kùzi", zhuyin: "ㄎㄨˋ ㄗ˙", vietnamese: "Quần", partOfSpeech: "Danh từ", exampleTraditional: "這件褲子很好看。", examplePinyin: "Zhè jiàn kùzi hěn hǎokàn.", exampleVietnamese: "Cái quần này rất đẹp." },
      { id: "v_42_3", traditional: "鞋子", pinyin: "Xiézi", zhuyin: "ㄒㄧㄝˊ ㄗ˙", vietnamese: "Giày", partOfSpeech: "Danh từ", exampleTraditional: "我想買新鞋子。", examplePinyin: "Wǒ xiǎng mǎi xīn xiézi.", exampleVietnamese: "Tôi muốn mua giày mới." },
      { id: "v_42_4", traditional: "好看", pinyin: "Hǎokàn", zhuyin: "ㄏㄠˇ ㄎㄢˋ", vietnamese: "Đẹp, ưa nhìn", partOfSpeech: "Tính từ", exampleTraditional: "這件衣服很好看。", examplePinyin: "Zhè jiàn yīfú hěn hǎokàn.", exampleVietnamese: "Bộ áo này rất đẹp." },
      { id: "v_42_5", traditional: "試穿", pinyin: "Shìchuān", zhuyin: "ㄕˋ ㄔㄨㄢ", vietnamese: "Mặc thử", partOfSpeech: "Động từ", exampleTraditional: "我可以試穿嗎？", examplePinyin: "Wǒ kěyǐ shìchuān ma?", exampleVietnamese: "Tôi có thể mặc thử không?" }
    ],
    sentencePatterns: [
      { traditional: "我可以試穿嗎？", pinyin: "Wǒ kěyǐ shìchuān ma?", zhuyin: "ㄨㄛˇ ㄎㄜˇ ㄧˇ ㄕˋ ㄔㄨㄢ ㄇㄚ˙?", vietnamese: "Tôi có thể mặc thử không?", usage: "Xin thử đồ" },
      { traditional: "這件很好看。", pinyin: "Zhè jiàn hěn hǎokàn.", zhuyin: "ㄓㄜˋ ㄐㄧㄢˋ ㄏㄣˇ ㄏㄠˇ ㄎㄢˋ.", vietnamese: "Cái này rất đẹp.", usage: "Khen ngợi" }
    ],
    listening: { title: "Thử quần áo", transcriptTraditional: "A: 歡迎光臨！\nB: 你好，我想試穿這件衣服。\nA: 好的，裡面請。", transcriptPinyin: "A: Huānyíng guānglín!\nB: Nǐ hǎo, wǒ xiǎng shìchuān zhè jiàn yīfú.\nA: Hǎo de, lǐmiàn qǐng.", transcriptVietnamese: "A: Hoan nghênh quý khách!\nB: Xin chào, tôi muốn thử chiếc áo này.\nA: Vâng, mời vào bên trong.", questions: [{ id: "q1", type: "multiple_choice", question: "Vị khách muốn làm gì?", options: ["Trả tiền", "Thử giày", "Thử áo", "Đổi hàng"], correctAnswer: "Thử áo", explanation: "Khách nói 我想試穿這件衣服 (Tôi muốn thử quần áo này)." }] },
    reading: { title: "Cửa hàng thời trang", passageTraditional: "今天我和朋友去買衣服。這家商店的衣服很多，也很好看。我試穿了一件，但是太大了。", passagePinyin: "Jīntiān wǒ hé péngyǒu qù mǎi yīfú. Zhè jiā shāngdiàn de yīfú hěnduō, yě hěn hǎokàn. Wǒ shìchuān le yí jiàn, dànshì tài dà le.", passageVietnamese: "Hôm nay tôi và bạn đi mua quần áo. Cửa hàng này có rất nhiều quần áo, cũng rất đẹp. Tôi đã thử một bộ, nhưng to quá.", questions: [{ id: "q1", type: "true_false", question: "Bộ quần áo mà tác giả thử mặc bị quá chật (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 太大了 (To quá, rộng quá)." }] },
    speaking: { promptTraditional: "你想試穿鞋子，你怎麼問店員？", promptPinyin: "Nǐ xiǎng shìchuān xiézi, nǐ zěnme wèn diànyuán?", promptVietnamese: "Khi muốn thử giày, bạn sẽ hỏi nhân viên thế nào?", sampleAnswerTraditional: "請問，我可以試穿這雙鞋子嗎？", sampleAnswerPinyin: "Qǐngwèn, wǒ kěyǐ shìchuān zhè shuāng xiézi ma?", sampleAnswerVietnamese: "Xin hỏi, tôi có thể đi thử đôi giày này không?" },
    writing: { promptVietnamese: "Dịch: 'Bộ quần áo này rất đẹp.'", suggestedAnswerTraditional: "這件衣服很好看。", suggestedAnswerPinyin: "Zhè jiàn yīfú hěn hǎokàn.", suggestedAnswerVietnamese: "Bộ váy/áo này rất đẹp." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Giày tiếng Trung là gì?", options: ["褲子", "帽子", "鞋子", "包包"], correctAnswer: "鞋子", explanation: "鞋子 (xiézi) là giày." }]
  },
  {
    id: "lesson_43",
    day: 43,
    title: "Bài 43: Màu sắc cơ bản",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Màu sắc",
    objectives: ["Phân biệt và gọi tên một số màu cơ bản"],
    vocabulary: [
      { id: "v_43_1", traditional: "顏色", pinyin: "Yánsè", zhuyin: "ㄧㄢˊ ㄙㄜˋ", vietnamese: "Màu sắc", partOfSpeech: "Danh từ", exampleTraditional: "你喜歡什麼顏色？", examplePinyin: "Nǐ xǐhuān shénme yánsè?", exampleVietnamese: "Bạn thích màu gì?" },
      { id: "v_43_2", traditional: "紅色", pinyin: "Hóngsè", zhuyin: "ㄏㄨㄥˊ ㄙㄜˋ", vietnamese: "Màu đỏ", partOfSpeech: "Danh từ", exampleTraditional: "這件紅色的衣服很好看。", examplePinyin: "Zhè jiàn hóngsè de yīfú hěn hǎokàn.", exampleVietnamese: "Bộ áo màu đỏ này rất đẹp." },
      { id: "v_43_3", traditional: "藍色", pinyin: "Lánsè", zhuyin: "ㄌㄢˊ ㄙㄜˋ", vietnamese: "Màu xanh dương", partOfSpeech: "Danh từ", exampleTraditional: "我的車是藍色的。", examplePinyin: "Wǒ de chē shì lánsè de.", exampleVietnamese: "Xe của tôi màu xanh." },
      { id: "v_43_4", traditional: "黑色", pinyin: "Hēisè", zhuyin: "ㄏㄟ ㄙㄜˋ", vietnamese: "Màu đen", partOfSpeech: "Danh từ", exampleTraditional: "黑色的鞋子。", examplePinyin: "Hēisè de xiézi.", exampleVietnamese: "Đôi giày màu đen." },
      { id: "v_43_5", traditional: "白色", pinyin: "Báisè", zhuyin: "ㄅㄞˊ ㄙㄜˋ", vietnamese: "Màu trắng", partOfSpeech: "Danh từ", exampleTraditional: "白色的手機。", examplePinyin: "Báisè de shǒujī.", exampleVietnamese: "Điện thoại trắng." }
    ],
    sentencePatterns: [
      { traditional: "你喜歡什麼顏色？", pinyin: "Nǐ xǐhuān shénme yánsè?", zhuyin: "ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ?", vietnamese: "Bạn thích màu gì?", usage: "Hỏi sở thích" },
      { traditional: "我喜歡...色。", pinyin: "Wǒ xǐhuān... sè.", zhuyin: "ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ... ㄙㄜˋ.", vietnamese: "Tôi thích màu...", usage: "Nêu màu sắc" }
    ],
    listening: { title: "Chọn đồ vớ màu", transcriptTraditional: "A: 你好，你想買什麼？\nB: 我想買一件衣服。\nA: 你喜歡什麼顏色？紅色還是藍色？\nB: 我想要藍色的。", transcriptPinyin: "A: Nǐ hǎo, nǐ xiǎng mǎi shénme?\nB: Wǒ xiǎng mǎi yí jiàn yīfú.\nA: Nǐ xǐhuān shénme yánsè? Hóngsè háishì lánsè?\nB: Wǒ xiǎng yào lánsè de.", transcriptVietnamese: "A: Xin chào, bạn muốn mua gì?\nB: Tôi muốn mua áo.\nA: Bạn thích màu gì? Màu đỏ hay màu xanh?\nB: Tôi lấy màu xanh.", questions: [{ id: "q1", type: "multiple_choice", question: "Người khách chọn mua áo màu gì?", options: ["Màu trắng", "Màu đen", "Màu đỏ", "Màu xanh dương"], correctAnswer: "Màu xanh dương", explanation: "Khách nói 我想要藍色的 (Tôi muốn cái màu xanh biển)." }] },
    reading: { title: "Mua bút", passageTraditional: "在書店，我買了三支筆。一支是紅色的，兩支是黑色的。我不喜歡藍色的筆。", passagePinyin: "Zài shūdiàn, wǒ mǎile sān zhī bǐ. Yì zhī shì hóngsè de, liǎng zhī shì hēisè de. Wǒ bù xǐhuān lánsè de bǐ.", passageVietnamese: "Tại nhà sách, tôi mua 3 cây bút. Một cây màu đỏ, hai cây màu đen. Tôi không thích bút xanh dương.", questions: [{ id: "q1", type: "true_false", question: "Người này mua tổng cộng 4 cây bút. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Tôi mua 3 cây bút (三支筆)." }] },
    speaking: { promptTraditional: "你的手機是什麼顏色的？", promptPinyin: "Nǐ de shǒujī shì shénme yánsè de?", promptVietnamese: "Điện thoại của bạn màu gì?", sampleAnswerTraditional: "我的手機是黑色的。", sampleAnswerPinyin: "Wǒ de shǒujī shì hēisè de.", sampleAnswerVietnamese: "Điện thoại của tôi màu đen." },
    writing: { promptVietnamese: "Dịch: 'Màu trắng'", suggestedAnswerTraditional: "白色", suggestedAnswerPinyin: "Báisè", suggestedAnswerVietnamese: "Màu trắng" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '紅色' nghĩa là gì?", options: ["Màu đỏ", "Màu đen", "Màu xanh bích", "Màu xanh lá"], correctAnswer: "Màu đỏ", explanation: "紅色 (hóngsè) là màu đỏ." }]
  },
  {
    id: "lesson_44",
    day: 44,
    title: "Bài 44: Trả giá khi mua sắm",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Giao tiếp",
    objectives: ["Mẫu câu trả giá thông dụng tại chợ đêm/cửa hàng Đài Loan"],
    vocabulary: [
      { id: "v_44_1", traditional: "便宜", pinyin: "Piányí", zhuyin: "ㄆㄧㄢˊ ㄧˊ", vietnamese: "Rẻ", partOfSpeech: "Tính từ", exampleTraditional: "太貴了，可以便宜一點嗎？", examplePinyin: "Tài guì le, kěyǐ piányí yìdiǎn ma?", exampleVietnamese: "Đắt quá, có thể rẻ một chút không?" },
      { id: "v_44_2", traditional: "一點", pinyin: "Yìdiǎn", zhuyin: "ㄧˋ ㄉㄧㄢˇ", vietnamese: "Một chút", partOfSpeech: "Lượng từ", exampleTraditional: "便宜一點", examplePinyin: "Piányí yìdiǎn", exampleVietnamese: "Rẻ chút xíu" },
      { id: "v_44_3", traditional: "打折", pinyin: "Dǎzhé", zhuyin: "ㄉㄚˇ ㄓㄜˊ", vietnamese: "Giảm giá", partOfSpeech: "Động từ", exampleTraditional: "有打折嗎？", examplePinyin: "Yǒu dǎzhé ma?", exampleVietnamese: "Có giảm giá không?" },
      { id: "v_44_4", traditional: "賣", pinyin: "Mài", zhuyin: "ㄇㄞˋ", vietnamese: "Bán", partOfSpeech: "Động từ", exampleTraditional: "這個怎麼賣？", examplePinyin: "Zhège zěnme mài?", exampleVietnamese: "Cái này bán thế nào?" }
    ],
    sentencePatterns: [
      { traditional: "太貴了，可以便宜一點嗎？", pinyin: "Tài guì le, kěyǐ piányí yìdiǎn ma?", zhuyin: "ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙, ㄎㄜˇ ㄧˇ ㄆㄧㄢˊ ㄧˊ ㄧˋ ㄉㄧㄢˇ ㄇㄚ˙?", vietnamese: "Đắt quá, có thể bớt một chút không?", usage: "Mặc cả" },
      { traditional: "有打折嗎？", pinyin: "Yǒu dǎzhé ma?", zhuyin: "ㄧㄡˇ ㄉㄚˇ ㄓㄜˊ ㄇㄚ˙?", vietnamese: "Có giảm giá không?", usage: "Hỏi chương trình khuyến mãi" }
    ],
    listening: { title: "Mặc cả", transcriptTraditional: "A: 老闆，這雙鞋子多少錢？\nB: 兩千塊。\nA: 太貴了！可以便宜一點嗎？\nB: 好吧，算你一千八。", transcriptPinyin: "A: Lǎobǎn, zhè shuāng xiézi duōshǎo qián?\nB: Liǎng qiān kuài.\nA: Tài guì le! Kěyǐ piányí yìdiǎn ma?\nB: Hǎo ba, suàn nǐ yìqiān bā.", transcriptVietnamese: "A: Bà chủ, đôi giày này bao nhiêu tiền?\nB: Hai nghìn đài tệ.\nA: Đắt quá! Bớt một chút được không?\nB: Thôi được, lấy bạn 1800.", questions: [{ id: "q1", type: "multiple_choice", question: "Cuối cùng đôi giày giá bao nhiêu?", options: ["2000", "1000", "1800", "2800"], correctAnswer: "1800", explanation: "Người bán chốt giá 一千八 = 1800." }] },
    reading: { title: "Khuyến mãi ngập tràn", passageTraditional: "這家商店的衣服都在打折。買一件沒有打折。買兩件有打折，很便宜。所以我們買了兩件。", passagePinyin: "Zhè jiā shāngdiàn de yīfú dōu zài dǎzhé. Mǎi yí jiàn méiyǒu dǎzhé. Mǎi liǎng jiàn yǒu dǎzhé, hěn piányí. Suǒyǐ wǒmen mǎile liǎng jiàn.", passageVietnamese: "Quần áo ở cửa hàng này đang giảm giá. Mua 1 chiếc không giảm giá. Mua 2 chiếc có giảm, rất rẻ. Vì vậy chúng tôi đã mua hai chiếc.", questions: [{ id: "q1", type: "true_false", question: "Mua một cái áo cũng được giảm giá. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Bài viết ghi 買一件沒有打折 (Mua 1 cái không giảm giá)." }] },
    speaking: { promptTraditional: "假如你覺得東西太貴，你想老闆算便宜一點，你怎麼說？", promptPinyin: "Jiǎrú nǐ juédé dōngxī tài guì, nǐ xiǎng lǎobǎn suàn piányí yìdiǎn, nǐ zěnme shuō?", promptVietnamese: "Giả sử bạn thấy đắt, bạn muốn sếp giảm giá, bạn nói thế nào?", sampleAnswerTraditional: "太貴了，可以便宜一點嗎？", sampleAnswerPinyin: "Tài guì le, kěyǐ piányí yìdiǎn ma?", sampleAnswerVietnamese: "Mắc quá, bớt chút đi được không ạ?" },
    writing: { promptVietnamese: "Dịch: 'Bớt một chút nhé'.", suggestedAnswerTraditional: "便宜一點吧。", suggestedAnswerPinyin: "Piányí yìdiǎn ba.", suggestedAnswerVietnamese: "Rẻ chút đi." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '打折' nghĩa là gì?", options: ["Đắt", "Rẻ", "Miễn phí", "Giảm giá"], correctAnswer: "Giảm giá", explanation: "打折 là giảm giá." }]
  },
  {
    id: "lesson_45",
    day: 45,
    title: "Bài 45: Đại gia đình",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Gia đình",
    objectives: ["Gọi tên các thành viên bề trên trong gia đình (ông bà)"],
    vocabulary: [
      { id: "v_45_1", traditional: "爺爺", pinyin: "Yéye", zhuyin: "ㄧㄝˊ ㄧㄝ˙", vietnamese: "Ông nội", partOfSpeech: "Danh từ", exampleTraditional: "我的爺爺八十歲了。", examplePinyin: "Wǒ de yéye bāshí suì le.", exampleVietnamese: "Ông nội tôi 80 tuổi rồi." },
      { id: "v_45_2", traditional: "奶奶", pinyin: "Nǎinai", zhuyin: "ㄋㄞˇ ㄋㄞ˙", vietnamese: "Bà nội", partOfSpeech: "Danh từ", exampleTraditional: "奶奶喜歡喝茶。", examplePinyin: "Nǎinai xǐhuān hē chá.", exampleVietnamese: "Bà nội thích uống trà." },
      { id: "v_45_3", traditional: "外公", pinyin: "Wàigōng", zhuyin: "ㄨㄞˋ ㄍㄨㄥ", vietnamese: "Ông ngoại", partOfSpeech: "Danh từ", exampleTraditional: "外公住在這裡。", examplePinyin: "Wàigōng zhù zài zhèlǐ.", exampleVietnamese: "Ông ngoại sống ở đây." },
      { id: "v_45_4", traditional: "外婆", pinyin: "Wàipó", zhuyin: "ㄨㄞˋ ㄆㄛˊ", vietnamese: "Bà ngoại", partOfSpeech: "Danh từ", exampleTraditional: "外婆做飯很好吃。", examplePinyin: "Wàipó zuò fàn hěn hǎochī.", exampleVietnamese: "Bà ngoại nấu cơm rất ngon." }
    ],
    sentencePatterns: [
      { traditional: "他/她是你...嗎？", pinyin: "Tā shì nǐ... ma?", zhuyin: "ㄊㄚ ㄕˋ ㄋㄧˇ... ㄇㄚ˙?", vietnamese: "Ông ấy/ Bà ấy là... của bạn phải không?", usage: "Xác nhận vai vế" }
    ],
    listening: { title: "Giới thiệu ảnh", transcriptTraditional: "A: 照片裡的兩個人是誰？\nB: 這是我的爺爺和奶奶。\nA: 他們很年輕！", transcriptPinyin: "A: Zhàopiàn lǐ de liǎng gè rén shì shuí?\nB: Zhè shì wǒ de yéye hé nǎinai.\nA: Tāmen hěn niánqīng!", transcriptVietnamese: "A: Hai người trong ảnh là ai vậy?\nB: Đây là ông nội và bà nội của tôi.\nA: Họ trẻ quá!", questions: [{ id: "q1", type: "multiple_choice", question: "Hai người trong ảnh là ai?", options: ["Ông bà ngoại", "Bố mẹ", "Ông bà nội", "Anh chị"], correctAnswer: "Ông bà nội", explanation: "B nói 是我的爺爺和奶奶 (Là ông bà nội tôi)." }] },
    reading: { title: "Thăm ông bà ngoại", passageTraditional: "週末我們去外公外婆家。他們家很大。外婆做飯很好吃。晚上我們一起看電視，很開心。", passagePinyin: "Zhōumò wǒmen qù wàigōng wàipó jiā. Tāmen jiā hěn dà. Wàipó zuò fàn hěn hǎochī. Wǎnshàng wǒmen yìqǐ kàn diànshì, hěn kāixīn.", passageVietnamese: "Cuối tuần chúng tôi đến nhà ông bà ngoại. Nhà họ rất lớn. Bà ngoại nấu ăn ngon lắm. Tối đến chúng tôi cùng xem TV, rất vui.", questions: [{ id: "q1", type: "true_false", question: "Mọi người sang nhà ông bà nội. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 外公外婆 (ông bà ngoại)." }] },
    speaking: { promptTraditional: "你的爺爺多大？", promptPinyin: "Nǐ de yéye duō dà?", promptVietnamese: "Ông nội bạn bao nhiêu tuổi?", sampleAnswerTraditional: "我爺爺七十歲。", sampleAnswerPinyin: "Wǒ yéye qīshí suì.", sampleAnswerVietnamese: "Ông nội tôi 70 tuổi." },
    writing: { promptVietnamese: "Viết: 'Ông ngoại và bà ngoại'", suggestedAnswerTraditional: "外公和外婆", suggestedAnswerPinyin: "Wàigōng hé wàipó", suggestedAnswerVietnamese: "Ông ngoại và bà ngoại" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '奶奶' (nǎinai) có nghĩa là gì?", options: ["Bà ngoại", "Cố", "Mẹ", "Bà nội"], correctAnswer: "Bà nội", explanation: "奶奶 là bà nội." }]
  },
  {
    id: "lesson_46",
    day: 46,
    title: "Bài 46: Quê quán",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Giao tiếp cơ bản",
    objectives: ["Học cách hỏi và nói về nơi sinh ra, quê quán"],
    vocabulary: [
      { id: "v_46_1", traditional: "老家", pinyin: "Lǎojiā", zhuyin: "ㄌㄠˇ ㄐㄧㄚ", vietnamese: "Quê nhà", partOfSpeech: "Danh từ", exampleTraditional: "我的老家在河內。", examplePinyin: "Wǒ de lǎojiā zài Hénèi.", exampleVietnamese: "Quê tôi ở Hà Nội." },
      { id: "v_46_2", traditional: "出生", pinyin: "Chūshēng", zhuyin: "ㄔㄨ ㄕㄥ", vietnamese: "Sinh ra", partOfSpeech: "Động từ", exampleTraditional: "我在台北出生。", examplePinyin: "Wǒ zài Táiběi chūshēng.", exampleVietnamese: "Tôi sinh ra ở Đài Bắc." },
      { id: "v_46_3", traditional: "哪裡人", pinyin: "Nǎlǐ rén", zhuyin: "ㄋㄚˇ ㄌㄧˇ ㄖㄣˊ", vietnamese: "Người ở đâu", partOfSpeech: "Cụm từ", exampleTraditional: "你是哪裡人？", examplePinyin: "Nǐ shì nǎlǐ rén?", exampleVietnamese: "Bạn là người ở đâu?" },
      { id: "v_46_4", traditional: "很遠", pinyin: "Hěn yuǎn", zhuyin: "ㄏㄣˇ ㄩㄢˇ", vietnamese: "Rất xa", partOfSpeech: "Tính từ", exampleTraditional: "我的老家很遠。", examplePinyin: "Wǒ de lǎojiā hěn yuǎn.", exampleVietnamese: "Quê của tôi rất xa." },
      { id: "v_46_5", traditional: "很近", pinyin: "Hěn jìn", zhuyin: "ㄏㄣˇ ㄐㄧㄣˋ", vietnamese: "Rất gần", partOfSpeech: "Tính từ", exampleTraditional: "我家很近。", examplePinyin: "Wǒ jiā hěn jìn.", exampleVietnamese: "Nhà tôi rất gần." }
    ],
    sentencePatterns: [
      { traditional: "你是哪裡人？", pinyin: "Nǐ shì nǎlǐ rén?", zhuyin: "ㄋㄧˇ ㄕˋ ㄋㄚˇ ㄌㄧˇ ㄖㄣˊ?", vietnamese: "Bạn là người đâu?", usage: "Hỏi quê quán" },
      { traditional: "我的老家在...", pinyin: "Wǒ de lǎojiā zài...", zhuyin: "ㄨㄛˇ ㄉㄜ˙ ㄌㄠˇ ㄐㄧㄚ ㄗㄞˋ...", vietnamese: "Quê của tôi ở...", usage: "Nêu quê hương" }
    ],
    listening: { title: "Nói chuyện quê quán", transcriptTraditional: "A: 你是哪裡人？\nB: 我是越南人。我的老家在胡志明市。\nA: 離這裡遠嗎？ \nB: 很遠。", transcriptPinyin: "A: Nǐ shì nǎlǐ rén?\nB: Wǒ shì Yuènán rén. Wǒ de lǎojiā zài Húzhìmíng shì.\nA: Lí zhèlǐ yuǎn ma?\nB: Hěn yuǎn.", transcriptVietnamese: "A: Bạn là người ở đâu?\nB: Tôi là người Việt Nam. Quê tôi ở thành phố Hồ Chí Minh.\nA: Cách đây xa không?\nB: Rất xa.", questions: [{ id: "q1", type: "multiple_choice", question: "B sinh ra/quê ở đâu?", options: ["Hà Nội", "Hồ Chí Minh", "Đài Bắc", "Cao Hùng"], correctAnswer: "Hồ Chí Minh", explanation: "B nói 老家在胡志明市 (Quê ở thành phố Hồ Chí Minh)." }] },
    reading: { title: "Người bạn học", passageTraditional: "我的同學大山是台灣人。他在高雄出生。高雄離台北很遠。大山很喜歡台北。", passagePinyin: "Wǒ de tóngxué Dàshān shì Táiwān rén. Tā zài Gāoxióng chūshēng. Gāoxióng lí Táiběi hěn yuǎn. Dàshān hěn xǐhuān Táiběi.", passageVietnamese: "Bạn học đại học của tôi là người Đài Loan. Cậu ấy sinh ra ở Cao Hùng. Cao Hùng cách Đài Bắc rất xa. Đại Sơn rất thích Đài Bắc.", questions: [{ id: "q1", type: "true_false", question: "Cao Hùng ở rất gần Đài Bắc. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết: 高雄離台北很遠 (Cao Hùng cách Đài Bắc rất xa)." }] },
    speaking: { promptTraditional: "你的老家在哪裡？遠嗎？", promptPinyin: "Nǐ de lǎojiā zài nǎlǐ? Yuǎn ma?", promptVietnamese: "Quê bạn ở đâu? Có xa không?", sampleAnswerTraditional: "我的老家在河內。很遠。", sampleAnswerPinyin: "Wǒ de lǎojiā zài Hénèi. Hěn yuǎn.", sampleAnswerVietnamese: "Quê tôi ở Hà Nội. Cực kỳ xa." },
    writing: { promptVietnamese: "Dịch: 'Bạn là người ở đâu?'", suggestedAnswerTraditional: "你是哪裡人？", suggestedAnswerPinyin: "Nǐ shì nǎlǐ rén?", suggestedAnswerVietnamese: "Bạn ở đâu đến?" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '老家' có nghĩa là gì?", options: ["Sếp", "Quê quán", "Gia đình", "Bác sĩ"], correctAnswer: "Quê quán", explanation: "老家 (Lǎojiā) là quê quán, quê nhà." }]
  }
];
