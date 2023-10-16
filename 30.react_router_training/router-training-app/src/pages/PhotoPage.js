import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import axios from 'axios';

export default async function PhotoPage() {
  const [photos, setPhotos] = useState([]);

  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/photos'
  );

  console.log(response);

  return (
    <main className="photoPage">
      <h1>여기는 사진 목록</h1>
      {photos.map((photo) => {
        <PhotoList key={photo.id} photo={photo} />;
      })}
    </main>
  );
}
