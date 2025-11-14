// components/ThreeBackground.jsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Floating 3D Shapes */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[-2, 1, 0]}>
            <torusKnotGeometry args={[0.8, 0.3, 128, 16]} />
            <MeshDistortMaterial
              color="#ffffff"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>

        <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={[2.5, -1, -1]}>
            <icosahedronGeometry args={[1.2, 0]} />
            <MeshDistortMaterial
              color="#ff6ec7"
              attach="material"
              distort={0.4}
              speed={3}
              roughness={0}
              metalness={1}
            />
          </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[0, -2, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color="#ffffff"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>

        {/* Subtle mouse interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
        />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}