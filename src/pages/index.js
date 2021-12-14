import Head from 'next/head';

import HomePage from '../components/pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Shows</title>
      </Head>

      <HomePage />
    </>
  )
}
