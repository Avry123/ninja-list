import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/Navbar';

import Footer from '../comps/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Anime List | Home</title>
      <meta name="keyword" content='anime' />
    </Head>
    <div className={styles.title}>
      <h1 className={styles.title}>Anime</h1>
      <p>Anime (Japanese: アニメ, IPA: [aɲime] (listen)) is hand-drawn and computer-generated animation originating from Japan. Outside of Japan and in English, anime refers to Japanese animation, and refers specifically to animation produced in Japan.[1] However, in Japan and in Japanese, anime (a term derived from a shortening of the English word animation) describes all animated works, regardless of style or origin. Animation produced outside of Japan with similar style to Japanese animation is commonly referred to as anime-influenced animation.</p>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </div>
    </>
  )
}
