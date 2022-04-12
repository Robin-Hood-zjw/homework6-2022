var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
});

//play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

//pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("I want to slow down this video.");
	console.log(`The current video speed is ${video.playbackRate}.`);
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("I want to speed up this video.");
	console.log(`The current video speed is ${video.playbackRate}.`);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log("Skip ahead.");
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	} else {
		console.log(`The current video time is ${video.currentTime}`);
	}
});

//mute the video
document.querySelector("#mute").addEventListener("click", function () {
	console.log("I want to mute the video.");
	if (video.muted === true) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
})

//manipulate the volume slider
document.querySelector("#slider").addEventListener("change" , function () {
	console.log("I want to slide the bar to change the volume.");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value/100*100 + "%";
	console.log("I slided to change the volume.");
})

//utilize a class into the video element
document.querySelector("#vintage").addEventListener("click", function () {
	console.log("I want to use a old-class style.");
	video.classList.add("oldSchool");
	console.log("I added the oldSchool class.");
})

//drop the class into the video element
document.querySelector("#orig").addEventListener("click", function () {
	console.log("I want to drop the old-class style.");
	video.classList.remove("oldSchool");
	console.log("I removed the oldSchool class.");
})
