import React from "react";
import img from "../assets/service/services.jpg";
import Image from "next/image";
const blogs = [
  {
    id: 1,
    img: img,
    author: "Alicia Davis",
    date: "February 23, 2023",
    title: "There are many variations of passage available.",
    delay: ".25s",
  },
  {
    id: 2,
    img: img,
    author: "Alicia Davis",
    date: "February 23, 2023",
    title: "There are many variations of passage available.",
    delay: ".50s",
  },
  {
    id: 3,
    img: img,
    author: "Alicia Davis",
    date: "February 23, 2023",
    title: "There are many variations of passage available.",
    delay: ".75s",
  },
];

const Blog = () => {
  return (
    <div className="blog-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive"></i> Our Blog
              </span>
              <h2 className="site-title">Latest News &amp; Blog</h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div className="col-md-6 col-lg-4" key={blog.id}>
              <div
                className="blog-item wow fadeInUp"
                data-wow-delay={blog.delay}
              >
                <div className="blog-item-img">
                  <Image src={blog.img} alt="Thumb" />
                </div>
                <div className="blog-item-info">
                  <div className="blog-item-meta">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-user-circle"></i> By {blog.author}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-calendar-alt"></i> {blog.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="blog-title">
                    <a href="#">{blog.title}</a>
                  </h4>
                  <a className="theme-btn" href="#">
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
