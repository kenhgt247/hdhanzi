import { TOCFLLevel, MockTest } from '../types/study';

export const MOCK_TESTS: MockTest[] = [
  {
    id: 'a1-mock-1',
    title: 'TOCFL Mock A1 - Test 1',
    level: 'A1',
    durationMinutes: 60,
    questions: [
      {
        id: 'q1',
        type: 'listening',
        question: 'Chọn tranh đúng cho câu: "Anh ấy đang ăn cơm."',
        options: ['Tranh A (Ăn cơm)', 'Tranh B (Uống nước)', 'Tranh C (Ngủ)', 'Tranh D (Học)'],
        correctAnswer: 'Tranh A (Ăn cơm)',
        explanation: ' 他(tā) 在(zài) 吃(chī) 飯(fàn)',
        relatedWordId: '吃饭'
      },
      {
        id: 'q2',
        type: 'reading',
        question: 'Điền từ: "我 ___ 越南人。"',
        options: ['是', '有', '在', '去'],
        correctAnswer: '打',
        explanation: 'Hành động "đánh", dùng cho bóng rổ.',
        relatedWordId: '打'
      },
      {
        id: 'q3',
        type: 'reading',
        question: 'Từ nào có nghĩa là "Ngày mai"?',
        options: ['今天', '昨天', '明天', '去年'],
        correctAnswer: '明天',
        relatedWordId: '明天'
      }
    ]
  },
  {
    id: 'a2-mock-1',
    title: 'TOCFL Mock A2 - Test 1',
    level: 'A2',
    durationMinutes: 90,
    questions: [
      {
        id: 'a2q1',
        type: 'reading',
        question: 'Câu nào đúng ngữ pháp?',
        options: [
          '我昨天去學校。',
          '我過去學校昨天。',
          '昨天我學校去。',
          '學校我去昨天。'
        ],
        correctAnswer: '我昨天去學校。',
        relatedWordId: '昨天'
      }
    ]
  }
];

export const getMockTestById = (id: string) => MOCK_TESTS.find(t => t.id === id);
