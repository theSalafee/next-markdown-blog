import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import {sortByDate} from "../utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get the posts from the posts directory
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from each post
  const posts = files.map((filename) => {
    // create a slug/path to the file
    const slug = filename.replace(".md", "");
    // Get the frontmatter from the file
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf8");
    // console.log(markdownWithMeta);
    const {data:frontmatter} = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
