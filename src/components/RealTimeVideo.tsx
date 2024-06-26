import { VideoOff } from 'lucide-react';
import React, { useState } from 'react';

const RealTimeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <h2 className='text-3xl font-extrabold'>Real-Time Video Streaming</h2>
      <div className='flex flex-col w-full max-w-lg border rounded-lg shadow-lg p-4 justify-center'>
        {isPlaying ? (<>
          <img src="http://localhost:5000/video_feed" alt="Real-Time Stream" className='w-full rounded-lg' />
          <p className='text-center italic text-slate-400 text-sm'>This is not a video, but a real-time stream of images from the webcam, provided by a python script</p>
        </>
        ) : (<>
          <h1 className='flex justify-center gap-3 p-3 font-bold'>
            No Live Feed <VideoOff />
          </h1>
          <button onClick={handlePlay} className='bg-green-500 rounded-lg px-4 py-2 text-white mt-2'>
            Play Real-Time Stream
          </button>
        </>
        )}
      </div>
    </div>
  );
};

export default RealTimeVideo;
