import React from "react";

const DynamicBookingTable = ({
  title,
  columns = [],
  data = [],
  loading = false,

  // pagination
  pagination,
  onPageChange = () => { },

  // 🔹 custom filter/search UI coming from parent
  renderFilters, // function that returns JSX
}) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="user-profile-card">

          {/* Header + filters row */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-2  px-3 py-2 rounded-3">
            <h4 className="user-profile-card-title mb-0 text-black flex-grow-1 text-nowrap">
              {title}
            </h4>

            {renderFilters && (
              <div className="w-100 w-md-auto d-flex justify-content-md-end justify-content-start">
                {renderFilters()}
              </div>
            )}
          </div>



          <div className="table-responsive">
            <table className="table text-nowrap">
              <thead>
                <tr>
                  {columns.map((col, i) => (
                    <th key={i}>{col.label}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.map((col, colIndex) => (
                        <td key={colIndex}>
                          {col.key === "cabInfo" ? (
                            <div className="table-list-info">
                              <a href="#">
                                <img src={row.image} alt="" />
                                <div className="table-list-content">
                                  <h6>{row.vehicleType}</h6>
                                  <span>
                                    Booking ID: #{row.uniqueLeadName}
                                  </span>
                                </div>
                              </a>
                            </div>
                          ) : (
                            row[col.key] ?? "-"
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination?.totalPages >= 1 && (
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
              <span>
                Page {pagination?.page} of {pagination?.totalPages}
              </span>

              <div className="pagination-controls">
                <button
                  className="btn btn-sm btn-secondary me-2"
                  disabled={pagination?.page === 1}
                  onClick={() => onPageChange(pagination?.page - 1)}
                >
                  Prev
                </button>

                <button
                  className="btn btn-sm btn-secondary"
                  disabled={pagination?.page === pagination?.totalPages}
                  onClick={() => onPageChange(pagination?.page + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DynamicBookingTable;
