import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import { SEARCH_RESULTS, IMAGE_RESULTS } from '../Response';
import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';

export default function SearchPage({ searchResults }) {
  const router = useRouter();
  console.log(searchResults);

  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === '' && (
        <SearchResults searchResults={searchResults} />
      )}

      {router.query.searchType === 'image' && (
        <ImageResults searchResults={searchResults} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const startIndex = context.query.start || '1';
  const whichData =
    context.query.searchType === 'image' ? IMAGE_RESULTS : SEARCH_RESULTS;

  const data = mockData
    ? whichData
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_API_KEY
        }&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      searchResults: data,
    },
  };
}
