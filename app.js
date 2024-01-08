

function CreateStopwatch() {
	let startTime;
	this.duration = 0, 

	this.start = function() {
		startTime = new Date().getSeconds();							
	}
	this.stop = function() {
		this.duration = new Date().getSeconds() - startTime;
		console.log(sw.duration);		
	}
	this.reset = function() {
		this.duration = 0
	}
}

sw = new CreateStopwatch()

