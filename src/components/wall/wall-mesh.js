  import FSS from './fss';
  import { scene } from './wall-scene';
  import { renderer } from './wall-renderers';
  import { geometry, setGeometry, mesh, setMesh, material, setMaterial } from './wall-globals';

  //------------------------------
  // Mesh Properties
  //------------------------------
  let MESH = {
    width: 1.2,
    height: 1.2,
    depth: 10,
    segments: 16,
    slices: 8,
    xRange: 0.8,
    yRange: 0.1,
    zRange: 1.0,
    ambient: '#555555',
    diffuse: '#FD0211',
    speed: 0.002
  };

function createMesh() {
  scene.remove(mesh);
  renderer.clear();

  setGeometry(new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices));
  setMaterial(new FSS.Material(MESH.ambient, MESH.diffuse));
  setMesh(new FSS.Mesh(geometry, material));

  scene.add(mesh);

  // Augment vertices for animation
  var v, vertex;
  for (v = geometry.vertices.length - 1; v >= 0; v--) {
    vertex = geometry.vertices[v];
    vertex.anchor = FSS.Vector3.clone(vertex.position);
    vertex.step = FSS.Vector3.create(
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0)
    );
    vertex.time = Math.randomInRange(0, Math.PIM2);
  }
}

export { createMesh, MESH }