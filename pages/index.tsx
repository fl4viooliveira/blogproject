import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";
import styles from "../styles/BlogHome.module.css";

export default function BlogHomePage({ posts }: any) {
  return (
    <div className={styles.container}>
      <main className={styles.mainBox}>
        {posts.map((post: any) => {
          const { slug, frontmatter } = post;
          const { title, author, category, date, tags } = frontmatter;
          return (
            <article className={styles.articleBox} key={title}>
              <h5>{date}</h5>
              <Link href={`/${slug}`}>
                <h1 className={styles.title}>{title}</h1>
              </Link>
              <h4 className={styles.author}>{author}</h4>
              <p>
                {category
                  ? category.map((cat: string) => {
                      return (
                        <span
                          className={styles.category}
                          key={cat}
                        >{`${cat}`}</span>
                      );
                    })
                  : ""}
              </p>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files: any = fs.readdirSync("posts");

  const posts = files.map((fileName: any) => {
    const slug: string = fileName.replace(".md", "");
    const readFile: any = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
