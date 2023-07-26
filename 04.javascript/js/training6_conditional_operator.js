// 지금은 오전? 오후!?

let now = new Date().getHours(); // 현재 시간만을 받아온다. 0 ~ 23

now >= 12 ? console.log('오후') : console.log('오전');
