import React, { useState } from "react";
import JobList from "./JobList";
import Preview from "./Preview";
import Select from "react-select";

function Job() {
  const [labelItems, setLabelItems] = useState([]);
  const lableNames = [
    {
      value: 1,
      label: "Is Remote",
    },
    {
      value: 2,
      label: "5 day week",
    },
  ];
  const didHandleChange = (e) => {
    setLabelItems(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const [user, setUser] = useState({
    title: "",
    intro: "",
    roles: "",
    qualification: "",
    salary: "",
    company: "",
    location: "",
    jobType: "",
  });
  const [list, setList] = useState([]);

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const listOfItems = () => {
    setList((old) => {
      return [...old, user];
    });
    setUser({
      title: "",
      intro: "",
      roles: "",
      qualification: "",
      salary: "",
      company: "",
      location: "",
      jobType: "",
    });
    setLabelItems([]);
  };

  return (
    <div style={{ display: "flex" }}>
      <JobList
        build={user}
        make={list}
        setUser={setUser}
        setList={setList}
      ></JobList>
      <div
        className="left left-div mx-4 my-3"
        style={{
          width: "auto",
          border: "1px solid black",
          padding: "25px",
          display: "block",
          borderRadius: "2%",
          position: "relative",
          flex: "50%",

          height: "100%",
          backgroundImage:
            "linear-gradient(to bottom, #ff6600 0%, #ff99cc 100%)",
        }}
      >
        <h6 style={{ textAlign: "center" }}>** Job Post Manager **</h6>
        <div className="col-sm-10 my-3">
          <div>
            <input
              className="form-check-input title-check"
              type="checkbox"
              // id="checkboxNoLabel"
              id="accept1"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept1");
                let text = document.querySelector(".title-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              name="title"
              value={user.title}
              onChange={handleOnChange}
              placeholder="Job Post Title"
              style={{ width: "300px" }}
            />
          </div>

          <div
            className="form-check form-switch"
            style={{
              display: "flex",
              position: "absolute",
              top: "0rem",
              right: "0rem",
            }}
          >
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
              style={{ textShadow: "1px 1px grey" }}
            >
              ACTIVE?
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
        <div className="mb-3 mx-3">
          <div>
            <input
              className="form-check-input intro-check"
              type="checkbox"
              id="accept2"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept2");
                let text = document.querySelector(".intro-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />

            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mx-1"
            >
              Introduction
            </label>
          </div>

          <textarea
            className="form-control"
            id="inputIntro"
            name="intro"
            value={user.intro}
            onChange={handleOnChange}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3 mx-3">
          <div>
            <input
              className="form-check-input roles-check"
              type="checkbox"
              id="accept3"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept3");
                let text = document.querySelector(".roles-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label mx-1"
            >
              Roles and Responsibilities
            </label>
          </div>

          <textarea
            className="form-control"
            id="inputRoles"
            rows="3"
            name="roles"
            value={user.roles}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="col-sm-10 my-3">
          <div>
            <input
              className="form-check-input qualification-check"
              type="checkbox"
              id="accept4"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept4");
                let text = document.querySelector(".qualification-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <input
              type="text"
              className="form-control"
              id="inputQualification"
              name="qualification"
              value={user.qualification}
              onChange={handleOnChange}
              placeholder="Qualification"
              style={{ width: "350px" }}
            />
          </div>
        </div>
        <div className="col-sm-10 my-3">
          <div>
            <input
              className="form-check-input salary-check"
              type="checkbox"
              id="accept5"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept5");
                let text = document.querySelector(".salary-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <input
              type="number"
              className="form-control"
              id="inputSalary"
              name="salary"
              value={user.salary}
              onChange={handleOnChange}
              placeholder="Salary (in LPA)"
              style={{ width: "250px" }}
            />
          </div>
        </div>
        <div className="col-sm-10 my-3">
          <div>
            <input
              className="form-check-input company-check"
              type="checkbox"
              id="accept6"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept6");
                let text = document.querySelector(".company-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <input
              type="text"
              className="form-control"
              id="inputCompany"
              name="company"
              value={user.company}
              onChange={handleOnChange}
              placeholder="Company"
              style={{ width: "350px" }}
            />
          </div>
        </div>
        <div className="col-sm-10 my-3">
          <div>
            <input
              className="form-check-input location-check"
              type="checkbox"
              id="accept7"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept7");
                let text = document.querySelector(".location-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <input
              type="text"
              className="form-control"
              id="inputLocation"
              name="location"
              value={user.location}
              onChange={handleOnChange}
              placeholder="Job Location"
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <div className="dropdown-content mx-3" style={{ display: "flex" }}>
          <div className="drp-1">
            <input
              className="form-check-input jobType-check"
              type="checkbox"
              id="accept8"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept8");
                let text = document.querySelector(".jobType-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />
            <select
              className="selectpicker "
              title="Job Type:"
              name="jobType"
              value={user.jobType}
              onChange={handleOnChange}
            >
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <br />
          <div className="drp-2 mx-5">
            <input
              className="form-check-input label-check"
              type="checkbox"
              id="accept9"
              value=""
              aria-label="..."
              onClick={() => {
                let cb = document.querySelector("#accept9");
                let text = document.querySelector(".label-text");
                if (cb.checked === true) {
                  text.style.display = "block";
                } else {
                  text.style.display = "none";
                }
              }}
            />

            <Select
              isMulti
              options={lableNames}
              placeholder="Lable :"
              onChange={didHandleChange}
            ></Select>
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-submit"
            style={{
              textShadow: "1px 1px grey",
              backgroundColor: "#aeff00",
            }}
            onClick={listOfItems}
          >
            Submit
          </button>
        </div>
      </div>

      <Preview input={user} multi={labelItems}></Preview>
    </div>
  );
}

export default Job;
