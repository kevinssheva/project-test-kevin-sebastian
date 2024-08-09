import Banner from '@/components/Banner';
import CardListContainer from './components/CardListContainer';

const Ideas = () => {
  return (
    <div>
      <Banner />
      <CardListContainer />
      <div className='h-screen w-full bg-white z-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam
        magni reiciendis inventore animi consequatur eveniet, voluptatibus
        explicabo! Est, esse!
      </div>
      <div className='h-screen w-full bg-gray-200 z-10'>
        Parallax effect makes scrolling through this content more engaging and dynamic.
      </div>
    </div>
  );
};

export default Ideas;
