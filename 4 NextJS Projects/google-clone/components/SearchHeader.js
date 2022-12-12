import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import {
  MicrophoneIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  function searchHandler(event) {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();

    if (!term) return;

    router.push(`/search?${term}&searchType=`);
  }

  return (
    <header className='sticky top-0 bg-white w-full'>
      <div className='flex w-full p-6 items-center'>
        <Image
          className='cursor-pointer'
          src={'/google-logo-full.png'}
          alt={'Google logo'}
          width={92}
          height={30}
          onClick={() => router.push('/')}
        />

        <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
          <input
            type='text'
            defaultValue={router.query.term}
            ref={searchInputRef}
            className='w-full focus:outline-none'
          />
          <XMarkIcon
            className='h-7 hidden sm:inline-flex text-gray-500 cursor-pointer sm:mr-3'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' />
          <MagnifyingGlassIcon
            className='h-6 hidden sm:inline-flex text-blue-500 cursor-pointer'
            onClick={searchHandler}
          />
          <button type='submit' hidden onClick={searchHandler}></button>
        </form>
        <User className='ml-auto whitespace-nowrap' />
      </div>

      <SearchHeaderOptions />
    </header>
  );
}
