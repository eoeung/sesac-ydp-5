import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/photos">Photo</Link>
        </li>
      </ul>
    </div>
  );
}
