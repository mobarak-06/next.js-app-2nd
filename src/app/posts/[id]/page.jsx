import React from "react";

export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

const SinglePost = async ({ params }) => {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
//   console.log(singlePost);
  return (
    <div>
      <h1 className="text-2xl">{singlePost.title}</h1>
      <h1>{singlePost.body}</h1>
    </div>
  );
};

export default SinglePost;
