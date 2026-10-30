
const effects = {
  wind: {
    name: "Solar Wind",
    what: "A constant stream of charged particles (mostly protons and electrons) flowing out of the Sun.",
    time: "2 to 4 days to reach Earth (about 400 km/s)",
    effect: "Squeezes Earth's magnetic field into a bubble, the magnetosphere. Causes weak, regular aurora near the poles.",
    count: 8
  },
  flare: {
    name: "Solar Flare",
    what: "A sudden burst of light and X-rays from the Sun, usually near sunspots.",
    time: "About 8 minutes (it travels at the speed of light)",
    effect: "X-rays ionise the upper atmosphere on the sunlit side. This can cause radio blackouts for ships, aircraft and amateur radio.",
    count: 1
  },
  cme: {
    name: "Coronal Mass Ejection (CME)",
    what: "A huge cloud of plasma and magnetic field thrown out of the Sun.",
    time: "1 to 3 days",
    effect: "If it hits Earth, it can cause a geomagnetic storm: bright aurora far from the poles, GPS errors, satellite damage, and in extreme cases power grid problems.",
    count: 1
  },
  rad: {
    name: "Radiation Storm",
    what: "Very fast, high-energy particles accelerated by flares and CME shocks.",
    time: "Minutes to a few hours",
    effect: "Dangerous for astronauts and satellites. Aircraft on polar routes may change course. People on the ground are protected by the atmosphere and magnetic field.",
    count: 14
  }
};

const buttons = document.getElementById("buttons");
const stage = document.getElementById("stage");
const info = document.getElementById("info");


Object.keys(effects).forEach(key => {
  const b = document.createElement("button");
  b.textContent = effects[key].name.split(" (")[0];
  b.onclick = () => show(key, b);
  buttons.appendChild(b);
});

function show(key, btn) {
  const e = effects[key];


  [...buttons.children].forEach(x => x.classList.remove("active"));
  btn.classList.add("active");

  
  stage.querySelectorAll(".p").forEach(p => p.remove());
  stage.className = "";
  void stage.offsetWidth;          
  stage.className = key;

  
  for (let i = 0; i < e.count; i++) {
    const p = document.createElement("div");
    p.className = "p";
    p.style.top = (e.count === 1 ? 105 : 20 + (i * 180 / e.count)) + "px";
    p.style.animationDelay = (i * 0.3) + "s";
    stage.appendChild(p);
  }


  info.innerHTML =
    "<h2>" + e.name + "</h2>" +
    "<p><b>What is it?</b> " + e.what + "</p>" +
    "<p><b>Travel time:</b> " + e.time + "</p>" +
    "<p><b>Effect on Earth:</b> " + e.effect + "</p>";
}


show("wind", buttons.children[0]);