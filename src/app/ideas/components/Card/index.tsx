import Image from 'next/image';
import { CardProps } from './types';

const Card = ({ title, date, image }: CardProps) => {
  return (
    <div className='w-full bg-white shadow-md rounded-md overflow-hidden aspect-[5/6] flex flex-col hover:scale-105 transition-all'>
      <div className='w-full h-[60%] relative'>
        <Image src={image} alt={title} layout='fill' objectFit='cover' />
      </div>
      <div className='flex-1 px-[7%] py-5'>
        <p className='text-slate-500 text-sm mb-2'>{date}</p>
        <h1 className='font-bold text-lg line-clamp-3'>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
