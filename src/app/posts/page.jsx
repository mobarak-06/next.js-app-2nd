import Link from "next/link";
import React from "react";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All Posts",
  description: "Loading Json placeHolder posts using Server Components",
};


const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="space-y-8">
      {posts.map((singlePost) => (
        <div key={singlePost.id}>
          <p className={`${style.postTitle}`}>{singlePost.title}</p>
          <p className="test-css">{singlePost.body}</p>
          <Link href={`/posts/${singlePost.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
