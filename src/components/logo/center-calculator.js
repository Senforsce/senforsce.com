import $ from 'jquery';

export default function getCenter (el) {
    debugger;
    const coords = $(el)[0].getBBox();
    const centerX = coords.x + (coords.width / 2);
    const centerY = coords.y + (coords.height / 2);
    return centerX + ' ' + centerY;
}