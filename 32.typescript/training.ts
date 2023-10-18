// [실습 1] Object, boolean 데이터 타입 순으로 설정하는 튜플 만들어보기
const olimpic_newgame: [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

console.log(olimpic_newgame); // [ { name: '쇼트트랙', type: '혼성 계주' }, true ]

// 변경할 수 없도록 설정하기
const olimpic_newgame2: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

// olimpic_newgame2[1] = false; // Cannot assign to '1' because it is a read-only property. 