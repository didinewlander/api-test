import { useState, ChangeEvent, useRef } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setUploadProgress(0); // Reset progress on new file selection
      setMessage(''); // Clear any previous messages
    }
  };

  const onFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name); // Include the file name in the form data

      setMessage('Uploading...'); // Set initial message

      try {
        const response = await axios.post('http://localhost:3000/api/files/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob', // Important for handling the download
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent as { loaded: number, total: number };
            const percentCompleted = Math.round((loaded * 100) / total);
            setUploadProgress(percentCompleted); // Update progress

            // Update message based on progress
            if (percentCompleted < 100) {
              setMessage(`Uploading: ${percentCompleted}%`);
            } else {
              setMessage('Finalizing upload...');
            }
          },
        });

        // Delay the download to show upload completion message
        setMessage('Upload completed. Preparing download...');
        setTimeout(() => {
          // Handle the file download
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', file.name); // Set the file name
          document.body.appendChild(link);
          link.click();
          link.remove();

          setMessage('File downloaded successfully');
          // Clear the file input after successful upload
          setFile(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
        }, 2000); // 2 seconds delay before downloading the file
      } catch (error) {
        setMessage('Error uploading file');
      }
    }
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center select-none'>
      <h2 className='text-3xl font-extrabold'>File Upload</h2>
      <input
        className='border p-3 rounded-xl'
        type="file"
        onChange={onFileChange}
        ref={fileInputRef}
      />
      <button className='bg-green-500 px-3 py-2 rounded-lg text-white' onClick={onFileUpload}>
        Upload
      </button>
      {uploadProgress > 0 && (
        <div className='w-full h-4 bg-gray-200 rounded-full mt-4'>
          <div
            className='h-4 bg-green-500 rounded-full'
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
