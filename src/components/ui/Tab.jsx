"use client";

const Tab = ({text}) => {
  return (
    <div className="d-flex  mt-4">
      <button 
        type="button" 
        className="theme-btn"
        // style={{ minWidth: "250px", fontWeight: "500", fontSize: "16px" }}
      >
        {text}
      </button>
    </div>
  )
}

export default Tab;
