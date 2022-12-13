import Parser from 'html-react-parser';

export default function SearchResult({ result }) {
  return (
    <div key={result.link} className='max-w-xl mb-8'>
      <div className='group'>
        <a className='text-sm truncate' href={result.displayLink}>
          {result.displayLink}
        </a>
        <a
          className='group-hover:underline decoration-blue-800'
          href={result.link}
        >
          <h2 className='truncate text-xl font-medium text-blue-800 '>
            {result.title}
          </h2>
        </a>
      </div>
      <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
    </div>
  );
}
