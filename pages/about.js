import Head from "next/head";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
  const features = [
    { title: "Tutorials", desc: "Step-by-step coding guides and examples." },
    { title: "Projects", desc: "Real-world projects to practice and learn." },
    { title: "Community", desc: "Connect, discuss, and share ideas with peers." },
  ];

  return (
    <>
      <Head>
        <title>About Us - Hunting Coders</title>
        <meta
          name="description"
          content="Learn more about our mission, team, and values. We provide tutorials, tips, and resources for developers."
        />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1>About Us</h1>
          <p>
            Empowering developers with tutorials, tips, and best practices for web development.
          </p>
        </header>

        {/* Mission */}
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            We aim to simplify coding for everyone. From beginners to experts, our goal is
            to provide high-quality tutorials, practical tips, and real-world project examples
            to improve your web development journey.
          </p>
        </section>

        {/* Features / Services */}
        <section className={styles.features}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <footer className={styles.cta}>
          <h3>Want to collaborate or have questions?</h3>
          <p>Reach out to us through our contact page. We'd love to hear from you!</p>
          <Link href="/contact" className={styles.btn}>
            Contact Us
          </Link>
        </footer>
      </div>
    </>
  );
}
