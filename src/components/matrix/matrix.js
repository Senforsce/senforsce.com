import React, { Component } from 'react';
import './matrix.css';
export default class D3Chart extends Component {
    constructor () {
        super();
    }

    render () {
    	return (<div className="matrix grid3x3" ref="matrix">
    				<div>
				        <div>1</div>
				        <div>2</div>
				        <div>3</div>
				    </div>
				    <div>
				        <div>4</div>
				        <div>5</div>
				        <div>6</div>
				    </div>
				    <div>
				        <div>7</div>
				        <div>8</div>
				        <div>9</div>
				    </div>

    		</div>)
    }
};
