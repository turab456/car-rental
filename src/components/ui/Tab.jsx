"use client";

const Tab = ({ text }) => {
  return (
    <div className="d-flex  mt-4">
      <button
        type="button"
        className="theme-btn"
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {text}
      </button>
    </div>
  )
}

export default Tab;
