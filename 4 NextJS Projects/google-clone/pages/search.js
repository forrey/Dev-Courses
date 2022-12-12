import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';

export default function SearchPage({ searchResults }) {
  console.log(searchResults);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      <SearchHeader />
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_API_KEY
        }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }`
      ).then((response) => response.json());

  return {
    props: {
      searchResults: data,
    },
  };
}
