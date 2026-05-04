"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeIcosahedron() {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    return new THREE.EdgesGeometry(geo);
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.07;
    ref.current.rotation.y += delta * 0.11;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#C9A84C" transparent opacity={0.7} />
    </lineSegments>
  );
}

function Ring({
  radius,
  opacity,
  tiltX,
  speedY,
  speedZ,
}: {
  radius: number;
  opacity: number;
  tiltX: number;
  speedY: number;
  speedZ: number;
}) {
  const obj = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({
      color: "#C9A84C",
      transparent: true,
      opacity,
    });
    const line = new THREE.Line(geo, mat);
    line.rotation.x = tiltX;
    return line;
  }, [radius, opacity, tiltX]);

  useFrame((_, delta) => {
    obj.rotation.y += delta * speedY;
    obj.rotation.z += delta * speedZ;
  });

  return <primitive object={obj} />;
}

function StarField() {
  const obj = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 2000; i++) {
      positions.push(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
    const mat = new THREE.PointsMaterial({
      size: 0.025,
      color: "#C9A84C",
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });
    return new THREE.Points(geo, mat);
  }, []);

  useFrame((state) => {
    obj.rotation.y = state.clock.elapsedTime * 0.012;
    obj.rotation.x = state.clock.elapsedTime * 0.005;
  });

  return <primitive object={obj} />;
}

function FloatingDots() {
  const obj = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 1.5;
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
    const mat = new THREE.PointsMaterial({
      size: 0.06,
      color: "#E8C97A",
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    return new THREE.Points(geo, mat);
  }, []);

  useFrame((state) => {
    obj.rotation.y = state.clock.elapsedTime * 0.06;
    obj.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return <primitive object={obj} />;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#C9A84C" />
      <StarField />
      <WireframeIcosahedron />
      <Ring radius={2.8} opacity={0.45} tiltX={0.4} speedY={0.04} speedZ={0.025} />
      <Ring radius={3.5} opacity={0.25} tiltX={-0.8} speedY={0.025} speedZ={-0.03} />
      <Ring radius={4.2} opacity={0.15} tiltX={1.1} speedY={-0.015} speedZ={0.02} />
      <FloatingDots />
    </Canvas>
  );
}
