import React, { useState } from 'react'

import './Upload.scss'
import Button from './Button';

const Upload = ({ value, callback }) => {
  const [preview, setPreview] = useState('')
  const [active, setActive] = useState(false)

  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log("enter!");
    setActive(true)
  };

  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    //console.log("over!");
    setActive(true)
  };

  const handleUpload = e => {
    e.preventDefault();
    e.stopPropagation();
    const [file] = e.target.files || e.dataTransfer.files;

    const image = URL.createObjectURL(file);
    setPreview(image)
    setActive(false)

    // passing file to parent
    callback(file)
  };

  const handleLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false)
    console.log("leave!");
  };

  return (
    <div
      className={`upload${preview.length === 0 ? (active ? ' is-active' : '') : ''}`}
      onDragEnter={(e) => handleEnter(e)}
      onDragLeave={(e) => handleLeave(e)}
      onDragOver={(e) => handleOver(e)}
      onDrop={(e) => handleUpload(e)}
      style={{backgroundImage: `url(${preview})`}}>
      <p className="upload-text">Drag and drop image here</p>
      <div className="upload-button">
        <input
          className="upload-file"
          type="file"
          accept="image/*"
          onChange={(e) => handleUpload(e)} />
        <Button text="Upload Image" />
      </div>
    </div>
  )
};

export default Upload;
