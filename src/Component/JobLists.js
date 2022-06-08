import React from "react";

function JobLists(props) {
  return (
    <>
      <div className="listRensering">
        {" "}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{ backgroundColor: "red" }}
          onClick={props.delete(props.id)}
        ></button>
        <button class="btn btn-primary" type="button" onClick={props.duplicate}>
          Duplicate
        </button>
        <li onClick={props.design} style={{ cursor: "pointer" }}>
          JP
        </li>
      </div>
    </>
  );
}

export default JobLists;
