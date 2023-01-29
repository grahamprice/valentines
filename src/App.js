import {Canvas} from "@react-three/fiber";
import {useGLTF, Stage, PresentationControls} from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'

function Model(props){
  const {scene } = useGLTF("/heart.glb");
  return <primitive object={scene} {...props}/>
 }

function App() {
  return (
    <Canvas dpr={[1,2]} camera={{fov: 45}} style={{"position": "absolute"}}>
      <color attach="background" args={["#101010"]}/>
      
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Model scale={0.05}/>


       {/* <Stage environment={null}>
          
        </Stage> */}
      
      
    </Canvas>
  );
}

export default App;


