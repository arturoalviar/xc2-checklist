import React, { Component } from "react";
import ControlToggle from "../ControlToggle/ControlToggle";
import Accordion from "../Accordion";
import "./UserSettings.css";

class UserSettings extends Component {
  //keep track of what settings user selects
  state = {
    options: {
      isDlc: false,
      isNewGamePlus: false,
      isSpoiler: false
    }
  };

  updateOptions = (option, index) => {
    const options = { ...this.state.options };

    options[index] = option;
    this.setState({ options }, () => {
      this.props.updateBladeListByOptions(this.state.options);
    });
  };

  // check for user settings
  componentDidMount() {
    const userOptions = localStorage.getItem("userOptions");

    if (userOptions) {
      this.setState({ options: JSON.parse(userOptions) }, () => {
        this.props.updateBladeListByOptions(this.state.options);
      });
    }
  }

  // remember the user's settings
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("userOptions", JSON.stringify(this.state.options));
  }

  render() {
    const { isDlc, isNewGamePlus, isSpoiler } = this.state.options;
    const { isOpen } = this.props;
    return (
      <Accordion isOpen={isOpen}>
        <div className="blade-list-controls xc2-user-settings">
          <ControlToggle
            name="isSpoiler"
            label="Show Spoiler Blades"
            updateOptions={this.updateOptions}
            isChecked={isSpoiler}
          />
          <ControlToggle
            name="isDlc"
            label="Show DLC Blades"
            updateOptions={this.updateOptions}
            isChecked={isDlc}
          />
          <ControlToggle
            name="isNewGamePlus"
            label="Show New Game+ Blades"
            updateOptions={this.updateOptions}
            isChecked={isNewGamePlus}
          />
        </div>
      </Accordion>
    );
  }
}

export default UserSettings;
