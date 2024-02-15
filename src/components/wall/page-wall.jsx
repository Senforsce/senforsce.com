import React, { Component } from 'react';
import initialise from './wall-init';

const grandInitialise = (function(wallElement, outputElement) {
  initialise(wallElement, outputElement);
});

export default class Wall extends Component {
    constructor () {
        super();
    }

    componentDidMount () {
      // Let there be light!
      grandInitialise(this.refs.wall, this.refs.output);

    }

    render() {
        return (<div id="wall" ref="wall" className="wall">
          <div id="output" ref="output"></div>
        </div>);
    }
  }

