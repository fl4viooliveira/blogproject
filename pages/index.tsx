import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";
import styles from "../styles/BlogHome.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import Banner from "../components/Banner";

export default function BlogHomePage({ posts }: any) {
  posts.sort((a: any, b: any) => {
    const dateA: any = new Date(a.frontmatter.date);
    const dateB: any = new Date(b.frontmatter.date);
    return dateB - dateA;
  });

  return (
    <Layout>
      <Banner />
      <main className={styles.mainBox}>
        {posts.map((post: any) => {
          const { slug, frontmatter } = post;
          const { title, author, intro, category, date, tags } = frontmatter;
          const postDate = new Date(date);

          return (
            <article className={styles.articleBox} key={title}>
              <h5>{postDate.toDateString()}</h5>
              <Link href={`/${slug}`}>
                <h1 className={styles.title}>{title}</h1>
              </Link>
              <div className={styles.avatarIntro}>
                <div className={styles.author}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://github.com/${author}`}
                  >
                    <Image
                      className={styles.authorImage}
                      src={`https://github.com/${author}.png`}
                      alt="Picture of author"
                      width={50}
                      height={50}
                    />
                  </a>
                </div>
                <p className={styles.intro}>{intro.substr(0, 100) + " ..."}</p>
              </div>
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
    </Layout>
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
