import React from "react";

import Project from "../components/project";
function ProjectView(props) {
  return (
    <div className="App">
      <Project id={props.match.params.id} />
    </div>
  );
}

export default ProjectView;
