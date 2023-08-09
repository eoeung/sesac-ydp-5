function first() {
  second(); // second()함수를 만났기 때문에 밑에 있는 코드를 실행하지 않고 second()함수를 끝내고 다시 돌아온다.
  console.log(1);
  return;
}

function second() {
  console.log(2);
  return;
}

first();
/*
    2
    1
*/

/*
    ＊Stack
        - 바구니 같이 생긴 구조!
        - 한쪽 끝에서만 자료(데이터)를 넣고 빼는 작업이 이루어지는 자료구조
        - LIFO(Last In First Out) 후입선출
        - 스택의 맨 위를 top
        - pop: 가장 최근에 삽입된 자료(데이터) 삭제
        - push: top에 새로운 자료(데이터) 추가
        - stack underflow: 스택이 비어 있는데 pop을 시도했을 때 발생
        - stack overflow: 스택이 꽉 차 있는데 push를 시도했을 때 발생
*/
/*
    ＊Queue
        - 양쪽이 모두 뚫린 구조!
        - 양쪽 끝에서 자료(데이터) 추가와 삭제가 각각 이루어지는 자료구조
        - FIFO (First In First Out) 선입선출
        - Enqueue(인큐): 자료 추가하는 작업
        - Dequeue(디큐): 자료 삭제하는 작업
        - Front(프론트): 데이터가 삭제되는 곳
        - Rear(리어): 데이터가 추가되는 곳
*/
