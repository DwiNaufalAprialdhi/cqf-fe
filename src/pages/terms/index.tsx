import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Terms from '@/components/ui/Terms/Terms'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Terms & Conditions - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Terms />
                  <Footer />
            </>
      )
}
