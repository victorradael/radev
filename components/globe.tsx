"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Globe = ({ size = 1 }) => {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const meshRef = useRef<THREE.Mesh>(null!);
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const groupRef = useRef<THREE.Group>(null!);
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const dotsRef = useRef<THREE.Points>(null!);

	useEffect(() => {
		if (!meshRef.current) return;

		const geometry = new THREE.BufferGeometry();
		const vertices = [];
		const colors = [];
		const color = new THREE.Color();

		for (let i = 0; i < 2000; i++) {
			const phi = Math.random() * Math.PI * 2;
			const theta = Math.random() * Math.PI;
			const radius = size * 1.2;

			const x = radius * Math.sin(theta) * Math.cos(phi);
			const y = radius * Math.sin(theta) * Math.sin(phi);
			const z = radius * Math.cos(theta);

			vertices.push(x, y, z);

			color.setHSL(0.6, Math.random() * 0.5 + 0.5, Math.random() * 0.3 + 0.3);
			colors.push(color.r, color.g, color.b);
		}

		geometry.setAttribute(
			"position",
			new THREE.Float32BufferAttribute(vertices, 3),
		);
		geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 0.015 * size,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
		});

		const dots = new THREE.Points(geometry, material);
		dotsRef.current = dots;
		groupRef.current.add(dots);

		return () => {
			geometry.dispose();
			material.dispose();
		};
	}, [size]);

	useFrame((state) => {
		if (groupRef.current) {
			groupRef.current.rotation.y += 0.001;
		}
		if (dotsRef.current) {
			dotsRef.current.rotation.y -= 0.0005;
		}
	});

	return (
		<group ref={groupRef}>
			<mesh ref={meshRef}>
				<sphereGeometry args={[size, 64, 64]} />
				<meshBasicMaterial color="#1a1a2e" transparent opacity={0.6} />
			</mesh>
		</group>
	);
};

interface GlobeContainerProps {
	size?: number;
	className?: string;
}

export const GlobeContainer = ({
	size = 1,
	className = "",
}: GlobeContainerProps) => {
	return (
		<div className={`relative w-full h-full bg-[#0d1117] ${className}`}>
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117]/80" />
			<Canvas
				camera={{
					position: [0, 0, 4],
					fov: 45,
					near: 0.1,
					far: 1000,
				}}
			>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Globe size={size} />
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					rotateSpeed={0.4}
					autoRotate
					autoRotateSpeed={1.8}
				/>
			</Canvas>
		</div>
	);
};
