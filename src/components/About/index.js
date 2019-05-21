import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container">
    <h1>About</h1>
    <p style={{ fontSize: "1.15rem" }}>
      I loved playing Xenoblade Chronicles 2 and wanted to collect all the
      blades in the game. I tried to figure out what blades I needed to collect
      but the game didn't seem to have a checklist feature. I had some free time
      so I decided to make this simple checklist app. All the data for the
      blades was obtain from the{" "}
      <a href="https://xenoblade.fandom.com/wiki/Blade">
        Xenoblade fandom wiki page
      </a>
      .
    </p>
    <p style={{ fontSize: "1.15rem" }}>
      In order to prevent spoilers, I have hidden some blades from the default
      view; you can enable spoilers in the settings option along with the blades
      obtained in the dlc and new game plus.
    </p>
    <Link to="/">Back to List</Link>
  </div>
);

export default About;
