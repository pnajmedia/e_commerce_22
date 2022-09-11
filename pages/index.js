import React from 'react'
import { HeaderBanner, FooterBanner, Product } from '../components';
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => (
  <>
    <HeaderBanner headerBanner={bannerData.length && bannerData[0]} />
    {console.log('bannerData', bannerData)}
    <div className='products-heading'>
      <h2>Most in-demand Products</h2>
      <p>Premium VIntage Cameras</p>
    </div>
    <div className='products-container'>
      {products?.map((prod) => <Product key={prod._id} product={prod} />)}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </>
);

export const getServerSideProps = async () => {
  const prodQuery = '*[_type=="product"]';
  const products = await client.fetch(prodQuery);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { props: { products, bannerData } }
}

export default Home