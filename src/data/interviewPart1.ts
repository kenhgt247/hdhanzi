import { InterviewQuestion } from '../types/interview';

export const interviewPart1: InterviewQuestion[] = [
  // I. GIỚI THIỆU BẢN THÂN (1–10)
  {
    id: 'q1', category: 'GIỚI THIỆU BẢN THÂN',
    question: '請做個自我介紹。', pinyin: 'Qǐng zuò gè zìwǒ jièshào.', vietnamese: 'Hãy giới thiệu bản thân.',
    suggestions: ['Nói tên, tuổi, quê quán.', 'Tính cách cá nhân.', 'Khát vọng du học Đài Loan.'],
    sampleResponse: '你好，我叫___，今年___歲。我來自越南。我是一個認真、有耐心的人，非常希望能去台灣留學。'
  },
  {
    id: 'q2', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你的家有幾個人？', pinyin: 'Nǐ de jiā yǒu jǐ gè rén?', vietnamese: 'Gia đình bạn có mấy người?',
    suggestions: ['Liệt kê các thành viên trong gia đình.'],
    sampleResponse: '我家有___個人：爸爸、媽媽、___和我。'
  },
  {
    id: 'q3', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你父母做什麼工作？', pinyin: 'Nǐ fùmǔ zuò shénme gōngzuò?', vietnamese: 'Bố mẹ bạn làm nghề gì?',
    suggestions: ['Nêu nghề nghiệp của bố mẹ.', 'Khẳng định khả năng tài chính.'],
    sampleResponse: '我爸爸媽媽是___。他們完全有能力支持我留學。'
  },
  {
    id: 'q4', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你的興趣是什麼？', pinyin: 'Nǐ de xìngqù shì shénme?', vietnamese: 'Sở thích của bạn là gì?',
    suggestions: ['Kể 1-2 sở thích tích cực (đọc sách, nghe nhạc, thể thao).'],
    sampleResponse: '我的興趣是看書和聽音樂。'
  },
  {
    id: 'q5', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你出國過了嗎？', pinyin: 'Nǐ chūguóguò le ma?', vietnamese: 'Bạn có từng đi nước ngoài chưa?',
    suggestions: ['Trả lời thành thật.', 'Nếu chưa, nói Đài Loan là nơi đầu tiên muốn đến.'],
    sampleResponse: '我還沒出國過，台灣是我第一個想去的地方。'
  },
  {
    id: 'q6', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你的個性怎麼樣？', pinyin: 'Nǐ de gèxìng zěnmeyàng?', vietnamese: 'Tính cách của bạn như thế nào?',
    suggestions: ['Chăm chỉ, kiên nhẫn, dễ thích nghi.'],
    sampleResponse: '我很認真、有耐心，而且適應力很強。'
  },
  {
    id: 'q7', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你有什麼優點？', pinyin: 'Nǐ yǒu shénme yōudiǎn?', vietnamese: 'Bạn có điểm mạnh gì?',
    suggestions: ['Tinh thần tự học.', 'Trách nhiệm cao.'],
    sampleResponse: '我很有責任感，並且有很強的自學能力。'
  },
  {
    id: 'q8', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你的缺點是什麼？', pinyin: 'Nǐ de quēdiǎn shì shénme?', vietnamese: 'Điểm yếu của bạn là gì?',
    suggestions: ['Ít nói nhưng đang cải thiện.'],
    sampleResponse: '我比較少話，但我現在正在努力改善，讓自己更懂得溝通。'
  },
  {
    id: 'q9', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你曾經離開家人在外生活過嗎？', pinyin: 'Nǐ céngjīng líkāi jiārén zài wài shēnghuóguò ma?', vietnamese: 'Bạn đã từng sống xa gia đình chưa?',
    suggestions: ['Chưa nhưng đã chuẩn bị tâm lý tự lập.'],
    sampleResponse: '還沒，但我已經做好獨立生活的心理準備。'
  },
  {
    id: 'q10', category: 'GIỚI THIỆU BẢN THÂN',
    question: '你平常生活獨立嗎？', pinyin: 'Nǐ píngcháng shēnghuó dúlì ma?', vietnamese: 'Bạn có tự lập trong sinh hoạt hằng ngày không?',
    suggestions: ['Có, biết tự chăm sóc bản thân.', 'Biết quản lý thời gian.'],
    sampleResponse: '是的，我會自己照顧自己，也能好好管理時間。'
  },

  // II. LÝ DO – ĐỘNG LỰC DU HỌC (11–25)
  {
    id: 'q11', category: 'LÝ DO DU HỌC',
    question: '你為什麼想出國留學？', pinyin: 'Nǐ wèishéme xiǎng chūguó liúxué?', vietnamese: 'Vì sao bạn muốn du học?',
    suggestions: ['Nâng cao ngoại ngữ.', 'Môi trường học tập tốt hơn.'],
    sampleResponse: '因為我想提升外語能力，並在更好的環境中學習。'
  },
  {
    id: 'q12', category: 'LÝ DO DU HỌC',
    question: '為什麼選擇台灣而不是其他國家？', pinyin: 'Wèishéme xuǎnzé Táiwān ér bùshì qítā guójiā?', vietnamese: 'Tại sao chọn Đài Loan mà không phải nước khác?',
    suggestions: ['Đài Loan an toàn, chi phí hợp lý.', 'Giáo dục chất lượng.'],
    sampleResponse: '因為台灣很安全，學費合理，而且教育品質很好。'
  },
  {
    id: 'q13', category: 'LÝ DO DU HỌC',
    question: '為什麼高中畢業後就想馬上留學？', pinyin: 'Wèishéme gāozhōng bìyè hòu jiù xiǎng mǎshàng liúxué?', vietnamese: 'Tại sao muốn học ngay sau THPT?',
    suggestions: ['Tiếp tục học khi kiến thức còn mới.', 'Có động lực mạnh.'],
    sampleResponse: '我想趁著學習動力最強的時候繼續進修。'
  },
  {
    id: 'q14', category: 'LÝ DO DU HỌC',
    question: '為什麼選擇1+4專班？', pinyin: 'Wèishéme xuǎnzé 1+4 zhuānbān?', vietnamese: 'Tại sao chọn chương trình 1+4?',
    suggestions: ['1 năm học tiếng giúp có nền tảng vững chắc để học chuyên ngành.'],
    sampleResponse: '因為第一年先學好中文，可以幫我打好基礎，之後更好地學習專業。'
  },
  {
    id: 'q15', category: 'LÝ DO DU HỌC',
    question: '你了解1+4專班是什麼嗎？', pinyin: 'Nǐ liǎojiě 1+4 zhuānbān shì shénme ma?', vietnamese: 'Bạn hiểu chương trình 1+4 như thế nào?',
    suggestions: ['1 năm học tiếng + 4 năm đại học liên tục.', 'Theo đúng quy định lên chuyên.'],
    sampleResponse: '就是第一年全力學中文，達到標準後，接著讀四年的大學專業課程。'
  },
  {
    id: 'q16', category: 'LÝ DO DU HỌC',
    question: '你留學最大的目標是什麼？', pinyin: 'Nǐ liúxué zuìdà de mùbiāo shì shénme?', vietnamese: 'Mục tiêu lớn nhất khi đi du học của bạn là gì?',
    suggestions: ['Thành thạo tiếng Trung và tốt nghiệp đúng hạn.'],
    sampleResponse: '精通中文，並如期順利大學畢業。'
  },
  {
    id: 'q17', category: 'LÝ DO DU HỌC',
    question: '出國留學對你的未來有什麼幫助？', pinyin: 'Chūguó liúxué duì nǐ de wèilái yǒu shénme bāngzhù?', vietnamese: 'Du học giúp ích gì cho bạn trong tương lai?',
    suggestions: ['Mở rộng cơ hội nghề nghiệp và tư duy.'],
    sampleResponse: '能幫我擴充視野，並增加未來的就業機會。'
  },
  {
    id: 'q18', category: 'LÝ DO DU HỌC',
    question: '你為什麼這麼有決心要去留學？', pinyin: 'Nǐ wèishéme zhème yǒu juéxīn yào qù liúxué?', vietnamese: 'Tại sao bạn quyết tâm đi du học?',
    suggestions: ['Muốn thay đổi bản thân và phát triển lâu dài.'],
    sampleResponse: '因為我渴望改變自己，為長遠的未來打拼。'
  },
  {
    id: 'q19', category: 'LÝ DO DU HỌC',
    question: '如果這次簽證沒過怎麼辦？', pinyin: 'Rúguǒ zhè cì qiānzhèng méi guò zěnme bàn?', vietnamese: 'Nếu trượt visa thì sao?',
    suggestions: ['Sẽ tiếp tục học tiếng và nộp lại khi tốt hơn.'],
    sampleResponse: '我會留在越南繼續學中文，等準備得更好再重新申請。'
  },
  {
    id: 'q20', category: 'LÝ DO DU HỌC',
    question: '你知道留學會遇到什麼困難嗎？', pinyin: 'Nǐ zhīdào liúxué huì yùdào shénme kùnnán ma?', vietnamese: 'Bạn có biết du học có khó khăn gì không?',
    suggestions: ['Ngôn ngữ và tự lập, nhưng đã chuẩn bị.'],
    sampleResponse: '我知道語言和獨立生活會有挑戰，但我已經做好準備了。'
  },
  {
    id: 'q21', category: 'LÝ DO DU HỌC',
    question: '出國留學你最擔心什麼？', pinyin: 'Chūguó liúxué nǐ zuì dānxīn shénme?', vietnamese: 'Bạn sợ nhất điều gì khi đi du học?',
    suggestions: ['Lo không quen môi trường, nhưng sẽ cố gắng thích nghi.'],
    sampleResponse: '一開始可能不太習慣新環境，但我會努力盡快適應。'
  },
  {
    id: 'q22', category: 'LÝ DO DU HỌC',
    question: '在台灣學習和在越南有什麼不同？', pinyin: 'Zài Táiwān xuéxí hé zài Yuènán yǒu shénme bùtóng?', vietnamese: 'Điểm khác biệt giữa du học và học ở Việt Nam là gì?',
    suggestions: ['Môi trường quốc tế và yêu cầu tự học cao hơn.'],
    sampleResponse: '台灣有更國際化的環境，而且非常注重學生的自主學習能力。'
  },
  {
    id: 'q23', category: 'LÝ DO DU HỌC',
    question: '出發前你做了什麼心理準備？', pinyin: 'Chūfā qián nǐ zuòle shénme xīnlǐ zhǔnbèi?', vietnamese: 'Bạn chuẩn bị tâm lý như thế nào trước khi đi?',
    suggestions: ['Rèn tính tự lập và tìm hiểu trường.'],
    sampleResponse: '我一直在鍛鍊自己獨立，並詳細了解了學校的資訊。'
  },
  {
    id: 'q24', category: 'LÝ DO DU HỌC',
    question: '一個人生活你會害怕嗎？', pinyin: 'Yīgè rén shēnghuó nǐ huì hàipà ma?', vietnamese: 'Bạn có lo lắng khi sống một mình không?',
    suggestions: ['Hơi lo nhưng tin sẽ thích nghi nhanh.'],
    sampleResponse: '有一點點，但我相信自己很快就能適應。'
  },
  {
    id: 'q25', category: 'LÝ DO DU HỌC',
    question: '你留學純粹是為了讀書，還是有其他目的？', pinyin: 'Nǐ liúxué chúncuì shì wèile dúshū, háishì yǒu qítā mùdì?', vietnamese: 'Bạn đi du học vì mục tiêu học tập hay mục tiêu khác?',
    suggestions: ['Hoàn toàn vì học tập và phát triển nghề nghiệp.'],
    sampleResponse: '我完全是為了學習和未來的職涯發展。'
  },

  // III. TIẾNG TRUNG – NGÔN NGỮ (26–40)
  {
    id: 'q26', category: 'NGÔN NGỮ',
    question: '你學中文多久了？', pinyin: 'Nǐ xué zhōngwén duōjiǔ le?', vietnamese: 'Bạn học tiếng Trung bao lâu rồi?',
    suggestions: ['Nói thời gian học thực tế (vài tháng).'],
    sampleResponse: '我學中文大約___個月/年了。'
  },
  {
    id: 'q27', category: 'NGÔN NGỮ',
    question: '為什麼要學中文？', pinyin: 'Wèishéme yào xué zhōngwén?', vietnamese: 'Tại sao bạn học tiếng Trung?',
    suggestions: ['Ngôn ngữ quan trọng, hỗ trợ nghề nghiệp.'],
    sampleResponse: '因為中文是很重要的語言，對我未來的職業很有幫助。'
  },
  {
    id: 'q28', category: 'NGÔN NGỮ',
    question: '你考過TOCFL了嗎？', pinyin: 'Nǐ kǎoguò TOCFL le ma?', vietnamese: 'Bạn đã thi TOCFL chưa?',
    suggestions: ['Chưa/đã thi và sẽ cố gắng đạt bậc cao hơn.'],
    sampleResponse: '我還沒考 / 我考過了，接下來會努力考取更高的級別。'
  },
  {
    id: 'q29', category: 'NGÔN NGỮ',
    question: '第一年學中文的目標是什麼？', pinyin: 'Dì yī nián xué zhōngwén de mùbiāo shì shénme?', vietnamese: 'Mục tiêu tiếng Trung của bạn trong 1 năm học tiếng?',
    suggestions: ['Đạt TOCFL B1/B2 để lên chuyên ngành.'],
    sampleResponse: '希望能達到TOCFL B1或B2，順利進入專業課程。'
  },
  {
    id: 'q30', category: 'NGÔN NGỮ',
    question: '你計畫怎麼學中文？', pinyin: 'Nǐ jìhuà zěnme xué zhōngwén?', vietnamese: 'Bạn dự định học tiếng Trung như thế nào?',
    suggestions: ['Theo học trên lớp, tự ôn từ vựng mỗi ngày.'],
    sampleResponse: '我會上課認真聽講，每天自己多背單詞和複習。'
  },
  {
    id: 'q31', category: 'NGÔN NGỮ',
    question: '你覺得自己目前的中文程度在哪裡？', pinyin: 'Nǐ juédé zìjǐ mùqián de zhōngwén chéngdù zài nǎlǐ?', vietnamese: 'Bạn biết trình độ tiếng Trung hiện tại của mình ở mức nào?',
    suggestions: ['Mới bắt đầu / A1, cần cố gắng.'],
    sampleResponse: '我現在還在初級階段/A1左右，還需要很多努力。'
  },
  {
    id: 'q32', category: 'NGÔN NGỮ',
    question: '你打算怎麼提升中文能力？', pinyin: 'Nǐ dǎsuàn zěnme tíshēng zhōngwén nénglì?', vietnamese: 'Làm sao để bạn cải thiện tiếng Trung?',
    suggestions: ['Luyện nghe nói hằng ngày, giao tiếp với người bản xứ.'],
    sampleResponse: '我會每天練習聽力和口語，並多跟台灣老師、同學交流。'
  },
  {
    id: 'q33', category: 'NGÔN NGỮ',
    question: '學中文遇到困難時，你會怎麼辦？', pinyin: 'Xué zhōngwén yùdào kùnnán shí, nǐ huì zěnme bàn?', vietnamese: 'Khi gặp khó khăn trong học tiếng, bạn làm gì?',
    suggestions: ['Hỏi thầy cô, bạn bè, học thêm qua tài liệu.'],
    sampleResponse: '我會主動請教老師或同學，也會上網找資料學習。'
  },
  {
    id: 'q34', category: 'NGÔN NGỮ',
    question: '你有認識在台灣學中文的人嗎？', pinyin: 'Nǐ yǒu rènshí zài Táiwān xué zhōngwén de rén ma?', vietnamese: 'Bạn có quen ai đang học tiếng Trung ở Đài Loan không?',
    suggestions: ['Có/chưa, nhưng đã tìm hiểu kỹ.'],
    sampleResponse: '有/沒有，但我已經在網路上查了很多相關資訊。'
  },
  {
    id: 'q35', category: 'NGÔN NGỮ',
    question: '你能自學中文，還是需要老師指導？', pinyin: 'Nǐ néng zìxué zhōngwén, háishì xūyào lǎoshī zhǐdǎo?', vietnamese: 'Bạn có thể tự học tiếng Trung hay cần người hướng dẫn?',
    suggestions: ['Có thể tự học nhưng cần giáo viên sửa lỗi.'],
    sampleResponse: '我能自學，但也很需要老師幫我糾正發音和文法錯誤。'
  },
  {
    id: 'q36', category: 'NGÔN NGỮ',
    question: '你認為進專業課前先學中文重要嗎？', pinyin: 'Nǐ rènwéi jìn zhuānyè kè qián xiān xué zhōngwén zhòngyào ma?', vietnamese: 'Bạn nghĩ học tiếng trước khi vào chuyên ngành có quan trọng không?',
    suggestions: ['Rất quan trọng để hiểu bài.'],
    sampleResponse: '非常重要，這樣我才能聽懂專業課的內容，跟上進度。'
  },
  {
    id: 'q37', category: 'NGÔN NGỮ',
    question: '你知道升讀大學的中文要求是什麼嗎？', pinyin: 'Nǐ zhīdào shēng dú dàxué de zhōngwén yāoqiú shì shénme ma?', vietnamese: 'Bạn biết yêu cầu tiếng Trung để lên đại học là gì không?',
    suggestions: ['Thường yêu cầu TOCFL B1 hoặc B2 tùy trường.'],
    sampleResponse: '我了解，通常需要達到TOCFL B1或B2的標準。'
  },
  {
    id: 'q38', category: 'NGÔN NGỮ',
    question: '考TOCFL會讓你覺得有壓力嗎？', pinyin: 'Kǎo TOCFL huì ràng nǐ juédé yǒu yālì ma?', vietnamese: 'Bạn có áp lực khi phải thi TOCFL không?',
    suggestions: ['Có nhưng sẽ cố gắng đặt mục tiêu rõ ràng.'],
    sampleResponse: '雖然有一點壓力，但我會把它當作學習的動力。'
  },
  {
    id: 'q39', category: 'NGÔN NGỮ',
    question: '你有考到TOCFL B1/B2的計畫嗎？', pinyin: 'Nǐ yǒu kǎo dào TOCFL B1/B2 de jìhuà ma?', vietnamese: 'Bạn có kế hoạch đạt TOCFL B1/B2 không?',
    suggestions: ['Có, đó là mục tiêu năm đầu.'],
    sampleResponse: '有的，那是我第一年的首要目標。'
  },
  {
    id: 'q40', category: 'NGÔN NGỮ',
    question: '你覺得學中文最難的部分是什麼？', pinyin: 'Nǐ juédé xué zhōngwén zuì nán de bùfèn shì shénme?', vietnamese: 'Bạn thấy tiếng Trung khó nhất ở phần nào?',
    suggestions: ['Nghe nói, nhưng sẽ luyện nhiều hơn.'],
    sampleResponse: '我覺得聽力和口說比較難，所以我會花更多時間練習。'
  }
];
