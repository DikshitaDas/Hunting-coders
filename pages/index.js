import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Example featured posts (static for now)
  const featuredPosts = [
    { title: "Learn JavaScript in 2025", slug: "learnjs" },
    { title: "Next.js Tips & Tricks", slug: "learnnext" },
    { title: "Learn React the Right Way", slug: "learnreact" },
    { title: "Laravel for Beginners", slug: "learnlaravel" },
  ];

  return (
    <>
      <Head>
        <title>Hunting Coders - Blog About Coding</title>
        <meta
          name="description"
          content="Explore tutorials, tips, and guides on JavaScript, React, Next.js, Laravel, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        {/* Hero Section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Hunting Coders</h1>
          <p className={styles.description}>
            A professional blog for coding tutorials, tips, and insights in 2025.
          </p>

          <Image
            className={styles.myImg}
            src="/coder.jpg"
            width={600}
            height={300}
            priority
            alt="Coding Illustration"
          />

        </main>
      </div>
    </>
  );
}
