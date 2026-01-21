
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
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={window.devicePixelRatio ?? 1.5}
        fov={45}
        // envBasePath?: string;   ← add if you need custom env maps
        // preserveDrawingBuffer?: boolean;
        // etc.
      >
        <ShaderGradient
          animate="on"
          // axesHelper="off"               ← remove (debug only / not exposed)
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          //cameraZoom={1}
          color1="#001F3F"
          color2="#0047AB"
          color3="#F0F0F0"
          // destination="onCanvas"         ← remove (likely internal/Framer)
          // embedMode="off"                ← remove
          envPreset="city"
          // format="gif"                   ← remove (export feature)
          // frameRate={10}                 ← remove
          // gizmoHelper="hide"             ← remove
          grain="off"
          lightType="3d"
          // pixelDensity={1}               ← remove (belongs on Canvas)
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          // range="disabled"               ← usually not needed / defaults fine
          // rangeEnd={40}
          // rangeStart={0}
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
          // uTime={0}                      ← usually controlled internally when animate="on"
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

export default App;
