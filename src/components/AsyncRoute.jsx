import React, { Component } from 'react';
import Loader from './Loader/Loader';

class AsyncRoute extends Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Loader />;
  }
}

export default AsyncRoute;
