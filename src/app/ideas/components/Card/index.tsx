import Image from 'next/image';
import { CardProps } from './types';
import { useState } from 'react';

const Card = ({ title, date, image }: CardProps) => {
  const [imageUrl, setImageUrl] = useState<string>(image);
  const placeholderImage = '/placeholder_image.jpg';

  const dateString = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='w-full bg-white shadow-md rounded-md overflow-hidden aspect-[5/6] flex flex-col hover:scale-105 transition-all'>
      <div className='w-full h-[60%] relative'>
        <Image
          src={imageUrl}
          alt={title}
          layout='fill'
          objectFit='cover'
          onError={() => setImageUrl(placeholderImage)}
          loading='lazy'
        />
      </div>
      <div className='flex-1 px-[7%] py-5'>
        <p className='text-slate-500 text-sm mb-2'>
          {dateString.toUpperCase()}
        </p>
        <h1 className='font-bold text-lg line-clamp-3'>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
