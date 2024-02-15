  import FSS from './fss';
  import { scene } from './wall-scene';
  import { renderer } from './wall-renderers';

  //------------------------------
  // Light Properties
  //------------------------------
  var LIGHT = {
    count: 2,
    xyScalar: 1,
    zOffset: 10,
    ambient: '#CCCCCC',
    diffuse: '#888888',
    speed: 0.001,
    gravity: 1200,
    dampening: 0.95,
    minLimit: 10,
    maxLimit: null,
    minDistance: 20,
    maxDistance: 400,
    autopilot: false,
    draw: true,
    bounds: FSS.Vector3.create(),
    step: FSS.Vector3.create(
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0)
    )
  };


function createLights() {
  var l, light;
  for (l = scene.lights.length - 1; l >= 0; l--) {
    light = scene.lights[l];
    scene.remove(light);
  }
  renderer.clear();
  for (l = 0; l < LIGHT.count; l++) {
    light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
    light.ambientHex = light.ambient.format();
    light.diffuseHex = light.diffuse.format();
    scene.add(light);

    // Augment light for animation
    light.mass = Math.randomInRange(0.5, 1);
    light.velocity = FSS.Vector3.create();
    light.acceleration = FSS.Vector3.create();
    light.force = FSS.Vector3.create();

    // Ring SVG Circle
    light.ring = document.createElementNS(FSS.SVGNS, 'circle');
    light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
    light.ring.setAttributeNS(null, 'stroke-width', '0.5');
    light.ring.setAttributeNS(null, 'fill', 'none');
    light.ring.setAttributeNS(null, 'r', '10');

    // Core SVG Circle
    light.core = document.createElementNS(FSS.SVGNS, 'circle');
    light.core.setAttributeNS(null, 'fill', light.diffuseHex);
    light.core.setAttributeNS(null, 'r', '4');
  }
  console.log(scene);
}

export { createLights, LIGHT }