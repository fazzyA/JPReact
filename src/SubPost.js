import React from "react";
import { useParams } from "react-router";
import { posts } from "./data";

const SubPost = () => {
  console.log(posts);
  const { id } = useParams();
  const record = posts.find((item) => item.id == id);
  return (
    <>
      <div>
        <h1> {record.title}</h1>
        <h3> {record.heading}</h3>
        <p>{record.desc}</p>
      </div>
    </>
  );
};

export default SubPost;
