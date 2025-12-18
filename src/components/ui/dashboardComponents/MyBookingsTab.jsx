"use client";

import { useEffect, useState, useCallback } from "react";
import DynamicBookingTable from "./components/CustomTable";
import { fetchMyLeads } from "./services/apiServices";

const STATUS_FILTERS = [
  { label: "Latest", value: "latest" },
  { label: "Confirmed", value: "conformed" },
  { label: "Processing", value: "processing" },
  { label: "Cancelled", value: "cancelled" },
];

export default function MyBookingTab() {
  const columns = [
    { label: "Lead ID", key: "uniqueLeadName" },
    { label: "Username", key: "username" },
    { label: "Phone Number", key: "phoneNumber" },
    { label: "Created By", key: "createdByUsername" },
    { label: "Trip Type", key: "tripType" },
    { label: "Locations", key: "locations" },
    { label: "Total KM", key: "totalKm" },
    { label: "Total Amount", key: "totalAmount" },
    { label: "Vehicle Type", key: "vehicleType" },
    { label: "Pickup Date", key: "pickUpDate" },
    { label: "Pickup Time", key: "pickUpTime" },
    { label: "User City", key: "userCity" },
    { label: "Lead Status", key: "leadStatus" },
    { label: "Created At", key: "createdAt" },
  ];

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  // filters
  const [status, setStatus] = useState("latest");
  const [search, setSearch] = useState("");

  // pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const loadLeads = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await fetchMyLeads({
        ridestatus: status,
        page: pagination.page,
        limit: pagination.limit,
      });

      const resp = data;

      const transformedLeads = resp?.docs?.map((lead) => ({
        ...lead,
        user_id: lead.userId?._id,
        username: lead.userId?.username,
        phoneNumber: lead.userId?.phoneNumber,
        createdByUsername: lead.createdBy?.username,
        updatedByUsername: lead.updatedBy?.username,
      }));

      setLeads(transformedLeads || []);

      setPagination((prev) => ({
        ...prev,
        page: resp?.page,
        limit: resp?.limit,
        total: resp?.total,
        totalPages: resp?.totalPages,
        hasNextPage: resp?.hasNextPage,
        hasPrevPage: resp?.hasPrevPage,
      }));
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  }, [status, search, pagination.page, pagination.limit]);

  useEffect(() => {
    loadLeads();
  }, [loadLeads]);

  // when filters change, reset to page 1 and reload
  const handleStatusChange = (value) => {
    setStatus(value);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPagination((prev) => ({ ...prev, page: 1 }));
  };

  const handleLimitChange = (e) => {
    const value = Number(e.target.value) || 10;
    setPagination((prev) => ({ ...prev, limit: value, page: 1 }));
  };

  return (
    <div className="col-lg-9">
      <div className="user-profile-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <DynamicBookingTable
              title="My Booking"
              columns={columns}
              data={leads}
              loading={loading}
              pagination={pagination}
              onPageChange={(page) =>
                setPagination((prev) => ({ ...prev, page }))
              }
              // 🔹 custom filter UI passed via props
              renderFilters={() => (
                <div className="d-flex flex-wrap gap-2 justify-content-end">

                  {/* status pills */}
                  <div className="btn-group" role="group">
                    {STATUS_FILTERS.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={
                          "status-pill " +
                          (status === item.value ? "status-pill--active" : "status-pill--inactive")
                        }
                        onClick={() => handleStatusChange(item.value)}
                      >
                        {item.label}
                      </button>

                    ))}
                  </div>

                  {/* search */}
                  {/* <div className="input-group input-group-sm" style={{ maxWidth: 220 }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by name / city / phone"
                      value={search}
                      onChange={handleSearchChange}
                    />
                    <span className="input-group-text">
                      <i className="fa fa-search" />
                    </span>
                  </div> */}

                  {/* page size */}
                  {/* <select
                    className="form-select form-select-sm"
                    style={{ width: 90 }}
                    value={pagination.limit}
                    onChange={handleLimitChange}
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select> */}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
