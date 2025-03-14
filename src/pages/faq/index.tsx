import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Faq from '@/components/ui/Faq/Faq'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>FAQ - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Faq />
                  <Footer />
            </>
      )
}
