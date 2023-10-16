import React from 'react';

export default function PhotoList({ photo }) {
  return (
    <div>
      <ul>
        <li>사진 제목</li>
        <li>
          <img src={photo.thumbnailUrl} alt="error" />
        </li>
      </ul>
    </div>
  );
}
