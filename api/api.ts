import path from "path";
import fs from "fs-extra";
import { sync } from "glob";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.md`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _ext] = fileName.split(".");
    return slug;
  });
};

export const getAllPosts = () => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (a.meta.date < b.meta.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

interface Post {
  content: string;
  meta: PostMeta;
}

export interface PostMeta {
  slug: string;
  date: string;
  title: string;
  url: string;
  author: string;
  intro: string;
  category: string[];
  tags: string[];
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.md`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      date: (data.date ?? new Date()),
      title: data.title ?? slug,
      url: data.url ?? "",
      author: data.author ?? "",
      intro: data.intro ?? "",
      category: (data.category ?? []).sort(),
      tags: (data.tags ?? []).sort(),
    },
  };
};
