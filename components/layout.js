import React from 'react'
import Head from 'next/head'

export default function Layout({children}) {
   return (
      <>
         <Head>
            <title>NBA Landing Page</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"/>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400&display=swap" rel="stylesheet" />
         </Head>
         {children}
         <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
      </>
   )
}
