import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

export default function BlogHomePage({ posts }: any) {
  return (
    <main>
      {posts.map((post: any) => {
        const { slug, frontmatter } = post;

        const { title, author, category, date, mainImage, tags } = frontmatter;

        return (
          <article key={title}>
            <Link href={`/${slug}`}>
              <h1>{title}</h1>
              <h4>{date}</h4>
            </Link>
            <h2>{author}</h2>
            {/* <Image src={mainImage} width={100} height={100} /> */}
          </article>
        );
      })}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files: any = fs.readdirSync("posts");

  const posts = files.map((fileName: any) => {
    const slug: string = fileName.replace(".md", "");
    const readFile: any = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: fromtmatter } = matter(readFile)

    return {
      slug,
      fromtmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
