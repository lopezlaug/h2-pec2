import confetti from "canvas-confetti";
function shoot() {
  var scalar = 10;
  var racket = confetti.shapeFromText({ text: "🎾", scalar });

  var defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 15,
    shapes: [racket],
    scalar,
  };

  confetti({
    ...defaults,
    particleCount: 30,
  });

  confetti({
    ...defaults,
    particleCount: 5,
    flat: true,
  });

  confetti({
    ...defaults,
    particleCount: 15,
    scalar: scalar / 2,
    shapes: ["circle"],
  });
}
const celebratebtn = document.querySelector("#celebrate-tenis");
celebratebtn.addEventListener("click", function () {
  console.log("hola");

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
});
