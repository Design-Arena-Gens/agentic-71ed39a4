"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Float } from "@react-three/drei";
import { Suspense, useMemo } from "react";

function CoffeeCup() {
  const mugColor = "#f0d5b2";
  const coffeeColor = "#3b2f2f";

  const steamPoints = useMemo(
    () => [
      [0, 0, 0],
      [0.2, 0.8, 0],
      [-0.15, 1.6, 0],
      [0.25, 2.2, 0],
    ],
    []
  );

  return (
    <group>
      <group position={[0, 0.25, 0]}>
        <mesh>
          <cylinderGeometry args={[1.1, 1.2, 1.8, 64, 1, true]} />
          <meshStandardMaterial color={mugColor} roughness={0.35} metalness={0} />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[1.35, 1.35, 0.2, 64]} />
          <meshStandardMaterial color={mugColor} roughness={0.5} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0.88, 0]}>
          <cylinderGeometry args={[0.95, 0.95, 0.02, 64]} />
          <meshStandardMaterial color={coffeeColor} roughness={0.4} metalness={0.1} />
        </mesh>
        <mesh position={[1.2, 0.2, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.65, 0.2, 32, 96]} />
          <meshStandardMaterial color={mugColor} roughness={0.4} metalness={0.1} />
        </mesh>
      </group>
      {steamPoints.map((point, index) => (
        <mesh key={index} position={[point[0], point[1] + 1.2, point[2]]}>
          <sphereGeometry args={[0.12 + index * 0.03, 32, 32]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeSceneInner() {
  return (
    <Stage
      preset="soft"
      intensity={0.9}
      environment="city"
      adjustCamera
      shadows={{ type: "accumulative", bias: -0.0001, size: 2048 }}
    >
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <CoffeeCup />
      </Float>
    </Stage>
  );
}

export default function CoffeeScene() {
  return (
    <div className="coffee-scene">
      <Suspense fallback={<div className="canvas-fallback">Brewing 3D goodness…</div>}>
        <Canvas camera={{ position: [0, 1.8, 5], fov: 45 }}>
          <color attach="background" args={["#0f1115"]} />
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
          <ambientLight intensity={0.6} />
          <CoffeeSceneInner />
        </Canvas>
      </Suspense>
    </div>
  );
}

