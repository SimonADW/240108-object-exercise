
function CreateStopwatch() {
	let startTime, running, endTime;
	this.duration = 0, 

	this.start = function() {
		if (running) {
			throw new Error("Stop watch is already running!")
		}
		
		startTime = new Date().getTime();
		running = true;		
	}

	this.stop = function() {
		if (!running) {
			throw new Error("Stop watch is not running!")
		}
		seconds = (new Date().getTime() - startTime) / 1000;
		this.duration += seconds;
		console.log(sw.duration);		
		running = false;
	}

	this.reset = function() {
		this.duration = 0;
		running = false;
		startTime = null;
		endTime = null;
	}
}

sw = new CreateStopwatch();

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const secondsDisplay = document.querySelector(".seconds");

startButton.addEventListener("click", ()=> sw.start());

stopButton.addEventListener("click", ()=> {
	sw.stop();
	secondsDisplay.textContent = sw.duration;
});

resetButton.addEventListener("click", ()=> {
	sw.reset()
	secondsDisplay.textContent = sw.duration;	
});





