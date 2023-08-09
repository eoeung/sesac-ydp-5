console.log('nodejs로 js 파일을 읽었어요.');

function gugudan(n){
    for(let i=1; i<10; i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }

    return `현재 ${n}단이 끝났습니다.`;
}

console.log(gugudan(9));