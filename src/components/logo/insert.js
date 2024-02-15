import * as d3 from 'd3';
export default function insertSVGIntoCurrentElement(svgNode, logoElement) {
	const logoEl = d3.select(logoElement);
	logoEl.node().append(svgNode);
	return logoEl;
}