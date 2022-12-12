import { useRouter } from 'next/router';

export default function SearchHeaderOption({ title, Icon, selected }) {
  const router = useRouter();

  function selectTabHandler(title) {
    console.log(title);
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === 'Images' ? 'image' : ''
      }`
    );
  }

  return (
    <div
      onClick={() => selectTabHandler(title)}
      className={`flex flex-row items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
    >
      <Icon className='w-4 mr-1' />
      <p>{title}</p>
    </div>
  );
}

//title === 'images' ? 'image' : ''
