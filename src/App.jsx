import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas
        className="w-full h-full"
        camera={{
          position: [3, 3, 3],
        }}
      >
        <color attach="background" args={["#333333"]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
