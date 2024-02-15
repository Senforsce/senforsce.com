import * as d3 from "d3";
import $ from 'jquery';
import './logo.css';
import  SvgLogo  from './logo.svg.js';
import insertSVGIntoCurrentElement from './insert';
import { getLetterASelector ,getLetterSSelector, getCircleSelector } from './selectors';
import getCenter from './center-calculator';
import updateAll from './gauge';


import React, { Component } from 'react';

export default class D3Chart extends Component {
    constructor () {
        super();
	}

    componentDidMount () {
    	var logoElement = this.refs.logo;

		const svgEl = d3.select(logoElement).select('svg');
		$("#logo svg").css({left: $(window).width()/2 -280});
		const letterA = getLetterASelector(svgEl);
		const letterS = getLetterSSelector(svgEl);
		const circle = getCircleSelector(svgEl);

		$(window).on('resize', function() {
			$("#logo svg").css({left: $(window).width()/2 -280});
		});
		
		//ROTATIONS CENTER POINTS
		const a_l_center = getCenter("g#Left");
		const a_r_center = getCenter("g#Right");
		// const s_o_center = getCenter("g#Outer_S");
		// const s_o_t_center = getCenter("g#OS_Top");
		// const s_o_m_center = getCenter("g#OS_Middle");
		// const s_o_b_center = getCenter("g#OS_Bottom");
		// const s_i_center = getCenter("g#Inner_S");
		// const s_i_t_center = getCenter("g#IS_Top");
		// const s_i_m_center = getCenter("g#IS_Middle");
		// const s_i_b_center = getCenter("g#IS_Bottom");


		updateAll(letterA, letterS, circle, a_l_center, a_r_center);

    }

    render() {
        return <div id="logo" ref="logo" className="logo" dangerouslySetInnerHTML={ {__html: SvgLogo()} }></div>;
    }
}