import fs from "fs";
import { GetStaticProps } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import toc from "@jsdevtools/rehype-toc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import styles from "../styles/Doc.module.css";
import Layout from "../components/Layout";

export default function Docs({ content }: any) {
  console.log(content);
  return (
    <Layout>
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
                  {...props}
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docFile = fs.readFileSync("./README.md", "utf-8");
  const { data: frontmatter, content } = matter(docFile);
  // console.log(content);
  return {
    props: { content },
  };
};
