import { createRenderer } from './wall-renderers';
import { createScene } from './wall-scene';
import { createMesh } from './wall-mesh';
import { createLights } from './wall-lights';
import { addEventListeners } from './wall-events';
import resize from './wall-resize';
import animate from './wall-animate';

export default function initialise(wallElement, outputElement) {
	createRenderer(wallElement, outputElement);
	createScene();
	createMesh();
	createLights();
	addEventListeners(wallElement);
	resize(window.innerWidth, window.innerHeight);
	animate();
}
