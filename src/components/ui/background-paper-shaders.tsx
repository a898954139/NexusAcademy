"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;

  void main() {
    vec2 uv = vUv;

    // Create animated noise pattern
    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;

    // Mix colors based on noise and position
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);

    // Add glow effect
    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);

    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`

type ShaderPlaneProps = {
  position: [number, number, number]
  color1?: string
  color2?: string
  scale?: [number, number, number]
}

export function ShaderPlane({
  position,
  color1 = '#080a0e',
  color2 = '#cfa642',
  scale = [1, 1, 1],
}: ShaderPlaneProps) {
  const mesh = useRef<THREE.Mesh>(null)
  const material = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  )

  useFrame((state) => {
    if (!mesh.current || !material.current) return
    const elapsed = state.clock.elapsedTime
    material.current.uniforms.time.value = elapsed
    material.current.uniforms.intensity.value = 1.0 + Math.sin(elapsed * 2) * 0.3
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

type EnergyRingProps = {
  radius?: number
  position?: [number, number, number]
  opacity?: number
}

export function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
  opacity = 0.018,
}: EnergyRingProps) {
  const mesh = useRef<THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>>(null)

  useFrame((state) => {
    if (!mesh.current) return
    const elapsed = state.clock.elapsedTime
    mesh.current.rotation.z = elapsed
    mesh.current.material.opacity = 0.5 + Math.sin(elapsed * 3) * 0.3
  })

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.8, radius, 32]} />
      <meshBasicMaterial color="#cfa642" transparent opacity={opacity} side={THREE.DoubleSide} depthWrite={false} />
    </mesh>
  )
}

function SparkField() {
  const points = useRef<THREE.Points>(null)
  const geometry = useMemo(() => {
    const count = 110
    const positions = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 9.2
      positions[index * 3 + 1] = (Math.random() - 0.5) * 5.2
      positions[index * 3 + 2] = -1.2 - Math.random() * 1.4
    }
    const nextGeometry = new THREE.BufferGeometry()
    nextGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return nextGeometry
  }, [])

  useFrame((state) => {
    if (!points.current) return
    points.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.025
    points.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.06) * 0.035
  })

  useEffect(() => () => geometry.dispose(), [geometry])

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color="#d6b14b" size={0.018} transparent opacity={0.46} depthWrite={false} />
    </points>
  )
}

function ShaderScene() {
  return (
    <>
      {/* A single large plane to cover the background */}
      <ShaderPlane position={[0, 0, -2]} color1="#000000" color2="#cfa642" scale={[10, 10, 1]} />
    </>
  )
}

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reducedMotion
}

export default function BackgroundPaperShaders() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="nexus-dynamic-background" aria-hidden="true">
      {!reducedMotion && (
        <Canvas
          camera={{ position: [0, 0, 4.8], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ShaderScene />
        </Canvas>
      )}
    </div>
  )
}
