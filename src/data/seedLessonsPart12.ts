import { Lesson } from '../types/lesson';

export const stage4LessonsPart1: Lesson[] = [
  {
    id: "lesson_32",
    day: 32,
    title: "Bài 32: Phương tiện giao thông",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Giao thông",
    objectives: ["Từ vựng về phương tiện giao thông", "Cách hỏi đi bằng phương tiện gì"],
    vocabulary: [
      { id: "v_32_1", traditional: "車", pinyin: "Chē", zhuyin: "ㄔㄜ", vietnamese: "Xe", partOfSpeech: "Danh từ", exampleTraditional: "我的車在這裡。", examplePinyin: "Wǒ de chē zài zhèlǐ.", exampleVietnamese: "Xe của tôi ở đây." },
      { id: "v_32_2", traditional: "公車", pinyin: "Gōngchē", zhuyin: "ㄍㄨㄥ ㄔㄜ", vietnamese: "Xe buýt", partOfSpeech: "Danh từ", exampleTraditional: "我坐公車去學校。", examplePinyin: "Wǒ zuò gōngchē qù xuéxiào.", exampleVietnamese: "Tôi đi xe buýt tới trường." },
      { id: "v_32_3", traditional: "捷運", pinyin: "Jiéyùn", zhuyin: "ㄐㄧㄝˊ ㄩㄣˋ", vietnamese: "Tàu điện ngầm (MRT)", partOfSpeech: "Danh từ", exampleTraditional: "台北捷運很方便。", examplePinyin: "Táiběi jiéyùn hěn fāngbiàn.", exampleVietnamese: "MRT Đài Bắc rất tiện lợi." },
      { id: "v_32_4", traditional: "計程車", pinyin: "Jìchéngchē", zhuyin: "ㄐㄧˋ ㄔㄥˊ ㄔㄜ", vietnamese: "Taxi", partOfSpeech: "Danh từ", exampleTraditional: "我們要叫計程車嗎？", examplePinyin: "Wǒmen yào jiào jìchéngchē ma?", exampleVietnamese: "Chúng ta có gọi taxi không?" },
      { id: "v_32_5", traditional: "坐", pinyin: "Zuò", zhuyin: "ㄗㄨㄛˋ", vietnamese: "Ngồi / Đi (phương tiện)", partOfSpeech: "Động từ", exampleTraditional: "你怎麼去？", examplePinyin: "Nǐ zěnme qù?", exampleVietnamese: "Bạn đi bằng gì?" }
    ],
    sentencePatterns: [
      { traditional: "你怎麼去...？", pinyin: "Nǐ zěnme qù...?", zhuyin: "ㄋㄧˇ ㄗㄣˇ ㄇㄜ˙ ㄑㄩˋ...?", vietnamese: "Bạn đi ... bằng gì?", usage: "Hỏi phương tiện di chuyển" },
      { traditional: "我坐...去。", pinyin: "Wǒ zuò... qù.", zhuyin: "ㄨㄛˇ ㄗㄨㄛˋ... ㄑㄩˋ.", vietnamese: "Tôi đi bằng ...", usage: "Trả lời phương tiện di chuyển" }
    ],
    listening: { title: "Hỏi đường đi làm", transcriptTraditional: "A: 你怎麼去公司？\nB: 我坐捷運去公司。你呢？\nA: 我坐公車。", transcriptPinyin: "A: Nǐ zěnme qù gōngsī?\nB: Wǒ zuò jiéyùn qù gōngsī. Nǐ ne?\nA: Wǒ zuò gōngchē.", transcriptVietnamese: "A: Bạn đi làm bằng gì?\nB: Tôi đi tàu điện ngầm. Còn bạn?\nA: Tôi đi xe buýt.", questions: [{ id: "q1", type: "multiple_choice", question: "A đi làm bằng phương tiện gì?", options: ["Xe buýt", "Taxi", "MRT", "Xe đạp"], correctAnswer: "Xe buýt", explanation: "A nói 我坐公車 (Tôi ngồi xe buýt)." }] },
    reading: { title: "Di chuyển ở Đài Bắc", passageTraditional: "在台北，很多人坐捷運。捷運很快，也很乾淨。我也喜歡坐捷運。", passagePinyin: "Zài Táiběi, hěn duō rén zuò jiéyùn. Jiéyùn hěn kuài, yě hěn gānjìng. Wǒ yě xǐhuān zuò jiéyùn.", passageVietnamese: "Ở Đài Bắc, rất nhiều người đi tàu điện ngầm. MRT rất nhanh và cũng rất sạch sẽ. Tôi cũng thích đi MRT.", questions: [{ id: "q1", type: "true_false", question: "MRT ở Đài Bắc rất sạch sẽ. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Trong bài có câu 捷運很快，也很乾淨 (MRT rất nhanh, cũng rất sạch sẽ)." }] },
    speaking: { promptTraditional: "你怎麼去學校？", promptPinyin: "Nǐ zěnme qù xuéxiào?", promptVietnamese: "Bạn đi học bằng gì?", sampleAnswerTraditional: "我坐公車去學校。", sampleAnswerPinyin: "Wǒ zuò gōngchē qù xuéxiào.", sampleAnswerVietnamese: "Tôi đi xe buýt đến trường." },
    writing: { promptVietnamese: "Viết 'Tôi đi taxi':", suggestedAnswerTraditional: "我坐計程車。", suggestedAnswerPinyin: "Wǒ zuò jìchéngchē.", suggestedAnswerVietnamese: "Tôi đi taxi." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Tàu điện ngầm MRT tiếng Trung là gì?", options: ["公車", "捷運", "計程車", "汽車"], correctAnswer: "捷運", explanation: "捷運 (Jiéyùn) là tàu điện ngầm." }]
  },
  {
    id: "lesson_33",
    day: 33,
    title: "Bài 33: Hỏi đường",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Giao thông",
    objectives: ["Từ vựng về phương hướng", "Cách hỏi đường cơ bản"],
    vocabulary: [
      { id: "v_33_1", traditional: "哪裡", pinyin: "Nǎlǐ", zhuyin: "ㄋㄚˇ ㄌㄧˇ", vietnamese: "Ở đâu", partOfSpeech: "Đại từ", exampleTraditional: "車站在哪裡？", examplePinyin: "Chēzhàn zài nǎlǐ?", exampleVietnamese: "Nhà ga ở đâu?" },
      { id: "v_33_2", traditional: "前面", pinyin: "Qiánmiàn", zhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ", vietnamese: "Phía trước", partOfSpeech: "Danh từ", exampleTraditional: "學校在前面。", examplePinyin: "Xuéxiào zài qiánmiàn.", exampleVietnamese: "Trường học ở phía trước." },
      { id: "v_33_3", traditional: "後面", pinyin: "Hòumiàn", zhuyin: "ㄏㄡˋ ㄇㄧㄢˋ", vietnamese: "Phía sau", partOfSpeech: "Danh từ", exampleTraditional: "車站在後面。", examplePinyin: "Chēzhàn zài hòumiàn.", exampleVietnamese: "Nhà ga ở phía sau." },
      { id: "v_33_4", traditional: "旁邊", pinyin: "Pángbiān", zhuyin: "ㄆㄤˊ ㄅㄧㄢ", vietnamese: "Bên cạnh", partOfSpeech: "Danh từ", exampleTraditional: "銀行在旁邊。", examplePinyin: "Yínháng zài pángbiān.", exampleVietnamese: "Ngân hàng ở bên cạnh." },
      { id: "v_33_5", traditional: "怎麼走", pinyin: "Zěnme zǒu", zhuyin: "ㄗㄣˇ ㄇㄜ˙ ㄗㄡˇ", vietnamese: "Đi thế nào", partOfSpeech: "Cụm từ", exampleTraditional: "請問，捷運站怎麼走？", examplePinyin: "Qǐngwèn, jiéyùn zhàn zěnme zǒu?", exampleVietnamese: "Xin hỏi đi tới trạm tàu điện ngầm thế nào?" }
    ],
    sentencePatterns: [
      { traditional: "請問，...在哪裡？", pinyin: "Qǐngwèn, ...zài nǎlǐ?", zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ, ...ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ?", vietnamese: "Xin hỏi, ... ở đâu?", usage: "Hỏi địa điểm" },
      { traditional: "在...", pinyin: "Zài...", zhuyin: "ㄗㄞˋ...", vietnamese: "Ở...", usage: "Chỉ vị trí" }
    ],
    listening: { title: "Tìm trạm tàu", transcriptTraditional: "A: 請問，捷運站在哪裡？\nB: 捷運站在前面。\nA: 謝謝你。", transcriptPinyin: "A: Qǐngwèn, jiéyùn zhàn zài nǎlǐ?\nB: Jiéyùn zhàn zài qiánmiàn.\nA: Xièxie nǐ.", transcriptVietnamese: "A: Xin hỏi, trạm MRT ở đâu?\nB: Trạm MRT ở phía trước.\nA: Cảm ơn bạn.", questions: [{ id: "q1", type: "multiple_choice", question: "Trạm MRT ở đâu?", options: ["Phía trước", "Phía sau", "Bên cạnh", "Ở xa"], correctAnswer: "Phía trước", explanation: "B nói 捷運站在前面 (Trạm MRT ở phía trước)." }] },
    reading: { title: "Ngân hàng", passageTraditional: "我家旁邊有一個銀行。銀行前面是公車站。很方便。", passagePinyin: "Wǒ jiā pángbiān yǒu yí gè yínháng. Yínháng qiánmiàn shì gōngchēzhàn. Hěn fāngbiàn.", passageVietnamese: "Bên cạnh nhà tôi có một ngân hàng. Phía trước ngân hàng là trạm xe buýt. Rất tiện lợi.", questions: [{ id: "q1", type: "true_false", question: "Trạm xe buýt nằm phía sau ngân hàng. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Trong bài nói 銀行前面是公車站 (Phía trước ngân hàng là trạm xe buýt)." }] },
    speaking: { promptTraditional: "請問，洗手間在哪裡？", promptPinyin: "Qǐngwèn, xǐshǒujiān zài nǎlǐ?", promptVietnamese: "Xin hỏi, nhà vệ sinh ở đâu?", sampleAnswerTraditional: "洗手間在後面。", sampleAnswerPinyin: "Xǐshǒujiān zài hòumiàn.", sampleAnswerVietnamese: "Nhà vệ sinh ở phía sau." },
    writing: { promptVietnamese: "Viết 'Xin hỏi, trường học đi đường nào?':", suggestedAnswerTraditional: "請問，學校怎麼走？", suggestedAnswerPinyin: "Qǐngwèn, xuéxiào zěnme zǒu?", suggestedAnswerVietnamese: "Xin hỏi tới trường đi thế nào?" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ 'Phía sau' trong tiếng Trung là gì?", options: ["前面 (Qiánmiàn)", "後面 (Hòumiàn)", "旁邊 (Pángbiān)", "哪裡 (Nǎlǐ)"], correctAnswer: "後面 (Hòumiàn)", explanation: "後面 có nghĩa là phía sau." }]
  },
  {
    id: "lesson_34",
    day: 34,
    title: "Bài 34: Tại Khách sạn",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Du lịch",
    objectives: ["Từ vựng về khách sạn", "Cách đặt phòng hoặc trả phòng cơ bản"],
    vocabulary: [
      { id: "v_34_1", traditional: "飯店", pinyin: "Fàndiàn", zhuyin: "ㄈㄢˋ ㄉㄧㄢˋ", vietnamese: "Khách sạn", partOfSpeech: "Danh từ", exampleTraditional: "這家飯店很大。", examplePinyin: "Zhè jiā fàndiàn hěn dà.", exampleVietnamese: "Khách sạn này rất lớn." },
      { id: "v_34_2", traditional: "房間", pinyin: "Fángjiān", zhuyin: "ㄈㄤˊ ㄐㄧㄢ", vietnamese: "Phòng", partOfSpeech: "Danh từ", exampleTraditional: "我的房間很小。", examplePinyin: "Wǒ de fángjiān hěn xiǎo.", exampleVietnamese: "Phòng của tôi rất nhỏ." },
      { id: "v_34_3", traditional: "訂", pinyin: "Dìng", zhuyin: "ㄉㄧㄥˋ", vietnamese: "Đặt (phòng, vé)", partOfSpeech: "Động từ", exampleTraditional: "我想訂一個房間。", examplePinyin: "Wǒ xiǎng dìng yí gè fángjiān.", exampleVietnamese: "Tôi muốn đặt một phòng." },
      { id: "v_34_4", traditional: "鑰匙", pinyin: "Yàoshi", zhuyin: "ㄧㄠˋ ㄕ˙", vietnamese: "Chìa khóa", partOfSpeech: "Danh từ", exampleTraditional: "這是你的房間鑰匙。", examplePinyin: "Zhè shì nǐ de fángjiān yàoshi.", exampleVietnamese: "Đây là chìa khóa phòng của bạn." },
      { id: "v_34_5", traditional: "退房", pinyin: "Tuìfáng", zhuyin: "ㄊㄨㄟˋ ㄈㄤˊ", vietnamese: "Trả phòng", partOfSpeech: "Động từ", exampleTraditional: "明天我要退房。", examplePinyin: "Míngtiān wǒ yào tuìfáng.", exampleVietnamese: "Ngày mai tôi muốn trả phòng." }
    ],
    sentencePatterns: [
      { traditional: "我想訂房。", pinyin: "Wǒ xiǎng dìng fáng.", zhuyin: "ㄨㄛˇ ㄒㄧㄤˇ ㄉㄧㄥˋ ㄈㄤˊ.", vietnamese: "Tôi muốn đặt phòng.", usage: "Đặt phòng" },
      { traditional: "我要退房。", pinyin: "Wǒ yào tuì fáng.", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄊㄨㄟˋ ㄈㄤˊ.", vietnamese: "Tôi muốn trả phòng.", usage: "Khi rời khỏi khách sạn" }
    ],
    listening: { title: "Tại quầy lễ tân", transcriptTraditional: "A: 你好，我要退房。\nB: 好的，請給我鑰匙。\nA: 給你。", transcriptPinyin: "A: Nǐ hǎo, wǒ yào tuìfáng.\nB: Hǎo de, qǐng gěi wǒ yàoshi.\nA: Gěi nǐ.", transcriptVietnamese: "A: Xin chào, tôi muốn trả phòng.\nB: Vâng, vui lòng đưa tôi chìa khóa.\nA: Của bạn đây.", questions: [{ id: "q1", type: "multiple_choice", question: "Khách hàng muốn làm gì?", options: ["Đặt phòng", "Mua cơm", "Trả phòng", "Mượn chìa khóa"], correctAnswer: "Trả phòng", explanation: "Người khách nói 我要退房 (Tôi muốn trả phòng)." }] },
    reading: { title: "Nghỉ mát", passageTraditional: "週末我們去台北玩。我們住一家很大的飯店。飯店的房間很乾淨。我們很開心。", passagePinyin: "Zhōumò wǒmen qù Táiběi wán. Wǒmen zhù yì jiā hěn dà de fàndiàn. Fàndiàn de fángjiān hěn gānjìng. Wǒmen hěn kāixīn.", passageVietnamese: "Cuối tuần chúng tôi đi Đài Bắc chơi. Chúng tôi ở một khách sạn rất lớn. Phòng của khách sạn rất sạch sẽ. Chúng tôi rất vui.", questions: [{ id: "q1", type: "true_false", question: "Họ ở một căn nhà nhỏ tại Đài Bắc. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Họ ở 一家很大的飯店 (một khách sạn rất lớn)." }] },
    speaking: { promptTraditional: "如果你想訂一個房間，你怎麼說？", promptPinyin: "Rúguǒ nǐ xiǎng dìng yí gè fángjiān, nǐ zěnme shuō?", promptVietnamese: "Nếu bạn muốn đặt 1 phòng, bạn nói thế nào?", sampleAnswerTraditional: "你好，我想訂一個房間。", sampleAnswerPinyin: "Nǐ hǎo, wǒ xiǎng dìng yí gè fángjiān.", sampleAnswerVietnamese: "Xin chào, tôi muốn đặt 1 phòng." },
    writing: { promptVietnamese: "Dịch: 'Đây là chìa khóa phòng của bạn'.", suggestedAnswerTraditional: "這是你的房間鑰匙。", suggestedAnswerPinyin: "Zhè shì nǐ de fángjiān yàoshi.", suggestedAnswerVietnamese: "Đây là chìa khóa phòng của bạn." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Từ '房間' nghĩa là gì?", options: ["Khách sạn", "Cửa hàng", "Phòng", "Chìa khóa"], correctAnswer: "Phòng", explanation: "房間 (Fángjiān) là căn phòng." }]
  },
  {
    id: "lesson_35",
    day: 35,
    title: "Bài 35: Tại Ngân hàng",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Dịch vụ",
    objectives: ["Từ vựng về ngân hàng, đổi tiền", "Giao tiếp cơ bản khi giao dịch"],
    vocabulary: [
      { id: "v_35_1", traditional: "銀行", pinyin: "Yínháng", zhuyin: "ㄧㄣˊ ㄏㄤˊ", vietnamese: "Ngân hàng", partOfSpeech: "Danh từ", exampleTraditional: "我要去銀行。", examplePinyin: "Wǒ yào qù yínháng.", exampleVietnamese: "Tôi muốn đi ngân hàng." },
      { id: "v_35_2", traditional: "換錢", pinyin: "Huàn qián", zhuyin: "ㄏㄨㄢˋ ㄑㄧㄢˊ", vietnamese: "Đổi tiền", partOfSpeech: "Động từ", exampleTraditional: "我想換錢。", examplePinyin: "Wǒ xiǎng huàn qián.", exampleVietnamese: "Tôi muốn đổi tiền." },
      { id: "v_35_3", traditional: "台幣", pinyin: "Táibì", zhuyin: "ㄊㄞˊ ㄅㄧˋ", vietnamese: "Đài tệ", partOfSpeech: "Danh từ", exampleTraditional: "換台幣。", examplePinyin: "Huàn táibì.", exampleVietnamese: "Đổi sang Đài tệ." },
      { id: "v_35_4", traditional: "美金", pinyin: "Měijīn", zhuyin: "ㄇㄟˇ ㄐㄧㄣ", vietnamese: "Đô la Mỹ", partOfSpeech: "Danh từ", exampleTraditional: "我有一百美金。", examplePinyin: "Wǒ yǒu yìbǎi měijīn.", exampleVietnamese: "Tôi có 100 Đô." },
      { id: "v_35_5", traditional: "開戶", pinyin: "Kāihù", zhuyin: "ㄎㄞ ㄏㄨˋ", vietnamese: "Mở tài khoản", partOfSpeech: "Động từ", exampleTraditional: "我要開戶。", examplePinyin: "Wǒ yào kāihù.", exampleVietnamese: "Tôi muốn mở tài khoản ngân hàng." }
    ],
    sentencePatterns: [
      { traditional: "我要換...", pinyin: "Wǒ yào huàn...", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄏㄨㄢˋ...", vietnamese: "Tôi muốn đổi...", usage: "Đổi ngoại tệ" },
      { traditional: "我想開戶。", pinyin: "Wǒ xiǎng kāihù.", zhuyin: "ㄨㄛˇ ㄒㄧㄤˇ ㄎㄞ ㄏㄨˋ.", vietnamese: "Tôi muốn mở tài khoản.", usage: "Giao dịch ngân hàng" }
    ],
    listening: { title: "Giao dịch", transcriptTraditional: "A: 你好，我要換錢。\nB: 好的，你要換台幣嗎？\nA: 是的，我用美金換台幣。", transcriptPinyin: "A: Nǐ hǎo, wǒ yào huàn qián.\nB: Hǎo de, nǐ yào huàn táibì ma?\nA: Shì de, wǒ yòng měijīn huàn táibì.", transcriptVietnamese: "A: Xin chào, tôi muốn đổi tiền.\nB: Vâng, bạn muốn đổi Đài tệ đúng không?\nA: Đúng vậy, tôi dùng đô la Mỹ đổi sang Đài tệ.", questions: [{ id: "q1", type: "multiple_choice", question: "Người khách dùng tiền gì để đổi?", options: ["Việt Nam đồng", "Đô la Mỹ", "Euro", "Yên Nhật"], correctAnswer: "Đô la Mỹ", explanation: "Khách nói: 我用美金換台幣 (Tôi dùng mỹ kim/USD đổi Đài tệ)." }] },
    reading: { title: "Đi ngân hàng", passageTraditional: "今天我去銀行開戶。銀行裡面有很多人。等待的時候，我看了一會兒手機。最後開戶成功了。", passagePinyin: "Jīntiān wǒ qù yínháng kāihù. Yínháng lǐmiàn yǒu hěnduō rén. Děngdài de shíhòu, wǒ kàn le yìhuǐ'r shǒujī. Zuìhòu kāihù chénggōng le.", passageVietnamese: "Hôm nay tôi đi ngân hàng mở tài khoản. Bên trong ngân hàng có rất nhiều người. Trong lúc chờ đợi, tôi xem điện thoại một lát. Cuối cùng cũng mở tài khoản thành công.", questions: [{ id: "q1", type: "true_false", question: "Ngân hàng hôm nay không có ai. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Sai", explanation: "Đoạn văn viết 銀行裡面有很多人 (Trong ngân hàng có rất nhiều người)." }] },
    speaking: { promptTraditional: "如果你去銀行想換錢，你怎麼說？", promptPinyin: "Rúguǒ nǐ qù yínháng xiǎng huànqián, nǐ zěnme shuō?", promptVietnamese: "Nếu đến ngân hàng muốn đổi tiền, bạn nói thế nào?", sampleAnswerTraditional: "你好，我要換錢。", sampleAnswerPinyin: "Nǐ hǎo, wǒ yào huàn qián.", sampleAnswerVietnamese: "Xin chào, tôi muốn đổi tiền." },
    writing: { promptVietnamese: "Dịch: 'Tôi muốn đổi Đài tệ'.", suggestedAnswerTraditional: "我要換台幣。", suggestedAnswerPinyin: "Wǒ yào huàn táibì.", suggestedAnswerVietnamese: "Tôi muốn đổi đài tệ." },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Đài tệ tiếng Trung là gì?", options: ["美金", "台幣", "人民幣", "銀行"], correctAnswer: "台幣", explanation: "台幣 (Táibì) là Đài tệ." }]
  },
  {
    id: "lesson_36",
    day: 36,
    title: "Bài 36: Tại Bưu điện",
    level: "beginner",
    stage: "CHẶNG 4: DU LỊCH & ĐỜI SỐNG",
    topic: "Dịch vụ",
    objectives: ["Từ vựng về bưu điện", "Cách gửi thư, gửi bưu kiện"],
    vocabulary: [
      { id: "v_36_1", traditional: "郵局", pinyin: "Yóujú", zhuyin: "ㄧㄡˊ ㄐㄩˊ", vietnamese: "Bưu điện", partOfSpeech: "Danh từ", exampleTraditional: "郵局在哪裡？", examplePinyin: "Yóujú zài nǎlǐ?", exampleVietnamese: "Bưu điện ở đâu?" },
      { id: "v_36_2", traditional: "寄", pinyin: "Jì", zhuyin: "ㄐㄧˋ", vietnamese: "Gửi", partOfSpeech: "Động từ", exampleTraditional: "我要寄東西。", examplePinyin: "Wǒ yào jì dōngxi.", exampleVietnamese: "Tôi muốn gửi đồ." },
      { id: "v_36_3", traditional: "信", pinyin: "Xìn", zhuyin: "ㄒㄧㄣˋ", vietnamese: "Thư", partOfSpeech: "Danh từ", exampleTraditional: "寄信", examplePinyin: "Jì xìn", exampleVietnamese: "Gửi thư" },
      { id: "v_36_4", traditional: "包裹", pinyin: "Bāoguǒ", zhuyin: "ㄅㄠ ㄍㄨㄛˇ", vietnamese: "Bưu kiện", partOfSpeech: "Danh từ", exampleTraditional: "我有一個包裹。", examplePinyin: "Wǒ yǒu yí gè bāoguǒ.", exampleVietnamese: "Tôi có một bưu kiện." },
      { id: "v_36_5", traditional: "越南", pinyin: "Yuènán", zhuyin: "ㄩㄝˋ ㄋㄢˊ", vietnamese: "Việt Nam", partOfSpeech: "Danh từ", exampleTraditional: "我要寄到越南。", examplePinyin: "Wǒ yào jì dào Yuènán.", exampleVietnamese: "Tôi muốn gửi đến Việt Nam." }
    ],
    sentencePatterns: [
      { traditional: "我要寄...到...", pinyin: "Wǒ yào jì... dào...", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄐㄧˋ... ㄉㄠˋ...", vietnamese: "Tôi muốn gửi... đến...", usage: "Gửi đồ" }
    ],
    listening: { title: "Gửi bưu kiện", transcriptTraditional: "A: 你好，我要寄這個包裹。\nB: 寄到哪裡？\nA: 寄到越南。請問多少錢？", transcriptPinyin: "A: Nǐ hǎo, wǒ yào jì zhège bāoguǒ.\nB: Jì dào nǎlǐ?\nA: Jì dào Yuènán. Qǐngwèn duōshǎo qián?", transcriptVietnamese: "A: Xin chào, tôi muốn gửi bưu kiện này.\nB: Gửi đi đâu?\nA: Gửi tới Việt Nam. Xin hỏi bao nhiêu tiền?", questions: [{ id: "q1", type: "multiple_choice", question: "Vị khách muốn gửi gói hàng tới đâu?", options: ["Mỹ", "Đài Loan", "Việt Nam", "Trung Quốc"], correctAnswer: "Việt Nam", explanation: "Khách nói 寄到越南 (Gửi đến Việt Nam)." }] },
    reading: { title: "Thư của bạn bè", passageTraditional: "今天我去郵局。我要寄信給我的好朋友。他在美國工作。郵局的人很好。", passagePinyin: "Jīntiān wǒ qù yóujú. Wǒ yào jì xìn gěi wǒ de hǎo péngyǒu. Tā zài Měiguó gōngzuò. Yóujú de rén hěn hǎo.", passageVietnamese: "Hôm nay tôi tới bưu điện. Tôi muốn gửi thư cho người bạn tốt của tôi. Cậu ấy đang làm việc ở Mỹ. Nhân viên bưu điện rất tốt bụng.", questions: [{ id: "q1", type: "true_false", question: "Bạn của người viết đang sống ở Mỹ. (Đúng/Sai)", options: ["Đúng", "Sai"], correctAnswer: "Đúng", explanation: "Đoạn văn viết 他在美國工作 (Người đó làm việc ở Mỹ)." }] },
    speaking: { promptTraditional: "你想把包裹寄到越南，怎麼跟郵局的人說？", promptPinyin: "Nǐ xiǎng bǎ bāoguǒ jì dào Yuènán, zěnme gēn yóujú de rén shuō?", promptVietnamese: "Bạn muốn bưu kiện gửi tới Việt Nam, nói với nhân viên thế nào?", sampleAnswerTraditional: "你好，我要寄包裹到越南。", sampleAnswerPinyin: "Nǐ hǎo, wǒ yào jì bāoguǒ dào Yuènán.", sampleAnswerVietnamese: "Xin chào, tôi muốn gửi bưu kiện đi Việt Nam." },
    writing: { promptVietnamese: "Viết: 'Gửi thư'", suggestedAnswerTraditional: "寄信", suggestedAnswerPinyin: "Jì xìn", suggestedAnswerVietnamese: "Gửi thư" },
    quiz: [{ id: "q1", type: "multiple_choice", question: "Bưu điện tiếng Trung là gì?", options: ["銀行", "餐廳", "郵局", "學校"], correctAnswer: "郵局", explanation: "郵局 (Yóujú) là bưu điện." }]
  }
];
