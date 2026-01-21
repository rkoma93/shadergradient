// src/App.tsx
import { useEffect, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

// Optional: add these global styles in index.css or via a <style> tag
// body, html { margin: 0; padding: 0; overflow: hidden; height: 100%; }
// #root { height: 100%; }

const gradientProps = {
  animate: 'on' as const,
  brightness: 1.2,
  cAzimuthAngle: 180,
  cDistance: 3.6,
  cPolarAngle: 90,
  cameraZoom: 1,
  color1: '#001F3F',
  color2: '#0047AB',
  color3: '#F0F0F0',
  envPreset: 'city',
  grain: 'off',
  lightType: '3d',
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  reflection: 0.1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: 'defaults',
  type: 'waterPlane',
  uAmplitude: 1,
  uDensity: 1.3,
  uFrequency: 5.5,
  uSpeed: 0.3,
  uStrength: 4,
  wireframe: false,
} as const;

function App() {
  const [pixelDensity, setPixelDensity] = useState(
    Math.min(window.devicePixelRatio || 1.5, 2.2)
  );

  useEffect(() => {
    const updatePixelDensity = () => {
      setPixelDensity(Math.min(window.devicePixelRatio || 1.5, 2.2));
    };

    window.addEventListener('resize', updatePixelDensity);
    return () => window.removeEventListener('resize', updatePixelDensity);
  }, []);

  // Optional: hide scrollbars on mobile/desktop and enforce no-scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',           // or absolute – fixed usually works better here
        inset: 0,                    // top:0 right:0 bottom:0 left:0
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        background: '#000',          // fallback color
      }}
    >
      <ShaderGradientCanvas
        pixelDensity={pixelDensity}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',          // removes tiny gaps some browsers add
        }}
      >
        <ShaderGradient {...gradientProps} />
      </ShaderGradientCanvas>
    </div>
  );
}

export default App;
