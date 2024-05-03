
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import CameraApp from './camera';
import PreviewImg from './previewImg';

function App() {


  const [previewPhoto, setPreviewPhoto] = useState([])



  return (<BrowserRouter>
    <div>




      <Routes>

        <Route path='/' element={<CameraApp previewPhoto={previewPhoto} setPreviewPhoto={setPreviewPhoto} />} />
        {/* <Route path='/preview' element={<PreviewImg previewPhoto={previewPhoto} />} /> */}

      </Routes>

      {previewPhoto.map((photo) => (
        <img key={photo} src={photo} alt="Uploaded" />
      ))}

    </div>
  </BrowserRouter>
  );
}

export default App;
