import Link from 'next/link';
import User from './User';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className='flex flex-row justify-between p-5 text-sm text-gray-700'>
      <div className='flex space-x-4 items-center'>
        <Link className='link' href='https://about.google/'>
          About
        </Link>
        <Link className='link' href='https://store.google.com'>
          Store
        </Link>
      </div>
      <div className='flex space-x-4 items-center'>
        <Link className='link' href='https://mail.google.com'>
          Gmail
        </Link>
        <a
          className='link'
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || 'google'}&searchType=image`
            )
          }
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
