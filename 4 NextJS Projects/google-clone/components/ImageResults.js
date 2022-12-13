import ImageResult from './ImageResult';
import Pagination from './Pagination';

export default function ImageResults({ searchResults }) {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 space-x-4 px-3 mt-4'>
        {searchResults.items.map((result) => (
          <ImageResult result={result} />
        ))}
      </div>

      <div className='ml-16'>
        <Pagination />
      </div>
    </div>
  );
}
