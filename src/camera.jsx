import React, { useRef } from 'react';

const CameraApp = () => {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const photoURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'photo.png';
    a.href = photoURL;
    a.click();
  };

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={takePhoto}>Take Photo</button>
    </div>
  );
};

export default CameraApp;
