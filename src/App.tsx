// src/App.tsx
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import './App.css'; // keep if you have custom styles

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        overflow: 'hidden',
        position: 'relative', // helps with absolute positioning
      }}
    >
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={window.devicePixelRatio ?? 1.5}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          type="plane"               // was "plane" in your code, but you had "type=waterPlane" earlier – pick one
          cDistance={20}
          cPolarAngle={110}
          uSpeed={0.4}
          uStrength={3}
          color1="#ff6b6b"
          color2="#4ecdc4"
          color3="#45b7d1"
          // add any other props you want, e.g.:
          // lightType="3d"
          // grain="off"
          // reflection={0.2}
        />
      </ShaderGradientCanvas>

      {/* Overlay text/content – pointerEvents: 'none' lets clicks pass through to canvas if needed */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          pointerEvents: 'none',
          zIndex: 1,
          textShadow: '0 0 10px rgba(0,0,0,0.6)',
        }}
      >
        Hello Shader Gradient!
      </div>
    </div>
  );
}

export default App;
