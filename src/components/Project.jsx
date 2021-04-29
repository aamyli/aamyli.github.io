import React, { Component } from "react";

const Project = (props) => {
  const SimpleList = ({ list }) => (
    <ul>
      {list.map((item) => {
        return (
          <p className="tag" key={item}>
            {item}
          </p>
        );
      })}
    </ul>
  );

  return (
    <div id="Project" className={props.side}>
      <div className="card_tags">
          <SimpleList list={props.tags}></SimpleList>
      </div>
      <div className="proj_body">
      <div className="proj_title">
          <h4>{props.title}</h4>
      </div>
      <div className="proj_date">
        <h6>{props.date}</h6>
      </div>
      <div className="proj_desc">
          <p>{props.desc}</p>
      </div>
      <div className="proj_links">
          {props.links}
      </div>
      </div>
    </div>
  );
};

export default Project;
