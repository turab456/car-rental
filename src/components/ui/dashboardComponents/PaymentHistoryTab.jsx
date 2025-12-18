"use client";

export default function PaymentHistoryTab() {
  return (
    <div className="col-lg-9">
      <div className="user-profile-wrapper">
        <div className="row">
          <div className="col-lg-12">

            <div className="user-profile-card">

              {/* Header */}
              <div className="user-profile-card-header">
                <h4 className="user-profile-card-title">Payment History</h4>

                <div className="user-profile-card-header-right">
                  <div className="user-profile-search">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <i className="far fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr>
                      <th>Booking ID</th>
                      <th>Booking Date</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <th>#123456</th>
                      <td>24/02/2023</td>
                      <td>$650</td>
                      <td>
                        <span className="badge badge-success">Paid</span>
                      </td>
                    </tr>

                    <tr>
                      <th>#123456</th>
                      <td>24/02/2023</td>
                      <td>$650</td>
                      <td>
                        <span className="badge badge-danger">Pending</span>
                      </td>
                    </tr>

                    <tr>
                      <th>#123456</th>
                      <td>24/02/2023</td>
                      <td>$650</td>
                      <td>
                        <span className="badge badge-success">Paid</span>
                      </td>
                    </tr>

                    <tr>
                      <th>#123456</th>
                      <td>24/02/2023</td>
                      <td>$650</td>
                      <td>
                        <span className="badge badge-success">Paid</span>
                      </td>
                    </tr>

                    <tr>
                      <th>#123456</th>
                      <td>24/02/2023</td>
                      <td>$650</td>
                      <td>
                        <span className="badge badge-success">Paid</span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="pagination-area">
                <div aria-label="Page navigation example">
                  <ul className="pagination my-3">

                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <i className="far fa-angle-double-left"></i>
                        </span>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">
                          <i className="far fa-angle-double-right"></i>
                        </span>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
