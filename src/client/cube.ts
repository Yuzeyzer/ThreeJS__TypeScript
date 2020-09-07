import * as THREE from '/build/three.module.js';
import { GUI } from '/jsm/libs/dat.gui.module';

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');

const cubeRotationFolder = cubeFolder.addFolder('Rotation');
cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);

const cubePositionFolder = cubeFolder.addFolder('Position');
cubePositionFolder.add(cube.position, 'x', 0, 2, 0.01);
cubePositionFolder.add(cube.position, 'y', 0, 2, 0.01);
cubePositionFolder.add(cube.position, 'z', 0, 2, 0.01);

const cubeScaleFolder = cubeFolder.addFolder('Scale');
cubeScaleFolder.add(cube.scale, 'x', -5, 5);
cubeScaleFolder.add(cube.scale, 'y', -5, 5);
cubeScaleFolder.add(cube.scale, 'z', -5, 5);

cubeFolder.add(cube, 'visible', true);

var cubeData = {
  width: 1,
  height: 1,
  depth: 1,
  widthSegments: 1,
  heightSegments: 1,
  depthSegments: 1,
};
const cubePropertiesFolder = cubeFolder.addFolder('Properties');
cubePropertiesFolder
  .add(cubeData, 'width', 1, 30)
  .onChange(regenerateBoxGeometry)
  .onFinishChange(() => console.dir(cube.geometry));
cubePropertiesFolder.add(cubeData, 'height', 1, 30).onChange(regenerateBoxGeometry);
cubePropertiesFolder.add(cubeData, 'depth', 1, 30).onChange(regenerateBoxGeometry);
cubePropertiesFolder.add(cubeData, 'widthSegments', 1, 30).onChange(regenerateBoxGeometry);
cubePropertiesFolder.add(cubeData, 'heightSegments', 1, 30).onChange(regenerateBoxGeometry);
cubePropertiesFolder.add(cubeData, 'depthSegments', 1, 30).onChange(regenerateBoxGeometry);

function regenerateBoxGeometry() {
  let newGeometry = new THREE.BoxGeometry(
    cubeData.width,
    cubeData.height,
    cubeData.depth,
    cubeData.widthSegments,
    cubeData.heightSegments,
    cubeData.depthSegments,
  );
  cube.geometry.dispose();
  cube.geometry = newGeometry;
}

export default cube;
