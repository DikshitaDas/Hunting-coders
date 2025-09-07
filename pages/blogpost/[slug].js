import fs from "fs";
import path from "path";
import styles from "../../styles/Blog.module.css";

const SlugPage = ({ post }) => {
  if (!post) return <p className={styles.loading}>Blog not found...</p>;

  return (
    <article className={styles.article}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export async function getStaticPaths() {
  const blogDir = path.join(process.cwd(), "blogdata");
  const files = fs.readdirSync(blogDir);

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".json", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogDir = path.join(process.cwd(), "blogdata");
  const filePath = path.join(blogDir, `${params.slug}.json`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const post = JSON.parse(fileContent);

  return {
    props: { post },
  };
}

export default SlugPage;
