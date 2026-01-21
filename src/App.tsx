// src/App.tsx
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        overflow: 'hidden',
        position: 'relative',
        background: '#000',
      }}
    >
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none', // ← disables mouse/touch interaction (no zoom, no drag)
        }}
        pixelDensity={window.devicePixelRatio ?? 1.5}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1} // ← locks zoom level (additional safety)
          color1="#001F3F"
          color2="#0047AB"
          color3="#F0F0F0"
          envPreset="city"
          grain="off"
          lightType="3d"
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="waterPlane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={4}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
export default App;
