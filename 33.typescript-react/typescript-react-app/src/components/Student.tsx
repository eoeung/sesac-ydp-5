import React from 'react';

interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // part라는 key에 대한 값은 있어도 되고 없어도 됨
  handleClick: (name: string, grade: number) => void;
}

// type 키워드로도 정의할 수 있음
// type StudentInfo = {
//   name: string;
//   grade: number;
// }

// export default function Student({ name, grade }: StudentInfo) {
//   return <div>Student</div>;
// }

// React.FC: Functional Component
// React.FC를 사용할 때는 Generic을 이용해서 props 타입을 표현해주면 된다.
// const Student: React.FC<StudentInfo> = ({ name, grade }) => {
//   return (
//     <div>
//       <ul>
//         <li>이름: {name}</li>
//         <li>학년: {grade}</li>
//       </ul>
//     </div>
//   );
// };

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <ul>
        <li>이름: {name}</li>
        <li>학년: {grade}</li>
        {/* part는 있어도 되고 없어도 되는 key이므로, ||로 공백 문제를 처리해줌 */}
        <li>전공: {part || '자유전공'}</li>
      </ul>
    </div>
  );
};

export default Student;
