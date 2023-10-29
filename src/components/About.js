import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {!props.bio ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.githublink} linkedin={props.linkedinlink}/> 
    </div>
  );
}

export default About;
