<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Particle Transfer Effect</title>
  <script src="https://cdn.jsdelivr.net/npm/tsparticles@2.11.1/tsparticles.bundle.min.js"></script>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0e0e0e;
    }

    .container {
      display: flex;
      align-items: center;
      position: relative;
    }

    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      background-color: rgba(255, 255, 255, 0.05);
    }

    #left-circle, #right-circle {
      border: 2px solid white;
    }

    .pipe {
      width: 120px;
      height: 20px;
      background: linear-gradient(to right, #ffffff44, #ffffff22);
      margin: 0 20px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="left-circle" class="circle"></div>
    <div class="pipe"></div>
    <div id="right-circle" class="circle"></div>
  </div>

  <script src="particles-setup.js"></script>
</body>
<script>
    tsParticles.load("left-circle", {
  particles: {
    number: { value: 30 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    size: { value: 3 },
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

tsParticles.load("right-circle", {
  particles: {
    number: { value: 0 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    size: { value: 3 },
    move: {
      enable: false
    },
    opacity: { value: 1 }
  },
  fullScreen: { enable: false },
  detectRetina: true
});

// RIGHT SIDE: Grid structure (simulated)
tsParticles.load("right-circle", {
  particles: {
    number: { value: 40 },
    color: { value: "#ffffff" },
    shape: {
      type: "circle"
    },
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
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    }
  },
  fullScreen: { enable: false },
  detectRetina: true
});


</script>
</html>
