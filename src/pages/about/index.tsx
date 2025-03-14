import Hero from '@/components/layouts/about/Hero'
import ProfileLegalitas from '@/components/layouts/about/ProfileLegalitas'
import Structure from '@/components/layouts/about/Structure'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>About - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <ProfileLegalitas />
                  <Structure />
                  <Footer />
            </>
      )
}
