import { InterviewQuestion } from '../types/interview';

export const interviewPart3: InterviewQuestion[] = [
  // VI. TÀI CHÍNH – CHI TIÊU (76–90)
  {
    id: 'q76', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你的留學費用由誰負責？', pinyin: 'Nǐ de liúxué fèiyòng yóu shéi fùzé?', vietnamese: 'Ai tài trợ cho bạn?',
    suggestions: ['Bố mẹ tài trợ toàn bộ.'],
    sampleResponse: '我所有的留學費用都是由我父母支付的。'
  },
  {
    id: 'q77', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你家裡的經濟狀況如何？', pinyin: 'Nǐ jiālǐ de jīngjì zhuàngkuàng rúhé?', vietnamese: 'Thu nhập gia đình bạn thế nào?',
    suggestions: ['Ổn định, hỗ trợ đủ.'],
    sampleResponse: '我家裡的收入很穩定，完全有能力支持我留學。'
  },
  {
    id: 'q78', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '家裡能支撐你五年的留學花費嗎？', pinyin: 'Jiālǐ néng zhīchēng nǐ wǔ nián de liúxué huāfèi ma?', vietnamese: 'Gia đình có đủ khả năng lo 5 năm du học không?',
    suggestions: ['Có, gia đình đã chuẩn bị.'],
    sampleResponse: '可以的，我父母已經準備好這筆教育基金了。'
  },
  {
    id: 'q79', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你知道在台灣每月的生活費大概多少嗎？', pinyin: 'Nǐ zhīdào zài Táiwān měi yuè de shēnghuófèi dàgài duōshǎo ma?', vietnamese: 'Bạn biết chi phí sinh hoạt ở Đài Loan bao nhiêu không?',
    suggestions: ['Khoảng 8,000–12,000 NTD.'],
    sampleResponse: '據我所知，大約是每個月八千到一萬二台幣左右。'
  },
  {
    id: 'q80', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '如果學費漲了10到20%，遇到這種情況怎麼辦？', pinyin: 'Rúguǒ xuéfèi zhǎngle 10 dào 20%, yù dào zhè zhǒng qíngkuàng zěnme bàn?', vietnamese: 'Nếu học phí tăng 10–20% thì sao?',
    suggestions: ['Gia đình vẫn chi trả được.'],
    sampleResponse: '就算學費調漲，我父母還是有能力負擔的。'
  },
  {
    id: 'q81', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你有儲蓄的習慣嗎？', pinyin: 'Nǐ yǒu chúxù de xíguàn ma?', vietnamese: 'Bạn có kế hoạch tiết kiệm không?',
    suggestions: ['Có, chi tiêu hợp lý.'],
    sampleResponse: '有的，我會合理規畫開支，絕不浪費。'
  },
  {
    id: 'q82', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你打算每個月怎麼分配生活費？', pinyin: 'Nǐ dǎsuàn měi yuè zěnme fēnpèi shēnghuófèi?', vietnamese: 'Bạn dự định chi tiêu hàng tháng thế nào?',
    suggestions: ['Chi tiêu đồ thiết yếu, giới hạn rõ.'],
    sampleResponse: '我會先支付住宿和伙食等必需品，並嚴格控制其他花費。'
  },
  {
    id: 'q83', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你知道在台灣怎麼開戶嗎？', pinyin: 'Nǐ zhīdào zài Táiwān zěnme kāihù ma?', vietnamese: 'Bạn biết cách mở tài khoản ngân hàng không?',
    suggestions: ['Biết cơ bản và sẽ nhờ trường.'],
    sampleResponse: '我知道基本流程，到時候也會請學校老師協助我辦理。'
  },
  {
    id: 'q84', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你打算在台灣打工嗎？', pinyin: 'Nǐ dǎsuàn zài Táiwān dǎgōng ma?', vietnamese: 'Bạn có định đi làm thêm không?',
    suggestions: ['Năm đầu không, sau đó xin phép.'],
    sampleResponse: '第一年我會專注學中文，之後如果規定允許，我想打工累積經驗。'
  },
  {
    id: 'q85', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你知道外國學生打工需要工作證嗎？', pinyin: 'Nǐ zhīdào wàiguó xuéshēng dǎgōng xūyào gōngzuòzhèng ma?', vietnamese: 'Bạn biết muốn đi làm thêm phải có giấy phép không?',
    suggestions: ['Biết, phải xin giấy phép.'],
    sampleResponse: '我知道，必須先向政府申請工作許可證才能打工。'
  },
  {
    id: 'q86', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你知道每週最高可以打工幾小時嗎？', pinyin: 'Nǐ zhīdào měi zhōu zuìgāo kěyǐ dǎgōng jǐ xiǎoshí ma?', vietnamese: 'Bạn biết số giờ làm thêm tối đa mỗi tuần là bao nhiêu?',
    suggestions: ['Khoảng 20 giờ/tuần.'],
    sampleResponse: '我知道，平時每星期的打工時間不能超過20個小時。'
  },
  {
    id: 'q87', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你有計畫申請獎學金嗎？', pinyin: 'Nǐ yǒu jìhuà shēnqǐng jiǎngxuéjīn ma?', vietnamese: 'Bạn có dự định xin học bổng không?',
    suggestions: ['Có, khi đạt điều kiện.'],
    sampleResponse: '有的，只要我的成績符合標準，我就會去申請。'
  },
  {
    id: 'q88', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你有準備預備金嗎？', pinyin: 'Nǐ yǒu zhǔnbèi yùbèijīn ma?', vietnamese: 'Bạn có kế hoạch dùng tiền dự phòng không?',
    suggestions: ['Có, cho việc khẩn cấp.'],
    sampleResponse: '有的，我父母有幫我準備一筆應急用的預備金。'
  },
  {
    id: 'q89', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '如果在台灣生病了怎麼辦？', pinyin: 'Rúguǒ zài Táiwān shēngbìngle zěnme bàn?', vietnamese: 'Nếu bị ốm ở Đài Loan thì sao?',
    suggestions: ['Báo thầy cô và đi khám.'],
    sampleResponse: '我會立刻通知學校老師，並去診所或醫院看醫生。'
  },
  {
    id: 'q90', category: 'TÀI CHÍNH & CHI TIÊU',
    question: '你有買醫療保險嗎？', pinyin: 'Nǐ yǒu mǎi yīliáo bǎoxiǎn ma?', vietnamese: 'Bạn có mua bảo hiểm y tế không?',
    suggestions: ['Có, để đảm bảo sức khỏe khi học tập.'],
    sampleResponse: '有，學校一般會幫國際學生加入健康保險，這樣看病就有保障。'
  },

  // VII. LUẬT PHÁP – QUY ĐỊNH (91–100)
  {
    id: 'q91', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道外籍生不能隨便輟學嗎？', pinyin: 'Nǐ zhīdào wàijí shēng bùnéng suíbiàn chuòxué ma?', vietnamese: 'Bạn biết học sinh quốc tế không được bỏ học không?',
    suggestions: ['Biết và sẽ tuân thủ.'],
    sampleResponse: '我知道，我一定會遵守規定完成學業。'
  },
  {
    id: 'q92', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '如果違反法律被遣返怎麼辦？', pinyin: 'Rúguǒ wéifǎn fǎlǜ bèi qiǎnfǎn zěnme bàn?', vietnamese: 'Nếu vi phạm luật và bị trục xuất thì sao?',
    suggestions: ['Tránh vi phạm và luôn tuân thủ luật.'],
    sampleResponse: '我會嚴格遵守台灣的法律，絕對不會讓這種事發生。'
  },
  {
    id: 'q93', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道出席率規定的百分比嗎？', pinyin: 'Nǐ zhīdào chūxílǜ guīdìng de bǎifēnbǐ ma?', vietnamese: 'Bạn biết quy định điểm danh bao nhiêu phần trăm không?',
    suggestions: ['Thường 80% trở lên, đảm bảo đi đầy đủ.'],
    sampleResponse: '通常是80%以上，我會確保全勤。'
  },
  {
    id: 'q94', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你會遵守宿舍的規定嗎？', pinyin: 'Nǐ huì zūnshǒu sùshè de guīdìng ma?', vietnamese: 'Bạn có tuân thủ nội quy ký túc xá không?',
    suggestions: ['Có, luôn tôn trọng quy định.'],
    sampleResponse: '會的，我一定會尊重並遵守宿舍的所有規定。'
  },
  {
    id: 'q95', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道進出宿舍的規定嗎？', pinyin: 'Nǐ zhīdào jìnchū sùshè de guīdìng ma?', vietnamese: 'Bạn biết quy định ra vào ký túc không?',
    suggestions: ['Phải quẹt thẻ và tuân thủ giờ giấc.'],
    sampleResponse: '我知道進出需要刷卡，而且要注意門禁時間。'
  },
  {
    id: 'q96', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道留學生的打工法律嗎？', pinyin: 'Nǐ zhīdào liúxuéshēng de dǎgōng fǎlǜ ma?', vietnamese: 'Bạn biết luật làm thêm dành cho du học sinh không?',
    suggestions: ['Chỉ làm khi có giấy phép.'],
    sampleResponse: '知道，必須有工作許可證才能合法打工。'
  },
  {
    id: 'q97', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道居留證(ARC)該怎麼使用嗎？', pinyin: 'Nǐ zhīdào jūliúzhèng (ARC) gāi zěnme shǐyòng ma?', vietnamese: 'Bạn biết sử dụng thẻ cư trú ARC như thế nào không?',
    suggestions: ['Dùng để lưu trú, làm thêm, thủ tục.'],
    sampleResponse: 'ARC就像台灣的身分證，辦理各種手續或打工時都會用到。'
  },
  {
    id: 'q98', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你了解台灣的氣候嗎？', pinyin: 'Nǐ liǎojiě Táiwān de qìhòu ma?', vietnamese: 'Bạn biết thời tiết Đài Loan ra sao?',
    suggestions: ['Khí hậu ấm, mưa nhiều, bốn mùa rõ rệt.'],
    sampleResponse: '台灣氣候滿溫暖的，常下雨，而且四季分明。'
  },
  {
    id: 'q99', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你了解台灣的文化嗎？', pinyin: 'Nǐ liǎojiě Táiwān de wénhuà ma?', vietnamese: 'Bạn có hiểu văn hóa Đài Loan không?',
    suggestions: ['Lịch sự, tôn trọng hàng xóm, trật tự.'],
    sampleResponse: '我知道台灣人很有禮貌，也很注重公共秩序。'
  },
  {
    id: 'q100', category: 'LUẬT PHÁP & QUY ĐỊNH',
    question: '你知道在台灣生活有哪些禁忌嗎？', pinyin: 'Nǐ zhīdào zài Táiwān shēnghuó yǒu nǎxiē jìnjì ma?', vietnamese: 'Bạn biết những điều cấm kỵ khi sống ở Đài Loan không?',
    suggestions: ['Không gây ồn, giữ vệ sinh, không vi phạm pháp luật.'],
    sampleResponse: '知道，比如半夜不要大聲喧嘩、要做好垃圾分類等。'
  }
];
