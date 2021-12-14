import Head from 'next/head';

import BaresRestaurantesComponent from '../components/pages/BaresRestaurantes';

function BaresRestaurantes() {
  return (
    <>
      <Head>
        <title>Bares e Restaurantes</title>
      </Head>

      <BaresRestaurantesComponent />
    </>
  )
}

export default BaresRestaurantes;
