# Creating a Google Clone

## Project overview

In this project, we created a basic Google clone with the following functionality:

- Sign in with Google credentials via next-auth
- Search using Google's custom search engine API
- Standard or Image search
- "I'm Feeling Lucky"

The project was style with TailwindCSS

## Authentication overview

- Used next-auth's Google Provider for sign in (see pages/api/auth/[...nextauth].js)
- Implemented a custom sign-in page (see pages/auth/signin.js);

## Search results overview

- Searching is defined by the URL. `/search?term=<term>&searchType=`
- searchType can be blank or "image"
- Implemented server side rendering for search results (see pages/search.js)
- In `getServerSideProps` we include the ability to use Mock Data (so as to not exceed the API limit).
