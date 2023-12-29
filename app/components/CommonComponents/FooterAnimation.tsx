"use client";
import { useState, useEffect, useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimationPart = () => {
  const [particleSize, setParticleSize] = useState({ min: 4, max: 8 });
  const [polygonSides, setPolygonSides] = useState(6);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  );

  useEffect(() => {
    const sizeInterval = setInterval(() => {
      setParticleSize({ min: 4, max: 8 });
      setPolygonSides((prevSides) => prevSides + 1);

      setTimeout(() => {
        setParticleSize({ min: 4, max: 5 });
        setPolygonSides(5);
      }, 4000);
    }, 4000);

    return () => {
      clearInterval(sizeInterval);
    };
  }, []);

  return (
    <div style={{ height: "", position: "absolute", width: "100%" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 10,
              },
            },
          },
          particles: {
            color: {
              value: ["#6f42c1", "#ffc107", "#0dcaf0"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 10,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: ["circle", "polygon"],
              options: {
                polygon: {
                  nb_sides: polygonSides,
                },
              },
            },
            size: {
              value: particleSize,
            },
          },
          zIndex: 10,
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default AnimationPart;
