import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";
import styles from "../styles/BlogHome.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import Banner from "../components/Banner";

import { getAllPosts, PostMeta } from "../api/api";

export default function BlogHomePage({ posts }: { posts: PostMeta }) {
  return (
    <Layout>
      <Head>
        {/* Primary Meta Tags  */}
        <title>BlogProject.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="BlogProject.io"
          key="BlogProject.io"
        />
        <meta
          name="description"
          content="Here's a project that can be valuable for developers who want to have a blog simply and most cheaply. Deploying on Vercel, it's free for hobby accounts.
This blog project doesn't use a database, and the posts are Markdown files."
        />
        <meta
          name="keywords"
          content="javascript, webdev, frontend, backend, reactjs, nextjs, nodejs, opensource, blog, devblog,"
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogproject.io/" />
        <meta property="og:title" content="BlogProject.io" />
        <meta
          property="og:description"
          content="Here's a project that can be valuable for developers who want to have a blog simply and most cheaply. Deploying on Vercel, it's free for hobby accounts.
This blog project doesn't use a database, and the posts are Markdown files."
        />
        <meta
          property="og:image"
          content="https://blogproject.io/img-tag.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blogproject.io/" />
        <meta property="twitter:title" content="BlogProject.io" />
        <meta
          property="twitter:description"
          content="Here's a project that can be valuable for developers who want to have a blog simply and most cheaply. Deploying on Vercel, it's free for hobby accounts.
This blog project doesn't use a database, and the posts are Markdown files."
        />
        <meta
          property="twitter:image"
          content="https://blogproject.io/img-tag.png"
        />
      </Head>
      <Banner />
      <main className={styles.mainBox}>
        {Object(posts).map((post: PostMeta) => {
          const { slug } = post;
          const { title, author, intro, category, date, tags } = post;
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
  const posts: PostMeta[] = getAllPosts().map((post) => post.meta);

  return { props: { posts } };
};
