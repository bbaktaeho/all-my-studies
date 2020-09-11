import React from 'react';
import './ImageView.css';

const ImageView = ({ src }) => {
  return (
    <div className="image-view">
      <img height="400" src={src} alt={src} />
    </div>
  );
};

export default ImageView;
