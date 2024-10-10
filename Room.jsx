"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Room = () => {
  const [userStream, setUserStream] = useState();

  const streamUser = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    setUserStream(stream);
  };

  return (
    <div>
      <div className='m-10'>
        <ReactPlayer
          width="1280px"
          height="720px"
          url="https://www.youtube.com/watch?v=e2fKYP_7B_Y&t=1s"
          controls={true}
        />
      </div>
      <div className='m-10'>
        <ReactPlayer
          width="1280px"
          height="720px"
          url="https://hhld-classes.s3.ap-south-1.amazonaws.com/Day+9.mp4"
          controls={true}
        />
      </div>
      <button
        type="button"
        onClick={streamUser}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10"
      >
        Stream
      </button>
    </div>
  );
};

export default Room;
