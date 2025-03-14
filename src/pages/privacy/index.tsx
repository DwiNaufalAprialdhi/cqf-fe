import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Privacy from '@/components/ui/Privacy'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Privacy Policy - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Privacy />
                  <Footer />
            </>
      )
}
