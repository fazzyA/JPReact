import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "../Post";
import SubPost from "../SubPost";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";

export const Routers = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
          <li>
            <Link to="/posts"> Posts </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/about"><About /></Route> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/post/:id" element={<SubPost />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};
