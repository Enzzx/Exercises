import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 50);

// CRIANDO CUBO
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera);
}
animate();
*/







/*
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
*/

//CRIANDO O CENÁRIO - - - - - - - - - - - - - -
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls(camera, renderer.domElement)
camera.position.setZ(50)

//CRIANDO PLANETAS E ESTRELAS - - - - - - - - -
const sunTexture = new THREE.TextureLoader().load('sun.jpg')
const earthTexture = new THREE.TextureLoader().load('earth.jpeg')
const marsTexture = new THREE.TextureLoader().load('mars.jpeg')
const bumpTexture = new THREE.TextureLoader().load('bump.jpeg')

const mars = new THREE.Mesh(
	new THREE.SphereGeometry(19, 40, 40),
	new THREE.MeshStandardMaterial({
		map: marsTexture,
		normalMap: bumpTexture
	})
)
scene.add(mars)

const earth = new THREE.Mesh(
	new THREE.SphereGeometry(16, 40, 40),
	new THREE.MeshStandardMaterial({
		map: earthTexture,
		normalMap: bumpTexture
	})
)
scene.add(earth)

const sun = new THREE.Mesh(
	new THREE.SphereGeometry(110, 60, 60),
	new THREE.MeshBasicMaterial({
		map: sunTexture,
		emissive: 0xff9999
	})
)
scene.add(sun)

function addStar() {
	const x = Math.floor(Math.random() * 800 - 400)
	const y = Math.floor(Math.random() * 200 - 100)
	const z = Math.floor(Math.random() * 8000 - 400)
	
	const geometry = new THREE.SphereGeometry(1, 15, 15)
	const shift = (Math.floor(Math.random() * 2) == 1) ? 0xeebbbb : 0xbbbbee
	const material = new THREE.MeshStandardMaterial({ color: shift })
	const star = new THREE.Mesh(geometry, material)
	
	star.position.set(x, y, z)
	scene.add(star)
}
for (let i = 0; i < 700; i++) {
	addStar()
}

//ADICIONANDO LUZ - - - - - - - - - - - - - - - -
const pointLight = new THREE.PointLight("lightyellow", 100000)
const lightHelper = new THREE.PointLightHelper(pointLight)
//const ambientLight = new THREE.AmbientLight(0xffffff)
//const gridHelper = new THREE.GridHelper(1000, 50)

scene.add(pointLight, lightHelper)
/*const spaceBg = new THREE.TextureLoader().load('space.jpeg');
spaceBg.wrapS = THREE.RepeatWrapping;
spaceBg.wrapT = THREE.RepeatWrapping;
spaceBg.repeat.set( 1, 4 );
scene.background = spaceBg;*/

/*const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
const renderPass = new RenderPass(scene, camera)

const composer = new EffectComposer(renderer)
composer.setSize(window.innerWidth, window.innerHeight);
composer.addPass(renderPass)
composer.addPass(bloomPass)*/

let angle = 0
function animate() {
	requestAnimationFrame( animate );
	sun.rotation.y += 0.0004
	mars.rotation.x += 0.0001;
	mars.rotation.y += 0.005;
	earth.rotation.x += 0.0001;
	earth.rotation.y += 0.005;
	
	angle += 0.005
	mars.position.set(Math.cos(angle * 0.75) * 330, 0, Math.sin(angle * 0.75) * 330)
	earth.position.set(Math.cos(angle) * 250, 0, Math.sin(angle) * 250)
	
	controls.update()
	//composer.render()
	renderer.render( scene, camera );
}
animate();
