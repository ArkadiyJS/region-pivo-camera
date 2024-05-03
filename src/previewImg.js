import React from 'react';

function PreviewImg({ previewPhoto }) {
  return (
    <div>


      {previewPhoto.map((photo) => (
        <img key={photo} src={photo} alt="Uploaded" />
      ))}
    </div>
  );
}

export default PreviewImg;