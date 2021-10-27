/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="card">
             {/* I got an error here, saying that I can't use the image element. */}
            <img src={post.frontmatter.cover_image} alt="" />

            <div className="post-date">Posted on {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
                <a className="btn">Read More</a>
            </Link>
        </div>
    );
}
