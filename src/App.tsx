// src/App.tsx
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

function App() {
  return (
    <>
      {/* Global reset + full-screen rules + canvas transparency force */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          /* overflow: hidden; */ /* Keep commented if you want potential scroll later */
          background: #000;           /* fallback color */
        }

        body {
          overscroll-behavior: none;  /* prevents iOS bounce/scroll glow */
        }

        /* Force the WebGL canvas to transparent background */
        canvas {
          background: transparent !important;
        }

        /* Optional: better mobile handling (especially iOS Safari) */
        @supports (height: 100dvh) {
          html, body, #root {
            height: 100dvh;
          }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#000',
          zIndex: -1, // keeps it behind future content if needed
        }}
      >
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',       // removes tiny gaps sometimes caused by inline-block
            pointerEvents: 'none',
            background: 'transparent', // extra safety layer
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
            cameraZoom={1}
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

      {/* Optional test overlay to confirm layering/transparency – uncomment if needed */}
      {/* 
      <div style={{
        position: 'fixed',
        inset: 0,
        color: 'white',
        fontSize: '5rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 10,
      }}>
        TEST – Should appear OVER the gradient!
      </div>
      */}
    </>
  );
}

export default App;
