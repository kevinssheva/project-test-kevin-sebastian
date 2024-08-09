import Image from 'next/image';

const Banner = () => {
  return (
    <div className='w-full aspect-[4/1] min-h-64 overflow-hidden relative'>
      <Image
        src='/banner/field-banner.jpg'
        alt='Banner'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default Banner;
