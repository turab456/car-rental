export default function BlogAuthor() {
  return (
    <div className="blog-author">
      <div className="blog-author-img">
        <img src="/assets/img/blog/author.jpg" alt="author" />
      </div>

      <div className="author-info">
        <h6>Author</h6>
        <h3 className="author-name">Mariam T. Rhodes</h3>
        <p>
          It is a long established fact that a reader will be distracted...
        </p>

        <div className="author-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}
