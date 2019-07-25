import React from "react";
import Projects from "../assets/proyects.json";

import Project from "../components/project";
function ProjectView(props) {
  var project = {};
  Projects.forEach(loopProject => {
    if (loopProject.id === props.match.params.id) {
      project = loopProject;
    }
  });

  return (
    <div className="App">
      <Project projects={Projects} project={project} />
    </div>
  );
}

export default ProjectView;
