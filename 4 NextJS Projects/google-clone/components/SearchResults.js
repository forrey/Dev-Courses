export default function SearchResults({ searchResults }) {
  console.log(searchResults);
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-500 text-sm mb-5 mt-3 '>
        About {searchResults.searchInformation.formattedTotalResults} results (
        {searchResults.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}
