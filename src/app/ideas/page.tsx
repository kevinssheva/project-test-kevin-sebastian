import Banner from '@/components/Banner';
import CardListContainer from './components/CardListContainer';
import { metadataDefault } from './constants';

async function getIdeas(page: number, pageSize: number, sortBy: string) {
  const sort = sortBy === 'newest' ? '-published_at' : 'published_at';
  const res = await fetch(
    `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sort}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
  const data = await res.json();
  return data;
}

const Ideas = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    pageSize?: string;
    sortBy?: string;
  };
}) => {
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const pageSize = searchParams?.pageSize
    ? parseInt(searchParams.pageSize)
    : 10;
  const sortBy = searchParams?.sortBy || 'newest';
  const res = await getIdeas(currentPage, pageSize, sortBy);

  return (
    <div className='min-h-screen'>
      <Banner />
      <CardListContainer
        ideasData={res?.data ?? []}
        meta={res?.meta ?? metadataDefault}
      />
    </div>
  );
};

export default Ideas;
