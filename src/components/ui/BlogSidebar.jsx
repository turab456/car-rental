export default function BlogSidebar() {
  return (
    <aside className="sidebar">

      <div className="widget search">
        <h5 className="widget-title">Search</h5>
        <input type="text" className="form-control" placeholder="Search Here..." />
      </div>

      <div className="widget category">
        <h5 className="widget-title">Category</h5>
        <a href="#">Book Transport</a>
        <a href="#">Traveling</a>
        <a href="#">Cab Booking Trips</a>
      </div>

      <div className="widget recent-post">
        <h5 className="widget-title">Recent Post</h5>
        <img src="/assets/img/blog/bs-1.jpg" alt="" />
      </div>

      <div className="widget sidebar-tag">
        <h5 className="widget-title">Popular Tags</h5>
        <a href="#">Taxi</a>
        <a href="#">Booking</a>
        <a href="#">Luxury</a>
      </div>

    </aside>
  );
}
