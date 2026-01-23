import BlogAuthor from "./BlogAuthor";
import BlogComments from "./BlogComments";

export default function BlogContent() {
  return (
    <div className="blog-single-wrapper">
      <div className="blog-single-content">

        <div className="blog-thumb-img">
          <img src="/assets/img/blog/single.jpg" alt="thumb" />
        </div>

        <div className="blog-info">

          <div className="blog-meta">
            <div className="blog-meta-left">
              <ul>
                <li><i className="far fa-user"></i> Jean R Gunter</li>
                <li><i className="far fa-comments"></i> 3.2k Comments</li>
                <li><i className="far fa-thumbs-up"></i> 1.4k Like</li>
              </ul>
            </div>
            <div className="blog-meta-right">
              <a href="#" className="share-btn">
                <i className="far fa-share-alt"></i> Share
              </a>
            </div>
          </div>

          <div className="blog-details">
            <h3 className="blog-details-title mb-20">
              It is a long established fact that a reader
            </h3>

            <p className="mb-10">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem...
            </p>

            <blockquote className="blockqoute">
              It is a long established fact that a reader will be distracted...
              <h6 className="blockqoute-author">Mark Crawford</h6>
            </blockquote>

            <div className="row">
              <div className="col-md-6 mb-20">
                <img src="/assets/img/blog/01.jpg" alt="" />
              </div>
              <div className="col-md-6 mb-20">
                <img src="/assets/img/blog/02.jpg" alt="" />
              </div>
            </div>

            <hr />

            <div className="blog-details-tags pb-20">
              <h5>Tags :</h5>
              <ul>
                <li><a href="#">Taxi</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Online</a></li>
              </ul>
            </div>
          </div>

          <BlogAuthor />
        </div>

        <BlogComments />

      </div>
    </div>
  );
}
