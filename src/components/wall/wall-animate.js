import { setNow, start } from './wall-globals';
import update from './wall-update';
import render from './wall-render';

export default function animate() {
	setNow(Date.now() - start);
	update();
	render();
	requestAnimationFrame(animate);
}

