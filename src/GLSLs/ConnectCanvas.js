import * as THREE from 'three';

class Connect{
  constructor(container) {
    this.container = container
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    this.container.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 1);
    this.canvasSize = {
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
    };
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.canvasSize.width / this.canvasSize.height,
      0.1,
      100
    );

  }
  

  resize() {

  }

  create() {

  }

  draw() {

  }

  connect() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {

      this.connect();
    });

  }
}

export default Connect  


