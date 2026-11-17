/* ==========================================================================
 *  청첩장 설정 파일 (config.js)
 *  ─ 문구·이름·날짜·예식장·교통·계좌번호를 모두 여기서 수정합니다.
 *  ─ 따옴표(' ') 안의 글자만 바꾸세요. 쉼표(,)와 괄호는 지우지 마세요.
 *  ─ 줄바꿈은 \n 으로 표시합니다.
 *  ─ 보안: 이 파일은 누구나 볼 수 있는 공개 파일입니다.
 *          관리자 비밀번호·API 키 같은 비밀 정보는 절대 적지 마세요.
 * ========================================================================== */
window.WEDDING_CONFIG = {

  /* ① Apps Script 웹 앱 주소 (배포 후 받은 https://script.google.com/macros/s/…/exec)
   *    비워두면 '미리보기 모드'로 동작합니다(작성한 글이 이 브라우저에만 임시 저장됨). */
  API_URL: 'https://script.google.com/macros/s/AKfycbxuJ_51mKUsxlUaEgsFJ0ImiR_nQ3hBtlsInDJbZ5qpKQ5Abi2KcmNc3oMp02ZlezUiYQ/exec',

  /* ② 예식 일시 (SETTINGS 시트에 값을 넣으면 시트 값이 우선 적용됩니다) */
  wedding: {
    date: '2027-02-28',   // YYYY-MM-DD
    time: '15:00'         // 24시간제 HH:MM
  },

  /* ③ 신랑·신부와 혼주 정보 (deceased: true 로 바꾸면 이름 앞에 故 가 붙습니다) */
  groom: {
    name: '양정우',
    shortName: '정우',          // 인트로·마무리에 쓰는 짧은 이름
    relation: '장남',
    phone: '010-4630-3868',      // 비워두면 연락하기 버튼이 숨겨집니다
    father: { name: '양00', deceased: false },
    mother: { name: '000', deceased: false }
  },
  bride: {
    name: '손희영',
    shortName: '희영',
    relation: '장녀',
    phone: '010-5826-1526',
    father: { name: '손시열', deceased: false },
    mother: { name: '방은주', deceased: false }
  },

  /* ④ 예식장 */
  venue: {
    name: '루이비스 문정',
    hall: '지하 1층 000홀',
    address: '서울특별시 송파구 법원로9길 26 H비즈니스파크 D동 루이비스컨벤션 B1층',
    tel: '02-6281-9000',
    // 지도 앱에서 예식장을 찾은 뒤 [공유 → 링크 복사]한 주소를 넣으면 가장 정확합니다.
    // 비워두면 위 주소로 자동 검색합니다.
    naverMapUrl: '',
    kakaoMapUrl: '',
    mapImage: ''               // 선택: 약도 이미지 경로 (예: 'images/map.jpg')
  },

  /* ⑤ 사진 (images 폴더에 넣은 파일명 또는 Google Drive 공유 링크) */
  photos: {
    main: 'images/main.jpg',     // 첫 화면 대표 사진 (세로 3:4 권장)
    ending: 'images/ending.jpg'  // 마무리 사진
  },

  /* ⑥ 문구 */
  texts: {
    introMessage: '서로의 계절이 되어\n함께 걸어가려 합니다',
    invitationTitle: '소중한 분들을 초대합니다',
    invitationMessage:
      '봄과 여름 사이, 가장 푸른 계절에\n' +
      '서로의 가장 좋은 친구였던 두 사람이\n' +
      '이제 평생의 동반자가 되려 합니다.\n\n' +
      '오랜 시간 저희를 아껴주신 분들을 모시고\n' +
      '새로운 시작을 약속하고자 하오니\n' +
      '귀한 걸음으로 축복해 주시면\n' +
      '더없는 기쁨으로 간직하겠습니다.',
    accountMessage:
      '참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.\n' +
      '너그러운 마음으로 양해 부탁드립니다.',
    closingMessage:
      '저희의 새로운 시작을 함께 축복해 주시는\n' +
      '모든 분들께 진심으로 감사드립니다.\n\n' +
      '보내주신 따뜻한 마음 오래도록 간직하며\n' +
      '서로 아끼고 배려하며 예쁘게 살겠습니다.'
  },

  /* ⑦ 오시는 길 안내 (항목을 추가·삭제할 수 있습니다) */
  transport: [
    { title: '지하철', lines: ['8호선 문정역 4번 출구에서 도보 10분'] },
    { title: '버스', lines: ['간선 000, 000 · 지선 0000', '○○역 정류장 하차'] },
    { title: '자가용 · 주차', lines: ['네비게이션에 “루이비스 문정” 검색', '건물 지하 주차장 2시간 무료 (안내데스크에서 등록)'] }
  ],

  /* ⑧ 마음 전하실 곳 (계좌번호) — kakaopay 에 카카오페이 송금 링크를 넣으면 버튼이 생깁니다 */
  accounts: {
    groom: [
      { role: '신랑', name: '김민준', bank: '국민은행', number: '000000-00-000000', kakaopay: '' },
      { role: '신랑 아버지', name: '김정호', bank: '신한은행', number: '000-000-000000', kakaopay: '' },
      { role: '신랑 어머니', name: '박미경', bank: '우리은행', number: '0000-000-000000', kakaopay: '' }
    ],
    bride: [
      { role: '신부', name: '이서연', bank: '카카오뱅크', number: '0000-00-0000000', kakaopay: '' },
      { role: '신부 아버지', name: '이상훈', bank: '하나은행', number: '000-000000-00000', kakaopay: '' },
      { role: '신부 어머니', name: '최은영', bank: '농협', number: '000-0000-0000-00', kakaopay: '' }
    ]
  },

  /* ⑨ 갤러리 · 방명록 */
  gallery: {
    initialCount: 9          // 처음에 보여줄 사진 수 (나머지는 '더보기')
  },
  guestbook: {
    pageSize: 10             // 방명록 한 번에 불러오는 개수
  }
};
