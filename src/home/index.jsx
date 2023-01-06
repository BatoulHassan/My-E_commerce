import React from 'react'
import Appbar from '../components/appbar';
import Banner from '../components/banner';
import AppDrawer from '../components/drawer';
import Footer from '../components/footer';
import Products from '../components/products';
import Promotions from '../components/promotions';
import SearchBox from '../components/search';

function Home() {

  return (
    <>
      <Appbar />
      <Banner />
      <Promotions />
      <Products />
      <Footer />
      <AppDrawer />
      <SearchBox />
    </>
  )
}

export default Home;
