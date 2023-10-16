import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import axios from 'axios';

export default async function PhotoPage() {
  const [photos, setPhotos] = useState([]);

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );

    console.log(response);
  } catch (err) {
    console.log(err);
  }

  return (
    <main className="photoPage">
      <h1>여기는 사진 목록</h1>
      {photos.map((photo) => {
        <PhotoList key={photo.id} photo={photo} />;
      })}
    </main>
  );
}
