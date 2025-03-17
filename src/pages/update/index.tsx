import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/update/Hero'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>News & Update - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <Footer />
            </>
      )
}
