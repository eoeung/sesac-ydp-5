import React, { useState } from 'react';

export default function Event_ex() {
  // 멤버 목록
  const members = [
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ];
  // 전체 멤버 설정
  const [member, setMember] = useState(members);
  // 이름 설정
  const [name, setName] = useState('');
  // 이메일 설정
  const [email, setEmail] = useState('');

  // 등록
  const add = () => {
    setMember(
      member.concat({ id: member.length + 1, name: name, email: email })
    );

    // input 초기화
    setName('');
    setEmail('');
  };

  // 삭제
  const deleteMember = (id) => {
    setMember(member.filter((val) => val.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') add();
        }}
      />
      <button onClick={add}>등록</button>
      {member.map((val) => {
        return (
          <h1 key={val.id} onDoubleClick={() => deleteMember(val.id)}>
            {val.name} : {val.email}
          </h1>
        );
      })}
    </div>
  );
}
