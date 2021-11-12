import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import ProductFeed from "../Components/ProductFeed";

export default function Home({products}) {
  
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />
      <main className='mx-auto max-w-screen-2xl bg-gray-200'>
        <Banner/>
        <ProductFeed products={products} />
      </main>
    </div>
  );
}


export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props : {
    products,
  }
}
}