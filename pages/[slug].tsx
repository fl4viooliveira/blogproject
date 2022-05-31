import Layout from "../components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter, { language } from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import toc from "@jsdevtools/rehype-toc";

import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

export default function Post({ frontmatter, content }: any) {
  const { title, author, category, date, tags } = frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {/* {category
          ? category.map((cat: string) => {
              return <span key={cat}>{`${cat} `}</span>;
            })
          : ""} */}
        {category.join(", ")}
        || {tags.join(", ")}
      </h3>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize, toc]}
      >
        {content}
      </ReactMarkdown>
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
