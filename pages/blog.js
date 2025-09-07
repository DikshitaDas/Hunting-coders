import fs from "fs";
import path from "path";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = (props) => {
  const [posts, setPosts] = useState(props.allBlogs);

  return (
    <div className={styles.cards}>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blogpost/${post.slug}`}
          className={styles.card}
        >
          <h2>{post.title} →</h2>
          <p>{post.metaDesc.substring(0, 80)}...</p>
        </Link>
      ))}
    </div>
  );
};



export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), "blogdata");
  const files = fs.readdirSync(blogDir);

  const allBlogs = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    return {
      ...data,
      slug: filename.replace(".json", ""), // 👈 slug comes from file name
    };
  });

  return {
    props: { allBlogs },
  };
}

export default Blog;
