var audio = document.getElementById("audioPlayer");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var volumeSlider = document.getElementById("volumeSlider");

playButton.addEventListener("click", function() {
	audio.play();
});

pauseButton.addEventListener("click", function() {
	audio.pause();
});

volumeSlider.addEventListener("input", function() {
	audio.volume = volumeSlider.value;
});
