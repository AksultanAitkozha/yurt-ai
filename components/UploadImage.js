import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function UploadImage() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ 
    accept: 'image/*',
    onDrop
  });

  const images = files.map(file => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{width: '200px'}} alt="preview" />
      </div>
      <p>{file.name}</p>
    </div>
  ));

  return (
    <div className="font-inter text-gray-500 text-2xl md:text-4xl">
      <h4>Upload Image</h4>
      <div {...getRootProps()} className={`p-4 border-dashed border-2 border-gray-300`}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Preview</h4>
        <div>{images}</div>
      </aside>
    </div>
  );
}
