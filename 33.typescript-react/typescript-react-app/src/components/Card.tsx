import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode; // App.tsx에 있는 <Card></Card> 안에 있는 요소를 가지고 온다.
}

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div> {children} </div>
    </div>
  );
}
