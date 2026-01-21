// src/App.tsx
import { Canvas } from '@react-three/fiber';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import './App.css'; // optional

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, overflow: 'hidden' }}>
      {/* Method A: Quick default gradient (no customizer needed) */}
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={window.devicePixelRatio ?? 1.5}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          type="plane"
          cDistance={20}
          cPolarAngle={110}
          uSpeed={0.4}
          uStrength={3}
          color1="#ff6b6b"
          color2="#4ecdc4"
          color3="#45b7d1"
        />
      </ShaderGradientCanvas>

      {/* Overlay text/content */}
      <div style={{
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
      }}>
        Hello Shader Gradient!
      </div>
    </div>
  );
}

export default App;
