import * as THREE from "three"
export declare class Build{
    constructor() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(75, 1280 / 720, 0.5, 500);

        this.setSize(300,300);
        this.scene.background=new THREE.Color(0x000000);

        this.setupAnimateLoop();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }
    setupAnimateLoop() {
        const frame = () => {
            this.animate();
            requestAnimationFrame(frame);
        };
        frame();
    }

    animate() {
        this.render();
    }

    setSize(width: number, height: number) {
        this.renderer.setSize(
            width * devicePixelRatio, // devicePixelRatio用于适配缩放和高DPI屏幕
            height * devicePixelRatio
        );
        // 缩放(因为加了↑devicePixelRatio)
        this.domElement.style.width = width + 'px';
        this.domElement.style.height = height + 'px';
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    get domElement(){
        return this.renderer.domElement;
    }

    camera:THREE.PerspectiveCamera;
    scene:THREE.Scene;
    renderer:THREE.WebGLRenderer;
}
