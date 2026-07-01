"use client";

import { useEffect } from "react";

export default function HomeScripts() {
  useEffect(() => {
    const initParticles = () => {
      const particlesContainer = document.getElementById("particles-js");
      const leftCircle = document.getElementById("left-circle");
      const rightCircle = document.getElementById("right-circle");

      // @ts-ignore
      if (window.particlesJS && particlesContainer) {
        // @ts-ignore
        window.particlesJS('particles-js', {
          "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 }},
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3 },
            "line_linked": {
              "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            },
            "move": { "enable": true, "speed": 2 }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": { "enable": true, "mode": "grab" },
              "onclick": { "enable": true, "mode": "push" },
              "resize": true
            },
            "modes": {
              "grab": { "distance": 200, "line_linked": { "opacity": 0.6 } },
              "push": { "particles_nb": 4 }
            }
          },
          "retina_detect": true
        });
      }

      // @ts-ignore
      if (window.tsParticles && leftCircle && rightCircle) {
        // @ts-ignore
        window.tsParticles.load("left-circle", {
          particles: {
            number: { value: 50 },
            color: { value: "#000" },
            shape: { type: "circle" },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 1,
              direction: "right",
              outModes: "out"
            },
            opacity: { value: 0.6 }
          },
          interactivity: {
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" }
            }
          },
          fullScreen: { enable: false },
          detectRetina: true
        });

        // @ts-ignore
        window.tsParticles.load("right-circle", {
          particles: {
            number: { value: 40 },
            color: { value: "#000" },
            shape: { type: "circle" },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
              outModes: "bounce"
            },
            opacity: { value: 1 },
            links: {
              enable: true,
              distance: 50,
              color: "#000",
              opacity: 0.3,
              width: 1
            }
          },
          fullScreen: { enable: false },
          detectRetina: true
        });
      }
    };

    // Check periodically if scripts are loaded
    const interval = setInterval(() => {
      // @ts-ignore
      if (window.particlesJS && window.tsParticles) {
        initParticles();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
