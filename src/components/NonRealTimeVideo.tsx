import { useRef } from 'react';

const NonRealTimeVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h2 className='text-3xl font-extrabold'>Non-Real-Time Video Streaming</h2>
      <div className='w-full max-w-lg border rounded-lg shadow-lg p-4'>
        <video ref={videoRef} controls className='w-full rounded-lg'>
          <source src="http://localhost:3000/api/media/stream" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default NonRealTimeVideo;
