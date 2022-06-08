import React from "react";

function Preview(props) {
  return (
    <div>
      <div
        className="container mx-4 my-3"
        style={{
          width: "540px",
          border: "1px solid black",
          padding: "25px",
          display: "flex",
          borderRadius: "2%",
          flex: "50%",
          position: "relative",
          flexDirection: "column",
          height: "auto",
          backgroundImage:
            "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
        }}
      >
        <h6 style={{ textAlign: "center" }}>** Live Preview **</h6>
        <br />
        <h1>Job Title :</h1>
        <p className="title-text" style={{ display: "none" }}>
          {props.input.title}
        </p>

        <br />

        <h4>Introduction :</h4>
        <p className="intro-text" style={{ display: "none" }}>
          {props.input.intro}
        </p>
        <br />

        <h4>Roles and Responsibilities :</h4>
        <p className="roles-text" style={{ display: "none" }}>
          {props.input.roles}
        </p>
        <br />

        <h4>Qualification :</h4>
        <p className="qualification-text" style={{ display: "none" }}>
          {props.input.qualification}
        </p>
        <br />

        <h4>Salary :</h4>
        <p className="salary-text" style={{ display: "none" }}>
          {props.input.salary}
        </p>
        <br />

        <h4>Company :</h4>
        <p className="company-text" style={{ display: "none" }}>
          {props.input.company}
        </p>
        <br />

        <h4>Location :</h4>
        <p className="location-text" style={{ display: "none" }}>
          {props.input.location}
        </p>
        <br />
        <h4>Job Type :</h4>
        <p className="jobType-text" style={{ display: "none" }}>
          {props.input.jobType}
        </p>
        <br />
        <h4>Label :</h4>
        <p className="label-text" style={{ display: "none" }}>
          {props.multi + "  "}
        </p>
      </div>
    </div>
  );
}

export default Preview;
