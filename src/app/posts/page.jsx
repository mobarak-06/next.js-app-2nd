import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="space-y-8">
      {posts.map((singlePost) => (
        <div key={singlePost.id}>
          <p>{singlePost.title}</p>
          <p>{singlePost.body}</p>
          <Link href={`/posts/${singlePost.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
