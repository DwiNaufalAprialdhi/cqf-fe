import Head from 'next/head'
import React from 'react'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/layouts/report/Hero'
import Footer from '@/components/layouts/Footer'
import OnlineReport from '@/components/layouts/report/OnlineReport'
import OfflineReport from '@/components/layouts/report/OfflineReport'


export default function index() {
      return (
            <>
                  <Head>
                        <title>Laporan Lembaga - CINTA QURAN FOUNDATION</title>
                  </Head>
                  <Navbar />
                  <Hero />
                  <OnlineReport />
                  <OfflineReport />
                  <Footer />
            </>
      )
}
