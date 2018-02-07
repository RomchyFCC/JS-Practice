let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
	/*setInterval(function() {
		seconds--;
	}, 1000);*/
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(()=>{
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}

		displayTimeLeft(secondsLeft);
	}, 1000)
}

function displayTimeLeft(seconds) {
	const mins = Math.floor(seconds/60);
	const remainderSeconds = seconds%60;
	const display = `${mins}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime (timestamp) {
	const end = new Date(timestamp);
	const hours = end.getHours();
	const mins = end.getMinutes();
	//const adjustedHour = hour > 12 ? hour - 12 : hour;
	/* if (Math.floor(hour / 12) === 1) {
		add pm
	} else {
		add am
	}*/
	endTime.textContent = `Be back at ${hours}:${mins < 10 ? "0" : ""}${mins}`
}

function startTimer() {
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
})