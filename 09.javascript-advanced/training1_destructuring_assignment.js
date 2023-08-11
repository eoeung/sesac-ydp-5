// [실습 1] 구조 분해 할당을 사용하여 값 추출

function getInfo(lecture) {
    // TODO: 구조 분해 할당을 사용하여 값 추출
    const {name, part, leader} = lecture;

    // TODO: 출력 문장 생성
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

    return output;
}

const lectureInfo = {
    name: 'SESAC x CODINGOn',
    part: 'WEB',
    leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.