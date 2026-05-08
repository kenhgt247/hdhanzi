export interface Vocab {
  id: string;
  traditional: string;
  pinyin: string;
  zhuyin: string;
  vietnamese: string;
  exampleTraditional: string;
  exampleVietnamese: string;
  type?: string;
  level: string;
  status: 'new' | 'learning' | 'review' | 'mastered';
}

import { vocabA1 } from './vocabA1_part1';
import { vocabA1_part2 } from './vocabA1_part2';
import { vocabA2_part1 } from './vocabA2_part1';
import { vocabA2_part2 } from './vocabA2_part2';
import { vocabA2_part3 } from './vocabA2_part3';
import { vocabA2_part4 } from './vocabA2_part4';
import { vocabA2_part5 } from './vocabA2_part5';
import { vocabB1_part1 } from './vocabB1_part1';
import { vocabB1_part2 } from './vocabB1_part2';
import { vocabB1_part3 } from './vocabB1_part3';
import { vocabB1_part4 } from './vocabB1_part4';
import { vocabB1_part5 } from './vocabB1_part5';
import { vocabB1_part6 } from './vocabB1_part6';
import { vocabB1_part7 } from './vocabB1_part7';
import { vocabB1_part8 } from './vocabB1_part8';
import { vocabB1_part9 } from './vocabB1_part9';
import { vocabB1_part10 } from './vocabB1_part10';
import { vocabB1_part11 } from './vocabB1_part11';
import { vocabB1_part12 } from './vocabB1_part12';
import { vocabB1_part13 } from './vocabB1_part13';
import { vocabB1_part14 } from './vocabB1_part14';
import { vocabB1_part15 } from './vocabB1_part15';
import { vocabB1_part16 } from './vocabB1_part16';
import { vocabB1_part17 } from './vocabB1_part17';
import { vocabB1_part18 } from './vocabB1_part18';
import { vocabB1_part19 } from './vocabB1_part19';
import { vocabB2_part1 } from './vocabB2_part1';
import { vocabB2_part2 } from './vocabB2_part2';
import { vocabB2_part3 } from './vocabB2_part3';
import { vocabB2_part4 } from './vocabB2_part4';
import { vocabB2_part5 } from './vocabB2_part5';
import { vocabB2_part6 } from './vocabB2_part6';
import { vocabB2_part7 } from './vocabB2_part7';
import { vocabB2_part8 } from './vocabB2_part8';
import { vocabB2_part9 } from './vocabB2_part9';
import { vocabB2_part10 } from './vocabB2_part10';
import { vocabB2_part11 } from './vocabB2_part11';
import { vocabB2_part12 } from './vocabB2_part12';
import { vocabB2_part13 } from './vocabB2_part13';
import { vocabB2_part14 } from './vocabB2_part14';
import { vocabB2_part15 } from './vocabB2_part15';
import { vocabB2_part16 } from './vocabB2_part16';
import { vocabB2_part17 } from './vocabB2_part17';
import { vocabB2_part18 } from './vocabB2_part18';
import { vocabB2_part19 } from './vocabB2_part19';
import { vocabB2_part20 } from './vocabB2_part20';

