const buttons = document.querySelectorAll(".soundbar button");
let onAir = null;
for (btn of buttons) {
  btn.addEventListener("click", (e) => {
    if (onAir) {
      onAir.pause();
      onAir.currentTime = 0;
    }
    const audioElement = e.target.querySelector("audio");
    onAir = audioElement;
    audioElement.play();
  });
}
