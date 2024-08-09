import React from 'react';

const Banner = () => {
  return (
    <div
      className='w-full aspect-[4/1] bg-fixed bg-center bg-cover relative'
      style={{
        backgroundImage: "url('/banner/field-banner.jpg')",
        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)',
      }}
    >
      <div className='w-full h-full bg-black/50 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-white text-4xl'>Ideas</h1>
        <h2 className='font-normal text-xl text-white'>Where all our great things begin</h2>
      </div> {/* Overlay untuk efek dark */}
    </div>
  );
};

export default Banner;
