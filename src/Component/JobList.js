import React from "react";
import JobLists from "./JobLists";

function JobList(props) {
  const itmeHoldsValues = () => props.make.map((value) => props.setUser(value));

  const deleteItems = (index) => () =>
    props.setList((old) => old.filter((_, i) => i !== index));

  const duplicate = (item, j) => {
    props.setList((data) => {
      let rawData = [...data];
      const id = `${rawData.length + 1}`;
      const Index = parseInt(j + 1);
      rawData.splice(Index, 0, { ...item, id });
      return rawData;
    });
  };

  return (
    <div
      className="list-main-div my-3"
      style={{
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <ol className="list-container my-3" style={{ color: "white" }}>
        {props.make.map((it, index) => {
          return (
            <JobLists
              key={it.id}
              value={it.title}
              id={index}
              design={itmeHoldsValues}
              delete={deleteItems}
              duplicate={duplicate}
            />
          );
        })}
      </ol>
    </div>
  );
}
export default JobList;
