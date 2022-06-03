import Layout from "../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter, { language } from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import toc from "@jsdevtools/rehype-toc";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import Image from "next/image";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function Post({ frontmatter, content }: any) {
  const { title, author, category, date, tags } = frontmatter;

  const postDate = new Date(date);
  return (
    <Layout>
      <h1>{title}</h1>
      <h2>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${author}`}
        >
          {/* <Image
            src={`https://github.com/${author}.png`}
            alt="Picture of author"
            width={50}
            height={50}
          /> */}
          {author}
        </a>
        || {postDate.toDateString()}
      </h2>
      <h3>
        {/* TODO: Add Link to category
         {category
          ? category.map((cat: string) => {
              return <span key={cat}>{`${cat} `}</span>;
            })
          : ""} */}
        {category.join(", ")}
        || {tags.join(", ")}
      </h3>
      {/* <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize, toc]}
      >
        {content}
      </ReactMarkdown> */}

      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeRaw, toc]}
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                // TODO: fix typescript error
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </Layout>
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
