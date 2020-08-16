import React, { useState, useRef } from 'react'

const DragAndDrop = () => {
  const [values, setValues] = useState({
     file: null,
     dragOver: false,
     errorNoficication: null
  })

   const handleDragEnter = (e) => {
      e.preventDefault();
   }

   const handleDragOver = (e) => {
      e.preventDefault();
      if (!values.dragOver) {
        setValues({
            ...values,
            dragOver: true
         });
      }
   }
   const handleDragLeave = (e) => {
      e.preventDefault();
      setValues({
        ...values,
         dragOver: false
      });
   }
   const handleDrop = (e) => {
      e.preventDefault();
      let file = e.dataTransfer.files[0];

      // Validate file is of type Image
      let fileType = file.type.split("/")[0];
      if (fileType !== "image") {
         console.log("Not an image file");
         setValues({
            file: null,
            errorNotification: "Not an image File",
            dragOver: false
         });
         return setTimeout(() => {
           setValues({
             ...values,
              errorNotification: null
           });
         }, 3000);
      }
      // this.refs.image.files = e.dataTransfer.files;
      document.getElementById('upload-image-input').fileList =  e.dataTransfer.files[0];
      setValues({
        ...values,
         file,
         dragOver: false
      });
   }


   /**
      Handle Manually (File Input) Added Files
   **/
   const handleAddImage = (e) => {
      e.preventDefault();
      let file = refs.image.files[0];

      // Validate file is of type Image
      let fileType = refs.image.files[0].type.split('/')[0];
      if (fileType !== "image") {
         console.log("Not an image file");
         setValues({
            file: null,
            errorNotification: "Not an image File",
            dragOverClass: ""
         });
         return setTimeout(() => {
            setValues({
              ...values,
               errorNotification: null
            });
         }, 3000);
      }

      setValues({
        ...values,
         file
      });
   }

   /**
      Handle Upload after Upload Button Clicked
   **/
   const handleUploadImage = (e) => {
      e.preventDefault();
      if (refs.image.files[0]) {
         console.log("Uploading Image " + refs.image.files[0].name + "");
         /**
            Handle image Upload
         **/
      }
   }

   const handleCancelUpload = (e) => {
      e.preventDefault();
      setValues({
          ...values,
         file: null
      });
   }

    // Match drag over css to hover css
    let dragOverClass = values.dragOver
     ? `display-box drag-over`
     : `display-box`;

    // If file is set, change upload box text to file name
    let uploadText = file
     ? <div>
          <h4>{values.file.name}</h4>
          <button
             className="cancel-upload-button btn btn-warning"
             onClick={(e) => handleCancelUpload(e)}
          >
             Cancel
         </button>
          <button
             className="upload-button btn btn-primary"
             onClick={() => handleUploadImage(e)}
          >
             Upload
          </button>
       </div>
     : <div>
          <h4>Choose Files to Upload</h4>
       </div>;

    // Show Error message if file type is not an image
    let errorNotification = errorNotification
     ? <div className="error-notification">
          <p>{errorNotification}</p>
       </div>
     : null;

    return (
       <div className="image-uploader-wrapper">
          <div className={dragOverClass}>
             <div className="icon-text-box">
                <div className="upload-icon">
                   <i className="fa fa-upload" aria-hidden="true" />
                </div>
                <div className="upload-text">
                   {uploadText}
                </div>
                {errorNotification}
             </div>
             <div>
                <input
                   type="file"
                   ref="image"
                   id="upload-image-input"
                   className="upload-image-input"
                   accept="image/*"
                   onDrop={(e) => handleDrop(e)}
                   onDragEnter={(e) => handleDragEnter(e)}
                   onDragOver={(e) => handleDragOver(e)}
                   onDragLeave={(e) => handleDragLeave(e)}
                   onChange={(e) => handleAddImage(e)}
                />
             </div>
          </div>
       </div>
    );
}

export default DragAndDrop;
