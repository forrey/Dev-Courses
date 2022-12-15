import Parser from 'html-react-parser';

export default function ImageResult({ result }) {
  return (
    <div className='group mb-5'>
      <a href={result.image.contextLink}>
        <img
          className='group-hover:shadow-xl w-full h-60 object-cover'
          src={result.link}
          alt={result.title}
        />
      </a>
      <a>
        <p className='text-gray-600'>{result.displayLink}</p>
      </a>

      <a className='group-hover:underline' href={result.image.contextLink}>
        <h2 className='truncate'>{Parser(result.htmlTitle)}</h2>
      </a>
    </div>
  );
}
