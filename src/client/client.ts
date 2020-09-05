import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';

const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

// var animate = function () {
//   requestAnimationFrame(animate);

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

//   controls.update();

//   renderer.render(scene, camera);
// };

function render() {
  renderer.render(scene, camera);
}
render();

// animate();
