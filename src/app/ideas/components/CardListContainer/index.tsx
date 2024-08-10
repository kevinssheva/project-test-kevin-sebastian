'use client';

import { useState } from 'react';
import Card from '../Card';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { CardListContainerPropsType } from './types';
import Paginator from '@/components/Paginator';

const CardListContainer = ({ ideasData, meta }: CardListContainerPropsType) => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '10';
  const sortBy = searchParams.get('sortBy') || 'newest';

  const router = useRouter();

  const handlePageSizeChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('pageSize', value);
    router.push('/ideas?' + current.toString());
  };

  const handleSortByChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('sortBy', value);
    router.push('/ideas?' + current.toString());
  };

  const handlePageChange = (page: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('page', page.toString());
    router.push('/ideas?' + current.toString());
  };

  return (
    <div className='w-full container py-10'>
      <div className='w-full flex justify-between'>
        <p>
          Showing <span className='font-semibold'>{meta.from}-{meta.to}</span> out of{' '}
          <span className='font-semibold'>{meta.total}</span>
        </p>
        <div className='flex gap-8 items-center'>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Show per page : </p>
            <Select
              onValueChange={handlePageSizeChange}
              defaultValue={pageSize}
            >
              <SelectTrigger className='w-[90px]'>
                <SelectValue placeholder='Select Page Size' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Page Size</SelectLabel>
                  <SelectItem value='10'>10</SelectItem>
                  <SelectItem value='20'>20</SelectItem>
                  <SelectItem value='50'>50</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Sort by :</p>
            <Select onValueChange={handleSortByChange} defaultValue={sortBy}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select Sort' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem value='newest'>Newest</SelectItem>
                  <SelectItem value='oldest'>Oldest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 my-10'>
        {ideasData.map((idea) => (
          <Card
            key={idea.id}
            title={idea.title}
            date={idea.published_at}
            image={idea.small_image[0].url}
          />
        ))}
      </div>
      <div className='w-full flex justify-center'>
        <Paginator
          currentPage={parseInt(currentPage)}
          onPageChange={(page) => handlePageChange(page)}
          totalPages={meta.last_page}
          showPreviousNext={true}
        />
      </div>
    </div>
  );
};

export default CardListContainer;
