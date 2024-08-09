'use client';

import { useState } from 'react';
import Card from './Card';

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
} from "@/components/ui/pagination"

const CardListContainer = () => {
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<'newest' | 'latest'>('newest');

  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value));
  };

  const handleSortByChange = (value: string) => {
    setSortBy(value as 'newest' | 'latest');
  };

  return (
    <div className='w-full container py-10'>
      <div className='w-full flex justify-between'>
        <p>
          Showing <span className='font-semibold'>1-10</span> out of{' '}
          <span className='font-semibold'>100</span>
        </p>
        <div className='flex gap-8 items-center'>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Show per page : </p>
            <Select onValueChange={handlePageSizeChange} defaultValue='10'>
              <SelectTrigger className='w-[90px]'>
                <SelectValue placeholder='Select Page Size' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Page Size</SelectLabel>
                  <SelectItem value='10'>10</SelectItem>
                  <SelectItem value='20'>20</SelectItem>
                  <SelectItem value='30'>30</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='flex gap-2 items-center'>
            <p className='font-medium'>Sort by :</p>
            <Select onValueChange={handleSortByChange} defaultValue='newest'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select Sort' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem value='newest'>Newest</SelectItem>
                  <SelectItem value='latest'>Latest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-10 my-10'>
        <Card
          title='Kenali Tingkat Influencer berdasarkan Jumlah Follower setelah 10 Tahun Berusaha Menjadi'
          date='31 AGUSTUS 2024'
          image='/banner/field-banner.jpg'
        />
        <Card
          title='Kenali Tingkat Influencer berdasarkan Jumlah Follower setelah 10 Tahun Berusaha Menjadi'
          date='31 AGUSTUS 2024'
          image='/banner/field-banner.jpg'
        />
        <Card
          title='Kenali Tingkat Influencer berdasarkan Jumlah Follower setelah 10 Tahun Berusaha Menjadi'
          date='31 AGUSTUS 2024'
          image='/banner/field-banner.jpg'
        />
        <Card
          title='Kenali Tingkat Influencer berdasarkan Jumlah Follower setelah 10 Tahun Berusaha Menjadi'
          date='31 AGUSTUS 2024'
          image='/banner/field-banner.jpg'
        />
      </div>
      <div className='w-full flex justify-center'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default CardListContainer;
