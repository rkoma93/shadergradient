// src/App.tsx
import { useEffect, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

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

  const isLikelyMobile = /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);

  return (
    <div
      style={{
        width: '100lvw',
        height: '100lvh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        background: '#000',
        touchAction: 'none',
      }}
    >
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
        pixelDensity={isLikelyMobile ? Math.min(pixelDensity, 1.8) : pixelDensity}
        fov={isLikelyMobile ? 50 : 45}
        powerPreference={isLikelyMobile ? 'default' : 'high-performance'} // optional hint
      >
        <ShaderGradient
          {...gradientProps}
          {...(isLikelyMobile && {
            uDensity: 1.1,
            uStrength: 3.2,
            uSpeed: 0.35,
            brightness: 1.1,
          })}
        />
      </ShaderGradientCanvas>
    </div>
  );
}

export default App;
