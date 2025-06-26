import React from "react";
import HeroBlog from "./HeroBlog";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <HeroBlog />
      <Blogs />
    </div>
  );
};

export default BlogPage;
