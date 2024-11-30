const options = {
  particles: {
    move: {
      enable: true,
      speed: { min: 0.33, max: 1.0 },
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    size: {
      value: { min: 0.5, max: 1.5 },
    },
  },
};

tsParticles.load("tsparticles", options);
