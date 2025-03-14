import AmazingGroup from '@/components/layouts/AmazingGroup'
import Banner from '@/components/layouts/Banner'
import Bussines from '@/components/layouts/Bussines'
import ChoiceDonation from '@/components/layouts/ChoiceDonation'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/Hero'
import Inspiration from '@/components/layouts/Inspiration'
import Navbar from '@/components/layouts/Navbar'
import OptionProgram from '@/components/layouts/OptionProgram'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
      <Head>
        <title>CINTA QURAN FOUNDATION</title>
        <meta name="description" content="Mewujudkan #IndonesiaCintaQuran" />
      </Head>
      <Navbar />
      <Hero />
      <ChoiceDonation />
      <Bussines />
      <OptionProgram />
      <Inspiration />
      <AmazingGroup />
      <Banner />
      <Footer />
    </>
  )
}
