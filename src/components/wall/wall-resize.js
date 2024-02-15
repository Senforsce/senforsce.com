import FSS from './fss';
import { renderer } from './wall-renderers';
import { createMesh } from './wall-mesh';
import { center } from './wall-globals';

export default function resize(width, height) {
    let w = width || 1024;
	let h = height || 768;
	renderer.setSize(w, h);
	FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
	createMesh();
}