import Banner from '@/components/layouts/Banner'
import Footer from '@/components/layouts/Footer'
import Hero from '@/components/layouts/kemitraan/Hero'
import ListMitra from '@/components/layouts/kemitraan/ListMitra'
import Navbar from '@/components/layouts/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Kemitraan - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <ListMitra />
                  <Banner />
                  <Footer />
            </>
      )
}
