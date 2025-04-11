
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const GlobeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 200;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300);
    
    // Add canvas to DOM
    containerRef.current.appendChild(renderer.domElement);
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    
    // Globe
    const globeGeometry = new THREE.SphereGeometry(60, 64, 64);
    
    // Create materials for the globe
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00D4FF'),
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Add inner globe
    const innerGlobeGeometry = new THREE.SphereGeometry(58, 64, 64);
    const innerGlobeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7B68EE'),
      transparent: true,
      opacity: 0.1,
    });
    
    const innerGlobe = new THREE.Mesh(innerGlobeGeometry, innerGlobeMaterial);
    scene.add(innerGlobe);
    
    // Add dots at key locations
    const dotGeometry = new THREE.SphereGeometry(1, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color('#00D4FF') });
    
    // Create approx 20 dots at random locations on the globe
    for (let i = 0; i < 20; i++) {
      const phi = Math.acos(-1 + (2 * Math.random()));
      const theta = 2 * Math.PI * Math.random();
      
      const x = 60 * Math.sin(phi) * Math.cos(theta);
      const y = 60 * Math.sin(phi) * Math.sin(theta);
      const z = 60 * Math.cos(phi);
      
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.set(x, y, z);
      scene.add(dot);
      
      // Randomly create lines between some dots
      if (Math.random() > 0.7 && i > 0) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x, y, z),
          new THREE.Vector3(
            60 * Math.sin(Math.acos(-1 + (2 * Math.random()))) * Math.cos(2 * Math.PI * Math.random()),
            60 * Math.sin(Math.acos(-1 + (2 * Math.random()))) * Math.sin(2 * Math.PI * Math.random()),
            60 * Math.cos(Math.acos(-1 + (2 * Math.random())))
          )
        ]);
        
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: new THREE.Color('#7B68EE'),
          transparent: true,
          opacity: 0.5
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full"></div>;
};

export default GlobeAnimation;
