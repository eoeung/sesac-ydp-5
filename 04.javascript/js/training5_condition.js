// if문 실습

const age = prompt('나이를 입력해주세요.');

if (age >= 20) console.log('성인');
else if (age >= 17) console.log('고등학생');
else if (age >= 14) console.log('중학생');
else if (age >= 8) console.log('초등학생');
else if (age >= 0) console.log('유아');
else console.log('올바르지 않은 나이입니다.');
