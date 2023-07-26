// 구구단 만들기

/**
 * min: 최소 몇 부터 곱할지 정하는 인자
 * max: 최대 몇 까지 곱할지 정하는 인자
 * startDan: 처음 단 (default = 2)
 * endDan: 마지막 단 (default = 9)
 */
const multiplicationTable = (min, max, startDan = 2, endDan = 9) => {
  for (startDan; startDan <= endDan; startDan++) {
    document.write(`----- ${startDan} 단 -----`);

    for (let j = min; j <= max; j++) {
      document.write(
        `<p style="overflow-wrap: break-word; margin: 5px;">${startDan} × ${j} = ${
          startDan * j
        }</p>`
      );
    }

    document.write(`<br>`);
  }
};

multiplicationTable(1, 9);
// multiplicationTable(1, 9, 2, 9);
// multiplicationTable(2, 19, 3, 18);
