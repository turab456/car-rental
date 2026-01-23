import React from "react";
import BreadCrumbCard from "../../components/ui/BreadCrumbCard";
import BlogContent from "../../components/ui/BlogContent";
import BlogSidebar from "../../components/ui/BlogSidebar";
const page = () => {
  return (
    <>
      <div>
        <BreadCrumbCard />
         <div className="blog-single-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogContent />
          </div>

          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};
export default page;
