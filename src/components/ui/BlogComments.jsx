export default function BlogComments() {
  return (
    <div className="blog-comments">
      <h3>Comments (20)</h3>

      <div className="blog-comments-single">
        <img src="/assets/img/blog/com-1.jpg" alt="" />
        <div className="blog-comments-content">
          <h5>Lynne Green</h5>
          <span><i className="far fa-clock"></i> February 24, 2023</span>
          <p>There are many variations of passages...</p>
          <a href="#"><i className="far fa-reply"></i> Reply</a>
        </div>
      </div>

      <div className="blog-comments-form">
        <h3>Leave A Comment</h3>
        <form>
          <input type="text" className="form-control mb-2" placeholder="Your Name*" />
          <input type="email" className="form-control mb-2" placeholder="Your Email*" />
          <textarea className="form-control mb-3" rows="5" placeholder="Your Comment*"></textarea>
          <button type="submit" className="theme-btn">
            Post Comment <i className="far fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
