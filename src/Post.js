import React, { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "./data";
const Post = () => {
  return (
    <div>
      <ul>
        {posts.map((item, index) => (
          <li>
            <Link to={`/post/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
