import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./Accordion.css";

class Accordion extends Component {
  state = {
    isOpen: this.props.isOpen || false
  };

  accordionRef = React.createRef();

  transitionOptions = {
    classNames: "xc2-accordion",
    timeout: { enter: 400, exit: 400 }
  };

  updateUserSettingsHeight = oldHeight => {
    const element = this.accordionRef.current;
    let height = "0px";

    if (this.state.isOpen) {
      element.style.height = "auto";
      height = `${element.offsetHeight}px`;
    }
    if (height !== oldHeight) {
      element.style.height = oldHeight;
      //eslint-disable-next-line
      element.clientHeight;
      element.style.height = height;
    }
  };

  handleTransitionEnd = event => {
    const element = this.accordionRef.current;
    const { isOpen } = this.state;

    element.style.height = isOpen ? "auto" : "0px";
  };

  componentDidMount() {
    if (!this.state.isOpen) {
      this.accordionRef.current.style.height = "0px";
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = prevProps;
    if (isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
    const currentHeight = `${this.accordionRef.current.clientHeight}px`;
    this.updateUserSettingsHeight(currentHeight);
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <CSSTransition {...this.transitionOptions} in={isOpen} appear={isOpen}>
        <div
          className={`xc2-accordion ${isOpen ? "is-open" : ""}`}
          ref={this.accordionRef}
          onTransitionEnd={this.handleTransitionEnd}
        >
          {children}
        </div>
      </CSSTransition>
    );
  }
}

export default Accordion;