// B1, B2, C1, C2 from earlier that we want to keep
export const upperLevels = [
  // B1
  { id: 'b1-1', traditional: '雖然', pinyin: 'suīrán', zhuyin: 'ㄙㄨㄟ ㄖㄢˊ', vietnamese: 'Mặc dù', exampleTraditional: '雖然下雨，他還是來了。', exampleVietnamese: 'Mặc dù trời mưa, anh ấy vẫn đến.', level: 'B1', status: 'new' as const },
  { id: 'b1-2', traditional: '但是', pinyin: 'dànshì', zhuyin: 'ㄉㄢˋ ㄕˋ', vietnamese: 'Nhưng', exampleTraditional: '我想買，但是沒有錢。', exampleVietnamese: 'Tôi muốn mua nhưng không có tiền.', level: 'B1', status: 'review' as const },
  { id: 'b1-3', traditional: '因為', pinyin: 'yīnwèi', zhuyin: 'ㄧㄣ ㄨㄟˋ', vietnamese: 'Bởi vì', exampleTraditional: '因為生病，所以沒去。', exampleVietnamese: 'Bởi vì bị ốm, nên không đi.', level: 'B1', status: 'mastered' as const },
  { id: 'b1-4', traditional: '所以', pinyin: 'suǒyǐ', zhuyin: 'ㄙㄨㄛˇ ㄧˇ', vietnamese: 'Cho nên', exampleTraditional: '外面很冷，所以要穿外套。', exampleVietnamese: 'Bên ngoài rất lạnh, cho nên phải mặc áo khoác.', level: 'B1', status: 'learning' as const },
  { id: 'b1-5', traditional: '如果', pinyin: 'rúguǒ', zhuyin: 'ㄖㄨˊ ㄍㄨㄛˇ', vietnamese: 'Nếu như', exampleTraditional: '如果明天下雨，我們就不去了。', exampleVietnamese: 'Nếu ngày mai trời mưa, chúng ta sẽ không đi.', level: 'B1', status: 'new' as const },
  { id: 'b1-6', traditional: '經驗', pinyin: 'jīngyàn', zhuyin: 'ㄐㄧㄥ ㄧㄢˋ', vietnamese: 'Kinh nghiệm', exampleTraditional: '他很有工作經驗。', exampleVietnamese: 'Anh ấy có rất nhiều kinh nghiệm làm việc.', level: 'B1', status: 'new' as const },
  
  // B2
  { id: 'b2-1', traditional: '發展', pinyin: 'fāzhǎn', zhuyin: 'ㄈㄚ ㄓㄢˇ', vietnamese: 'Phát triển', exampleTraditional: '經濟發展很快。', exampleVietnamese: 'Kinh tế phát triển rất nhanh.', level: 'B2', status: 'new' as const },
  { id: 'b2-2', traditional: '影響', pinyin: 'yǐngxiǎng', zhuyin: 'ㄧㄥˇ ㄒㄧㄤˇ', vietnamese: 'Ảnh hưởng', exampleTraditional: '這件事對他影響很大。', exampleVietnamese: 'Việc này ảnh hưởng rất lớn đến anh ấy.', level: 'B2', status: 'new' as const },
  { id: 'b2-3', traditional: '提供', pinyin: 'tígōng', zhuyin: 'ㄊㄧˊ ㄍㄨㄥ', vietnamese: 'Cung cấp', exampleTraditional: '學校提供免費網路。', exampleVietnamese: 'Trường học cung cấp mạng miễn phí.', level: 'B2', status: 'learning' as const },
  { id: 'b2-4', traditional: '保護', pinyin: 'bǎohù', zhuyin: 'ㄅㄠˇ ㄏㄨˋ', vietnamese: 'Bảo vệ', exampleTraditional: '我們應該保護環境。', exampleVietnamese: 'Chúng ta nên bảo vệ môi trường.', level: 'B2', status: 'review' as const },
  { id: 'b2-5', traditional: '解決', pinyin: 'jiějué', zhuyin: 'ㄐㄧㄝˇ ㄐㄩㄝˊ', vietnamese: 'Giải quyết', exampleTraditional: '這個問題很難解決。', exampleVietnamese: 'Vấn đề này rất khó giải quyết.', level: 'B2', status: 'new' as const },

  // C1
  { id: 'c1-1', traditional: '猶豫', pinyin: 'yóuyù', zhuyin: 'ㄧㄡˊ ㄩˋ', vietnamese: 'Do dự', exampleTraditional: '他毫不猶豫地答應了。', exampleVietnamese: 'Anh ấy không một chút do dự đồng ý luôn.', level: 'C1', status: 'new' as const },
  { id: 'c1-2', traditional: '普遍', pinyin: 'pǔbiàn', zhuyin: 'ㄆㄨˇ ㄅㄧㄢˋ', vietnamese: 'Phổ biến', exampleTraditional: '這種現象現在很普遍。', exampleVietnamese: 'Hiện tượng này hiện nay rất phổ biến.', level: 'C1', status: 'new' as const },
  { id: 'c1-3', traditional: '價值觀', pinyin: 'jiàzhíguān', zhuyin: 'ㄐㄧㄚˋ ㄓˊ ㄍㄨㄢ', vietnamese: 'Giá trị quan', exampleTraditional: '他們的價值觀不同。', exampleVietnamese: 'Giá trị quan của họ khác nhau.', level: 'C1', status: 'new' as const },
  { id: 'c1-4', traditional: '挑戰', pinyin: 'tiǎozhàn', zhuyin: 'ㄊㄧㄠˇ ㄓㄢˋ', vietnamese: 'Thách thức', exampleTraditional: '我們必須面對這些挑戰。', exampleVietnamese: 'Chúng ta phải đối mặt với những thách thức này.', level: 'C1', status: 'new' as const },

  // C2
  { id: 'c2-1', traditional: '不可思議', pinyin: 'bùkěsīyì', zhuyin: 'ㄅㄨˋ ㄎㄜˇ ㄙ ㄧˋ', vietnamese: 'Không thể tưởng tượng nổi', exampleTraditional: '這真是一件不可思議的事。', exampleVietnamese: 'Đây thực sự là một chuyện không thể tưởng tượng nổi.', level: 'C2', status: 'new' as const },
  { id: 'c2-2', traditional: '相輔相成', pinyin: 'xiāngfǔxiāngchéng', zhuyin: 'ㄒㄧㄤ ㄈㄨˇ ㄒㄧㄤ ㄔㄥˊ', vietnamese: 'Bổ trợ lẫn nhau', exampleTraditional: '這兩種方法是相輔相成的。', exampleVietnamese: 'Hai phương pháp này bổ trợ cho nhau.', level: 'C2', status: 'new' as const },
  { id: 'c2-3', traditional: '未雨綢繆', pinyin: 'wèiyǔchóumóu', zhuyin: 'ㄨㄟˋ ㄩˇ ㄔㄡˊ ㄇㄡˊ', vietnamese: 'Chuẩn bị trước, lo xa', exampleTraditional: '做任何事都要未雨綢繆。', exampleVietnamese: 'Làm bất cứ việc gì cũng phải chuẩn bị chu đáo.', level: 'C2', status: 'new' as const },
];

export const tocflVocabularies: Vocab[] = [
  ...vocabA1.map(v => ({...v, status: 'new' as const})),
  ...vocabA1_part2.map(v => ({...v, status: 'new' as const})),
  ...vocabA2_part1.map(v => ({...v, status: 'new' as const})),
  ...vocabA2_part2.map(v => ({...v, status: 'new' as const})),
  ...vocabA2_part3.map(v => ({...v, status: 'new' as const})),
  ...vocabA2_part4.map(v => ({...v, status: 'new' as const})),
  ...vocabA2_part5.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part1.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part2.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part3.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part4.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part5.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part6.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part7.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part8.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part9.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part10.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part11.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part12.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part13.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part14.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part15.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part16.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part17.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part18.map(v => ({...v, status: 'new' as const})),
  ...vocabB1_part19.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part1.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part2.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part3.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part4.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part5.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part6.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part7.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part8.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part9.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part10.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part11.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part12.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part13.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part14.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part15.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part16.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part17.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part18.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part19.map(v => ({...v, status: 'new' as const})),
  ...vocabB2_part20.map(v => ({...v, status: 'new' as const})),
  ...upperLevels
];
