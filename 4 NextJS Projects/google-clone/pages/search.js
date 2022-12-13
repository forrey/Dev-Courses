import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from '../Response';
import { useRouter } from 'next/router';

export default function SearchPage({ searchResults }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>

      <SearchHeader />

      <SearchResults searchResults={searchResults} />
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
