import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../util/requests';

//Server 
export async function getServerSideProps(context){
  // Initialize the genre specified
  const genre = context.query.genre
  // pull movies from movies api
  const request = await fetch(`https://api.themoviedb.org/3${
    requests[genre]?.url || requests.fetchTrending.url}`)
    .then(res => res.json())
  return {
    // return movies to page
    props: {
      results: request
    }
  }
};
 
//Client 
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="Hulu Clone" content="Video Streaming Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Component */}
      <Header />
      {/* Nav Bar Component */}
      <Nav />
      {/* Results / Videos */}
      <Results results={results}/>
    </div>
  )
};
