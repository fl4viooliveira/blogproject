import Layout from "../components/Layout";
import styles from "../styles/Post.module.css";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter, { language } from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import toc from "@jsdevtools/rehype-toc";

import hljs from "highlight.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import Image from "next/image";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

import { useRouter } from "next/router";

export default function Post({ frontmatter, content }: any) {
  const { title, url, author, intro, category, date, tags } = frontmatter;

  const router = useRouter()
  const path = `https://blogproject.io${router.asPath}`

  const postDate = new Date(date);
  return (
    <Layout>
      <Head>
        {url ? (
          <link rel="canonical" href={url} />
        ) : (
          <></>
        )}
        {/* Primary Meta Tags  */}
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key={title} />
        <meta name="description" content={intro} />
        <meta name="keywords" content={tags.join(", ")} />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={path} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={intro} />
        <meta property="og:image" content="https://blogproject.io/img-tag.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={path} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={intro} />
        <meta property="twitter:image" content="https://blogproject.io/img-tag.png" />
      </Head>
      <div className={styles.mainBox}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.postHeader}>
          <div className={styles.headerInfo}>
            <div className={styles.author}>
              <span>By:</span>
              <a
                className={styles.authorLink}
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
              <p className={styles.authorName}>{author}</p>
            </div>
            <div className={styles.date}>
              <span>On:</span>
              <p>{postDate.toDateString()}</p>
            </div>
            <h3 className={styles.tempLine}>
              {/* TODO: Add Link to category */}
              {category
                ? category.map((cat: string) => {
                  return <span key={cat}>{`${cat} `}</span>;
                })
                : ""}
              {/* {category.join(", ")} */}
              || {tags.join(", ")}
            </h3>
            {url ? (
              <a target="_blank" rel="noreferrer" href={url}>
                👁 Original post.
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={styles.markdownBox}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw, toc]}
            // children={content}
            components={{
              code({ node, style, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    // style={nord}
                    language={match[1]}
                    {...props
                    }
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </Layout >
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
};
