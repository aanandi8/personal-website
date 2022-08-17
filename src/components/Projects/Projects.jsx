import "./Projects.scss";
import React from "react";

function Projects() {
  return (
    <div className="projectsPage">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projectSection">
        <div className="project">
          <div className="title">
            <h2>Recipe App</h2>
          </div>
          <div className="content">
            Created a web-app integrating spoonacular API to know ingredients
            and recipes involved in making recipes of different cuisines
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h2>Research (Experiment Data)</h2>
          </div>
          <div className="content">
            <li>
              Developed a GUI for researchers to input and retrieve participant
              information (name and id) from a database using Java
            </li>
            <li>
              Additional features included calculating each participant’s mean
              scores based on their performance
            </li>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h2>Dog Robot</h2>
          </div>
          <div className="content">
            <li>
              Built a robot simulation game using Unity, C# and TensorFlow where
              the robot learnt correct and incorrect actions through
              reinforcement learning
            </li>
            <li>
              Other features included the robot’s automatic rotation and
              shooting towards opponent based on a specific distance between
              them to save time by the player
            </li>
          </div>
        </div>
        <div className="project">
          <div className="title">
            <h2>Cognitive Control on Reward-Seeking Behaviour </h2>
          </div>
          <div className="content">
            <li>
              Designed tasks to measure cognitive control and reward-seeking
              behavior using PsychoJS
            </li>
            <li>
              Randomized display of different shapes (stimuli) and recorded
              participants button presses in response to stimuli
            </li>
            <li>
              Awarded points based on correct number of presses for the
              appropriate stimuli
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
