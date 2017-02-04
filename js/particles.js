particlesJS("particles-js",

{
  "particles": {
    "number": {
      "value": 180,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      // "value": "#ffffff"
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 1,
        "height": 1
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.3,
        "sync": true
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 240.5118091298284,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": false
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.9
        }
      },
      "bubble": {
        "distance": 731.2687312687312,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 71.92807192807193,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 20
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  );

// var count_particles, stats, update;
// // stats = new Stats;
// // stats.setMode(0);
// // stats.domElement.style.position = 'absolute';
// // stats.domElement.style.left = '0px';
// // stats.domElement.style.top = '0px';
// // document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   // stats.begin();
//   // stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;



