import React, { Component } from 'react';
import Progress from './Progress';

class ProgressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      active: false,
    };
  }

  componentDidMount() {
    window.progressbar = this;
  }

  onChange = (value) => {
    if (value === 100) {
      this.setState(
        {
          progress: value,
          active: true,
        },
        this.initProgress,
      );
    } else {
      this.setState({
        progress: value,
        active: true,
      });
    }
  };

  initProgress = () => {
    setTimeout(() => {
      this.setState({
        active: false,
        progress: 0,
      });
    }, 1000);
  };

  render() {
    return (
      <Progress active={this.state.active} progress={this.state.progress} />
    );
  }
}

export default ProgressContainer;
