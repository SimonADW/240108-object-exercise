

function CreateStopwatch() {
	let startTime;
	this.duration = 0, 

	this.start = function() {
		startTime = new Date().getTime();							
	}

	this.stop = function() {
		this.duration = new Date().getTime() - startTime;
		console.log(sw.duration/1000);		
	}

	this.reset = function() {
		this.duration = 0
	}
}

sw = new CreateStopwatch()

