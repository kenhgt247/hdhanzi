import { InterviewQuestion } from '../types/interview';

export const interviewLanguage: InterviewQuestion[] = [
  {
    id: 'l1', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '請自我介紹一下？', pinyin: 'Qǐng zìwǒ jièshào yīxià?', vietnamese: 'Xin hãy tự giới thiệu?',
    suggestions: ['Nói tên, tuổi, quê quán.', 'Thông tin về các thành viên gia đình.'],
    sampleResponse: '你好，我叫___，今年___歲，目前居住在越南___。我家有___口人：我的父母、___和我。'
  },
  {
    id: 'l2', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你什麼時候高中畢業的？', pinyin: 'Nǐ shénme shíhòu gāozhōng bìyè de?', vietnamese: 'Bạn tốt nghiệp trung học khi nào?',
    suggestions: ['Nói rõ năm tốt nghiệp.'],
    sampleResponse: '我於___年高中畢業。'
  },
  {
    id: 'l3', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '高中畢業後你做了什麼？為什麼沒有立即出國留學？', pinyin: 'Gāozhōng bìyè hòu nǐ zuòle shénme? Wèishéme méiyǒu lìjí chūguó liúxué?', vietnamese: 'Sau khi tốt nghiệp trung học, bạn đã làm gì? Tại sao bạn không đi du học ngay lập tức?',
    suggestions: ['Trải nghiệm công việc thực tế, tìm định hướng.', 'Nói về việc muốn đi Đài Loan sau khi có trải nghiệm.'],
    sampleResponse: '高中畢業後，我做了一些兼職工作以累積經驗。在那裡，我有機會體驗到與台灣相關的工作環境，這也是我選擇台灣作為留學目的地的原因。'
  },
  {
    id: 'l4', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你在哪裡學習中文，學習多久了？', pinyin: 'Nǐ zài nǎlǐ xuéxí zhōngwén, xuéxí duōjiǔle?', vietnamese: 'Bạn học tiếng Trung ở đâu và đã học được bao lâu rồi?',
    suggestions: ['Nêu tên trung tâm và thời gian học.'],
    sampleResponse: '我在___中心學習了大約___個月的中文。'
  },
  {
    id: 'l5', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你每天學習中文多久？', pinyin: 'Nǐ měitiān xuéxí zhōngwén duōjiǔ?', vietnamese: 'Mỗi ngày bạn học tiếng Trung bao lâu?',
    suggestions: ['Nói thời gian chân thực, ví dụ 4 tiếng/ngày.'],
    sampleResponse: '我每天學習中文大約4個小時。'
  },
  {
    id: 'l6', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你現在和誰住在一起？', pinyin: 'Nǐ xiànzài hé shéi zhù zài yīqǐ?', vietnamese: 'Bạn hiện đang sống cùng ai?',
    suggestions: ['Sống cùng gia đình/bố mẹ.'],
    sampleResponse: '我現在和父母住在一起。'
  },
  {
    id: 'l7', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你父母是做什麼工作的？他們每月收入多少？', pinyin: 'Nǐ fùmǔ shì zuò shénme gōngzuò de? Tāmen měi yuè shōurù duōshǎo?', vietnamese: 'Bố mẹ bạn làm nghề gì? Thu nhập hàng tháng của họ là bao nhiêu?',
    suggestions: ['Nêu nghề nghiệp của bố mẹ', 'Nêu mức thu nhập bằng VNĐ.'],
    sampleResponse: '我父母是___，一個月總收入大概___萬越南盾。'
  },
  {
    id: 'l8', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你父母的生日是什麼時候？他們今年多大了？', pinyin: 'Nǐ fùmǔ de shēngrì shì shénme shíhòu? Tāmen jīnnián duōdàle?', vietnamese: 'Sinh nhật của bố mẹ bạn là khi nào? Năm nay họ bao nhiêu tuổi?',
    suggestions: ['Nắm rõ năm sinh, tuổi tác của cha mẹ.'],
    sampleResponse: '我父親出生於___年（今年___歲），我母親出生於___年（今年___歲）。'
  },
  {
    id: 'l9', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你的家人支持你出國留學的決定嗎？', pinyin: 'Nǐ de jiārén zhīchí nǐ chūguó liúxué de juédìng ma?', vietnamese: 'Gia đình bạn có ủng hộ quyết định du học của bạn không?',
    suggestions: ['Rất ủng hộ và khuyến khích.'],
    sampleResponse: '我的家人非常支持我出國留學的決定，並鼓勵我在一個全新的環境中學習。'
  },
  {
    id: 'l10', category: 'THÔNG TIN CÁ NHÂN & GIA ĐÌNH',
    question: '你曾在越南的大學就讀過嗎？你會說其他語言嗎？', pinyin: 'Nǐ céng zài yuènán de dàxué jiùdú guò ma? Nǐ huì shuō qítā yǔyán ma?', vietnamese: 'Bạn đã từng học đại học ở Việt Nam chưa? Bạn có nói ngôn ngữ nào khác không?',
    suggestions: ['Trả lời theo thực tế cá nhân.'],
    sampleResponse: '我沒有在越南讀過大學。我只會說越南語和中文（會一點點英文）。'
  },
  {
    id: 'l11', category: 'LÝ DO DU HỌC',
    question: '為什麼你選擇去台灣留學？', pinyin: 'Wèishéme nǐ xuǎnzé qù táiwān liúxué?', vietnamese: 'Tại sao bạn chọn đến Đài Loan?',
    suggestions: ['Đất nước phát triển, văn hóa tương đồng.'],
    sampleResponse: '因為台灣是一個發達的國家，文化與越南相近，非常適合我學習和生活。'
  },
  {
    id: 'l12', category: 'LÝ DO DU HỌC',
    question: '你覺得台灣跟越南文化如何相近？', pinyin: 'Nǐ juédé táiwān gēn yuènán wénhuà rúhé xiāngjìn?', vietnamese: 'Văn hóa Đài Loan giống Việt Nam như thế nào?',
    suggestions: ['Cùng ăn Tết Âm Lịch, Tết Trung Thu...', 'Người dân thân thiện.'],
    sampleResponse: '我知道台灣也像越南一樣慶祝農曆新年、中秋節。台灣人民也像越南民眾一樣熱情友善。'
  },
  {
    id: 'l13', category: 'LÝ DO DU HỌC',
    question: '你認為台灣哪方面發達？', pinyin: 'Nǐ rènwéi táiwān nǎ fāngmiàn fādá?', vietnamese: 'Bạn thấy Đài Loan phát triển về mặt nào?',
    suggestions: ['Công nghệ cao (TSMC), xuất khẩu nông sản...', 'Hệ thống giáo dục hoàn thiện.'],
    sampleResponse: '台灣在科技產業（例如TSMC）、農產品出口以及完善的教育體系方面都非常發達。'
  },
  {
    id: 'l14', category: 'LÝ DO DU HỌC',
    question: '你對台灣了解多少？對台灣文化知道什麼？', pinyin: 'Nǐ duì táiwān liǎojiě duōshǎo? Duì táiwān wénhuà zhīdào shénme?', vietnamese: 'Bạn biết gì về Đài Loan và văn hóa Đài Loan?',
    suggestions: ['Ẩm thực phong phú (trà sữa, gà rán...).', 'Cảnh quan đẹp (Hồ Nhật Nguyệt, Dương Minh Sơn).'],
    sampleResponse: '台灣有很多美食，如炸雞、茶飲。風景也很美，例如日月潭和陽明山。有機會我一定會去體驗。'
  },
  {
    id: 'l15', category: 'LÝ DO DU HỌC',
    question: '在越南讀大學不好嗎？為什麼不選擇在越南讀大學？', pinyin: 'Zài yuènán dú dàxué bù hǎo ma? Wèishéme bù xuǎnzé zài yuènán dú dàxué?', vietnamese: 'Học đại học ở Việt Nam không tốt sao? Tại sao không chọn ở VN?',
    suggestions: ['Muốn trải nghiệm môi trường quốc tế.', 'Tăng cường tiếng Trung.'],
    sampleResponse: '在越南讀大學也很好，但我想在國際化的環境中學習，獲得更多實踐機會並提高我的中文水平。'
  },
  {
    id: 'l16', category: 'LÝ DO DU HỌC',
    question: '為什麼不在越南學中文而選擇在台灣學習？', pinyin: 'Wèishéme bù zài yuènán xué zhōngwén ér xuǎnzé zài táiwān xuéxí?', vietnamese: 'Tại sao không học tiếng Trung tại Việt Nam mà lại chọn học tại Đài Loan?',
    suggestions: ['Môi trường giao tiếp bản ngữ (tiếng Trung).', 'Nâng cao khả năng phản xạ.'],
    sampleResponse: '在母語（中文）的環境中學習可以提高我的反應能力，讓我更頻繁地使用中文，有助於全面發展。'
  },
  {
    id: 'l17', category: 'LÝ DO DU HỌC',
    question: '為什麼選擇台灣而不是中國大陸留學？為什麼不選擇其他國家？', pinyin: 'Wèishéme xuǎnzé táiwān ér bù shì zhōngguó dàlù liúxué? Wèishéme bù xuǎnzé qítā guójiā?', vietnamese: 'Tại sao nên chọn Đài Loan thay vì Trung Quốc đại lục hay quốc gia khác?',
    suggestions: ['Giáo dục tốt, môi trường an toàn.', 'Văn hóa tương đồng, ngành nghề phát triển.'],
    sampleResponse: '經過研究，我發現台灣更符合我的目標：優質的教育、安全的生活環境、友善的人民，且某些產業（如媒體）發展完善。'
  },
  {
    id: 'l18', category: 'LÝ DO DU HỌC',
    question: '你去台灣的目的是什麼？', pinyin: 'Nǐ qù táiwān de mùdì shì shénme?', vietnamese: 'Mục đích chuyến đi Đài Loan của bạn là gì?',
    suggestions: ['Du học, nâng cao kiến thức và ngôn ngữ.'],
    sampleResponse: '我去台灣是想要學習，特別是學習___專業，以提升我的專業技能和中文水平。'
  },
  {
    id: 'l19', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '你申請了哪所大學？你是如何了解這所大學的？', pinyin: 'Nǐ shēnqǐngle nǎ suǒ dàxué? Nǐ shì rúhé liǎojiě zhè suǒ dàxué de?', vietnamese: 'Bạn đã nộp đơn vào trường đại học nào? Bạn tìm hiểu về trường qua đâu?',
    suggestions: ['Đọc trên internet, qua bạn bè hoặc trung tâm tư vấn.'],
    sampleResponse: '我申請了___大學。我透過網路搜尋了解到這所大學，發現它有我喜歡的科系，也符合我的職業目標。'
  },
  {
    id: 'l20', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '你對這所學校了解多少？', pinyin: 'Nǐ duì zhè suǒ xuéxiào liǎojiě duōshǎo?', vietnamese: 'Bạn biết bao nhiêu về ngôi trường này?',
    suggestions: ['Lịch sử trường, môi trường quốc tế.', 'Tỷ lệ việc làm cao.'],
    sampleResponse: '我了解___大學是一所知名的大學，國際化程度很高，全英文課程多，而且很重視實務與就業。'
  },
  {
    id: 'l21', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '你選擇什麼科系？想學什麼專業？', pinyin: 'Nǐ xuǎnzé shénme kē xì? Nǐ xiǎng xué shénme zhuānyè?', vietnamese: 'Bạn chọn chuyên ngành gì?',
    suggestions: ['Nói tên chuyên ngành cụ thể.'],
    sampleResponse: '我選擇___（例如：大眾傳播 / 企業管理）科系。'
  },
  {
    id: 'l22', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '為什麼選這個專業？你對這個科系了解多少？', pinyin: 'Wèishéme xuǎn zhège zhuānyè? Nǐ duì zhège kēxì liǎojiě duōshǎo?', vietnamese: 'Tại sao bạn chọn ngành này? Bạn biết gì về nó?',
    suggestions: ['Có đam mê, kỹ năng phù hợp.', 'Ngành học gồm những nội dung gì.'],
    sampleResponse: '因為我對這個領域很有興趣。這個科系主要學習如何解決實際問題，提升溝通能力和創意思考。'
  },
  {
    id: 'l23', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '除了這個科系，你還了解其他專業嗎？', pinyin: 'Chúle zhège kēxì, nǐ hái liǎojiě qítā zhuānyè ma?', vietnamese: 'Ngoài chuyên ngành này, bạn còn tìm hiểu chuyên ngành nào khác không?',
    suggestions: ['Có biết một vài ngành, nhưng vẫn thích ngành mình đã chọn nhất.'],
    sampleResponse: '我研究過這所大學，發現了許多其他專業（如企業管理或旅遊等），但我對___科系特別有興趣。'
  },
  {
    id: 'l24', category: 'CHỌN TRƯỜNG & CHUYÊN NGÀNH',
    question: '你預計什麼時候入學？', pinyin: 'Nǐ yùjì shénme shíhòu rùxué?', vietnamese: 'Bạn dự kiến nhập học khi nào?',
    suggestions: ['Tháng/Năm chính xác.'],
    sampleResponse: '我預計於___年___月入學。'
  },
  {
    id: 'l25', category: 'TÀI CHÍNH DU HỌC',
    question: '誰支付你的學費和生活費？', pinyin: 'Shuí zhīfù nǐ de xuéfèi hé shēnghuófèi?', vietnamese: 'Ai sẽ chi trả học phí và chi phí sinh hoạt của bạn?',
    suggestions: ['Tiền tiết kiệm, tiền hỗ trợ từ gia đình.'],
    sampleResponse: '我有自己的存款，而且我的父母一定會全力支持我的所有費用。'
  },
  {
    id: 'l26', category: 'TÀI CHÍNH DU HỌC',
    question: '你有存款嗎？你的存款是誰給你的？', pinyin: 'Nǐ yǒu cúnkuǎn ma? Nǐ de cúnkuǎn shì shuí gěi nǐ de?', vietnamese: 'Bạn có tiền tiết kiệm không? Ai đã cho bạn?',
    suggestions: ['Sổ tiết kiệm đứng tên mình, do bố mẹ cho.'],
    sampleResponse: '我的銀行帳戶裡有大約___越南盾，這是我爸媽給我準備的留學費用。'
  },
  {
    id: 'l27', category: 'TÀI CHÍNH DU HỌC',
    question: '如果你的家人停止匯款怎麼辦？', pinyin: 'Rúguǒ nǐ de jiārén tíngzhǐ huìkuǎn zěnme bàn?', vietnamese: 'Nếu gia đình bạn ngừng gửi tiền thì sao?',
    suggestions: ['Phủ định việc này. Bố mẹ sẽ chịu trách nhiệm.'],
    sampleResponse: '我的父母有穩定的收入，肯定會承擔我所有的學費和生活費，不會停止匯款的。'
  },
  {
    id: 'l28', category: 'TÀI CHÍNH DU HỌC',
    question: '你的學費是多少？', pinyin: 'Nǐ de xuéfèi shì duōshǎo?', vietnamese: 'Học phí của bạn là bao nhiêu?',
    suggestions: ['Nhớ rõ số tiền học phí một kỳ.'],
    sampleResponse: '我一學期的學費大約是___台幣。'
  },
  {
    id: 'l29', category: 'TÀI CHÍNH DU HỌC',
    question: '你會帶多少錢和什麼東西去台灣？', pinyin: 'Nǐ huì dài duōshǎo qián hé shénme dōngxī qù táiwān?', vietnamese: 'Bạn sẽ mang bao nhiêu tiền và những vật dụng gì đến Đài Loan?',
    suggestions: ['Mang tiền mặt, vật dụng cá nhân.'],
    sampleResponse: '我打算帶大約___萬新台幣，外加衣服、個人用品、藥品和鞋子等。'
  },
  {
    id: 'l30', category: 'TÀI CHÍNH DU HỌC',
    question: '你打算去打工嗎？', pinyin: 'Nǐ dǎsuàn qù dǎgōng ma?', vietnamese: 'Bạn có dự định đi làm thêm ở Đài Loan không?',
    suggestions: ['Năm đầu tập trung học. Làm thêm sau này nếu đúng luật.'],
    sampleResponse: '第一年我會專注學習，爭取拿到更好的語言證書。之後如果規定允許，我也會合法打工累積經驗。'
  },
  {
    id: 'l31', category: 'MỤC TIÊU & TƯƠNG LAI',
    question: '你的夢想是什麼？', pinyin: 'Nǐ de mèngxiǎng shì shénme?', vietnamese: 'Ước mơ của bạn là gì?',
    suggestions: ['Làm công việc đúng chuyên ngành ở công ty quốc tế.'],
    sampleResponse: '我的夢想是在相關領域工作，進入大型企業參與專業項目。'
  },
  {
    id: 'l32', category: 'MỤC TIÊU & TƯƠNG LAI',
    question: '你打算在台灣待多久？大學畢業後你會留在台灣嗎？', pinyin: 'Nǐ dǎsuàn zài táiwān dài duōjiǔ? Dàxué bìyè hòu nǐ huì liú zài táiwān ma?', vietnamese: 'Bạn dự định ở ĐL bao lâu? Có ở lại sau tốt nghiệp không?',
    suggestions: ['Kế hoạch tổng thể: học tiếng, đại học, làm việc 1-2 năm rồi về VN.'],
    sampleResponse: '我打算在台灣待大約幾年。畢業後，我可能會先工作1到2年累積經驗，然後回到越南發展相關工作。'
  },
  {
    id: 'l33', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你在台灣有親戚嗎？', pinyin: 'Nǐ zài táiwān yǒu qīnqī ma?', vietnamese: 'Bạn có người thân ở Đài Loan không?',
    suggestions: ['Trả lời theo thực tế.'],
    sampleResponse: '我在台灣沒有親戚。'
  },
  {
    id: 'l34', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你為來台灣留學做了哪些準備？', pinyin: 'Nǐ wèi lái táiwān liúxué zuòle nǎxiē zhǔnbèi?', vietnamese: 'Bạn đã chuẩn bị những gì cho việc du học Đài Loan?',
    suggestions: ['Hồ sơ, tìm hiểu trường lớp, tài chính, tiếng Trung.'],
    sampleResponse: '我準備好了必要的材料，了解了學校和專業，做好了經濟準備，並且認真學習中文。'
  },
  {
    id: 'l35', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你到台灣後會住哪裡？', pinyin: 'Nǐ dào táiwān hòu huì zhù nǎlǐ?', vietnamese: 'Bạn sẽ ở đâu sau khi đến Đài Loan?',
    suggestions: ['Ở ký túc xá cho tiện học tập.'],
    sampleResponse: '我會住在學校的宿舍，這樣讓我學習更方便，也比較安全。'
  },
  {
    id: 'l36', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '誰會負責你的留學申請？費用是多少？', pinyin: 'Shuí huì fùzé nǐ de liúxué shēnqǐng? Fèiyòng shì duōshǎo?', vietnamese: 'Ai phụ trách hồ sơ du học của bạn? Chi phí là bao nhiêu?',
    suggestions: ['Tự làm hoặc qua trung tâm, mức chi phí cơ bản.'],
    sampleResponse: '我所在的留學中心幫我辦理了申請，費用為___美元左右，包括所有資料手續費。'
  },
  {
    id: 'l37', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你參加過TOCFL考試嗎？你的水平如何？', pinyin: 'Nǐ cānjiā guò TOCFL kǎoshì ma? Nǐ de shuǐpíng rúhé?', vietnamese: 'Bạn đã tham gia kỳ thi TOCFL chưa? Trình độ của bạn ra sao?',
    suggestions: ['Điểm thi thực tế.'],
    sampleResponse: '我參加過考試，取得了TOCFL ___級，聽力___分，閱讀___分。'
  },
  {
    id: 'l38', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你去過台灣嗎？', pinyin: 'Nǐ qù guò táiwān ma?', vietnamese: 'Bạn đã từng đến Đài Loan chưa?',
    suggestions: ['Chưa đi lần nào.'],
    sampleResponse: '我還沒有去過台灣。'
  },
  {
    id: 'l39', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你對台灣的教育體系有什麼看法？', pinyin: 'Nǐ duì táiwān de jiàoyù tǐxì yǒu shénme kànfǎ?', vietnamese: 'Bạn nghĩ gì về hệ thống giáo dục của Đài Loan?',
    suggestions: ['Chất lượng cao, chú trọng thực hành.'],
    sampleResponse: '我了解台灣的教育品質很高，尤其注重實務應用和動手能力。此外，還有很多獎學金鼓勵學生。'
  },
  {
    id: 'l40', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你是如何提升中文水準的？有空時間做什麼？', pinyin: 'Nǐ shì rúhé tíshēng zhōngwén shuǐpíng de? Yǒu kòng shíjiān zuò shénme?', vietnamese: 'Bạn đã cải thiện trình độ tiếng Trung thế nào? Rảnh rỗi làm gì?',
    suggestions: ['Nghe nhạc, xem phim, luyện nói.'],
    sampleResponse: '我常聽中文歌、看中文電影來提升聽力，也會和朋友練習口語。'
  },
  {
    id: 'l41', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你參加過幾次面試？這是你第一次面試嗎？', pinyin: 'Nǐ cānjiā guò jǐ cì miànshì? Zhè shì nǐ dì yī cì miànshì ma?', vietnamese: 'Đây có phải là cuộc phỏng vấn đầu tiên của bạn không?',
    suggestions: ['Là lần đầu tiên.'],
    sampleResponse: '這是我的第一次面試。'
  },
  {
    id: 'l42', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你認為出國留學會遇到哪些困難？', pinyin: 'Nǐ rènwéi chūguó liúxué huì yù dào nǎxiē kùnnán?', vietnamese: 'Bạn nghĩ mình sẽ gặp những khó khăn gì khi du học?',
    suggestions: ['Áp lực ngôn ngữ, văn hóa.'],
    sampleResponse: '我認為會遇到一些語言障礙和生活環境差異帶來的壓力，但我相信自己能慢慢適應並克服。'
  },
  {
    id: 'l43', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '如果面試失敗了怎麼辦？', pinyin: 'Rúguǒ miànshì shībàile zěnme bàn?', vietnamese: 'Nếu phỏng vấn không thành công thì sao?',
    suggestions: ['Cố gắng ở lần sau.'],
    sampleResponse: '我會更努力地準備，爭取下次面試成功。'
  },
  {
    id: 'l44', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你如何看待很多人非法打工？', pinyin: 'Nǐ rúhé kàndài hěnduō rén fēifǎ dǎgōng?', vietnamese: 'Bạn nghĩ sao về lao động lưu vong bất hợp pháp?',
    suggestions: ['Phản đối quyết liệt.'],
    sampleResponse: '我反對非法打工，我也絕對不會去非法打工。'
  },
  {
    id: 'l45', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '你為簽證申請準備了哪些資料？', pinyin: 'Nǐ wèi qiānzhèng shēnqǐng zhǔnbèile nǎxiē zīliào?', vietnamese: 'Bạn đã chuẩn bị những giấy tờ gì cho đơn xin visa?',
    suggestions: ['Hộ chiếu, thư nhập học, bảng điểm, tài chính...'],
    sampleResponse: '我準備了護照、學校錄取通知書、畢業證書、成績單、學習計畫和財力證明等。'
  },
  {
    id: 'l46', category: 'CHUẨN BỊ & HIỂU BIẾT KHÁC',
    question: '誰幫你訂了學習計畫？', pinyin: 'Shuí bāng nǐ dìngle xuéxí jì huà?', vietnamese: 'Ai đã giúp bạn lên kế hoạch học tập?',
    suggestions: ['Tự viết dựa trên thực tế cá nhân.'],
    sampleResponse: '學習計畫是我自己寫的。'
  }
];
