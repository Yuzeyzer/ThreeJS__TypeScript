import * as THREE from '/build/three.module.js';
import { OrbitControls } from '/jsm/controls/OrbitControls';
import Stats from '/jsm/libs/stats.module';
import { GUI } from '/jsm/libs/dat.gui.module';
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }
const stats = Stats();
document.body.appendChild(stats.dom);
const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);
cubeFolder.open();
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'z', 2, Math.PI * 3, 0.01);
cameraFolder.open();
var animate = function () {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // controls.update();
    // renderer.render(scene, camera);
    render();
    stats.update();
};
function render() {
    stats.begin();
    renderer.render(scene, camera);
    stats.end();
}
render();
animate();
